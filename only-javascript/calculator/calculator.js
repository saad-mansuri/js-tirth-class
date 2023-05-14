// console.log("hello")
// 'use strict'

let inputOne = document.getElementById("inputNum1")
let inputSecond = document.getElementById("inputNum2")
let AdditionButton = document.getElementById("btnAddition")
let subtractionButton = document.getElementById("btnSubtraction")
let multiButton = document.getElementById("btnMultiplication")
let divisionButton = document.getElementById("btnDivision")
let dispResult = document.getElementById("resultDisp")

divisionButton.addEventListener("click", divisionFunc)
multiButton.addEventListener("click", multiFunc)
AdditionButton.addEventListener("click", additionFunc)
subtractionButton.addEventListener("click", subtractionFunc)

function additionFunc(){
    // alert("hello")
    var $inputvalue1 = parseInt(inputOne.value)
    var $inputvalue2 = parseInt(inputSecond.value)

    let addition = $inputvalue1 + $inputvalue2

    // let storeVal = `${$inputvalue1} ${$inputvalue2}`
    
    console.log(addition)
    // console.log(storeVal)
    dispResult.value = addition
}

function subtractionFunc(){
    // alert("hello")
    var $inputvalue1 = parseInt(inputOne.value)
    var $inputvalue2 = parseInt(inputSecond.value)

    let addition = $inputvalue1 - $inputvalue2

    // let storeVal = `${$inputvalue1} ${$inputvalue2}`
    
    console.log(addition)
    // console.log(storeVal)
    dispResult.value = addition
}

function multiFunc(){
    // alert("hello")
    var $inputvalue1 = parseInt(inputOne.value)
    var $inputvalue2 = parseInt(inputSecond.value)

    let addition = $inputvalue1 * $inputvalue2

    // let storeVal = `${$inputvalue1} ${$inputvalue2}`
    
    console.log(addition)
    // console.log(storeVal)
    dispResult.value = addition
}

function divisionFunc(){
    // alert("hello")
    var $inputvalue1 = parseInt(inputOne.value)
    var $inputvalue2 = parseInt(inputSecond.value)

    let addition = $inputvalue1 / $inputvalue2

    // let storeVal = `${$inputvalue1} ${$inputvalue2}`
    
    console.log(addition)
    // console.log(storeVal)
    dispResult.value = addition 
}