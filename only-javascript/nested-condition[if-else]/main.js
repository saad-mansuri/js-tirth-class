// alert("hello")

'use strict'

let gender = "female"
let age = 18
// let maleAge = 20

if(gender == "male" || gender == "female"){
    if(gender == "male"){
        if(age >= 20 && age <= 30){
            console.log("Male age satisfied, eligible for play")
        }else{
            console.log("Age restriction")
        }
    }else{
        if(age >= 15 && age <= 25){
            console.log("female Age satisfied, eligible for play")
        }else{
            console.log("Age restriction")
        }
    }
}else{
    console.log("Gender only male-female acceptable")
}



// if(gender == "male"){
//     if(_age >= 20 && _age <= 30){
//       console.log("eligile for play cricket")
//     }else{
//       console.log("age restriction")
//     }
//   }else if(gender =="female"){
//     if(_age >= 18 && _age <= 25){
//       console.log("eligile for play cricket")
//     }else{
//       console.log("age restriction")
//     }
//   }else{
//     console.log("gender male-female must be required, others not allowed")
// }