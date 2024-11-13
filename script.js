// VARIABLES --------------------------------------

var questions={
    1:{
        question: "What's Mimi's Lastname?",
        options:["Vuong", "Ai", "To", "Luu"],
        answer: "To"
    },
    2:{
        question: "What's Mimi's Favorite Jewelry Color?",
        options:["Gold", "Silver", "Rosegold", "Copper"],
        answer: "Gold"
    },
    3:{
        question: "What's Mimi's Cat's Name?",
        options:["Misty", "Sticks", "Ellie", "Imani"],
        answer: "Sticks"
    },
    4:{
        question: "What's Mimi's Favorite Food?",
        options:["Pizza", "Chow Fun", "Sushi", "Shumai"],
        answer: "Chow Fun"
    },
    5:{
        question: "What's Mimi's favorite Manhwa?",
        options:["Lookism", "Don't Pick Up The Trash You Threw Away", "Weak Hero", "Lumine"],
        answer: "Weak Hero"
    },
    6:{
        question: "Who's Mimi's Favorite Character?",
        options:["Wolf Keum", "Joseph Desaulnier", "Bayonetta", "Yor Forger"],
        answer: "Wolf Keum"
    },
    7:{
        question: "",
        options:[],
        answer:""
    },
    8:{
        question: "",
        options:[],
        answer:""
    },
    9:{
        question: "",
        options:[],
        answer:""
    },
    10:{
        question: "",
        options:[],
        answer:""
    },
    11:{
        question: "",
        options:[],
        answer:""
    },
    12:{
        question: "",
        options:[],
        answer:""
    },
    13:{
        question: "",
        options:[],
        answer:""
    },
    14:{
        question: "",
        options:[],
        answer:""
    },
    15:{
        question: "",
        options:[],
        answer:""
    },
    16:{
        question: "",
        options:[],
        answer:""
    },
    17:{
        question: "",
        options:[],
        answer:""
    },
    18:{
        question: "",
        options:[],
        answer:""
    },
    19:{
        question: "",
        options:[],
        answer:""
    },
    20:{
        question: "",
        options:[],
        answer:""
    },
}

// CONTAINERS -------------------------------------
var questionContainer = document.getElementById("titleContainer");
var responseContainer = document.getElementById("container");

// GLOBAL BUTTONS ---------------------------------
var next = document.getElementById("nextBtn");

// BUTTONS PRESSED ------------

var btnA = document.getElementById("buttonA");
var btnB = document.getElementById("buttonB");
var btnC = document.getElementById("buttonC");
var btnD = document.getElementById("buttonD");

// NUMBER TRACKING --------------------------------
var currentQuestion = 1;
var score = 0;

// FUNCTIONS --------------------------------------

function loadedQuestion(){
    //First question asked
    questionContainer.innerText = questions[currentQuestion].question;

    //Load up first options
    btnA.innerText = questions[currentQuestion].options[0];
    btnB.innerText = questions[currentQuestion].options[1];
    btnC.innerText = questions[currentQuestion].options[2];
    btnD.innerText = questions[currentQuestion].options[3];

}

function nextQuestion(){

    if (currentQuestion>20){
        finishedQuiz();
    }
    //Loads up the next question
    questionContainer.innerText = questions[currentQuestion].question;

    //Loads up next option
    btnA.innerText = questions[currentQuestion].options[0];
    btnB.innerText = questions[currentQuestion].options[1];
    btnC.innerText = questions[currentQuestion].options[2];
    btnD.innerText = questions[currentQuestion].options[3];

}

function checkCorrectness(event){

    var choice = event.target.innerText;
    console.log(choice);

    if (choice === questions[currentQuestion].answer){
        choice.classList.add("correct");
        score++;
    }
    else{
        choice.classList.add("incorrect");
    }
    //Adding to the question counter
    currentQuestion++;
}

// function finishedQuiz(){
//     // var finishedNote = document.createElement("p");
//     // finishedNote.innerText
//     // responseContainer.appendChild(finishedNote);
// }

loadedQuestion();

// CLICKED ITEMS ------------------------------------
next.addEventListener("click", nextQuestion);

btnA.addEventListener("click", checkCorrectness);
btnB.addEventListener("click", checkCorrectness);
btnC.addEventListener("click", checkCorrectness);
btnD.addEventListener("click", checkCorrectness);


