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
        question: "Who will say 'I love you' first today?", 
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
                    showGif();
                }
            }
        };
        optionsDiv.appendChild(button);
    });

    div.appendChild(optionsDiv);
    quizDiv.appendChild(div);
});

function showGif() {
    quizDiv.style.display = "none";

    const gifDiv = document.createElement("div");
    gifDiv.id = "gif-container";
    gifDiv.style.display = "flex";
    gifDiv.style.justifyContent = "center";
    gifDiv.style.alignItems = "center";
    gifDiv.style.height = "100vh";
    gifDiv.style.flexDirection = "column";

    const gifImage = document.createElement("img");
    gifImage.src = "cat.gif"; 
    gifImage.style.width = "300px"; 
    gifImage.style.height = "auto";

    gifDiv.appendChild(gifImage);

    // Создаём блок с текстом и кнопками
    const valentineDiv = document.createElement("div");
    valentineDiv.id = "valentine";
    valentineDiv.innerHTML = `
        <p style="font-size: 24px; color: white; text-align: center;">Will you be my Valentine?</p>
        <div style="display: flex; gap: 20px; justify-content: center;">
            <button id="yes" class="valentine-btn">Yes</button>
            <button id="no" class="valentine-btn">No</button>
        </div>
    `;
    
    gifDiv.appendChild(valentineDiv);
    document.body.appendChild(gifDiv);

    document.getElementById("yes").onclick = () => {
        alert("Super, класс, ура! Happy Valentine's Day!");
    };

    const noButton = document.getElementById("no");
    noButton.onmouseover = function() {
        this.style.position = "absolute";
        this.style.left = Math.random() * (window.innerWidth - 100) + "px";
        this.style.top = Math.random() * (window.innerHeight - 50) + "px";
    };
}
