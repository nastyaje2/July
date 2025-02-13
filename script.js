const questions = [
    { 
        question: "Where will we live?", 
        options: ["Toronto", "Barcelona", "Africa", "Greenland"], 
        answer: "Barcelona"
    },
    { 
        question: "What should we name our future pet?", 
        options: ["Remy", "Luna", "Julian"], 
        answer: "Julian"
    },
    { 
        question: "Who will say “I love you” first today?", 
        options: ["I", "You"], 
        answer: "I"
    },
    { 
        question: "What’s our dream vacation?", 
        options: ["Malta", "France", "Albania"], 
        answer: "Malta"
    },
    { 
        question: "What would be our couple superpower?", 
        options: ["Solving all arguments", "Being invisible", "Flying"], 
        answer: "Solving all arguments"
    },
    { 
        question: "If we had a time machine, where would we go first?", 
        options: ["Future", "Past"], 
        answer: "Future"
    },
    { 
        question: "Who is more likely to get lost in a mall?", 
        options: ["I", "You"], 
        answer: "You"
    },
    { 
        question: "If we had a magic lamp, what would our first wish be?", 
        options: ["We both become millionaires", "We teleport to each other", "Endless free food"], 
        answer: "We both become millionaires"
    },
    { 
        question: "If we had a secret hideout, where would it be?", 
        options: ["Under a palm tree", "On a tree", "Inside a secret cave"], 
        answer: "Under a palm tree"
    },
    { 
        question: "What pet would we have if not a cat or a dog?", 
        options: ["A tiny dragon", "A raccoon", "A parrot"], 
        answer: "A tiny dragon"
    },
    { 
        question: "Which animated couple are we most like?", 
        options: ["Shrek and Fiona", "Judy and Nick", "Carl and Ellie"], 
        answer: "Judy and Nick"
    }
];

let mistakes = 0;
let correctAnswers = 0;

const quizDiv = document.getElementById("quiz");
const resultDiv = document.getElementById("result");

questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.classList.add("question");

    const questionText = document.createElement("p");
    questionText.textContent = `${index + 1}. ${q.question}`;
    div.appendChild(questionText);

    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("options");

    q.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => {
            if (option !== q.answer) {
                alert("Wrong answer, try again!");
                mistakes++;
            } else {
                correctAnswers++;
                button.disabled = true;

                if (correctAnswers === questions.length) {
                    setTimeout(showValentineQuestion, 500);
                }
            }
        };
        optionsDiv.appendChild(button);
    });

    div.appendChild(optionsDiv);
    quizDiv.appendChild(div);
});

function showValentineQuestion() {
    quizDiv.style.display = "none"; 
    resultDiv.innerHTML = `Well done! You're umnichka! You made ${mistakes} mistakes.`;

    // Создаём контейнер для гифки
    const gifContainer = document.createElement("div");
    gifContainer.style.textAlign = "center";
    gifContainer.style.marginTop = "20px";

    // Проверяем, есть ли гифка
    fetch("cat.gif")
        .then(response => {
            if (!response.ok) {
                throw new Error("GIF not found!");
            }
            return response.blob();
        })
        .then(blob => {
            const img = document.createElement("img");
            img.src = URL.createObjectURL(blob);
            img.alt = "Cat GIF";
            gifContainer.appendChild(img);

            // Добавляем вопрос
            const question = document.createElement("h1");
            question.textContent = "Will you be my Valentine?";
            gifContainer.appendChild(question);

            // Создаём кнопки
            const buttonsDiv = document.createElement("div");
            buttonsDiv.classList.add("buttons");

            const yesButton = document.createElement("button");
            yesButton.textContent = "Yes";
            yesButton.onclick = () => alert("Super! Yay! Happy Valentine's Day! ❤️");

            const noButton = document.createElement("button");
            noButton.textContent = "No";
            noButton.id = "no";

            buttonsDiv.appendChild(yesButton);
            buttonsDiv.appendChild(noButton);
            gifContainer.appendChild(buttonsDiv);

            resultDiv.appendChild(gifContainer);

            // Двигаем кнопку "No"
            noButton.onmouseover = function() {
                this.style.position = "absolute";
                this.style.left = Math.random() * (window.innerWidth - 100) + "px";
                this.style.top = Math.random() * (window.innerHeight - 50) + "px";
            };
        })
        .catch(error => {
            console.error("Error loading GIF:", error);
            resultDiv.innerHTML += "<p>Error: GIF not found.</p>";
        });
}
