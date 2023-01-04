// ************************************  EnterEvent
let txt = document.querySelector("input");
txt.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector("#btn").click();
  }
});
// ************************************  MouseEvent

const btn = document.getElementById("btn");
btn.addEventListener("click", function handleClick(event) {
  event.preventDefault();
  const txt = document.querySelector("input");
  console.log(txt.value);
  place();
  txt.value = "";
});
// ************************************  Основная ф-я

function place() {
  const questions = document.querySelector("input").value;
  console.log(questions);
  if (questions.length !== 0) {
    let voprosOtv = document.querySelector(".voprosOtv");
    let question = document.createElement("div");
    question.className = "grid-q";
    question.textContent = questions;
    voprosOtv.appendChild(question);
    let answer = document.createElement("div");
    answer.className = "grid-a";
    answer.textContent = qa();
    voprosOtv.appendChild(answer);
  } else alert("Put some word please");
}
// ***************************  приветствие *********
setTimeout(() => {
  let textD = document.querySelector("div");
  let hi = document.createElement("div");
  hi.id = "hi";
  let hi2 = document.createElement("p");
  hi2.textContent = "Пccc рассказать про качалку?)";
  hi.appendChild(hi2);
  //   hi.appendChild(hi2);
  textD.appendChild(hi);
}, 4000);
setTimeout(() => {
  let textD = document.querySelector("div");
  let hi = document.createElement("div");
  hi.id = "hii";

  let hi2 = document.createElement("p");
  hi2.textContent = "Не спеши ведь ты всего лишь человек)";
  hi.appendChild(hi2);
  //   hi.appendChild(hi2);
  textD.appendChild(hi);
}, 7000);
// ********************************************* Массивный массив ответов

const answers = [
  ["Ghbdtn! ой Привет ! как дела ? рассказать про качалку?"],
  ["Качалка место отдыха!"],
  ["В качалку ходят для рассалабона"],
  ["Там занимаются различными упражнениями"],
  ["У многих людей встает вопрос зачем этим заниматься - для укрепления воли!"],
  ["Живительная энергия и улучшение здоровья - вот к чему ведет качалочка"],
  ["Люди там делают следующие упражнения: ЖИИИИИМ, тяга и присед!"],
  ["Когда работаем? - круглосутошно)"],
  ["Стоимость абонимента зависит от вашей выносливости абонимент"],
  ["Накачаться можно при должном усилии"],
  [""],
];

// ************************************  Ф-я отвечающая на вопрос

function qa() {
  const question = document.querySelector("input").value.toLowerCase();
  if (question.length !== 0) {
    const rop = question.split(" ");
    let res = "Ошибка ввода! Неверное значение! Человек спроси что-то еще";
    for (i = 0; i < answers.length; i += 1) {
      answers[i]
        .flat()
        .join(" ")
        .toLowerCase()
        .split(" ")
        .filter((el) => rop.includes(el)).length
        ? (res = answers[i])
        : "";
    }
    return res;
  } else alert("Put some word please");
}
