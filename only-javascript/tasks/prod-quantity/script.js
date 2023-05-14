// 'use strict'

// let qtyPrice = document.getElementById("qtyPrice")

// let btnPlus = document.getElementById("btnPlus")
// btnPlus.addEventListener("click", function(){
//     let qtyPriceVal = qtyPrice.getAttribute('value')
//     console.log(qtyPriceVal)
// })
let btnMinus = document.getElementsByClassName("minus")
let btnPlus = document.getElementsByClassName("plus")
let totalPrice = document.getElementById("total-price")

// let qtyPrice = document.getElementById("qtyPrice")

var sum = 0

btnMinus = [...btnMinus]
btnPlus = [...btnPlus]

btnMinus.forEach(function (v) {
    v.addEventListener("click", minusQty)
});
btnPlus.forEach(function (v) {
    v.addEventListener("click", plusQty)
})

function minusQty(e) {
    let errorRef = e.target.dataset.error
    let errorRefVal = document.getElementById(errorRef)
    // console.log(errorRefVal)
    let minusRef = e.target.dataset.ref
    let minusRefVal = document.getElementById(minusRef)

    let qtyVal = minusRefVal.value
    qtyVal--
    if (qtyVal < 0) {
        errorRefVal.innerHTML = "not getting in negetive val"
        errorRefVal.style.display = "block"
        return
    }
    minusRefVal.value = qtyVal
    // console.log(qtyVal)

    let qtyPriceRef = e.target.dataset.price
    let qtyPriceRefVal = document.getElementById(qtyPriceRef)
    let qtyPriceRefValAtt = qtyPriceRefVal.getAttribute('value')
    // console.log(qtyPriceRefVal)

    qtyPriceRefVal.innerHTML = qtyPriceRefValAtt * qtyVal
    console.log(qtyPriceRefValAtt * qtyVal)
    sum -= parseInt(qtyPriceRefValAtt)
    totalPrice.innerHTML = `₹.${sum}`
    // console.log(qtyPriceRefVal*qtyVal)
}

function plusQty(e) {
    let errorRef = e.target.dataset.error
    let errorRefVal = document.getElementById(errorRef)
    errorRefVal.style.display = "none"

    let plusRef = e.target.dataset.ref
    let plusRefVal = document.getElementById(plusRef)
    let qtyVal = plusRefVal.value
    // qtyVal++
    plusRefVal.value = ++qtyVal
    // console.log(qtyVal)

    let qtyPriceRef = e.target.dataset.price
    let qtyPriceVal = document.getElementById(qtyPriceRef)
    let qtyPriceRefAtt = qtyPriceVal.getAttribute('value')

    console.log(qtyPriceVal)


    // debugger
    // console.log(qtyPriceRefAtt)
    // console.log(e.target.dataset.price)

    qtyPriceVal.innerHTML = qtyPriceRefAtt * qtyVal

    sum += parseInt(qtyPriceRefAtt)
    totalPrice.innerHTML = `₹.${sum}`
    // console.log(qtyPriceRefAtt*qtyVal)
}