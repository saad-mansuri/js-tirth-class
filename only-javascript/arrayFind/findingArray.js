'user strict'

var arrNumber = document.getElementById("numArray")
var arrDropdown = document.getElementById("dropdownArray")
var arrSubmit = document.getElementById("btnSubmit")


var $library = [{
        book_id: 111,
        referenceNo: 12345,
        bookTitle: "Data Sctructure",
        firstName: "Rollins",
        surname: "Mansuri",
        address: `1778, Juhapura, Ahmedabad, Gujarat,380055`,
        mobileNo: 6353121872,
        email: "saadmansuri249@gmail.com",
        author: ['tom-lathom', 'gary cristion', 'dane dravid'],
        bowrrowedData: "15/12/2021",
        dueDate: "25/12/2021",
        dayonLoan: 10,
        dateOverdue: "27/12/2021",
        lateRuturn: "500rs",
        sellingPrice: 700
    },
    {
        book_id: 222,
        referenceNo: 67890,
        bookTitle: "Data science",
        firstName: "Saad",
        surname: "Rock",
        address: `1778, Juhapura, Ahmedabad, Gujarat,380055`,
        mobileNo: 6353121872,
        email: "saadmansuri249@gmail.com",
        author: ['tom-lathom', 'gary cristion', 'dane dravid'],
        bowrrowedData: "15/12/2021",
        dueDate: "25/12/2021",
        dayonLoan: 10,
        dateOverdue: "27/12/2021",
        lateRuturn: "500rs",
        sellingPrice: 700
    }
]

var arr =[]
arrSubmit.addEventListener("click", function () {
    // alert("hello")
    // console.log($library)
    arr =[]
    for (var i = 0; i < $library.length; i++) {
        let objVal = Object.values($library[i])
        // console.log(Object.values($library[i]))
        for (var j = 0; j < objVal.length; j++) {
            if (Array.isArray(objVal[j]) ) {
                for(var k=0; k < objVal[j].length; k++){
                    if (objVal[j][k] == arrNumber.value) {
                        arr.push($library[i])
                        break
                    } else {
                        console.log("Not Found")
                    }
                }
            }else{
                if (objVal[j] == arrNumber.value) {
                    arr.push($library[i])
                    break
                } else {
                    console.log("Not Found")
                }
            }
        }
    }
    console.log(arr)
    // var storeallValue, storeValue
    // if (arrDropdown.value == "allValues") {
    //     storeallValue = Object.values($library[arrNumber.value])
    // } else {
    //     storeValue = $library[arrNumber.value][arrDropdown.value]
    // }
    // console.log(storeallValue, storeValue)

})



