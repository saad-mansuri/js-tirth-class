'user strict'

let rollNo = document.getElementById('rollno')
let fName = document.getElementById('fname')
let phoneNo = document.getElementById('phoneno')
// let  = document.getElementById('btnSubmit')
let submitData = document.getElementById('btnSubmit')

let displayData = document.getElementById('display_data')
let a = []


submitData.addEventListener("click", function (e) {
    e.preventDefault()
    displayData.innerHTML = ""
    // alert("hello")
    let roll_no = rollNo.value
    let f_name = fName.value
    let phone_no = phoneNo.value
    //   let store_Data = {
    //     rollno : roll_no,
    //     fname :f_name,
    //     pno : phone_no
    //   }
    //   a.push(store_Data)
    //   var

    //   console.log(a)
    var $fillDetails = "please fill the detail"
    if (roll_no != "" && f_name != "" && phone_no != "") {
        // if (phone_no.length == 10) {
        let store_Data = {
            rollno: roll_no,
            fname: f_name,
            pno: phone_no
        }
        //   let storeData = `${roll_no} ${f_name} ${phone_no}`
        a.push(store_Data)


        // displayData.innerHTML = JSON.stringify(a)
        rollNo.value = ""
        fName.value = ""
        phoneNo.value = ""

        console.log(a)
        for (i = 0; i < a.length; i++) {
            // console.log(a[i]['fname'])
            // var storeArrvalue = a[i]['rollno']
            // var storeArrvalue1 = a[i]['fname']
            // var storeArrvalue2 = a[i]['pno']

            var { rollno, fname, pno } = a[i]
            displayData.innerHTML += rollno + " " + fname + " " + pno + "<br>"
        }

        // } else {
        //     displayData.innerHTML = "Enter valid 10 number"
        //     // console.log("Enter valid 10 number")
        // }
        //   alert()
        // console.log(storeData)
    } else {
        displayData.innerHTML = $fillDetails
        // console.log($fillDetails)
    }

    //   console.log(storeData)
})


// let ab = [11, 22, 33, 44, 55, 66]
// var kastIn = ab.length - 1
// for (i = 0; i < ab.length; i++) {

//     if (i == kastIn) {
//         console.log(ab[i])
//     }

//     // var ab = parseInt(aa[i])
//     // if (ab[i] % 2 == 0) {
//     //     console.log(ab[i])
//     // }else{
//     //     console.log("even not find")
//     // }
// }