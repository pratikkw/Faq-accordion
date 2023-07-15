const btn = document.querySelectorAll(".faq__question");
const answer = document.querySelectorAll(".faq__answer");
const arrow = document.querySelectorAll(".arrow");
const question = document.querySelectorAll(".question");

btn.forEach((item, ind) => {
  item.addEventListener("click", function () {
    question[ind].classList.toggle("bold-text");
    answer[ind].classList.toggle("faq__answer-active");
    arrow[ind].classList.toggle("arrow-active");
  });
});
