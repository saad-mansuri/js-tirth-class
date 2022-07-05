'use strict'

let uppercase = false,
    lowercase = false,
    number = false,
    checkedSymbols = false,
    alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    Symbolss = ['@', '$', '*', '&', "%"],
    pwdArray = []
$(".typecondition").on("change", function () {
    let type = $(this).attr('name')
    let isCheckedd = $(this).is(":checked")
    if (type == "uppercase" && isCheckedd == true) {
        uppercase = true
    }

    if (type == "lowercase" && isCheckedd == true) {
        lowercase = true
    }

    if (type == "number" && isCheckedd == true) {
        number = true
    }

    if (type == "checkedSymbols" && isCheckedd == true) {
        checkedSymbols = true
    }
})
$("#btngeneratPwd").on("click", function () {
    // pwdArray = []
    let pwdLengthVal = $("#pwdLength").val()
    // console.log(uppercase, lowercase, checkedSymbols, number)

    if (uppercase == true) {
        UpperCase(pwdLengthVal)
    }

    if (lowercase == true) {
        LowerCase(pwdLengthVal)
    }

    if (checkedSymbols == true) {
        generateSymbol(pwdLengthVal)
    }

    if (number == true) {
        generateNumber(pwdLengthVal)
    }

    pwdFunction(pwdLengthVal)
})

function pwdFunction(length) {
    console.log()
    let finalTouch = []
    for (let i = 1; i <= length; i++) {
        let randomFinalvalue = pwdArray[Math.floor(Math.random() * pwdArray.length)]
        finalTouch.push(randomFinalvalue)
    }
    $("#txtshowPwd").val(finalTouch.join(""))
}

function UpperCase(length) {
    // $("#txtshowPwd").val(alphabets.length)
    for (var i = 1; i <= length; i++) {
        let randomUppercase = alphabets[Math.floor(Math.random() * alphabets.length)]
        let randomUppercaseVal = randomUppercase.toUpperCase()
        pwdArray.push(randomUppercaseVal)
    }

}

function LowerCase(length) {
    for (var i = 1; i <= length; i++) {
        let randomLowerCase = alphabets[Math.floor(Math.random() * alphabets.length)]
        let randomLowerCaseVal = randomLowerCase.toLowerCase()
        pwdArray.push(randomLowerCaseVal)
    }
    // $("#txtshowPwd").val(pwdArray.join(""))
}

function generateNumber(length) {
    for (var i = 1; i <= length; i++) {
        let randomNumVal = Math.floor(Math.random() * 10)
        pwdArray.push(randomNumVal)
    }

    // $("#txtshowPwd").val(randomNum)
}

function generateSymbol(length) {
    for (var i = 1; i <= length; i++) {
        let randomSymbolssVal = Symbolss[Math.floor(Math.random() * Symbolss.length)]
        pwdArray.push(randomSymbolssVal)
    }
    // $("#txtshowPwd").val(randomNum)
}


$("#btncopyPwd").on("click", function(){
    $("#txtshowPwd").select()
    document.execCommand(
        "copy"
    );
})