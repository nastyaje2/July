document.addEventListener("DOMContentLoaded", function () {
    let mistakes = 0;
    let currentQuestionIndex = 0;

    let questions = [
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
      question: "What’s our dream vacation?",
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
        },
        {
            question: "Who will say 'I love you' first today?",
            answers: [
                { text: "I", correct: true },
                { text: "You", correct: false }
            ]
        }
    ];

    let quizContainer = document.getElementById("quiz");
    let resultContainer = document.getElementById("result");
    let gifContainer = document.getElementById("gif-container");
    let questionText = document.getElementById("question");
    let answerButtons = document.getElementById("answers");

    function showQuestion() {
        let currentQuestion = questions[currentQuestionIndex];
        questionText.innerText = currentQuestion.question;
        answerButtons.innerHTML = "";

        currentQuestion.answers.forEach(answer => {
            let button = document.createElement("div");
            button.classList.add("answer");
            button.innerText = answer.text;
            button.dataset.correct = answer.correct;
            button.addEventListener("click", checkAnswer);
            answerButtons.appendChild(button);
        });
    }

    function checkAnswer(event) {
        let selectedAnswer = event.target;
        let correct = selectedAnswer.dataset.correct === "true";

        if (correct) {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                quizContainer.style.display = "none";
                resultContainer.innerHTML = `Well done, you are умничка! You made ${mistakes} mistakes.`;
                resultContainer.style.display = "block";

                setTimeout(() => {
                    resultContainer.style.display = "none";
                    gifContainer.style.display = "block";
                }, 2000);
            }
        } else {
            mistakes++;
            alert("You are wrong. Try again.");
        }
    }

    showQuestion();

    let noButton = document.getElementById("no-button");
    let yesButton = document.getElementById("yes-button");

    if (noButton) {
        noButton.addEventListener("mouseenter", function () {
            let maxX = window.innerWidth - this.clientWidth;
            let maxY = window.innerHeight - this.clientHeight;
            let newX = Math.random() * maxX;
            let newY = Math.random() * maxY;
            this.style.position = "absolute";
            this.style.left = `${newX}px`;
            this.style.top = `${newY}px`;
        });
    }

    if (yesButton) {
        yesButton.addEventListener("click", function () {
            gifContainer.innerHTML = "<h2>Happy Valentine's Day!</h2>";
        });
    }
});
