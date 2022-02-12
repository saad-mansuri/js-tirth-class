console.log("hello")
'use strict'

let selectCat = document.getElementById("selectCat")
let displayCat = document.getElementById("displayCat")
let displayProds = document.getElementById("displayProds")

let catArray = {}

const catgrories = {
    fruit: [{
            prod_id: 1,
            prod_name: "Banana",
            prod_price: 100,
            prod_desc: "Banana with discount",
            prod_color: "Yellow"
        },
        {
            prod_id: 2,
            prod_name: "Orange",
            prod_price: 100,
            prod_desc: "Banana with discount",
            prod_color: "Yellow"
        }
    ],
    stationery: [{
            prod_id: 3,
            prod_name: "Pencil",
            prod_price: 100,
            prod_desc: "Banana with discount",
            prod_color: "Yellow"
        },
        {
            prod_id: 4,
            prod_name: "Eraser",
            prod_price: 5,
            prod_desc: "Very Costly Price",
            prod_color: "Red"
        }
    ],
    electrice: [{
            prod_id: 5,
            prod_name: "RJ45",
            prod_price: 100,
            prod_desc: "Banana with discount",
            prod_color: "Yellow"
        },
        {
            prod_id: 6,
            prod_name: "Router",
            prod_price: 5,
            prod_desc: "Very Costly Price",
            prod_color: "Red"
        }
    ],
    garments: [{
            prod_id: 7,
            prod_name: "MEns WEar",
            prod_price: 100,
            prod_desc: "Banana with discount",
            prod_color: "Yellow"
        },
        {
            prod_id: 8,
            prod_name: "Women Wear",
            prod_price: 5,
            prod_desc: "Very Costly Price",
            prod_color: "Red"
        }
    ],
}

// var y = catgrories[0]["prod_1"]
// console.log(x)
selectCat.addEventListener("change", function () {
    displayCat.innerHTML = ""
    let prodValue = selectCat.value
    if (typeof catArray[prodValue] === "undefined") {
        catArray[prodValue] = []
    }
    var x = catgrories[prodValue]
    for (var i = 0; i < x.length; i++) {
        let index = catArray[prodValue].find(function (data) {
            return data['id'] == x[i]["prod_id"]
        })
        if (index !== undefined) {
            var selectedChacked = `checked="true"`
        } else {
            var selectedChacked = ""
        }
        // displayCat.innerHTML += `<input class='produts_' type="checkbox" ${selectedChacked}  onclick="prodCheckbox('${x[i]["prod_id"]}','${x[i]["prod_name"]}', '${x[i]["prod_price"]}', '${x[i]["prod_desc"]}', '${x[i]["prod_color"]}', this, '${prodValue}')" value="${x[i]["prod_name"]}"> ${x[i]["prod_name"]}<br>`

        displayCat.innerHTML += `<input class='produts_' type="checkbox" ${selectedChacked} data-cat="${prodValue}" data-id="${x[i]["prod_id"]}" data-desc="${x[i]["prod_desc"]}" data-price="${x[i]["prod_price"]}" data-color="${x[i]["prod_color"]}" value="${x[i]["prod_name"]}"> ${x[i]["prod_name"]}<br>`
        // console.log(x[i])
    }
    let allProducts = document.querySelectorAll('.produts_')
    allProducts.forEach(function (checkbox) {
        checkbox.addEventListener('change', prodCheckbox)
    })

    // displayCat.innerHTML += prodValue + x + "<br>"
    // console.log(x)
})

function prodCheckbox(e) {
    displayProds.style.display = "block"
    var {
        id,
        cat,
        desc,
        price,
        color,
    } = e.target.dataset
    if (this.checked) {

        catArray[cat].push({
            id,
            desc,
            price,
            color,
        })
    } else {
        let index = catArray[cat].indexOf(id)
        catArray[cat].splice(index, 1)
    }
    console.log(catArray)
    fetchProd()
}

function fetchProd() {
    displayProds.innerHTML = ""
    var counter = 1
    for (var j in catArray) {
        for (var k = 0; k < catArray[j].length; k++) {
            displayProds.innerHTML += `<tr>
                        <td>${counter++}</td>
                        <td>${catgrories[j][k]["prod_name"]}</td>
                        <td>${catgrories[j][k]["prod_price"]}</td>
                        <td>${catgrories[j][k]["prod_desc"]}</td>
                        <td>${catgrories[j][k]["prod_color"]}</td>
                    </tr>`
        }
        // for (var j = 0; j < catgrories[prodValue].length; j++) {}
    }
}

// function checkboxValue(event) { // event humara ha dictinary object
//     let ref = event.target.dataset.target
//     ref = document.getElementById(ref)
//     if (this.checked) {
//         ref.className = "toogle"
//         letMycharacter.push(this.value)
//     } else {
//         ref.className = "toogle-remove"
//         let index = letMycharacter.indexOf(this.value)
//         letMycharacter.splice(index, 1)
//     }
//     let arrayToString = join(letMycharacter)
//     // let arrayToString = letMycharacter.join(",")
//     let stringToAray = arrayToString.split(",")
//     // console.log(
//     //     event.target.value,
//     //     this.value,
//     //     document.getElementById(event.target.id).value
//     // )
// }
// checkbox.forEach((v, i) => {
//     v.addEventListener('change', checkboxValue)
// })