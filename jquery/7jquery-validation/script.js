'use strict'

$("#btnSubmit").on("click", function (e) {
    e.preventDefault()
    // $("#errorName").css("display", "block")
    let nameVal = $("#txtName").val()
    let numVal = $("#txtNum").val()
    let emailVal = $("#txtEmail").val()
    let pwdVal = $("#txtPwd").val()
    let genderVal = $("input[name=gender]:checked").length
    // let gender = $("input[name=gender]").is(":checked")
    let hobbies = $("input[name=checkhobbie]:checked")
    var hobbiesVal = []
    for (var i = 0; i < hobbies.length; i++) {
        hobbiesVal.push($(hobbies[i]).val())
        // console.log(hobbiesval)
    }
    console.log(nameVal, numVal, emailVal, pwdVal, genderVal, hobbiesVal.join(","))
    // if (nameVal == "") {
    //     $("#errorName").css("display", "block")
    // }
    // if (numVal == "" ) {
    //     $("#errorNumber").css("display", "block")
    // }
    // if (emailVal == "") {
    //     $("#errorEmail").css("display", "block")
    // }
    // if (pwdVal == "") {
    //     $("#errorPwd").css("display", "block")
    // }
    // if ($("input[name=gender]").is(":checked") == false) {
    //     $("#errorGender").css("display", "block")
    // }
    // if ($("input[name=checkhobbie]").is(":checked") == false) {
    //     $("#errorHobbie").css("display", "block")
    // }
})


// let alpa = ["a","b",]
let alphabetArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
$("#txtNum").keydown(function (e) {
    if (alphabetArr.includes(e.originalEvent.key.toLowerCase())) {
        e.preventDefault()
    }
})