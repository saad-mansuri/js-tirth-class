'use strict'

let displayValue = document.getElementById("displayValue")
let btnIncre = document.getElementById("btnincre")
let btnDecre = document.getElementById("btndecre")

var dispFlag = false

btnIncre.addEventListener("click", valueIncrement)
// var a = 1;
function valueIncrement(){
    // let valIncre = btnIncre.value
    if (dispFlag) {
        displayValue.value = 0
        dispFlag = false
    }
    displayValue.value++
    // a++
    // console.log(a)
}


btnDecre.addEventListener("click", valueDecrement)
function valueDecrement(){
    // alert("bfhdsk")
    if (displayValue.value <= 0) {
        dispFlag = true
        displayValue.value = "not acceptable in less 0"
    }else{
        displayValue.value--
    }
    // a--
    // console.log(a)

}