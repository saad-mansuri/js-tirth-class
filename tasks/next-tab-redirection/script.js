'use strict'

let btnSubmit = document.getElementById("btnSubmit")

btnSubmit.addEventListener("click", function(){
    // btnSubmit.disabled = true

    btnSubmit.disabled = true
    setTimeout(function(){
        openNewTab()
    },3000)

    
})

function openNewTab(){
    let aa = window.open("https://www.youtube.com/")
    setTimeout(function(){
        aa.close()
        btnSubmit.disabled = false
    },3000)

}



