const questions = [
  {
    question: "Quel est le plus grand océan du monde ?",
    choices: ["Atlantique", "Arctique", "Pacifique", "Indien"],
    answer: 2
  },
  {
    question: "Quelle planète est la plus proche du Soleil ?",
    choices: ["Terre", "Vénus", "Mercure", "Mars"],
    answer: 2
  },
  {
    question: "Combien font 7 × 8 ?",
    choices: ["54", "56", "58", "64"],
    answer: 1
  },
  {
    question: "Qui a peint la Joconde ?",
    choices: ["Michel-Ange", "Raphaël", "Léonard de Vinci", "Picasso"],
    answer: 2
  },
  {
    question: "Quelle est la capitale du Japon ?",
    choices: ["Pékin", "Tokyo", "Séoul", "Bangkok"],
    answer: 1
  }
];

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  nextBtn.classList.add("hidden");
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  choicesEl.innerHTML = "";

  q.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.className = "choice";
    btn.onclick = () => selectAnswer(index, btn);
    choicesEl.appendChild(btn);
  });
}

function selectAnswer(index, btn) {
  const q = questions[currentQuestion];
  const buttons = document.querySelectorAll(".choice");
  buttons.forEach(b => b.disabled = true);

  if (index === q.answer) {
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
    buttons[q.answer].classList.add("correct");
  }

  nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  questionEl.textContent = `Quiz terminé ! 🎉`;
  choicesEl.innerHTML = `Ton score : ${score} / ${questions.length}`;
  nextBtn.textContent = "Rejouer 🔁";
  nextBtn.classList.remove("hidden");
  nextBtn.onclick = () => {
    score = 0;
    currentQuestion = 0;
    nextBtn.textContent = "Suivant ➜";
    showQuestion();
  };
}

showQuestion();
