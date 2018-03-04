import shortid from "shortid";
import moment from "moment";

export default class MultiFileCollectionService {
  constructor(config) {
    this.type = config.type;
    this.storage = config.storage;
    this.userID = config.userID;
  }

  async getManifest() {
    try {
      const result = await this.storage.getItem(this.type);
      return result || [];
    } catch (e) {
      console.error(e);
    }
  }

  async getItem(id) {
    try {
      const item = await this.storage.getItem(this.getItemPath(id));
      return item;
    } catch (e) {
      console.error(e);
    }
  }

  getItemPath(id) {
    return `${this.userID}/${this.type}/${id}`;
  }

  async getItemsFromIds(ids = []) {
    if (ids.length > 0) {
      try {
        return await Promise.all(ids.map(this.getItem.bind(this)));
      } catch (e) {
        console.error(e);
        return e;
      }
    }
    return [];
  }

  async getItems() {
    try {
      const manifest = await this.getManifest();
      const items = await this.getItemsFromIds(manifest);
      return items;
    } catch (e) {
      console.error(e);
    }
  }

  async addItemToManifest(id) {
    try {
      const manifest = await this.getManifest();
      const update = [...manifest, id];
      const newManifest = await this.storage.setItem(this.type, update);
      return update;
    } catch (e) {
      console.error(e);
    }
  }

  async resetManifest() {
    try {
      const newManifest = await this.storage.setItem(this.type, []);
      return newManifest;
    } catch (e) {
      console.error(e);
    }
  }

  async removeItemFromManifest(id) {
    try {
      const manifest = await this.getManifest();
      const update = manifest.filter(key => key !== id);
      const newManifest = await this.storage.setItem(this.type, update);
      return update;
    } catch (e) {
      console.error(e);
    }
  }

  async createItem(payload) {
    let id = "";
    if (payload.id) {
      id = payload.id;
    } else {
      id = shortid.generate();
    }
    const newItem = {
      payload: payload,
      id:id,
      updated: moment().format("X"),
      created: moment().format("X")
    };

    try {
      await this.addItemToManifest(id);
      await this.storage.setItem(this.getItemPath(id), newItem);
      return newItem;
    } catch (e) {
      return console.error(e);
    }
  }

  async updateItem(item) {
    item = { ...item, updated: moment().format("X") };
    try {
      const savedItem = await this.storage.setItem(
        this.getItemPath(item.id),
        item
      );
      return item;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  async getUserData(apps,type){
    console.log("apps",apps,type)
    return await Promise.all(apps.map(url => {
      console.log("url",url,this.getItemPath(type));  

      let p = url+this.getItemPath(type)
      console.log("p");  
    })).then((res)=>{
      console.log('res',res)
    }).catch(console.log) 
  }
}
