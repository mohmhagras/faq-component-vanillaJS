/*
 * https://frontendeval.com/questions/faq-component
 *
 * Create a re-usable "Frequently Asked Questions" component
 */

const FAQ = [
{
  question: "How many bones does a cat have?",
  answer: "A cat has 230 bones - 6 more than a human" },

{
  question: "How much do cats sleep?",
  answer: "The average cat sleeps 12-16 hours per day" },

{
  question: "How long do cats live?",
  answer:
  "Outdoor cats live 5 years on average. Indoor cats live 15 years on average." },

{
  question: "Is cat salvia clean?",
  answer:
  "Although cat saliva has antibacterial and wound-healing properties, it is a stretch to say that cats' tongues are clean." }];



function createArrowIcon() {
  const arrowContainer = document.createElement("div");
  arrowContainer.className = "arrowContainer";
  const arrowDown = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "svg");

  arrowDown.classList.add("arrow");
  arrowDown.setAttribute("viewBox", "0 0 320 512");
  arrowDown.setAttribute("width", "18");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
  "d",
  "M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z");


  arrowDown.appendChild(path);
  arrowContainer.appendChild(arrowDown);
  return arrowContainer;
}
function createQuestion(item, index) {
  //create question container
  const questionContainer = document.createElement("div");
  questionContainer.classList.add("question");
  wrapper.appendChild(questionContainer);
  //create the icon
  const arrow = createArrowIcon();
  questionContainer.appendChild(arrow);
  //create the text parent div
  const textContainer = document.createElement("div");
  questionContainer.appendChild(textContainer);
  textContainer.classList.add("textContainer");
  //create question title
  const title = document.createElement("h2");
  title.classList.add("title");

  title.textContent = item.question;
  //create and style question answer
  const answer = document.createElement("h3");
  answer.classList.add("answer");
  if (!index) {
    answer.classList.add("visible");
    arrow.querySelector(".arrow").classList.add("arrowRotated");
  }
  answer.textContent = item.answer;
  //append the q and a to their container
  textContainer.appendChild(title);
  textContainer.appendChild(answer);
}

function renderQuestions() {
  const wrapper = document.getElementById("wrapper");
  FAQ.forEach((item, index) => {
    createQuestion(item, index);
  });
}

renderQuestions();

const arrows = document.querySelectorAll(".arrow");

for (let arrow of arrows) {
  arrow.addEventListener("click", event => {
    arrow.classList.toggle("arrowRotated");
    const parent = arrow.closest(".question");
    const answer = parent.querySelector(".answer");
    answer.classList.toggle("visible");
  });
}