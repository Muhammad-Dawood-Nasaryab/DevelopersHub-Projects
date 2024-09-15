const question = document.querySelector(".question");
let allData = [];

// Fetching all the questions for the quiz
const fetchQuestions = async () => {
    try {
        let response = await fetch("https://opentdb.com/api.php?amount=10&token=377676efc23f543841008739b819809af564756199813f2bfad1c0ea941300a4");
        if (!response.ok) {
            throw new Error("Unable to fetch questions");
        };
        let data = await response.json();
        allData = data.result;
    } catch (error) {
        console.error("Error fetching questions:", error);
        question.innerHTML = `<h5 style='color: red'>
        ${error}</h5>`;
    };
};

fetchQuestions();

const questionCard = document.querySelector(".question-card");
let currentQuestionIndex = 0;
let score = 0;

const displayQuestions = () => {

    // Select portion form DOM for displaying options
    const options = document.querySelector(".options");
    let currentQuestion = allData[currentQuestionIndex].question;

    // Removing '&quot;' and add actual quote instead
    if (currentQuestion.indexof("&quot;")) {
        currentQuestion = currentQuestion.replace("&quot;", '"');
    };

    // Displaying the question on DOM
    question.innerText = currentQuestion;
    options.innerHTML = "";

    // Storing all options in one place
    const correctAns = allData[currentQuestionIndex].correct_answer;
    const incorrectAns = allData[currentQuestionIndex].incorrect_answers;
    options = [correctAns, ...incorrectAns];

    // Randomizing all the options in the array
    options.sort(() => Math.random() - 0.5);

    options.forEach(option => {
        if (option.indexof("&quot;")) {
            option = option.replace("&quot;", '"');
        };
    });
};

displayQuestions();