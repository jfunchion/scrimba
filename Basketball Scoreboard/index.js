//Make scoreboard that increases by the increment you click

/*******Stretch Goals********/
//New Game Button to reset scores
//Highlight the leader
//Add a few more counters (period, fouls, timer)
//Change design
//Scoreboard for different sport

let homeScoreDisplay = document.querySelector('#score-box-home');
let awayScoreDisplay = document.querySelector('#score-box-away');

let homePlusOne = document.querySelector('#home-wrapper .plus-one');
let homePlusTwo = document.querySelector('#home-wrapper .plus-two');
let homePlusThree = document.querySelector('#home-wrapper .plus-three');

let PlusOne = document.querySelector('#away-wrapper .plus-one');
let PlusTwo = document.querySelector('#away-wrapper .plus-two');
let PlusThree = document.querySelector('#away-wrapper .plus-three');

let homeScore = 0;
let awayScore = 0;

function plusOneHome(){
    homeScore += 1;
    updateHomeScore(homeScore);
}

function plusTwoHome(){
    homeScore += 2;
    updateHomeScore(homeScore);
}

function plusThreeHome(){
    homeScore += 3;
    updateHomeScore(homeScore);
}

function plusOneAway(){
    awayScore += 1;
    updateAwayScore(awayScore);
}

function plusTwoAway(){
    awayScore += 2;
    updateAwayScore(awayScore);
}

function plusThreeAway(){
    awayScore += 3;
    updateAwayScore(awayScore);
}

function updateHomeScore(homeScore){
    homeScoreDisplay.textContent = homeScore;
    leaderCheck()
}

function updateAwayScore(awayScore){
    awayScoreDisplay.textContent = awayScore;
    leaderCheck()
}

function leaderCheck(){
    if(homeScore > awayScore){
        console.log('home winning');
        homeScoreDisplay.style.border = '5px solid green';
        awayScoreDisplay.style.border = '5px solid #080001';
    } else if(awayScore > homeScore){
        console.log('away winning');
        awayScoreDisplay.style.border = '5px solid green';
        homeScoreDisplay.style.border = '5px solid #080001';
    } else{
        console.log('tied');
        homeScoreDisplay.style.border = '5px solid #080001';
        awayScoreDisplay.style.border = '5px solid #080001';
    }
}

function resetScores(){
    homeScore = 0;
    awayScore = 0;

    updateAwayScore(awayScore);
    updateHomeScore(homeScore);
    leaderCheck()
}

