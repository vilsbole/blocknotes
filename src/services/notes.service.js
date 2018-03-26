
import { isEqual, filter } from 'lodash'
import Collection from '@/services/multiFileCollection.service'
import storage from '@/services/storage.service'

export const NotesStorage = {
  notes: []
}

let Store
export const NotesService = {
  init (userId) {
    Store = new Collection({
      type: 'testnotes',
      storage: storage(),
      userID: userId
    })
  },

  async get (id) {
    if (typeof id === 'undefined') {
      throw new Error(`Note service: ${id} is not a valid id`)
    }
    let note = NotesStorage.notes.find(n => n.id === id)
    /* Avoid extra call if already in local */
    if (note) { return note }
    return Store.getItem(id)
  },

  async getAll () {
    const notes = await Store.getItems()
    NotesStorage.notes = filter(notes)
    return NotesStorage.notes
  },

  async create (content) {
    let note = await Store.createItem(content)
    NotesStorage.notes = [ note, ...NotesStorage.notes ]
    return note
  },

  createTemp () {
    const note = Store.createTemp({
      title: '',
      content: ''
    })
    NotesStorage.notes = [ note, ...NotesStorage.notes ]
    return note
  },

  async update (content) {
    const notes = NotesStorage.notes
    const id = content.id
    const index = notes.findIndex((n) => n.id === id)
    /* Avoid extra call and exit if nothing has changed */
    if (isEqual(notes[index], content)) return
    /* Otherwise update local and remote */
    notes.splice(index, 1, content)
    return Store.updateItem(content)
  },

  async delete (id) {
    NotesStorage.notes = filter(NotesStorage.notes, (n) => n.id !== id)
    return Store.deleteItem(id)
  },

}

export default NotesService
