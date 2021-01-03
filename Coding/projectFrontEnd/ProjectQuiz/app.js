"use strict";
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
function assignFunction() {
  var acc = document.getElementsByClassName("boxQuestion__accordian");
  var i;

  for (i = 0; i < acc.length; i++) {
    console.log("one");
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
}

var questions = [];
async function getQuestions() {
  let response = await fetch(
    "https://opentdb.com/api.php?amount=10&category=23&type=multiple"
  );
  let jsonResponse = await response.json();
  return jsonResponse;
}

getQuestions().then((data) => {
  // console.log("two");
  console.log(data);
  let html = "";
  let response = data["results"];
  response.forEach((element) => {
    let answerset = element["incorrect_answers"];
    answerset.push(element["correct_answer"]);
    let xray = element["correct_answer"];
    answerset = shuffle(answerset);
    // console.log();
    // console.log(answerset, xray);

    html += `<div class="boxQuestion">
  <div class="boxQuestion__accordian"><p>Question :${element.question}</p></div>
  <div class="boxQuestion__panel">
    <div class= "category">
      <p>Category:${element.category}</p>
      <p>Type : ${element.type}</p>
      <p>Difficulty:${element.difficulty}</p>
    </div>
    <div>
      <p>Option 1 :${answerset[0]}</p>
      <p>Option 2 :${answerset[1]}</p>
      <p>Option 3 :${answerset[2]}</p>
      <p>Option 4 :${answerset[3]}</p>
    </div>
    <div><p>Correct Answer :${element["correct_answer"]}</p></div>
  </div>
</div>`;
  });

  document.body.innerHTML = html;
  assignFunction();
});

// issues
// there are many issues
// boolean case
// multiple choice has 4 answers
