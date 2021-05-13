const body = document.body   
const timeLeftDisplay = document.querySelector("#time-left")
const startBtn = document.querySelector("#start-button")
const questionBox = document.querySelector("#question-box")
const optionBox = document.querySelector("#option-box")
const answerBox = document.querySelector("#answer-box")

const button1El = document.querySelector('#btn1')
const button2El = document.querySelector('#btn2')
const button3El = document.querySelector('#btn3')
const button4El = document.querySelector('#btn4')

const nameBox = document.querySelector('#name-box')
const scoreBox = document.querySelector('#score-box')

let highScore = 0;
let initials ="";
let index = 0;  //starting questions at index 0
let counter = 60 ;
let score = 0;
let timer ;
//quiz questions
let quiz = [
    {
        question: "What is 2+2?",
        //answers array
        option: [
            "4", 
            "6", 
            "7",
            "8", 
        ],
        answer: 1,
       
    },
    {
        question: "What color is the sky?",
        //answers array
        option: [
            "red", 
            "orange",
            "blue", 
            "green", 
        ],
        answer: 3,
    },
    {
        question: "What is the best band ever?",
        //answers array
        option: [
            "Beatles", 
            "Oasis",
            "Stone Temple Pilots",
            "Bee Gees",
        ],
        answer: 2,
    },
    {
        question: "Which is an animated show?",
        //answers array
        option: [
            "Westworld", 
            "The Boys", 
            "Man in the High Castle",
            "Simpsons",
        ],
        answer: 4,
    },
    {
        question: "What best describes 2020?",
        //answers array
        option: [
            "Best Year Ever",
            "Dumpster Fire", 
            "It was alright",
            "Craptacular",
        ],
        answer: 2,
    },
    
]


//startGame function
function startGame(){

    //let timer = setInterval(function (){
   timer = setInterval(function (){
       
        //this will display the time in the timer box
        timeLeftDisplay.innerHTML = (counter)
       
        counter --
        if(counter<=0){
            endGame()
        }

        //console.log(sec);
        
    }, 1000); //timer set for 1 second interval

    //this will run printQuestions function
    printQuestion();
};

//endGame function       //figure out why this won't stop the timer
function endGame(){
    //console.log("stop");
    clearInterval(timer);
    let score= counter
    //scoreBox.text = score
    if(score > highScore){
         initials = prompt('Congratulations, you have the new high score!  Please enter your initials')
        //return initials;
        nameBox.innerHTML =(initials);
        scoreBox.innerHTML = (score);
        highScore = score
        saveScore();
    }
    else{
        alert('You did not get the high score, please play again')
    }
    
};

//printQuestion function
function printQuestion(){
    //cycle through questions array
    if(index<=quiz.length-1){   
        questionBox.innerHTML = (quiz[index].question);
        button1El.innerHTML = (quiz[index].option[0]);
        button2El.innerHTML = (quiz[index].option[1]);
        button3El.innerHTML = (quiz[index].option[2]);
        button4El.innerHTML = (quiz[index].option[3]);
    }

    else{
        questionBox.innerHTML= ("Quiz Complete!");
        endGame();
        
    }
    
};


//checkAnswer function
function checkAnswer(event){
    //console.log(event.target)
                                                                //explain this line below
    let currentButton = event.target.getAttribute("data-answer-type")
    //console.log(currentButton);
    let currentAnswer = quiz[index].answer
    //console.log(currentAnswer);
    if(currentButton == currentAnswer){
        //console.log('answer is correct');
        answerBox.innerHTML = ("Correct");
    }
    else{
        //console.log('wrong answer');
        answerBox.innerHTML = ("Incorrect");
        counter -= 5

    }

    //this will index to next question
    index++
    //this will run printQuestion again
    printQuestion();
};

function loadScore(){
    let s = localStorage.getItem("highScore");
    initials = localStorage.getItem("initials");
    highScore = parseInt(s) || 0
    nameBox.innerHTML =(initials);
    scoreBox.innerHTML = (highScore);
}

function saveScore(){
    localStorage.setItem("highScore", highScore); 
    localStorage.setItem("initials", initials); 
}


//save to session storage

loadScore()   
startBtn.addEventListener("click", startGame)
button1El.addEventListener('click', checkAnswer)
button2El.addEventListener('click', checkAnswer)
button3El.addEventListener('click', checkAnswer)
button4El.addEventListener('click', checkAnswer)










