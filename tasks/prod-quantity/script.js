'use strict'

// let btnMinus = document.getElementById("btnMinus")
let btnMinus = document.getElementsByClassName("minus")
let btnPlus = document.getElementsByClassName("plus")
btnMinus = [...btnMinus]
btnPlus = [...btnPlus]
// console.log(btnMinus)

btnMinus.forEach(function(v){
    // console.log(v)
    v.addEventListener("click", minusQty)
});
btnPlus.forEach(function(v){
    v.addEventListener("click", plusQty)
})

// let btnPlus = document.getElementById("btnPlus")
// let txtQty = document.getElementById("txtQty")

// btnMinus.addEventListener("click", minusQty)
// btnPlus.addEventListener("click", plusQty)



function minusQty(e){
    let errorRef = e.target.dataset.error
    let errorRefVal = document.getElementById(errorRef)
    console.log(errorRefVal)
    let minusRef = e.target.dataset.ref
    let minusRefVal = document.getElementById(minusRef)
    let qtyVal = minusRefVal.value
    qtyVal--
    if(qtyVal < 0){
        errorRefVal.innerHTML = "not getting in negetive val"
        errorRefVal.style.display = "block"
        return
    }
    minusRefVal.value = qtyVal
    console.log(qtyVal)
    // console.log(qtyVal)
    // console.log(qtyVal)
    // console.log("hello");
}

function plusQty(e){
    let errorRef = e.target.dataset.error
    let errorRefVal = document.getElementById(errorRef)
    errorRefVal.style.display = "none"
    let plusRef = e.target.dataset.ref
    let plusRefVal = document.getElementById(plusRef)
    let qtyVal = plusRefVal.value
    qtyVal++
    plusRefVal.value = qtyVal
    console.log(qtyVal)
}



