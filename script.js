// VARIABLES --------------------------------------

var questions={
    "questionOne":{
        question: "What's Mimi's Lastname?",
        options:["Vuong", "Ai", "To", "Luu"],
        answer: 2
    },
    "questionTwo":{
        question: "What's Mimi's Favorite Jewelry Color?",
        options:["Gold", "Silver", "Rosegold", "Copper"],
        answer: 0
    },
    "questionThree":{
        question: "What's Mimi's Cat's Name?",
        options:["Misty", "Sticks", "Ellie", "Imani"],
        answer: 1
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

var questionContainer = document.getElementById("titleContainer");
var responseContainer = document.getElementById("container");

// GLOBAL BUTTONS ---------------------------------
var next = document.getElementById("nextBtn");

// FUNCTIONS --------------------------------------

function quizBegin(){
    
}

next.addEventListener("click", quizBegin);