const addBox = document.querySelector('.add-box')
const popupBox = document.querySelector('.popup-box')
const btnClose = document.querySelector('.fa-x')
const btnAdd = document.querySelector('.btn-add-note')
const title = document.querySelector('#title')
const desc = document.querySelector('#desc')

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

addBox.addEventListener('click', () => {
  console.log('clicked')
  popupBox.classList.add('show')
})

btnClose.addEventListener('click', () => {
  popupBox.classList.remove('show')
  title.value = ''
  desc.value = ''
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

  notes.push(noteContent)
  localStorage.setItem('notes', JSON.stringify(notes))

  btnClose.click()
  showNotes()
})

function showNotes() {
  document.querySelectorAll('.note-box').forEach((note) => note.remove())

  notes.forEach((note) => {
    const { title, desc, date } = note
    let noteCard = `
    <div class="note-box">
        <h3 class="title-note-box">${title}</h3>
        <p class="text-note-box">
            ${desc}
        </p>
        <div class="footer-note-box">
            <div class="date-note-box">${date}</div>
            <div class="menu-note-box">
                <div class="elipses">...</div>
                <ul class="menu">
                    <li><i class="fa-regular fa-pen-to-square"></i> Edit</li>
                    <li><i class="fa-solid fa-trash-can"></i> Delete</li>
                </ul>
            </div>
        </div>
    </div>
    `
    addBox.insertAdjacentHTML('afterend', noteCard)
  })
}

showNotes()
