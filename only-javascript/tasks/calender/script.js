'use strict'

let txtYear = document.getElementById("txtYear")
let btnYear = document.getElementById("btnYear")
let dispCalender = document.getElementById("dispCalender")

let weeks = ["SUN", "MON", "TUE", "WED", "THR", "FRI", "SAT"]
let monthss = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

btnYear.addEventListener("click", createCalender)

function createCalender() {
    let yearVal = txtYear.value
    dispCalender.innerHTML = ''
    dispCalender.innerHTML += `<div class="col-12"><h1>${yearVal}</h1></div>`
    for (let months = 0; months <= 11; months++) {
        let date = new Date(yearVal, months + 1, 0)
        let dateVal = date.getDate()
        let divv = `<div class="col-4"><div><h1>${monthss[months]}</h1></div>`
        let tr = "<ul>"
        for (var i = 1; i <= dateVal; i++) {
            let createDate = new Date(`${yearVal}-${months+1}-${i}`).getDay()
            console.log(monthss[months], i, weeks[createDate])
            tr += `<li>${i}<b><sup>${weeks[createDate]}</sup></b></li>`
        }
        tr += "</ul>"
        divv += tr + "</div>"
        dispCalender.innerHTML += divv
        // dispCalender.innerHTML += `</div>`
    }

}