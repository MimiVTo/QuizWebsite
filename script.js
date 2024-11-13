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
        question: "What's Mimi's Favorite Food?",
        options:["Pizza", "Chow Fun", "Sushi", "Shumai"],
        answer: "Chow Fun"
    },
    "questionFive":{
        question: "What's Mimi's favorite Manhwa?",
        options:["Lookism", "Don't Pick Up The Trash You Threw Away", "Weak Hero", "Lumine"],
        answer: "Weak Hero"
    },
    "questionSix":{
        question: "Who's Mimi's Favorite Character?",
        options:["Wolf Keum", "Joseph Desaulnier", "Bayonetta", "Yor Forger"],
        answer: "Wolf Keum"
    },
    "questionSeven":{
        question: "",
        options:[],
        answer:""
    },
    "questionEight":{
        question: "",
        options:[],
        answer:""
    },
    "questionNine":{
        question: "",
        options:[],
        answer:""
    },
    "questionTen":{
        question: "",
        options:[],
        answer:""
    },
    "questionEleven":{
        question: "",
        options:[],
        answer:""
    },
    "questionTwelve":{
        question: "",
        options:[],
        answer:""
    },
    "questionThirteen":{
        question: "",
        options:[],
        answer:""
    },
    "questionFourteen":{
        question: "",
        options:[],
        answer:""
    },
    "questionFifteen":{
        question: "",
        options:[],
        answer:""
    },
    "questionSixteen":{
        question: "",
        options:[],
        answer:""
    },
    "questionSeventeen":{
        question: "",
        options:[],
        answer:""
    },
    "questionEighteen":{
        question: "",
        options:[],
        answer:""
    },
    "questionNineteen":{
        question: "",
        options:[],
        answer:""
    },
    "questionTwenty":{
        question: "",
        options:[],
        answer:""
    },
}

// CONTAINERS -------------------------------------
var questionContainer = document.getElementById("titleContainer");
var responseContainer = document.getElementById("container");

// OPTIONS FOR ANSWERING THE QUESTION -------------
var optionA = document.getElementById("optionA");
var optionB = document.getElementById("optionB");
var optionC = document.getElementById("optionC");
var optionD = document.getElementById("optionD");

// GLOBAL BUTTONS ---------------------------------
var next = document.getElementById("nextBtn");

// BUTTONS PRESSED ------------

var buttonA = document.getElementById("buttonA");
var buttonB = document.getElementById("buttonB");
var buttonC = document.getElementById("buttonC");
var buttonD = document.getElementById("buttonD");

// NUMBER TRACKING --------------------------------
var question = 0;
var correctAnswers = 0;

// FUNCTIONS --------------------------------------

function loadedQuestion(){
    //First question asked

}

function nextQuestion(){
    //Loads up the question and 
}

next.addEventListener("click", nextQuestion);