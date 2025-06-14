let currentQuestionIndex = 0;
let userAnswers = [];

const questions = [
    {
        question: "What is the use of ## operator?",
        options: ["concat", "comment", "addition", "sort"],
        correctAnswer: "concat"
    },
    {
        question: "Which programming language is known for its use in web development?",
        options: ["Java", "Python", "JavaScript", "C++"],
        correctAnswer: "JavaScript"
    },
    ,
    {
        question: "Elipse operator is dealt with?",
        options: ["sort", "initialize", "append", "error values"],
        correctAnswer: "error values"
    },
    ,
    {
        question: "blank final is initialized in?",
        options: ["static", "final", "abstract", "interface"],
        correctAnswer: "static"
    },
    ,
    {
        question: "Which language is best suitable for data visualization?",
        options: ["Java", "Python", "R", "C++"],
        correctAnswer: "R"
    },
    ,
    {
        question: "Which represents the virtual representaion of data?",
        options: ["views", "triggers", "cursors", "c"],
        correctAnswer: "JavaScript"
    },
    // Add more questions here...
];

function showQuestion(questionIndex) {
    const questionContainer = document.getElementById("questionContainer");
    const currentQuestion = questions[questionIndex];

    if (currentQuestion) {
        const optionsHTML = currentQuestion.options.map((option, index) => {
            return `<label class="btn btn-light option-btn">
                        <input type="radio" name="option" value="${option}" onclick="saveAnswer(${index})">
                        ${option}
                    </label>`;
        }).join('');

        questionContainer.innerHTML = `<p>${currentQuestion.question}</p>${optionsHTML}`;
    } 
}

function showNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}

function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}

function saveAnswer(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
}

function endTest() {
    const score = calculateScore();
    showScorePopup(score);
}

function calculateScore() {
    let score = 0;
    userAnswers.forEach((userAnswer, index) => {
        const correctAnswer = questions[index].correctAnswer;
        if (userAnswer !== undefined && userAnswer === questions[index].options.indexOf(correctAnswer)) {
            score++;
        }
    });
    return score;
}

function showScorePopup(score) {
    const scorePopup = document.getElementById("scorePopup");
    const scoreValue = document.getElementById("scoreValue");

    scoreValue.textContent = score;
    scorePopup.style.display = "block";
}

function closeScorePopup() {
    const scorePopup = document.getElementById("scorePopup");
    scorePopup.style.display = "none";
}

