'user strict'
var $library = [
    {
    book : 111,
    referenceNo : 12345,
    bookTitle : "Data Sctructure",
    firstName : "Rollins",
    surname : "Mansuri",
    address : [{
        houseNo : "1778",
        area : "Juhapura",
        city : "Ahmedabad",
        state : "Gujarat",
        zipCode : 380055
    },
    {
        houseNo : "1778",
        area : "Juhapura",
        city : "Ahmedabad",
        state : "Gujarat",
        zipCode : 380055
    }],
    mobileNo : 6353121872,
    email : "saadmansuri249@gmail.com",
    author : ['tom-lathom', 'gary cristion', 'dane dravid'],
    bowrrowedData : "15/12/2021",
    dueDate : "25/12/2021",
    dayonLoan : 10,
    dateOverdue : "27/12/2021",
    lateRuturn : "500rs",
    sellingPrice : 700
},{
    book : 222,
    referenceNo : 67890,
    bookTitle : "Data science",
    firstName : "Saad",
    surname : "Rock",
    address : [{
        houseNo : "1778",
        area : "Juhapura",
        city : "Ahmedabad",
        state : "Gujarat",
        zipCode : 380055
    },
    {
        houseNo : "1778",
        area : "Juhapura",
        city : "Ahmedabad",
        state : "Gujarat",
        zipCode : 380055
    }],
    mobileNo : 6353121872,
    email : "saadmansuri249@gmail.com",
    author : ['tom-lathom', 'gary cristion', 'dane dravid'],
    bowrrowedData : "15/12/2021",
    dueDate : "25/12/2021",
    dayonLoan : 10,
    dateOverdue : "27/12/2021",
    lateRuturn : "500rs",
    sellingPrice : 700
}
]

console.log("hello")
var $libraryArr1 = $library[1]["address"][0] 
var $libraryArr2 = $library.length-2   
var $x = $library[$libraryArr2]
// console.log()
console.log($x)
// var $libData = $libraryArr1.concat($libraryArr2)
// console.log($libraryArr1.concat($libraryArr2))7
// console.log($library)

// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];

// const children = arr1.concat(arr2); 
// console.log(children)