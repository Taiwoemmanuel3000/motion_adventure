import { QUESTIONS } from "./data/questions.js";

const player = {
    health: 3,
    coins: 0,
    score: 0,
    crystal: 0
};

const COIN_REWARD = 10;
const SCORE_REWARD = 100;

const elPlayerHealth = document.querySelector('.health');
const elCoins = document.querySelector('.coin');
const elPlayerScore = document.querySelector('.score');
const elPlayerCrystal = document.querySelector('.crystal');

let currentQuestion = getRandomQuestion(1)
const continueBnt = document.getElementById("show-qst")
const elQuestion = document.querySelector(".question-text");
const eloptions = document.querySelectorAll(".options")
const elsubmit = document.querySelector(".submit")
const elresult = document.querySelector('.result')
const elquestionText = document.querySelector('.answer-res')
const elQstHeading = document.getElementById("qstHeading")
const elClose = document.querySelector('.close')


continueBnt.addEventListener("click", () => {
   displayQuestion()
})

function getQuestionsByLevel(level) {
    return QUESTIONS.filter(question => question.level === level);

}

function getRandomQuestion(level) {

    const questions = getQuestionsByLevel(level);

    if(questions.length === 0){
        return null;
    }

    const randomIndex = Math.floor(Math.random()*questions.length);

    return questions[randomIndex];
}
function displayQuestion(){
    elQuestion.textContent = currentQuestion.question
    eloptions.forEach((option, index) =>{
        option.textContent = currentQuestion.options[index]
    })

}


function updatePlayerUI(){

    elClose.setAttribute('href', "#game-screen")
    elCoins.textContent = player.coins;
    elPlayerScore.textContent = player.score;
    elPlayerHealth.textContent = player.health;
    elPlayerCrystal.textContent = player.crystal;

}

let selectedAnswer = null;

// Store the user's selection
eloptions.forEach((option) => {
    option.addEventListener("click", () => {

        // Remove the selected style from every option
        eloptions.forEach((btn) => {
            btn.classList.remove("btn-selected");
        });

        // Highlight only the clicked option
        option.classList.add("btn-selected");

        // Save the selected answer
        selectedAnswer = option.textContent;
    });
});

// Check the answer when Submit is clicked
elsubmit.addEventListener("click", () => {
    validateQuestion()
});

function validateQuestion(){
    elresult.setAttribute('href', "#popup")

    if (selectedAnswer === null) {
        elquestionText.textContent = "Please select an answer first.";
        return;
    }

    if (selectedAnswer === currentQuestion.options[currentQuestion.answer]) {
        elQstHeading.textContent = "🎉 Correct"
        elquestionText.innerHTML = `You earned <span id="rewardPoints">10</span> points!`
        player.coins += COIN_REWARD
        player.score += SCORE_REWARD
        updatePlayerUI()
    } else {
         elQstHeading.textContent ="❌ Wrong!"
        elquestionText.innerHTML = "Oops try again !!";
        
    }
}





