'use strict'

$("#fadeIN").on("click",function(){
    $(".div1").fadeIn(5000)
    // $("#div1").fadeIn("slow")
})

$("#fadeOUT").on("click",function(){
    $(".div1").fadeOut(3000)
})

$("#btnAppend").on("click", function(){
    $("#divAppending").append(`<div class="div1 div2"></div>`)
})