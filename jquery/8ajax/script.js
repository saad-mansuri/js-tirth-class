// 'use strict'

const data = [{
    id : +new Date,
    firstname : "saad",
    lastname : "mansuri",
    address : "ahmedabad",
},
{
    id : +new Date,
    firstname : "parth",
    lastname : "parma",
    address : "ahmedabad",
},
{
    id : +new Date,
    firstname : "tirth",
    lastname : "jain",
    address : "ahmedabad",
},]

// console.log(localStorage)

$("#btnSubmit").on("click", function(){
    // alert("fsbdhk")
    localStorage.setItem('Details', JSON.stringify(data))
    // console.log(data)
    var item = JSON.stringify(localStorage.getItem("Details"))
    // var getLocaldata = localStorage.getItem("Details")

    // console.log(JSON.stringify(localStorage.getItem("Details")))
    console.log(item)
})

