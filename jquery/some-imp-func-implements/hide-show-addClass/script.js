'use strict'

$("#hideClick").on("click", function(){
    $(".class-form").hide(3000)
    $("#showClick").css("display", "block")
    $("#hideClick").css("display", "none")
})

$("#showClick").on("click", function(){
    $(".class-form").show(3000)
    $(".class-form").addClass("change-bgcolor")
    $("#showClick").css("display", "none")
    $("#hideClick").css("display", "block")
})