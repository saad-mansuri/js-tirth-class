'use strict'

let btnClick = document.getElementById("txtClick")

var myvalue = ""
var score = 0
setInterval(() => {
    myvalue = Math.ceil(Math.random() * 10)
    console.log("value", myvalue)
}, 1000);



document.addEventListener('keypress', function (e) {
    if (e.key == myvalue) {
        console.log(myvalue)
        score++
    }
    console.log("score",score)

})