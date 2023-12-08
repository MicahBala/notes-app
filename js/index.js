import NotesAPI from './NotesAPI.js'

NotesAPI.updateNote({
  id: 32,
  title: 'Updated Title',
  desc: 'This is a new note from the api',
})

console.log(NotesAPI.getAllNotes())
