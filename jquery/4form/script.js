'use strict'

$("#btnSubmit").on("click", function(e){
    e.preventDefault()
    let usernameVal = $("#txtName").val()
    let pwdVal = $("#txtPwd").val()
    // console.log(usernameVal, pwdVal)
    if(usernameVal == "" || pwdVal == ""){
        $("#bg-color").children().css("border", "1px solid blue")
    }else{
        $("#btnSubmit").parent().parent().css("border", "1px solid red")
    }
})

