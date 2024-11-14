// VARIABLES --------------------------------------

var questions={
    1:{
        question: "What's Mimi's Lastname?",
        options:["Vuong", "Ai", "To", "Luu"],
        answer:"To"
    },
    2:{
        question: "What's Mimi's Favorite Jewelry Color?",
        options:["Gold", "Silver", "Rosegold", "Copper"],
        answer:"Gold"
    },
    3:{
        question: "What's Mimi's Cat's Name?",
        options:["Misty", "Sticks", "Ellie", "Imani"],
        answer:"Sticks"
    },
    4:{
        question: "What's Mimi's Favorite Food?",
        options:["Pizza", "Chow Fun", "Sushi", "Shumai"],
        answer:"Chow Fun"
    },
    5:{
        question: "What's Mimi's favorite Manhwa?",
        options:["Lookism", "Don't Pick Up The Trash You Threw Away", "Weak Hero", "Lumine"],
        answer:"Weak Hero"
    },
    6:{
        question: "Who's Mimi's Favorite Character?",
        options:["Wolf Keum", "Joseph Desaulnier", "Bayonetta", "Yor Forger"],
        answer:"Wolf Keum"
    },
    7:{
        question: "What Does Mimi Like Best About Wolf Keum?",
        options:["Personality", "Looks", "His Strength", "His Style"],
        answer:"Personality"
    },
    8:{
        question: "What Character Does Mimi Also Like From Weak Hero?",
        options:["Donald Na", "Gray Yeon", "Jake Ji", "Jimmy Bae"],
        answer:"Donald Na"
    },
    9:{
        question: "What Sport Does Mimi Like?",
        options:["Basketball", "Hockey", "Ice Skating", "Badminton"],
        answer:"Hockey"
    },
    10:{
        question: "What Was Mimi Supposed To Train As, As A Child?",
        options:["Chinese Opera Singer", "Violinist", "Fashion Designer Like Her Mom", "Lion Dancer"],
        answer:"Chinese Opera Singer"
    },
    11:{
        question: "What Language Does Mimi Speak The Most In At Home?",
        options:["Mandarin", "Xiang", "Teochew", "English"],
        answer:"Teochew"
    },
    12:{
        question: "What Is The Correct Way To Spell Mimi's Vietnamese Lastname?",
        options:["To", "Tô", "Toh", "Tu"],
        answer:"Tô"
    },
    13:{
        question: "What Is Mimi's Chinese Lastname?",
        options:["Soi", "Su", "Toh", "Sou"],
        answer:"Sou"
    },
    14:{
        question: "What Question Is This?",
        options:["12", "14", "10", "13"],
        answer:"14"
    },
    15:{
        question: "What Dessert Does Mimi Like?",
        options:["Che Thai", "Carrot Cake", "Pumpkin Pie", "Raspberry Cheesecake"],
        answer:"Raspberry Cheesecake"
    },
    16:{
        question: "What Show Does Mimi Like The Most?",
        options:["Wild Kratts", "Blood of Zeus", "6teen", "My Little Pony"],
        answer:"Blood of Zeus"
    },
    17:{
        question: "How Old Is Mimi As Of Nov 2024?",
        options:["15", "16", "17", "18"],
        answer:"17"
    },
    18:{
        question: "What Accessory Does Mimi Wear Everyday?",
        options:["Ring", "Necklace", "Earrings", "Bracelet"],
        answer:"Earrings"
    },
    19:{
        question: "What's Mimi's Favorite Mineral?",
        options:["Fluorite", "Amethyst", "Garnet", "Opal"],
        answer:"Opal"
    },
    20:{
        question: "What Is Mimi's Favorite Game?",
        options:["Mad Father", "Minecraft", "Pokemon", "Stardew Valley"],
        answer:"Minecraft"
    },
}

// CONTAINERS -------------------------------------
var bodyContainer = document.getElementById("overallContainer");
var questionContainer = document.getElementById("titleContainer");
var responseContainer = document.getElementById("container");

// GLOBAL BUTTONS ---------------------------------
var nextBtn = document.createElement("button");
nextBtn.innerText = "Next";

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
    //Adding to the question counter
    currentQuestion++;

    if (currentQuestion>20){
        finishedQuiz();
    }
    //Loads up the next question
    questionContainer.innerText = questions[currentQuestion].question;

    //Removes correct class
    btnA.classList.remove("correct");
    btnB.classList.remove("correct");
    btnC.classList.remove("correct");
    btnD.classList.remove("correct");

    //Removes incorrect class
    btnA.classList.remove("incorrect");
    btnB.classList.remove("incorrect");
    btnC.classList.remove("incorrect");
    btnD.classList.remove("incorrect");

    //Remove the Next Button
    bodyContainer.removeChild(nextBtn);

    //Loads up next option
    btnA.innerText = questions[currentQuestion].options[0];
    btnB.innerText = questions[currentQuestion].options[1];
    btnC.innerText = questions[currentQuestion].options[2];
    btnD.innerText = questions[currentQuestion].options[3];

}

function checkCorrectness(event){
    //Variables
    var choice = event.target;
    var wordChosen = choice.innerText;
    //Checking
    console.log(wordChosen);
    console.log(questions[currentQuestion].answer);

    if(wordChosen === questions[currentQuestion].answer){
        //toggling the class correct
        choice.classList.add("correct");
        score++;
    }
    else{
        //toggling the class incorrect
        choice.classList.add("incorrect");
    }

    bodyContainer.appendChild(nextBtn);
    
}

function finishedQuiz(){

    //Score variables
    var total = (score/20)*100;
    console.log(total);
    var finishedNote = document.createElement("p");

    //Appending in the score
    responseContainer.appendChild(finishedNote);
    finishedNote.innerText = "You scored " + total+"%";

    bodyContainer.removeChild(nextBtn);

}

loadedQuestion();

// CLICKED ITEMS ------------------------------------
nextBtn.addEventListener("click", nextQuestion);

btnA.addEventListener("click", checkCorrectness);
btnB.addEventListener("click", checkCorrectness);
btnC.addEventListener("click", checkCorrectness);
btnD.addEventListener("click", checkCorrectness);