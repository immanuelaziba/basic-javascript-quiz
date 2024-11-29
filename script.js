// Quiz Data
const questions = [
  {
    question: "What does HTML stand for?",
    choices: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "HyperText Machine Learning"
    ],
    answer: 0 // Index of the correct answer
  },
  {
    question: "Which JavaScript keyword is used to declare a variable?",
    choices: ["var", "let", "const", "All of the above"],
    answer: 3
  },
  {
    question: "JavaScript is a case-sensitive language.",
    choices: ["True", "False"],
    answer: 0
  }
];

// Variables
let currentQuestionIndex = 0;
let score = 0;

// Elements
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const scoreEl = document.getElementById("score");

// Load a question
function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  choicesEl.innerHTML = "";

  currentQuestion.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.onclick = () => selectAnswer(index);
    choicesEl.appendChild(button);
  });
}

// Select an answer
function selectAnswer(selectedIndex) {
  const correctIndex = questions[currentQuestionIndex].answer;

  if (selectedIndex === correctIndex) {
    score++;
  }

  nextBtn.style.display = "block";
}

// Go to the next question
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    nextBtn.style.display = "none";
    loadQuestion();
  } else {
    showScore();
  }
});

// Show the score
function showScore() {
  document.getElementById("question-container").style.display = "none";
  scoreContainer.style.display = "block";
  scoreEl.textContent = `${score} out of ${questions.length}`;
}

// Restart the quiz
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreContainer.style.display = "none";
  document.getElementById("question-container").style.display = "block";
  nextBtn.style.display = "none";
  loadQuestion();
}

// Start the quiz
loadQuestion();
