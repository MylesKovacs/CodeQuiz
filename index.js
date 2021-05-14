const startBtn = document.querySelector("#start-btn");
const timerDisp = document.querySelector("#timer");
const question = document.querySelector("#question-disp");
const answers = document.querySelector("#answers");
const response = document.querySelector("#answer-check");

const answerA = document.querySelector('#btnA');
const answerB = document.querySelector('#btnB');
const answerC = document.querySelector('#btnC');
const answerD = document.querySelector('#btnD');

const recHolder = document.querySelector("#highName");
const recScore = document.querySelector("#recordScore")

startBtn.addEventListener("click", beginQuiz)
answerA.addEventListener('click', testAnswer)
answerB.addEventListener('click', testAnswer)
answerC.addEventListener('click', testAnswer)
answerD.addEventListener('click', testAnswer)

let highScore = 0;
let scorer = "";
let index = 0;
let counter= 60;
let score = 0;
let timer;


let quiz = [
    {
        question: "What language is used for style?",
        option: [
            "Mongo",
            "HTML",
            "CSS",
            "SQL"
        ],
        answer: 3
    },
    {
        question: "What does the R in MERN stand for?",
        option: [
            "React",
            "Redux",
            "Regex",
            "Real-time"
        ],
        answer: 1
    },
    {
        question: "Which of the following is used for databases?",
        option: [
            "Stripe",
            "Node",
            "Express",
            "Mongo"
        ],
        answer: 4
    },
    {
        question: "This is the last question, how many questions are there?",
        option: [
            "3",
            "4",
            "6",
            "5"
        ],
        answer: 2
    },
    {
        question: "Empty filler"
    }
];

function beginQuiz(){
    let timer = setInterval(function (){
        timerDisp.innerHTML = (counter)

        counter --
        if(counter<=0){
            endQuiz()
        }
    }, 1000);
    displayQuestion();
};

function endQuiz(){
    clearInterval(timer);
    let score= counter

    if(score > highScore){
        scorer = prompt("You've set a new record! Enter your name below!")
        recHolder.innerHTML = (scorer);
        recScore.innerHTML = (score);
        highScore = score
        saveScore();
    } else {
        alert('No new high score, keep trying!')
    }
};

function displayQuestion(){
    if(index<quiz.length-1){
        question.innerHTML = (quiz[index].question);
        answerA.innerHTML = (quiz[index].option[0]);
        answerB.innerHTML = (quiz[index].option[1]);
        answerC.innerHTML = (quiz[index].option[2]);
        answerD.innerHTML = (quiz[index].option[3]);
    } else {
        question.innerHTML = ("Quiz over");
        endQuiz();
    }
};

function testAnswer(event){
    let chosenButton = event.target.getAttribute("data-answer-type")
    let currentAnswer = quiz[index].answer
    if(chosenButton == currentAnswer){
        response.innerHTML = ("Correct!");
    } else {
        response.innerHTML = ("Incorrect!");
        counter -= 5
    }

    index++
    displayQuestion();
};

function setHighscore(){
    localStorage.setItem("highscore", highScore);
    localStorage.setItem("name", scorer);
}

function displayHighscore(){
    score = localStorage.getItem("highscore");
    scorer = localStorage.getItem("name");
    highScore = parseInt(score) || 0
    recHolder.innerHTML = (scorer);
    recScore.innerHTML = (highScore);
}


displayHighscore();