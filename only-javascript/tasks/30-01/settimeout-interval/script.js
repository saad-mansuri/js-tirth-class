
let bodyVar = document.getElementsByTagName("body")
let randomNum = document.getElementById("randomInt")

// var colorArr = ["black", "blue", "orange", "grey"]

// function changeBodyclr(){
//     bodyVar[0].style.background = colorArr[Math.floor(Math.random()*colorArr.length)]
// }

// setInterval(function(){
//     changeBodyclr()
// }, 3500)

function genrateRandomNum(){
    randomNum.innerHTML = Math.ceil(Math.random()*25)
}
var counter = 0
var abc = 1
var interval = setInterval(function(){
    genrateRandomNum()
    counter++
}, 3000)

var secInterval = setInterval(function(){
    if (abc == 20) {
        console.log(counter)
        clearInterval(secInterval)
        clearInterval(interval)
    }
    // console.log(abc)
    abc++
}, 1000)