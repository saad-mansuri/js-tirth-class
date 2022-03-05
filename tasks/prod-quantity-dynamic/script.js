'use strict'

let prodName = document.getElementById("prodName")
let prodPrice = document.getElementById("prodPrice")
let btnSubmit = document.getElementById("btnSubmit")
let tableBody = document.getElementById("tableBody")
let tableTotal = document.getElementById("tableTotal")
btnSubmit.addEventListener("click", submitData)

var sum = 0
let srNum = 1
let prodArr = []
function submitData(e) {
    e.preventDefault()
    let prodNameVal = prodName.value
    let prodPriceVal = prodPrice.value
    // console.log(prodNameVal, prodPriceVal)
    let prodDict = {
        sr : +new Date,
        pName : prodNameVal,
        pPrice : prodPriceVal

    }
    prodArr.push(prodDict)
    prodFetch()

    prodName.value = ""
    prodPrice.value = ""
}

function prodFetch(){
    tableBody.innerHTML = ""
    prodArr.forEach(function(v,i){
        tableBody.innerHTML += `<tr>
            <td valign="center">${i+1}</td>
            <td>${v.pName}</td>
            <td>${v.pPrice}</td>
            <td>
                <div class="quantity buttons_added d-flex">
                    <input type="button" value="-" class="minus btn" data-ref="txtQty-${v.sr}"
                        data-amount="${v.pPrice}" id="minus-${v.sr}" data-error="error-msg1" data-price="qtyPrice-${v.sr}">
                    <input type="number" disabled value="0" class="quantity-text text-center" id="txtQty-${v.sr}">
                    <input type="button" value="+" data-amount="${v.pPrice}" class="plus btn" data-ref="txtQty-${v.sr}" data-price="qtyPrice-${v.sr}"
                        id="btnPlus" data-error="error-msg1">
                </div>
            </td>
            <td id="qtyPrice-${v.sr}">0</td>
        </tr>`
    })
    let btnMinus = document.getElementsByClassName("minus")
    let btnPlus = document.getElementsByClassName("plus")

    btnMinus = [...btnMinus]
    btnPlus = [...btnPlus]

    btnMinus.forEach(function(v){
        v.addEventListener("click", minusQty)
    })

    btnPlus.forEach(function(v){
        v.addEventListener("click", plusQty)
    })
}


function minusQty(e){
    let minusRef = e.target.dataset.ref
    let minusRefVal = document.getElementById(minusRef)
    // console.log(minusRefVal)

    let priceRef = e.target.dataset.price
    let priceRefVal = document.getElementById(priceRef)

    let amountRef = e.target.dataset.amount

    let qtyVal = minusRefVal.value
    qtyVal--

    if(qtyVal < 0){
        alert("not getting in negetive val")
        return
    }
    minusRefVal.value = qtyVal

    priceRefVal.innerText = qtyVal * amountRef
    sum -= parseInt(amountRef)
    tableTotal.innerHTML = `<b>Total</b> ₹${sum}`
    console.log(sum)
}


function plusQty(e){
    let plusRef = e.target.dataset.ref
    let plusRefVal = document.getElementById(plusRef)
    // console.log(plusRefVal)

    let amountRef = e.target.dataset.amount
    // console.log(amountRef)

    let qtyVal = plusRefVal.value
    plusRefVal.value = ++qtyVal

    let priceRef = e.target.dataset.price
    let priceRefVal = document.getElementById(priceRef)
    // console.log(priceRefVal)
    priceRefVal.innerText = qtyVal * amountRef

    sum += parseInt(amountRef)
    tableTotal.innerHTML = `<b>Total</b> ₹${sum}`
    console.log(sum)
}