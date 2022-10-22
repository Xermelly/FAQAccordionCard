const questionList = document.querySelectorAll(".question-list button");
console.log(questionList);

function showAnswer(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const answer = document.getElementById(controls);

  answer.classList.toggle("active");
  const active = answer.classList.contains("active");
  question.setAttribute("aria-expanded", active);
}

function clickAnswer(item) {
  item.addEventListener("click", showAnswer);
}
questionList.forEach(clickAnswer);
