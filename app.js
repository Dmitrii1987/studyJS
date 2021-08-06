// NUMBER

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
