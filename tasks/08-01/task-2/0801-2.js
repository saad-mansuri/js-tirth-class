'use strict'

var totalExpense = document.getElementById("txttotalExpense")
var totalPerson = document.getElementById("txttotalPerson")
var totalPay = document.getElementById("txttotalPay")

var submitExpense = document.getElementById("submitExpense")

submitExpense.addEventListener("click", function(){
    var totalExpense_val = totalExpense.value
    var totalPerson_val = totalPerson.value
    var totalExpense_num = parseInt(totalExpense_val)
    var totalPerson_num = parseInt(totalPerson_val)
    if (totalExpense_val == "" && totalPerson_val == "") {
        totalPay.value = "Please Enter Valid Value"
    }else{
        var totalpay_amt = totalExpense_num / totalPerson_num
        totalPay.value = totalpay_amt
    }
    // var totalPay_val = totalPay.value
    // totalPay.innerHTML = totalpay_amt
    console.log(totalpay_amt)
    // alert("bhksdfal")
})
