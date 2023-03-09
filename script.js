let form = document.getElementById('form')
let commentList = document.querySelector('.comments__inner')

// form.date.value = new Date().toISOString().substring(0, 10)
form.date.setAttribute('max', form.date.value)

form.addEventListener('input', (e) => {
  let elem = e.target

  if (elem.classList.contains('error')) {
    let notify = document.querySelectorAll(`[data-target="${elem.name}"]`)

    Array.from(notify).forEach((el) => el.remove())

    elem.classList.remove('error')
  }
})

form.addEventListener('submit', handleSubmit)

form.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    form.submitbtn.click()
  }
})

function handleSubmit(e) {
  e.preventDefault()

  let { name, date, text } = form

  if (name.value === '') {
    notify(name, 'Введите имя!')
    return false
  }

  if (name.value.length < 3) {
    notify(name, 'Слишком короткое имя!')
    return false
  }

  if (text.value.trim() === '') {
    notify(text, 'Нельзя отправить пустой комментарий!')
    text.value = ''
    return false
  }

  console.log([name.value, date, text.value])

  if (date.value === '') date.value = new Date().toISOString().substring(0, 10)

  const randomColor = Math.floor(Math.random() * 16777215).toString(16)

  commentList.insertAdjacentHTML(
    'afterbegin',
    `
    <div class="comment">
      <div class="comment__logo" style="background-color: #${randomColor};">${
      name.value[0]
    }</div>
        <span class="comment__name">${name.value}</span>
        <span class="comment__date">${convertDate(date)}</span>
        <p class="comment__text">
          ${text.value}
        </p>
      <div class="comment__flex">
        <a class="comment__like" href="#">
          <i class="demo-icon icon-heart"></i>
          Мне нравится
        </a>
        <a class="comment__remove" href="#" title="Удалить комментарий">
          <i class="demo-icon icon-trash"></i>
        </a>
      </div>
    </div>
  `
  )

  form.submitbtn.blur()
  name.value = ''
  text.value = ''
  date.value = new Date().toISOString().substring(0, 10)
}

function notify(target, message) {
  let coords = target.getBoundingClientRect()
  let elem = document.createElement('div')

  target.classList.add('error')
  target.focus()

  elem.classList.add('notify')

  elem.style.cssText = `
    top: ${coords.bottom + window.scrollY}px;
    left: ${coords.left + coords.width / 2}px;
  `

  elem.innerHTML = `${message}`
  elem.setAttribute('data-target', `${target.name}`)

  document.body.append(elem)
}

function convertDate(elem) {
  let dateToday = new Date()
  let date = new Date(elem.value)

  let tzoffset = new Date().getTimezoneOffset() * 60000
  let localISOString = (date) =>
    new Date(date - tzoffset).toISOString().slice(0, -1)

  date.setHours(
    dateToday.getHours(),
    dateToday.getMinutes(),
    dateToday.getSeconds(),
    dateToday.getMilliseconds()
  )

  console.log(dateToday - date)

  if (dateToday.getDate() === date.getDate()) {
    console.log('сегодня')
    return 'Сегодня, ' + localISOString(date).substring(12, 16)
    //                           HH   MM   SS   MSMS = DAY
  } else if (dateToday - date <= 24 * 60 * 60 * 1000) {
    console.log('вчера')
    return 'Вчера, ' + localISOString(date).substring(12, 16)
  }

  // 2023-03-09T06:53:46.996Z
  return localISOString(date).substring(0, 10).split('-').reverse().join('.')
}

document.addEventListener('click', (e) => {
  let elem = e.target

  if (elem?.closest('.comment__like') || elem?.closest('.comment__remove'))
    e.preventDefault()

  elem?.closest('.comment__like')?.classList.toggle('active')
  elem?.closest('.comment__remove')?.closest('.comment').remove()
})
