const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
]

let isUpdate = false

export default class NotesAPI {
  static getAllNotes() {
    const notes = JSON.parse(localStorage.getItem('notes') || '[]')
    return notes
  }

  static addNotes(notesToAdd) {
    let dateObj = new Date(),
      month = months[dateObj.getMonth()],
      day = dateObj.getDate(),
      year = dateObj.getFullYear()

    notesToAdd.date = `${month} ${day}, ${year}`
    notesToAdd.id = Math.floor(Math.random() * 1000)

    const notes = NotesAPI.getAllNotes()
    notes.push(notesToAdd)

    localStorage.setItem('notes', JSON.stringify(notes))
  }

  static deleteNote(noteId) {
    let deleteNote = confirm('Are you sure you want to delete this note?')
    if (!deleteNote) return
    notes.splice(noteId, 1)
    localStorage.setItem('notes', JSON.stringify(notes))
    showNotes()
  }

  static updateNote(noteId, noteTitle, noteDesc) {
    isUpdate = true
    updateId = noteId
    addBox.click()
    title.value = noteTitle
    desc.value = noteDesc
    btnAdd.innerText = 'Update Note'
    popupTitle.innerText = 'Update Note'
  }
}
