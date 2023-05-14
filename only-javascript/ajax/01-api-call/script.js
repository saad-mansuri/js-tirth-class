'use strict'

$("document").ready(function () {

    function getuserData(data) {
        console.log(data)
        $("tbody#body").html('')
        $.each(data, function (key, value) {
            $("tbody#body").append(
                `<tr><td>${value.id}</td>
                <td>${value.name}</td>
                <td>${value.email}</td>
                <td>${value.gender}</td>
                <td>${value.status}</td></tr>`
            )
        })
    }

    $("#btnSubmit").on("click", function () {
        $.ajax({
            url: "https://gorest.co.in/public/v2/users",
            method: "get",
            dataType: "json",
            success: function (response) {
                console.log(response)
                let data = response
                getuserData(data)
            }
        })
    })
})