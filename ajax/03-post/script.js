'use strict'

function showData(userdata) {
    $("#body").html("")
    $.each(userdata, function (key, value) {
        // console.log(key, value) 
        $("#body").append(
            `<tr id="row${value.id}">
            <td>${value.id}</td>
            <td>${value.name}</td>
            <td>${value.email}</td>
            <td>${value.gender}</td>
            <td>${value.status}</td>
            <td><div data-id="${value.id}" data-row="row${value.id}" class="btn btn-danger deleteUser">Delete</div></td>
            </tr>`
        )
    })
}

fetchUser()

function fetchUser() {
    $.ajax({
        url: "https://gorest.co.in/public/v2/users",
        method: "get",
        "headers": {
            "Authorization": "Bearer 793a9677dc5bdf544a62d363dc84b17dc20ca6ae4ffd70c3f9062a74738c609d"
        },
        success: function (res) {
            showData(res)
        }
    })
}

$("#btnSubmit").on("click", function (e) {
    e.preventDefault()
    let nameVal = $("#txtName").val()
    let emailVal = $("#txtEmail").val()
    let statusVal = $("#txtStatus").val()
    let genderVal = $("input[name=gender]:checked").val()

    // console.log(nameVal, emailVal, statusVal, genderVal)

    var form = new FormData()
    form.append("name", nameVal)
    form.append("email", emailVal)
    form.append("status", statusVal)
    form.append("gender", genderVal)


    $.ajax({
        url: "https://gorest.co.in/public/v2/users",
        type: "POST",
        dataType: "json",
        "data": form,
        "processData": false,
        "contentType": false,
        "headers": {
            "Authorization": "Bearer 793a9677dc5bdf544a62d363dc84b17dc20ca6ae4ffd70c3f9062a74738c609d"
        },
        beforeSend: function () {
            $("#loading-bar-spinner").show(),
                $("#btnSubmit").attr("disabled", true)
        },
        success: function (response) {
            let userdata = response
            console.log(response)
            fetchUser(userdata)
        },
        complete: function () {
            $("#loading-bar-spinner").hide()
            $("form").trigger('reset')
            $("#btnSubmit").attr("disabled", false)
        }
    })
})


$(document).on("click", ".deleteUser", function (e) {
    let id = $(this).data('id')
    let row = $(this).data('row')

    // $("#" + row).remove()
    // $(`#${row}`).remove()
    // console.log(id,row)
    $.ajax({
        url : `https://gorest.co.in/public/v2/users/${id}`,
        method : "delete",
        "headers": {
            "Authorization": "Bearer 793a9677dc5bdf544a62d363dc84b17dc20ca6ae4ffd70c3f9062a74738c609d"
        },
        success : function(res){
            console.log(res)
            $(`#${row}`).remove(res)
        }
    })
})


// function deleteUser(that, id) {
//     that.remove()   
// }