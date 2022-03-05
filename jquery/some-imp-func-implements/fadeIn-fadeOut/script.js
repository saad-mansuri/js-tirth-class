'use strict'

$("#fadeIN").on("click",function(){
    $("#div1").fadeIn(5000)
    // $("#div1").fadeIn("slow")
})

$("#fadeOUT").on("click",function(){
    $("#div1").fadeOut()
})

$("#btnAppend").on("click", function(){
    $("#divAppending").append(`<div id="div2"></div>`)
})