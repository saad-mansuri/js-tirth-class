'use strict'

let formName = document.getElementById("txtName")
let email = document.getElementById("txtEmail")
let phone = document.getElementById("txtPhone")

let country = document.getElementById("selectCountry")
let dateofbirth = document.getElementById("dateBirth")
let address = document.getElementById("txtAddress")

let submit = document.getElementById("btnSubmit")
let reset = document.getElementById("btnReset")
let userinfo = document.getElementById("userinfo")

let result = document.getElementById("displayResult")

let arrayForm = []

let gender = document.getElementsByName("gender")
let selectedGender;
 function findGender(){
    for(var i=0; i < gender.length; i++){
        if (gender[i].checked) {
            selectedGender = gender[i].value
        }
    }
    return selectedGender
 }
// console.log(selectedGender)

submit.addEventListener("click", dataSubmit)

function dataSubmit(event) {
    event.preventDefault()
    // let gender = document.querySelector('input[name="gender"]:checked')
    // console.log(gender.value)

    // return
    // debugger
    var genderMF = findGender()

    let nameValue = formName.value
    let emailValue = email.value
    let phoneValue = phone.value
    let genderValue = genderMF
    let countryValue = country.value
    let dateofbirthValue = dateofbirth.value
    let addressValue = address.value

    // let convertArr = {
    //     Name: nameValue,
    //     Email: emailValue,
    //     Phone: phoneValue,
    //     Gender: genderValue,
    //     Country: countryValue,
    //     DateofBirth: dateofbirthValue,
    //     Address: addressValue
    // }


    userinfo.innerHTML += `
        <tr>
            <td>${nameValue}</td>
            <td>${emailValue}</td>
            <td>${phoneValue}</td>
            <td>${genderValue}</td>
            <td>${countryValue}</td>
            <td>${dateofbirthValue}</td>
            <td>${addressValue}</td>
        </tr>
    `

    // arrayForm.push(convertArr)
    // console.log(convertArr)

    // console.log(nameValue, emailValue, phoneValue, genderValue, countryValue, dateofbirthValue, addressValue)
}

// console.log()