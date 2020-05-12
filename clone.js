window.addEventListener('load',init);
// Availbale Level
const levels ={
	easy:5, // 
	medium:3,
	hard:1
};

// To Change Level
const currentLevel = levels.hard;
// Globals
let time = 5;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

// Array of Words
const words = [
'hat',
'river',
'lucky',
'statue',
'stubborn',
'cocktail',
'runaway',
'joke',
'developer',
'establishment',
'hero',
'javascript',
'nutrition',
'revolver',
'echo',
'siblings',
'investigate',
'horrendous',
'symptom',
'laughter',
'magic',
'master',
'space',
'defintion'
];

// Initialize Game
function init(){
    // Load word from array
    showWord(words);
    // Count down the time
    setInterval(countdown,1000);

    setInterval(checkStatus,50);
    wordInput.addEventListener('input',startMatch);

}


function showWord(words){
    const index = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[index];
}

function countdown(){
    if(time>0)
    time--;
    else if(time === 0){
        isPlaying = false;
        score = -1;
    }

    timeDisplay.innerHTML = time;
}
function startMatch(){
    if(matchWords()){
        time = 5;
        wordInput.value = "";
        showWord(words);
        score++;
        console.log(score);
        console.log("MATCH");
    }
    if(score == -1)
    scoreDisplay.innerHTML = 0;
    else
    scoreDisplay.innerHTML = score;
}


function matchWords(){
    // console.log(currentWord.innerHTML)
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = "Correct !!!";
        return true;
    }
    else{
        message.innerHTML = "InCorrect !!!";
        // score = -1;
        return false;
    }
}
function checkStatus(){
    if(!isPlaying && time === 0)
    message.innerHTML = "Game Over";

}