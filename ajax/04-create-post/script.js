'user strict'

$("document").ready(function(){
    function fetchData(userData){
        $.each(userData, function(key,value){
            // console.log(key, value)
            $("#userPost").append(
                `<option value="${value.id}">${value.name}</option>`
            )
        })
    }
    
    $.ajax({
        url: "https://gorest.co.in/public/v2/users",
        type: "get",
        dataType : "json",
        beforeSend: function () {
            $("#loading-bar-spinner").show(),
            $("#btnSubmit").attr("disabled", true)
        },
        "headers": {
            "Authorization": "Bearer 793a9677dc5bdf544a62d363dc84b17dc20ca6ae4ffd70c3f9062a74738c609d"
        },
        success: function(res){
            let userData = res
            fetchData(userData)
        },
        complete: function () {
            $("#loading-bar-spinner").hide()
            $("form").trigger('reset')
            $("#btnSubmit").attr("disabled", false)
        },
        error: function(e){
            console.log(e)
        }
    })
    $("#btnSubmit").on("click", function(){
        let userVal = $("#userPost").val()
        let titleVal = $("#txtTitle").val()
        let commentVal = $("#txtComment").val()

        var form = new FormData();
        form.append("title", titleVal);
        form.append("body", commentVal);

        $.ajax({
            "url": `https://gorest.co.in/public/v2/users/${userVal}/posts`,
            "method": "POST",
            dataType : "json",
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
            success: function(response){
                // console.log(response)
                // $("#userTitle").html(response.title)
                // $("#userComment").html(response.body)
                $("#userPost").trigger('change')
            },
            complete: function () {
                $("#loading-bar-spinner").hide()
                $("form").trigger('reset')
                $("#btnSubmit").attr("disabled", false)
            },
            error: function(e){
                console.log(e)
            }
        })

        
    })

    $("#userPost").on("change", function(){
        let userVal = $("#userPost").val()
        if(userVal == "") return
        
        $.ajax({
            "url": `https://gorest.co.in/public/v2/users/${userVal}/posts`,
            "method": "get",
            dataType : "json",
            "headers": {
                "Authorization": "Bearer 793a9677dc5bdf544a62d363dc84b17dc20ca6ae4ffd70c3f9062a74738c609d"
            },
            beforeSend: function () {
                $("#loading-bar-spinner").show(),
                $("#btnSubmit").attr("disabled", true)
            },
            success: function(response){
                // console.log(response)
                $("#displayComments").html("")
                $.each(response, function(key, value){
                    console.log(key, value)
                    $("#displayComments").append(`
                    <div class="d-flex">  
                        <h5 class="m-0 mr-3">Title :</h5>
                        <h5 id="userTitle${key}" class="m-0">${value.title}</h5>
                    </div>
                    <div class="mt-4">
                        <div class="d-flex">  
                            <h5 class="m-0 mr-3">Your Comment :</h5>
                            <p id="userComment${key}" class="m-0">${value.body}</p>
                        </div>
                    </div>
                    `)
                })
                // $("#userTitle").html(response.title)
                // $("#userComment").html(response.body)
            },
            complete: function () {
                $("#loading-bar-spinner").hide()
                $("form").trigger('reset')
                $("#btnSubmit").attr("disabled", false)
            },
            error: function(e){
                console.log(e)
            }
        })
    })
})


