'use strict'

function getStoreData(){

    let myData = localStorage.getItem("userdetails")
    myData = JSON.parse(myData)
    // console.log(myData)
    if(myData == null){
        return []
    }
    
    return myData
}

let infoArr = getStoreData()

// console.log(infoArr)
// if(JSON.parse(localStorage.getItem("userdetails")) != null){
//     infoArr = JSON.parse(localStorage.getItem("userdetails"))
// }
$("#btnSubmit").on("click", function(e){
    e.preventDefault()

    var nameVal = $("#txtName").val()
    var emailVal = $("#txtEmail").val()
    var numVal = $("#txtNum").val()
    var pwdVal = $("#txtPwd").val()
    var genderVal = $("input[name=gender]:checked").val()
    var hobbiesVal = $("input[name=checkhobbie]:checked")

    let hovV = []

    $.each(hobbiesVal, function(i,checkbox){
        hovV.push($(checkbox).val())
    })

    let infoDict = {
        name : nameVal,
        email : emailVal,
        number : numVal,
        password : pwdVal,
        gender : genderVal,
        hobbies : hovV
    }
    infoArr.push(infoDict)

    localStorage.setItem("userdetails", JSON.stringify(infoArr))
    getuserDetails()
    // console.log(infoArr)

})

function getuserDetails(){
    // localStorage.getItem("infoArr")
    console.log(getStoreData())
}


$("#btnLogin").on("click", function(e){
    e.preventDefault()
    let loginEmail = $("#email").val()
    let loginpwd = $("#password").val()

    // console.log(loginEmail, loginpwd)
    // console.log(getStoreData())

    if(loginEmail == "" && loginpwd == "" ){
        alert("please enter value")
        return
    }
    var notmatch = false
    $.each(getStoreData(), function(i,v){
        console.log(v.email, v.password)
        if(loginEmail == v.email && loginpwd == v.password){
            alert("success")
            notmatch = true
        }
    })
    if(notmatch == false){
        alert("user or password not match")
    }
    
})