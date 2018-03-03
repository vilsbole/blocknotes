var _ = require('lodash')

const NOTES = [
  {
    id: '1',
    title: 'What is Lorem Ipsum?',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: '2',
    title: 'Why do we use it?',
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
  },
  {
    id: '3',
    title: 'Where does it come from?',
    content: 'Nullam a tellus efficitur lectus tincidunt suscipit. Cras ut tempus dui, quis tincidunt magna. Ut est neque, egestas in semper eget, volutpat vitae nunc. Nunc imperdiet mattis tortor, vitae facilisis risus gravida at. Etiam dapibus augue sed volutpat varius. Vestibulum sed consequat odio, tempor maximus ante. Pellentesque pretium dolor lectus, ac rhoncus nunc rhoncus id. Curabitur mollis velit faucibus pretium sollicitudin. Sed non leo ac ipsum aliquet facilisis. In quis orci id sapien mattis faucibus. Etiam a suscipit neque. Mauris ac diam et risus tempor suscipit id eu neque. Curabitur fermentum maximus pretium. Aliquam scelerisque erat magna, id aliquet dolor hendrerit a. Suspendisse vitae vulputate lorem, quis imperdiet lacus. Donec bibendum ut diam id sodales.',
  },
]

const NotesService = {
  get: (id) => {
    if (!id) return NOTES
    return _.find(NOTES, {'id': id})
  },

  create: () => {

  },

  update: () => {

  },

  delete: () => {

  }
}

export default NotesService
