// //Сохранить ключ и значение в Локальное хранилище
// localStorage.setItem('number', 5)

// //Получить значение из Локального хранилища
// let getData = localStorage.getItem('number')

// //Удалить свойство из Локального хранилища
// localStorage.removeItem('number')

// //Очистка всего Локального хранилища
// localStorage.clear()

//=====================================

// const body = document.body
// const checkbox = document.getElementById('checkbox')
// const form = document.querySelector('form')
// const changeColor = document.getElementById('color')

// if (localStorage.getItem('isChecked')) {
//     checkbox.checked = true
// }

// if (localStorage.getItem('bg') === 'changed') {
//     body.style.background = 'yellow'
// }


// checkbox.addEventListener('change', () => {
//     if (localStorage.getItem('isChecked') === 'true') {
//         localStorage.removeItem('isChecked')
//     } else {
//         localStorage.setItem('isChecked', true)
//     }
// })


// changeColor.addEventListener('click', () => {
//     if (localStorage.getItem('bg') === 'changed') {
//         localStorage.removeItem('bg')
//         body.style.background = 'white'
//     }
//     else {
//         localStorage.setItem('bg', 'changed')
//         body.style.background = 'yellow'
//     }
// })

//=====================================
//JSON - текстовый формат обмена данными,
// основанный на JavaScript

// let obj = {
//     'bootcamp': 'ITC'
// }

// let objTranslate = JSON.stringify(obj)

// alert(objTranslate)

// objTranslate = JSON.parse(objTranslate)
// console.log(objTranslate)
