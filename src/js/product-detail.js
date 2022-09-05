"use strict";

const clear = document.getElementById("clear");
const app = document.getElementById("app");

clear.addEventListener("click", function () {
  app.style.display = 'none';
});

function click_app() {
  app.style.display = 'block';
}