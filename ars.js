let currentQuestionIndex = 0;
let userAnswers = [];

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which programming language is known for its use in web development?",
        options: ["Java", "Python", "JavaScript", "C++"],
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
    } else {
        questionContainer.innerHTML = "<p>No questions available.</p>";
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
    score
}
