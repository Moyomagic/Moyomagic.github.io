"use strict";

const sectionBox = document.querySelector(".section-box");
const listBtn = document.querySelector(".ph-list");
const authorList = document.querySelector(".author-list");
listBtn.addEventListener("click", function () {
  authorList.classList.toggle("hidden");
});
document.querySelector(".darkbtn").addEventListener("click", function () {
  sectionBox.classList.toggle("darkmode");
});
