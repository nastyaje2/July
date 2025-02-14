document.addEventListener("DOMContentLoaded", function () {
    let mistakes = 0;
    let currentQuestionIndex = 0;

    let questions = [
        {
            question: "Where will we live?",
            answers: [
                { text: "Toronto", correct: false },
                { text: "Barcelona", correct: false },
                { text: "Africa", correct: false },
                { text: "Greenland", correct: true }
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
            gifContainer.innerHTML = "<h2>Super, класс, ура! Happy Valentine's Day!</h2>";
        });
    }
});
