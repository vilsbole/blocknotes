
const NOTES = [
  {
    id: '1',
    title: 'Content is human readable',
    content: 'abstraction of a collection',
  },
  {
    id: '2',
    title: 'Content storage',
    content: 'Everything is a thing',
  },
  {
    id: '3',
    title: 'Buildable app',
    content: 'One x pro storage',
  },
]

const NotesService = {
  get: (id) => {
    if (!id) return NOTES
    return NOTES[0]
  },

  create: () => {

  },

  update: () => {

  },

  delete: () => {

  }
}

export default NotesService
