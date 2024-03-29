// 1 NUMBER

// const num = 42 // integer
// const float = 42.42 // float
// const pow = 10e3 // возведение в степень
// console.log(pow) // 1000
// console.log(Number.MAX_SAFE_INTEGER) // максимальное безопасное число 9007199254740991
// console.log(Math.pow(2, 53) -1 ); // так вычисляется число выше       9007199254740991
// console.log(Number.MIN_SAFE_INTEGER); // минимальное число           -9007199254740991
// console.log(Number.MAX_VALUE); // максимально допустимое число 1.7976931348623157e+308
// console.log(Number.MIN_VALUE); // минимально допустимое число  5e-324
// console.log(Number.POSITIVE_INFINITY); // бесконечность  Infinity
// console.log(Number.NEGATIVE_INFINITY); // отрицательная бесконечность  -Infinity
// console.log(2/0); // будет Infinity
// console.log(Number.NaN); // NaN (not a number), но это число(number)
// console.log(2/undefined); // будет NaN
//есть функции:
//isNaN()       // Number.isNan()   - это обьекты
//isFinite()    // Number.isFinite()- это тоже обьект

// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(stringInt + 2)   // будет 402 это контакенация(сложение строк)
// console.log(parseInt(stringInt) + 2) //будет 42 parseInt делает число из строки. Работает с целыми числами
// console.log(Number(stringInt) + 2) // будет 42 (просто обернули в Number)
// console.log(+stringInt + 2) // будет 42. "+" преобразует строку в число
// console.log(stringFloat + 2) // будет 40.422
// console.log(parseFloat(stringFloat) + 2) // будет 42.42 parseFloat делает дробное число из строки
// console.log(+stringFloat + 2) // будет 42.42. "+" преобразует строку в число

// console.log(0.4 + 0.2) // будет 0.6000000000000001
// console.log((0.4 + 0.2).toFixed(1)) // будет строка "0.6"
// console.log(+(0.4 + 0.2).toFixed(1)) // будет число 0.6 либо 
// console.log(parseFloat((0.4 + 0.2).toFixed(1))) // будте тоже число 0.6


// 2 BigInt

//console.log(typeof 9007199254740991n)  // если к самому большому числу добавить n, то получится bigint
// bigint работает только с bigintами
//console.log(-9007199254740991n) // тоже bigint
//console.log(10n - 4) // error. нельзя миксовать bigint и числа
// там, где есть n, будет bigint
//console.log(parseInt(10n) - 4) // будет 6
//console.log(10n - BigInt(4)) // будет 6n (и это уже bigint)
//console.log(5n / 2n) // будет 2n

// 3 Math

// Объект Math позволяет взаимодейстовать с различными математическими операциями в JS
// console.log(Math.E) //  2.718281828459045
// console.log(Math.PI) // 3.141592653589793
// console.log(Math.sqrt(25)) // квадратный корень из 25 будет 5
// console.log(Math.pow(5, 3)) // возведение в степень. 5 в третьей степени - 125
// console.log(Math.abs(-42)) // это модуль числа. Будет 42
// console.log(Math.max(42, 55, 100, 11, 9)) // 100 - максимальное число
// console.log(Math.min(33, 44, 67, 5)) // 5 - минимальное число
// console.log(Math.floor(4.9)) // 4 - округление в меньшую сторону
// console.log(Math.ceil(4.9)) // 5 - округление в большую сторону
// console.log(Math.round(4.9)) // 5 - возвращает число, округлённое к ближайшему целому
// console.log(Math.trunc(4.9)) // 4 - возвращает целую часть числа путём удаления всех дробных
// console.log(Math.random()) // всё время разные значения

// Example

// function getRandomBetween(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }

// console.log(getRandomBetween(10, 42)) // функция выводит случайное число между min и max и округляет в меньшую сторону