"use strict";

const dark_sun = document.getElementById("dark-sun");
const alll = document.getElementById("alll");

dark_sun.addEventListener("click", function () {
    alll.classList.toggle("dark")
        ? (dark_sun.firstElementChild.className = "fa-solid fa-moon") : (dark_sun.firstElementChild.className = "fa-solid fa-sun");
});
