let question = document.querySelector(".question");
let allData = [];

// Fetching questions from the API and storing them in allData array
async function fetchQuestions() {
    try {
        let response = await fetch("https://opentdb.com/api.php?amount=10");
        if (!response.ok) {
            alert("Response not OK: " + response.status);
        }
        let data = await response.json();
        allData = data.results; // Fix the typo here (should be 'results')
        displayQuestion(); // Display the first question after fetching
    } catch (error) {
        console.error(error);
        alert(error);
    }
};

fetchQuestions();

// Declaring variables for current question and score
localStorage.setItem("CurrentQuestionIndex", 0);
const questionCard = document.querySelector(".question-card");
let correctQuestions = 0;
let score = 0;
if (localStorage.getItem("CurrentQuestionIndex") || localStorage.getItem("CurrentQuestionIndex") == 10) {
    localStorage.setItem("CurrentQuestionIndex", 0);
};

const displayQuestion = () => {
    const options = document.querySelector(".options");
    const currentQuestionIndex = parseInt(localStorage.getItem("CurrentQuestionIndex"));
    const currentQuestionData = allData[currentQuestionIndex];

    // Decode HTML entities for question
    let currentQuestion = currentQuestionData.question.replace(/&quot;/g, '"');

    // Displaying the question
    question.innerHTML = currentQuestion;
    options.innerHTML = ""; // Clear previous options

    // Storing all options in an array
    const correctAns = currentQuestionData.correct_answer;
    const incorrectAns = currentQuestionData.incorrect_answers;
    const allOptions = [correctAns, ...incorrectAns];
    allOptions.sort(() => Math.random() - 0.5);

    // Displaying all options
    allOptions.forEach(option => {
        option = option.replace(/&quot;/g, '"');

        const optionDiv = document.createElement("div");
        const optionInput = document.createElement("input");
        const optionLabel = document.createElement("label");

        optionInput.type = "radio";
        optionInput.name = "answer";
        optionInput.value = option;
        optionDiv.classList.add("option");
        optionLabel.textContent = option;

        optionDiv.appendChild(optionInput);
        optionDiv.appendChild(optionLabel);
        options.appendChild(optionDiv);
    });

    questionCard.appendChild(question);
    questionCard.appendChild(options);
};

const loadScore = () => {
    const totalScoreDiv = document.querySelector(".score");
    const bestScoreDiv = document.querySelector(".best-score");
    let bestScore = parseInt(localStorage.getItem("bestScore")) || 0;

    // Update total score display
    if (totalScoreDiv) {
        totalScoreDiv.textContent = `You got ${score} out of ${allData.length} questions`;
    };
};

const nextQuestion = (callBack1, callBack2) => {
    let currentQuestionIndex = parseInt(localStorage.getItem("CurrentQuestionIndex"));

    if (currentQuestionIndex < allData.length - 1) {
        localStorage.setItem("CurrentQuestionIndex", currentQuestionIndex + 1);
        callBack1(); 
    } else {
        questionCard.innerHTML = ""; 
        callBack2();
    }
};

const displayFinalScore = () => {
    const finalScoreDiv = document.createElement("div");
    finalScoreDiv.classList.add("final-score");
    finalScoreDiv.textContent = `You got ${score} out of ${allData.length} questions.`;
    
    questionCard.appendChild(finalScoreDiv);
    loadScore(); 
};

const checkAnswer = () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    const currentQuestionIndex = parseInt(localStorage.getItem("CurrentQuestionIndex"));

    if (selectedOption && selectedOption.value === allData[currentQuestionIndex].correct_answer) {
        score++;
    }
    nextQuestion(displayQuestion, displayFinalScore);
};

// Add event listener for the submit button
document.querySelector(".submit").addEventListener("click", checkAnswer);
