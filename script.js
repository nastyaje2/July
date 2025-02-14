document.addEventListener("DOMContentLoaded", function() {
  // Массив с 11 вопросами
  const questions = [
    {
      question: "Where will we live?",
      answers: [
        { text: "Toronto", correct: false },
        { text: "Barcelona", correct: true },
        { text: "Africa", correct: false },
        { text: "Greenland", correct: false }
      ]
    },
    {
      question: "What should we name our future pet?",
      answers: [
        { text: "Remy", correct: false },
        { text: "Luna", correct: false },
        { text: "Julian", correct: true }
      ]
    },
    {
      question: "Who will say 'I love you' first today?",
      answers: [
        { text: "I", correct: true },
        { text: "You", correct: false }
      ]
    },
    {
      question: "What's our dream vacation?",
      answers: [
        { text: "Malta", correct: true },
        { text: "France", correct: false },
        { text: "Albania", correct: false }
      ]
    },
    {
      question: "What would be our couple superpower?",
      answers: [
        { text: "Solving all arguments", correct: true },
        { text: "Being invisible", correct: false },
        { text: "Flying", correct: false }
      ]
    },
    {
      question: "If we had a time machine, where would we go first?",
      answers: [
        { text: "Future", correct: true },
        { text: "Past", correct: false }
      ]
    },
    {
      question: "Who is more likely to get lost in a mall?",
      answers: [
        { text: "I", correct: false },
        { text: "You", correct: true }
      ]
    },
    {
      question: "If we had a magic lamp, what would our first wish be?",
      answers: [
        { text: "We both become millionaires", correct: true },
        { text: "We teleport to each other", correct: false },
        { text: "Endless free food", correct: false }
      ]
    },
    {
      question: "If we had a secret hideout, where would it be?",
      answers: [
        { text: "Under a palm tree", correct: true },
        { text: "On a tree", correct: false },
        { text: "Inside a secret cave", correct: false }
      ]
    },
    {
      question: "What pet would we have if not a cat or a dog?",
      answers: [
        { text: "A tiny dragon", correct: true },
        { text: "A raccoon", correct: false },
        { text: "A parrot", correct: false }
      ]
    },
    {
      question: "Which animated couple are we most like?",
      answers: [
        { text: "Shrek and Fiona", correct: false },
        { text: "Judy and Nick", correct: true },
        { text: "Carl and Ellie", correct: false }
      ]
    }
  ];
  
  let currentQuestionIndex = 0;
  let mistakes = 0;
  
  const quizContainer = document.getElementById("quiz-container");
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");
  const resultContainer = document.getElementById("result-container");
  const resultMessage = document.getElementById("result-message");
  const okButton = document.getElementById("ok-button");
  const finalContainer = document.getElementById("final-container");
  const yesButton = document.getElementById("yes-button");
  const noButton = document.getElementById("no-button");
  
  function showQuestion() {
    answersElement.innerHTML = "";
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("answer-btn");
      button.addEventListener("click", function() {
        if (answer.correct) {
          currentQuestionIndex++;
          if (currentQuestionIndex < questions.length) {
            showQuestion();
          } else {
            // Все вопросы отвечены
            quizContainer.style.display = "none";
            resultMessage.innerText = `Well done, you are my umnichka! You made ${mistakes} mistakes.`;
            resultContainer.style.display = "block";
          }
        } else {
          mistakes++;
          alert("Wrong answer, try again, dummy:(!");
        }
      });
      answersElement.appendChild(button);
    });
  }
  
  showQuestion();
  
  okButton.addEventListener("click", function() {
    resultContainer.style.display = "none";
    finalContainer.style.display = "flex";
  });
  
  yesButton.addEventListener("click", function() {
    alert("Happy Valentine's Day!");
  });
  
  noButton.addEventListener("mouseenter", function() {
    const maxX = window.innerWidth - noButton.clientWidth;
    const maxY = window.innerHeight - noButton.clientHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
  });
});
