'use strict'

let startDate = document.getElementById("txtStartdate")
let endDate = document.getElementById("txtEnddate")
let submitDate = document.getElementById("btnSubmit")
let displayDates = document.getElementById("displayDates")

submitDate.addEventListener("click", filterDate)

function filterDate(event) {
    event.preventDefault()

    // let dateArr = []
    let startDate_value = startDate.value
    let endDate_value = endDate.value

    let MONTHARR = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    // displayDates.innerHTML = ` ${startDate_value}  ${endDate_value}`

    let dateStart = new Date(startDate_value)
    let dateEnd = new Date(endDate_value)

    let storeStartDate = dateStart.getDate()
    let storeEndDate = dateEnd.getDate()

    let storeStartMonth = dateStart.getMonth()
    let storeStartYear = dateStart.getFullYear()

    displayDates.innerHTML = ""
    if (dateStart < dateEnd) {
        for (var i = storeStartDate; i <= storeEndDate; i++) {
            // displayDates.innerHTML += endDate_value[i]
            // var selectedDates = endDate_value[i]
            let date = i

            let strDate = date.toString()
            let convertedDate
            if (strDate.length === 2) {
                if (i > 9 && i <= 20) {
                    convertedDate = strDate + '<sup>th</sup>' + " " + MONTHARR[storeStartMonth] + " " + storeStartYear
                } else {
                    if (parseInt(strDate[1]) == 1) {
                        convertedDate = strDate + '<sup>st</sup>' + " " + MONTHARR[storeStartMonth] + " " + storeStartYear
                    }else if(parseInt(strDate[1]) == 2){
                        convertedDate = strDate + '<sup>nd</sup>' + " " + MONTHARR[storeStartMonth] + " " + storeStartYear

                    }else if(parseInt(strDate[1]) == 3){
                        convertedDate = strDate + '<sup>rd</sup>' + " " + MONTHARR[storeStartMonth] + " " + storeStartYear
                    }else{
                        convertedDate = strDate + '<sup>th</sup>' + " " + MONTHARR[storeStartMonth] + " " + storeStartYear
                    }
                }
            }else{
                if (i > 0 && i <=9) {
                    if (i == 1) {
                        convertedDate = strDate + '<sup>st</sup>' + " " + MONTHARR[storeStartMonth] + " " + storeStartYear
                    }else if(i == 2){
                        convertedDate = strDate + '<sup>nd</sup>' + " " + MONTHARR[storeStartMonth] + " " + storeStartYear

                    }else if(i == 3){
                        convertedDate = strDate + '<sup>rd</sup>' + " " + MONTHARR[storeStartMonth] + " " + storeStartYear
                    }else{
                        convertedDate = strDate + '<sup>th</sup>' + " " + MONTHARR[storeStartMonth] + " " + storeStartYear
                    }
                }
            }
            displayDates.innerHTML += convertedDate + "<br/>"



            // date = date + 'th'


            // if (st.length === 2) {
            //     if (i > 9 && i <= 20) {

            //     } else {
            //         if (i === 1) {

            //         } else if (i === 2) {

            //         } else if (i === 3) {

            //         } else {
            //             th
            //         }
            //     }
            // } else {
            //     if (i === 1) {

            //     } else if (i === 2) {

            //     } else if (i === 3) {

            //     } else {
            //         th
            //     }
            // }
        }



    } else {
        alert("Start date cannot be greater than to end date")
    }


    // console.log(startDate_value, endDate_value)
}