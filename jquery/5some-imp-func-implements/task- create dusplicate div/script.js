'use strict'

let i = 0
$("#btnCreatediv").on("click", function () {
    let cloneDiv = $("#createDiv").clone()
    cloneDiv.attr("id", +new Date)
    cloneDiv.appendTo("#assd")

    // `<div class="col-md-3" id="uniq_id"><div class="color_class"></div></div>`
})