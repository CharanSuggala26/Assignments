function showMotivationalPopup() {
    document.getElementById("motivationalPopup").style.display = "block";
}

function showOptions() {
    document.getElementById("optionsContainer").style.display = "block";
}

function startInterview() {
    document.getElementById("optionsContainer").style.display = "none";
    // Load questions based on selected options (software or core electrical)
    loadQuestions();
}

function showInsights() {
    // Handle Insights button click
}

function loadQuestions() {
    // Logic to load questions based on selected options
    // Display questions with options, save, next, back buttons
    document.getElementById("questionContainer").innerHTML = "<p>Question 1: What is your favorite programming language?</p><div class='question-options'><button class='btn btn-secondary'>Back</button><button class='btn btn-primary'>Next</button><button class='btn btn-success'>Save</button></div>";
}
