document.addEventListener("DOMContentLoaded", function () {
    let mistakes = 0;
    let quizContainer = document.getElementById("quiz");
    let resultContainer = document.getElementById("result");
    let gifContainer = document.getElementById("gif-container");
    let yesButton = document.getElementById("yes-button");
    let noButton = document.getElementById("no-button");

    let answers = document.querySelectorAll(".answer");
    answers.forEach(answer => {
        answer.addEventListener("click", function () {
            if (this.dataset.correct === "true") {
                if (quizContainer) quizContainer.style.display = "none";
                if (resultContainer) {
                    resultContainer.innerHTML = `Well done, you are умничка! You made ${mistakes} mistakes.`;
                    resultContainer.style.display = "block";
                }
                setTimeout(() => {
                    if (resultContainer) resultContainer.style.display = "none";
                    if (gifContainer) gifContainer.style.display = "block";
                }, 2000);
            } else {
                mistakes++;
                alert("You are wrong. Try again.");
            }
        });
    });

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
