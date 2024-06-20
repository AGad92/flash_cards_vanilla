// Data

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

// DOM selection
const cardContainer = document.querySelector(".flashcards");

// Adding cards to html
questions.forEach((q) =>
  cardContainer.insertAdjacentHTML(
    "beforeend",
    `<div class="card" data-id=${q.id}>${q.question}</div>`
  )
);

const cards = document.querySelectorAll(".card");
// cards.forEach((card) =>
//   card.addEventListener("click", function (e) {

//   })
// );

let lastClickedCard = null;

cardContainer.addEventListener("click", function (e) {
  const clickedCard = e.target;
  const questionId = clickedCard.getAttribute("data-id");
  const question = questions.find((q) => q.id == questionId);

  if (lastClickedCard && lastClickedCard !== clickedCard) {
    const questionId = lastClickedCard.getAttribute("data-id");
    const question = questions.find((q) => q.id == questionId);
    lastClickedCard.classList.remove("selected");
    lastClickedCard.innerText = question.question;
  }

  if (clickedCard.classList.contains("selected")) {
    e.target.innerText = question.question;
    clickedCard.classList.remove("selected");
  } else {
    clickedCard.innerText = question.answer;
    clickedCard.classList.add("selected");
  }

  lastClickedCard = clickedCard;
});
