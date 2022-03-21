//   1 Функции
// // Function Declaration
//  function greet(name) {
//      console.log("Hello -", name);
//  }
//  greet("Dima")

// //Function Expression
// const greet2 = function greet2(name) {
//     console.log("Hello2 - ", name);
// }
// greet2("Misha")
//Function Declaration можно переносить в любое место и код будет рабоать.
//Function expression должен идти до использования функции

// console.log(typeof greet); // выведет, что это функция, хотя такого типа данных в JS нету
// console.dir(greet)    // выведет всю инфу. И окажется, что функции - это объекты на самом деле!

//   2 Анонимные функции
// let counter = 0
// const interval = setInterval(function() {
//     if (counter === 5) {
//         clearInterval(interval)
//     } else {
//         console.log(++counter);   // не понял про анонимные функции
//     }
    
// }, 1000)

//  3  Стрелочные функции

// function greet(name) {
//     console.log("hello -", name);
// }

// const arrow = (name) => {
//     console.log("hello -", name);               //эти функции одинаковы
// }
// arrow("Dima")

// const arrow2 = name => console.log("Hello -", name);  // тоже самое, но только короче
// arrow("Misha")

// //const pow2 = num => {     // функция возведения в степень
// //     return num ** 2
// // }
// // console.log(pow2(5));    //выдаст 25

// // либо записать вот так 
// const pow2 = num => num ** 2
// console.log(pow2(5));      // тое будет 25

//  4  Параметры по умолчанию
// const sum = (a, b) => a + b
// console.log(sum(22,33)); // будет 55

// const sum2 = (c, d) => c + d
// console.log(sum2());   // будет NaN, так как мы не задали c и d

// const sum3 = (e = 10, f = 5) => e + f
// console.log(sum3());  // будет 15, потому что мы задали e и f по умолчанию, а при использовании функции не задали e и f

// const sum4 = (x = 5, y = 20) => x + y
// console.log(sum4(10, 50)); // будет 60. Хоть мы и задали x и y по умолчанию, мы всё равно имеем присвоенные значения при выводе функции

// function sumAll(...all) {   // ...all - называется вроде RES, но нужно будет уточнить
//     let result = 0
//     for (let num of all) {
//         result +=num
//     }
//     return result         // не совсем понял тут
// }

// const res = sumAll(1,2,3,4,5,6,7)
// console.log(res);  // будет 28


// 5 