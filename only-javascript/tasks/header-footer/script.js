'use strict'

let subMenus = document.getElementById("subMenus")
let subMenusUL = document.getElementById("getSubmenus")

subMenus.addEventListener("mouseenter", showSubmenus)

function showSubmenus(e) {
    // getSubmenus.style.display = "block"
    getSubmenus.classList.add('active')
}

subMenusUL.addEventListener("mouseleave", showSubmenuss)

function showSubmenuss() {
    getSubmenus.classList.remove('active')
}