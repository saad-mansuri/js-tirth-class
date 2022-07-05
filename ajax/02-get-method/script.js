'use strict'

function getData(countrydata){
    // console.log(countrydata)
    $.each(countrydata, function(key, value){
        console.log(key,value)
        $("#selectCountry").append(
            `<option>${value}</option>`
        )
    })  
}

$("#btnClick").on("click", function(){
    $.ajax({
            url: "http://127.0.0.1:5500/ajax/get-method/ajax.json",
            type: "get",
            dataType: "json",
            success: function(response){
                // console.log(response)
                let countrydata = response.country
                getData(countrydata.id)
            }
        }
    )
})