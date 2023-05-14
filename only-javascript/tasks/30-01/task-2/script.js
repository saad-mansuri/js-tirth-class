'use strict'

let inputImage = document.getElementById("imgId")
let imagesDisp = document.getElementById("dispImages")

let arrImg = []

inputImage.addEventListener("change", selectImages)
    // let imgsValue = inputImage.src


function selectImages(event){
    let imgUrl = URL.createObjectURL(event.target.files[0])
    let imgDict = {
        name : event.target.files[0].name,
        imgURL : imgUrl
    }
    imagesDisp.src = imgUrl
    arrImg.push(imgDict)
    console.log(arrImg)
}
