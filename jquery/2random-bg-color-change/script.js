'use strict'


let colorArr = ['black', 'blue', 'green', 'yellow', 'red']

$("#bg-color > div").on("click mouseenter", function (e) {
    let getText = $(this).text().trim()
    $(this).text(++getText)
    // console.log(e.target.innerText.trim()) 
    // changeBGcolor()
    let colorgenRandom = colorArr[Math.floor(Math.random() * colorArr.length)]
    $(e.target).css({
        'background-color': colorgenRandom
    })

    let allowedArray = ["black", "green"]

    if (allowedArray.includes(colorgenRandom)) {
        $(e.target).css({
            'color': "white"
        })
    } else {
        $(e.target).css({
            'color': "black"
        })
    }
    // $(e.target).css(
    //     'color', colorgenRandom
    // )
})

// function changeBGcolor(e){
//     console.log(colorgenRandom)
// }