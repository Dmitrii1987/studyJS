// 1 ПЕРЕМЕННЫЕ

//var name = 'Dima' // string
//const lastName = 'Kuzminykh' // string
//const age = 33 // number
//const isProgrammer = true // boolean

//const нельзя изменить
//let можно изменить
//var не использовать.
//стараться использовать только const


// 2 МУТИРОВАНИЕ

//console.log('Имя человека: ' + name  + ', а возраст: ' + age)
//alert('Имя человека: ' + name  + ', а возраст: ' + age)
//const surname = prompt('Введите фамилию')
//alert(name + ' ' + surname)

// 3 ОПЕРАТОРЫ

//let currentYear = 2021
//const birthYear = 1987
//const age = currentYear - birthYear

//const a = 10
//const b = 5
//let c = 32

//c += a      // c = c + a
//c -= a      // c = c - a
//c *= a      // c = c * a
//c /= a      // c = c / a

//console.log(a + b)
//console.log(a - b)
//console.log(a * b)
//console.log(a / b)
//console.log(++currentYear)
//console.log(currentYear++)
//console.log(--currentYear)
//console.log(currentYear--)
//console.log(c)

// 4 ТИПЫ ДАННЫХ

//const isProgrammer = true
//const name = 'Dima'
//const age = 33
//let x
//console.log(typeof isProgrammer)
//console.log(typeof name)
//console.log(typeof age)
//console.log(typeof x)
//console.log(typeof null)
//console.log(null)

// 5 ПРИОРИТЕТ ОПЕРАТОРОВ

//const fullAge = 33
//const birthYear  = 1987
//const currentYear = 2021
//const isFullAge = currentYear - birthYear >= fullAge
//console.log(isFullAge)

// 6 УСЛОВНЫЕ ОПЕРАТОРЫ

//const courseStatus = 'ready' //  ready, fail, pending

//if (courseStatus === 'ready') {
    //console.log('Курс уже готов и его можно проходить')
//} else if (courseStatus === 'pending') {
    //console.log('Курс пока находится в процессе разработки')
//} else {
    //console.log('Курс не получился')
//}

//const isReady = true
//if (isReady) {
  //  console.log('Всё готово')
//} else {
  //  console.log('Всё не готово')
//}
// Это тоже самое, что и if (isReady ===true)
// А можно записать в одну строчку тоже самое
//isReady ? console.log('Всё готово') : console.log('Всё не готово') // это тернарное выражение

// 7 БУЛЕВАЯ ЛОГИКА

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators

// 8 ФУНКЦИИ

// function calculateAge(year) {
//     return 2021 - year
// }

// console.log(calculateAge(1987))
// console.log(calculateAge(1800))
// console.log(calculateAge(1999))
// console.log(calculateAge(1975))

// function logInfoAbout(name, year) {
//     const age = calculateAge(year)
//     if (age > 0) {
//         console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//     } else {
//         console.log('Вообще-то это уже будущее!')
//     }
// }

// logInfoAbout('Dima', 1987)
// logInfoAbout('Dima', 2030)

// 9 МАССИВЫ

// const cars = ['mazda', 'audi', 'ford']  // Это более правильный вариант создания массивов
//  console.log(cars)
// const cars = new Array('mazda', 'audi', 'ford')  // Это менее правильный вариант создания массивов
// console.log(cars)
// console.log(cars[1])
// console.log(cars[2])
// console.log(cars[3])
// console.log(cars.length)
// cars[0] = 'porsche'
// console.log(cars)
// cars[cars.length] = 'mazda' //Добавляет следующий элемент массива .length
// console.log(cars)

// 10 ЦИКЛЫ

const cars = ['mazda', 'audi', 'ford', 'porche']
// for (let i = 0; i < cars.length; i++) {
//   const car = cars[i]
//   console.log(car)
// }
// for (let car of cars) {   // более коротко и лаконично, чем то, что выше
//   console.log(car)
// }

// 11 ОБЪЕКТЫ

// const person = {
//   firstName: 'Dima',
//   lastName: 'Ivanov',
//   year: 1987,
//   languages: ['RU', 'EN', 'BLR'],
//   hasWife: true,
//   greet: function() {    // это метод, а не функция, потому что она определена в контексте создания объекта
//     console.log('greet from person')
//   }
// }

// console.log(person) // либо можно обратиться к чему-то другому
// console.log(person.firstName)
// console.log(person.hasWife)
// person.greet() // либо можно обратиться по-другому
// console.log(person['lastName'])  //через строчку
// const key = 'languages'  //обращение к объекту через динамический ключ
// console.log(person[key])
// person.hasWife = false  //любые значения можно менять
// console.log(person)
// person.isProgrammer = true  //можно добавлять любые ключи
// console.log(person)