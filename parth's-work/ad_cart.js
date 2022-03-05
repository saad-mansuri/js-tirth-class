"use strict"

var plus = document.getElementsByClassName("cart-qty-plus")
var quntity = document.getElementsByClassName("qty")
var minus = document.getElementsByClassName("cart-qty-minus")
var price = document.getElementsByClassName("price")
var amount = document.getElementsByClassName("amount")
var total = document.getElementsByClassName("total")



//console.log(plus, quntity, minus, price, amount, total)

var count = 0

function Incremnent(e) {

    var quntity_referance = e.target.dataset.referance
    var quntity_display = document.getElementById(quntity_referance)
    quntity_display.value = count += 1;


    console.log(quntity_referance)
}

for (var i = 0; i < plus.length; i++) {

    var arra_plus = plus[i]
    arra_plus.addEventListener("click", Incremnent)
}



function Decrement(e) {

    var quntity_referance = e.target.dataset.referance
    var quntity_display = document.getElementById(quntity_referance)
    if (quntity_display.value > 0) {
        quntity_display.value = count -= 1;

    } else {

        quntity_display.value == 0
    }


    console.log(quntity_referance)


}


for (var i = 0; i < minus.length; i++) {

    var arra_minus = minus[i]
    arra_minus.addEventListener("click", Decrement)
}














// var count = 0

// function Incremnent(e) {
//     quntity.innerHTML = count += 1;
//     total_q.innerHTML = parseInt(total_q.innerHTML) + 20;
// }
// plus.addEventListener("click", Incremnent)


// function Decrement() {



//     if (quntity.innerHTML > 0) {
//         total_q.innerHTML = parseInt(total_q.innerHTML) - 20;
//         quntity.innerHTML = count -= 1;

//     } else {
//         quntity.innerHTML = 0
//     }
// }
// minus.addEventListener("click", Decrement)

//console.log(plus, quntity, minus, total_q, items, total, checkout)