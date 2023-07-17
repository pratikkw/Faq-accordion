const btn = document.querySelectorAll(".faq__question");
const answer = document.querySelectorAll(".faq__answer");
const arrow = document.querySelectorAll(".arrow");

btn.forEach((item, ind) => {
  item.addEventListener("click", function () {
    btn[ind].classList.toggle("faq__question--active");
    answer[ind].classList.toggle("faq__answer--active");
    arrow[ind].classList.toggle("arrow--rotate");
  });
});
