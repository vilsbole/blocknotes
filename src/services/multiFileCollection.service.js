import Item from '@/services/item'

// @params
// storage needs to have .getItem() & .setItem()
export default class MultiFileCollectionService {
  constructor ({ type, storage }) {
    this.type = type
    this.storage = storage
  }

  getItemPath (id) {
    return `${this.type}/${id}`
  }

  async getManifest () {
    try {
      const result = await this.storage.getItem(this.type)
      return result || []
    } catch (e) {
      console.error(e)
    }
  }

  async getItem (id) {
    try {
      return this.storage.getItem(this.getItemPath(id))
    } catch (e) {
      console.error(e)
    }
  }

  async getItemsFromIds (ids = []) {
    if (ids.length > 0) {
      try {
        return Promise.all(ids.map(this.getItem.bind(this)))
      } catch (e) {
        console.error(e)
        return e
      }
    }
    return []
  }

  async getItems () {
    try {
      const manifest = await this.getManifest()
      return this.getItemsFromIds(manifest)
    } catch (e) {
      console.error(e)
    }
  }

  async resetManifest () {
    try {
      return this.storage.setItem(this.type, [])
    } catch (e) {
      console.error(e)
    }
  }

  async addItemToManifest (id) {
    try {
      const manifest = await this.getManifest()
      const update = [...manifest, id]
      await this.storage.setItem(this.type, update)
      return update
    } catch (e) {
      console.error(e)
    }
  }

  async removeItemFromManifest (id) {
    try {
      const manifest = await this.getManifest()
      const update = manifest.filter(key => key !== id)
      await this.storage.setItem(this.type, update)
      return update
    } catch (e) {
      console.error(e)
    }
  }

  async existsInManifest (id) {
    try {
      const manifest = await this.getManifest()
      return manifest.find(ref => ref === id)
    } catch (e) {
      console.error(e)
    }
  }

  async deleteItem (id) {
    try {
      // For the moment blockstack doesn't allow file deletion, so we simply
      // remove the id from the manifest. We can activate this line once it is
      // updated.
      // const path = this.getItemPath(id)
      // await this.storage.deleteItem(path)
      return this.removeItemFromManifest(id)
    } catch (e) {
      console.error(e)
    }
  }

  createTemp (payload) {
    return new Item(payload)
  }

  async createItem (payload) {
    const newItem = new Item(payload)

    try {
      await this.addItemToManifest(newItem.id)
      await this.storage.setItem(this.getItemPath(newItem.id), newItem)
      return newItem
    } catch (e) {
      return console.error(e)
    }
  }

  async createOrUpdate (payload) {
    if (await this.existsInManifest(payload.id)) {
      return this.updateItem(payload)
    } else {
      return this.createItem(payload)
    }
  }

  async updateItem (payload) {
    const item = new Item(payload)

    try {
      await this.storage.setItem(this.getItemPath(item.id), item)
      return item
    } catch (e) {
      return console.error(e)
    }
  }
}
