//const name = 'Dima'
//const age = 33
//const output = 'Hi, my name is ' + name + ' and I am ' + age + ' years old.'
//const output = `Hi, my name is ${name} and I am ${age} years old.` // тоже самое, что и код выше, но удобнее
//console.log(output)
//const output = `  // эти кавычки можно писать на разных строках
//<div>This is div</div>
//<p>This is p</p>
//`
//console.log(output) // можно вставлять HTML код и он будет на разных строках

//Методы
// const name = 'Dima'
// console.log(name.length) // длина строки - 4
// console.log(name.toUpperCase()) // DIMA
// console.log(name.toLowerCase()) // dima
// console.log(name.charAt(2)) // m. на какой позиции находится какой символ. Нумерация начинается с нуля
// console.log(name.indexOf('ma')) // 2. показывает, присутствует ли такое сочетание в строке и где
// console.log(name.indexOf('ik')) // -1 . Значит нету такого сочетания
// console.log(name.startsWith('Di')) // true. начинается ли строка с этого сочетания
// console.log(name.endsWith('a')) // true. Заканчиваеися ли строка с этого элемента
// console.log(name.toLowerCase().startsWith('d')) // true. Можно методы ставить один за одним
// console.log(name.repeat(5)) // DimaDimaDimaDimaDima. пишет строку 5 раз подряд
// const string = '    password             '
// console.log(string) //     password    - пробелы сохраняются
// console.log(string.trim()) // все пробелы очищаются. Есть trimLeft() и trimRight()


// function logPerson(s, name, age) {
//     console.log(s, name, age);
//     return `${s[0]}${name}${s[1]}${age}${s[2]}`// выведет Name: Dima, Age: 34!
// }

// const personName = 'Dima'
// const personAge = 34
// const output = logPerson`Name: ${personName}, Age: ${personAge}!`
// console.log(output);