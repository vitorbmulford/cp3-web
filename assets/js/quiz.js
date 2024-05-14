const question = document.querySelector("#question");
const answerBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ["a", "b", "c", "d", "e"];
let points = 0;
let actualQuestion = 0;

const questions = [
  {
    question:
      "Qual é o maior fabricante de automóveis do mundo em termos de vendas em 2020?",
    answers: [
      {
        answer: "Toyota",
        correct: true,
      },
      {
        answer: "Volkswagen",
        correct: false,
      },
      {
        answer: "General Motors",
        correct: false,
      },
      {
        answer: "Ford",
        correct: false,
      },
    ],
  },
  {
    question: "Qual destes é um motor rotativo famoso?",
    answers: [
      {
        answer: "V6",
        correct: false,
      },
      {
        answer: "W12",
        correct: true,
      },
      {
        answer: "V8",
        correct: false,
      },
      {
        answer: "Wankel",
        correct: false,
      },
    ],
  },
  {
    question: "Qual desses carros é um modelo esportivo italiano?",
    answers: [
      {
        answer: "Porsche 911",
        correct: false,
      },
      {
        answer: "Ferrari 488 GTB",
        correct: true,
      },
      {
        answer: "BMW M5",
        correct: false,
      },
      {
        answer: "Audi R8",
        correct: false,
      },
    ],
  },
  {
    question: "Qual é o símbolo da marca de carros Ferrari?",
    answers: [
      {
        answer: "Cavalo",
        correct: true,
      },
      {
        answer: "Touro",
        correct: false,
      },
      {
        answer: "Leão",
        correct: false,
      },
      {
        answer: "Águia",
        correct: false,
      },
    ],
  },
  {
    question: "Quem inventou o primeiro automóvel movido a gasolina?",
    answers: [
      {
        answer: "Henry Ford",
        correct: false,
      },
      {
        answer: "Nikolaus Otto",
        correct: false,
      },
      {
        answer: "Karl Benz",
        correct: true,
      },
      {
        answer: "Gottlieb Daimler",
        correct: false,
      },
    ],
  },
  {
    question: "Qual é o modelo mais vendido da Ford?",
    answers: [
      {
        answer: "Ford Fiesta",
        correct: false,
      },
      {
        answer: "Ford Focus",
        correct: false,
      },
      {
        answer: "Ford Mustang",
        correct: false,
      },
      {
        answer: "Ford F-Series",
        correct: true,
      },
    ],
  },
  {
    question: "O que significa ABS em sistemas de freios de carro?",
    answers: [
      {
        answer: "Anti-Blocking System",
        correct: false,
      },
      {
        answer: "Anti-Brake Skid",
        correct: false,
      },
      {
        answer: "Anti-Brake System",
        correct: false,
      },
      {
        answer: "Anti-Lock Braking System",
        correct: true,
      },
    ],
  },
  {
    question: "Qual destes não é um fabricante de automóveis japonês?",
    answers: [
      {
        answer: "Honda",
        correct: false,
      },
      {
        answer: "Toyota",
        correct: false,
      },
      {
        answer: "Hyundai",
        correct: true,
      },
      {
        answer: "Nissan",
        correct: false,
      },
    ],
  },
  {
    question: "Qual é o país de origem da marca automotiva Audi?",
    answers: [
      {
        answer: "Alemanha",
        correct: true,
      },
      {
        answer: "Itália",
        correct: false,
      },
      {
        answer: "França",
        correct: false,
      },
      {
        answer: "Japão",
        correct: false,
      },
    ],
  },
  {
    question: "O que significa a sigla SUV em inglês?",
    answers: [
      {
        answer: "Sport Utility Vehicle",
        correct: true,
      },
      {
        answer: "Super Urban Vehicle",
        correct: false,
      },
      {
        answer: "Speed Utility Van",
        correct: false,
      },
      {
        answer: " Sporty Urban Van",
        correct: false,
      },
    ],
  },
];

function init() {
  createQuestion(0);
}

function createQuestion(i) {
  const oldButtons = answerBox.querySelectorAll("button");
  oldButtons.forEach((btn) => {
    btn.remove();
  });

  const questionText = question.querySelector("#question-text");
  const questionNumber = question.querySelector("#question-number");

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  questions[i].answers.forEach((answer, i) => {
    const answerTemplate = document
      .querySelector(".answer-template")
      .cloneNode(true);

    const letterBtn = answerTemplate.querySelector(".btn-letter");
    const answerText = answerTemplate.querySelector(".question-answer");

    letterBtn.textContent = letters[i];
    answerText.textContent = answer["answer"];

    answerTemplate.setAttribute("correct-answer", answer["correct"]);

    answerTemplate.classList.remove("hide");
    answerTemplate.classList.remove("answer-template");

    answerBox.appendChild(answerTemplate);

    answerTemplate.addEventListener("click", function () {
      checkAnswer(this);
    });
  });

  actualQuestion++;
}

function checkAnswer(btn) {
  const buttons = answerBox.querySelectorAll("button");

  buttons.forEach((button) => {
    if (button.getAttribute("correct-answer") == "true") {
      button.classList.add("correct-answer");

      if (btn === button) {
        points++;
      }
    } else {
      button.classList.add("wrong-answer");
    }
  });

  nextQuestion();
}

function nextQuestion() {
  setTimeout(function () {
    if (actualQuestion >= questions.length) {
      showSuccessMessage();
      return;
    }

    createQuestion(actualQuestion);
  }, 1200);
}

function showSuccessMessage() {
  hideOrShowQuizz();
  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector("#display-score span");
  displayScore.textContent = score.toString();

  const correctAnswers = document.querySelector("#correct-answers");
  correctAnswers.textContent = points;

  const totalQuestions = document.querySelector("#questions-qty");
  totalQuestions.textContent = questions.length;
}

function hideOrShowQuizz() {
  quizzContainer.classList.toggle("hide");
  scoreContainer.classList.toggle("hide");
}

const restartBtn = document.getElementById("restart");
restartBtn.addEventListener("click", function () {
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

init();
