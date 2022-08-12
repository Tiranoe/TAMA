// Introduce all variables (Countdown timer, Health Factor, health limits, Game speed)
//Game Max Limits
//Testing this to see if I can connect the value from HTML file to update on javascript
let hunger_Max = document.querySelector('.hungerBar').value;
//console.log(hunger_Max) => shows as 50
let boredom_Max = document.querySelector('.boredomBar').value;
let tired_Max = document.querySelector('.sleepBar').value;
let cleanness_Max = document.querySelector('.cleanBar').value;
let health_Max = hunger_Max + boredom_Max + tired_Max + cleanness_Max
//console.log(health_Max) => shows as 200
        //Question: which way to list the variable is better?

// Name Constraints
let playerName = document.getElementById('playerName');
let tamaName = document.querySelector('#tamagotchiName');

// Button Constraints
const startBtn = document.querySelector('start-button');
const resetBtn = document.querySelector('reset-button');
const feedBtn = document.querySelector('#feedAction');
const exerciseBtn = document.querySelector('#exerciseAction');
const playBtn = document.querySelector('#playAction');
const cleanBtn = document.querySelector('#cleanAction');
const sleepBtn = document.querySelector('#sleepAction');
const abandonBtn = document.querySelector('#abandonAction');

//Level Contraints for the progress Bar
const healthLevel = document.querySelector('.healthBar').value;
const hungerLevel = document.querySelector('.hungerBar').value;
const boredomLevel = document.querySelector('.boredomBar').value;
const tiredLevel = document.querySelector('.sleepBar').value;
const cleannessLevel = document.querySelector('.cleanBar').value;


//game start function invoke


// Possibly use the Object Oriented Programming to keep track of Tamagotchi's condition?
    // Tamagotchi (your pet) will be starting as an "egg" status

class Tamagotchi {
    constructor (name, health, hunger, play, sleep, clean) {
    this.name = document.querySelector('#tamagotchiName');
    this.health = health_Max;
    this.hunger = hunger_Max;
    this.play = boredom_Max;
    this.sleep = tired_Max;
    this.clean = cleanness_Max;
    }

// implement all updating values and adding it to sum.
    //function to lose each stats constantly
loseHunger(){
    setInterval(() => 
    {this.hunger -= 2;
    this.health -= 2;
    document.querySelector('.hungerBar').value = this.hunger}, 1000);
}
loseBoredom(){
    setInterval(() => 
    {this.play -= 2;
    this.health -= 2;
    document.querySelector('.boredomBar').value = this.play;
    if (this.play === 0) {
        alert('Your tamagotchi died from Boredom');
        clearInterval();}
    }, 1000);
}
loseSleep(){
    setInterval(() => 
    {this.sleep -= 2;
    this.health -= 2;
    document.querySelector('.sleepBar').value = this.sleep}, 1000);
}
loseCleanness(){
    setInterval(() => 
    {this.clean -= 2;
    this.health -= 2;
    document.querySelector('.cleanBar').value = this.clean}, 1000);
}
showStats(){
    setInterval(() => {
    console.log(this.health);
            }, 1000);
}
loseHealth(){
    setInterval(() =>
    {document.querySelector('.healthBar').value = this.health;
    }, 1000);
}

//death function using IF statement
death(){
    if (this.health === 0 || this.sleep === 0 || this.hunger === 0 || this.play === 0)
    {
       return true;
    }
    else return false;
}

//these functions are for all Tamagotchi's possible actions through player
feed(){
    this.hunger += 5;
    this.health += 5;
}
exercise(){
    this.hunger -= 1;
    this.clean -= 1;
    this.health += 2;
}
cleanUp(){
    this.clean += 5;
    this.health += 5;
}
sleeping(){
    this.hunger -= 3;
    this.sleep += 5;
    this.health += 2;
}
playing(){
    this.play += 10;
    this.health += 10;
}
abandon(){
    this.health = 0;
    this.hunger = 0;
    this.sleep = 0;
    this.play = 0;
    this.clean = 0;
    alert('You just want to see the world burn.. Shame on you');
}

}

let tmName = document.querySelector('.tamagotchiName')
let tmgch = new Tamagotchi(tmName)
console.log(tmgch);
//Invoking functions to continously lose health
// Starts down the timer countdown for each health factors
// Most likely want to display all Health factors for user to continue to keep track


//Start button starts tamagotchi health to go down
startBtn.addEventListener('click', function() {
    tmgch.loseHealth();
});

resetBtn.addEventListener('click', function(evt) {
    tmgch.loseBoredom();
    tmgch.loseCleanness();
});

// Menu bar to access all options (Player options)
// Feed
feedBtn.addEventListener('click', function() {
    tmgch.feed();
});
// Exercise
exerciseBtn.addEventListener('click', function() {
    tmgch.exercise();
});
// Clean Up
cleanBtn.addEventListener('click', function() {
    tmgch.cleanUp();
});
// Sleep
sleepBtn.addEventListener('click', function() {
    tmgch.sleeping();
})
// Play Game
playBtn.addEventListener('click', function() {
    tmgch.playing();
})

// Abandon your Tamagotchi
    // This option will restart the game
abandonBtn.addEventListener('click', function() {
    tmgch.abandon();
})


//Need to make functions for each page that user will see per option


// Game winning condition
// Timer Countdown for Tamagotchi if it manages to become adult


// User gets the ability to add their name to Top 10 list according to how well Tamagotchi has grown


// Add secret achievements when user raises tamagotchi with 100 percent fill with all health factors


// Give User choice to restart the game


//running functions



/*
HTML - 
<a href="#" id="action-sleep">Sleep</a>


JAVASCRIPT - 
const feedBtn = document.querySelector("#action-feed");


*/