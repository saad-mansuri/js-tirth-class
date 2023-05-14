
let bgcolorBody = document.getElementById("bodyBG")
let inputColor = document.getElementById("txtColor")

const colorArr = ["red", "green", "blue", "yellow", "white", "orange"]
inputColor.addEventListener("change", bgcolorChange)
function bgcolorChange(){
    // document.body.style.backgroundColor = "red"
    var redColor = inputColor.value
    // var greenColor = inputColor.value
    // var blueColor = inputColor.value
    // var yellowColor = inputColor.value
    if (colorArr.indexOf(redColor) < 0) {
        alert("Please enter only RED, GREEN, BLUE, YELLOW color")
    }
    // else if(greenColor == "green"){
    //     document.body.style.backgroundColor = "green"
    // }
    // else if(greenColor == "blue"){
    //     document.body.style.backgroundColor = "blue"
    // }
    // else if(greenColor == "yellow"){
    //     document.body.style.backgroundColor = "yellow"
    // }
    else{
        bgcolorBody.style.backgroundColor = redColor
    }
    // console.log(redColor)
    inputColor.value = ""
    // if (redColor == "") {
    //     console.log("please enter valid data")
    // }else{
    //     document.body.style.backgroundColor = "red"
    // }
}