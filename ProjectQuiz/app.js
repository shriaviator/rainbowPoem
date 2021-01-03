"use strict";
var acc = document.getElementsByClassName("boxQuestion__accordian");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
var questions = [];
async function getQuestions() {
  let response = await fetch(
    "https://opentdb.com/api.php?amount=10&category=23"
  );
  let jsonResponse = await response.json();
  return jsonResponse;
}

getQuestions().then((data) => {
  console.log(data);
});
