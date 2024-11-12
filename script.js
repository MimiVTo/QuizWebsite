// VARIABLES --------------------------------------

var questions={
    "questionOne":{
        question: "What's Mimi's Lastname?",
        options:["Vuong", "Ai", "To", "Luu"],
        answer: "To"
    },
    "questionTwo":{
        question: "What's Mimi's Favorite Jewelry Color?",
        options:["Gold", "Silver", "Rosegold", "Copper"],
        answer: "Gold"
    },
    "questionThree":{
        question: "What's Mimi's Cat's Name?",
        options:["Misty", "Sticks", "Ellie", "Imani"],
        answer: "Sticks"
    },
    "questionFour":{
        question: "",
        options:[],
        answer:
    },
    "questionFive":{
        question: "",
        options:[],
        answer:
    },
    "questionSix":{
        question: "",
        options:[],
        answer:
    },
    "questionSeven":{
        question: "",
        options:[],
        answer:
    },
    "questionEight":{
        question: "",
        options:[],
        answer:
    },
    "questionNine":{
        question: "",
        options:[],
        answer:
    }
}

// CONTAINERS -------------------------------------
var questionContainer = document.getElementById("titleContainer");
var responseContainer = document.getElementById("container");

// GLOBAL BUTTONS ---------------------------------
var next = document.getElementById("nextBtn");

// NUMBER TRACKING --------------------------------
var question = 0;
var correctAnswers = 0;

// FUNCTIONS --------------------------------------

function quizBegin(){
    //Loads up the question and 
}

next.addEventListener("click", quizBegin);