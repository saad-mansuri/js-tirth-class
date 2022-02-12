'use strict'

let btn = document.getElementsByClassName("btn")
let displayVal = document.getElementById("displayVal")

for(var i=0; i<btn.length; i++){
    // console.log(btn[i].value)
    btn[i].addEventListener("click", btnClick)
}

function btnClick(e){
    displayVal.innerHTML = e.target.value
    // console.log(e.target.value)
}