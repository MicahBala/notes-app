const addBox = document.querySelector('.add-box')
const popupBox = document.querySelector('.popup-box')
const btnClose = document.querySelector('.fa-x')
const btnAdd = document.querySelector('.btn-add-note')
const title = document.querySelector('#title')
const desc = document.querySelector('#desc')
const popupTitle = document.querySelector('.popup-title')

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

let notes = localStorage.getItem('notes')
  ? JSON.parse(localStorage.getItem('notes'))
  : []

let isUpdate = false
let updateId

addBox.addEventListener('click', () => {
  title.focus()
  popupBox.classList.add('show')
})

btnClose.addEventListener('click', () => {
  popupBox.classList.remove('show')
  title.value = ''
  desc.value = ''
  btnAdd.innerText = 'Add a new Note'
  popupTitle.innerText = 'Add Note'
})

btnAdd.addEventListener('click', (e) => {
  e.preventDefault()
  if (title.value === '' || desc.value === '') {
    alert('Please fill all the fields')
    return
  }

  let dateObj = new Date(),
    month = months[dateObj.getMonth()],
    day = dateObj.getDate(),
    year = dateObj.getFullYear()

  let noteContent = {
    title: title.value,
    desc: desc.value,
    date: `${month} ${day}, ${year}`,
  }

  if (!isUpdate) {
    notes.push(noteContent)
    isUpdate = false
  } else {
    notes[updateId] = noteContent
    isUpdate = false
  }
  localStorage.setItem('notes', JSON.stringify(notes))

  btnClose.click()
  showNotes()
})

function showMenu(elem) {
  elem.parentElement.classList.add('show')
  document.addEventListener('click', (e) => {
    if (!elem.parentElement.contains(e.target) || e.target != elem) {
      elem.parentElement.classList.remove('show')
    }
  })
}
