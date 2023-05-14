'use strict'

let alphabet = document.getElementById("alphabet")
let totalCount = document.getElementById("total__counter")
let timerCounting = document.getElementById("timer")

let alphabetArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// console.log(alphabetArr)
var counter = 0

let xyz = ""
document.addEventListener("keypress", function(e){
    console.log(e.key);
    // for(var i=0; i<=alphabetArr.length; i++){
        // console.log(alphabetArr[i])
        if(e.key == xyz) {
            counter++
            totalCount.innerHTML = counter
        }
    // }
    console.log(counter)
})

function showAlphabet(){
    xyz = alphabetArr[Math.floor(Math.random() * alphabetArr.length)]
    alphabet.innerHTML = xyz
    console.log(Math.ceil(Math.random() * alphabetArr.length))
}


let timer = 120
let interval = setInterval(function(){
    showAlphabet()
    timer--
    // console.log(timer)
}, 1000)

let secInterval = setInterval(function(){
    if(timer == 0){
        timerCounting.innerHTML = `Your Time Finish`
        clearInterval(secInterval)
        clearInterval(interval)
    }else{
        timerCounting.innerHTML = `Your Seconds Left ${timer}` 
    }
},1000)


