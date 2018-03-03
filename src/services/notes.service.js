
const NOTES = [
  {
    id: '1',
    title: 'Content is human readable',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
