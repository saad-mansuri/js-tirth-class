// console.log("hello")
'use strict'

let txtNumber = document.getElementById("txtNum")
let btnCheck = document.getElementById("btnCheck")

var num
btnCheck.addEventListener("click", function(){
    let numberVal = txtNumber.value
    num = parseInt(numberVal)
    var temp = document.getElementById("resPara")
        temp.style.display = "block"
    if(!num){
        console.log("Please Enter valid value")
        document.getElementById("res").innerHTML = `Please Enter valid value` 
        // var temp = document.getElementById("resPara")
        // temp.style.display = "block"
    }
    else{
        var check = 0
        // var temp = document.getElementById("resPara")
        // temp.style.display = "block"

        for(var i=2; i<num; i++){
            if (num %i === 0) {
                check++
                break
            }
        }
        if(check == 0){
            document.getElementById("res").innerHTML = `${numberVal} is a PRIME` 
        }else{
            document.getElementById("res").innerHTML = `${numberVal} is NOT a PRIME`
        }
    }
    // console.log(num)
    txtNumber.value = ""
})