// let formdata = new FormData();

// formdata.append("name","saad")


// $.ajax({
//     url: "https://gorest.co.in/public/v2/users",
//     type: "post",
//     data : formdata,
//     processType : false,
//     contentType : false,
//     dataType: "json",
//     success: function (response) {
//         data = response
//         setDataUser(data)
//     },

//     error: function (err) {

//         throw err
//     }
// })

// // processType : false, => this both are compulsory false while using formdata
// // contentType : false, 




// let formdata = new FormData();

// formdata.append("name","saad")


let jsonData = {
    name: "saad",
    gender: "male"
}

try {
    $.ajax({
        url: "https://gorest.co.in/public/v2/users",
        type: "post",
        data: JSON.stringify(jsonData),
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
            // data = response
        },

        error: function (err) {

            throw err
        }
    })
}catch(e){
    console.log(e)
}