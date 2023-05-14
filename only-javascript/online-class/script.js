'use strict'

let number = 100

// console.log(number)
// 
// for(var i=0; i<=number; i++){
//     // console.log(i)
//     if(i % 2 == 0){
//         console.log(i + ' ' + 'even numbers')
//     }
//     // else{
//     //     console.log(i + ' ' + "odd numbers")
//     // }
// }

// for(var i=0; number % 2 == 0; i++){
//     console.log(number)
// }
// let totalCount = 10
// // let totalCount = [1,2,3,4,5,6,7,8,9,10];
// let sum = 0
// for(var i=0; i <= totalCount; i++){
//     sum += i
// }
// console.log(sum)

let totalCount = 10
// let totalCount = [1,2,3,4,5,6,7,8,9,10];
let sum = 1
for(var i=1; i <= totalCount; i++){
    sum *= i
}
console.log(sum)