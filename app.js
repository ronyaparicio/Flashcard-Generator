//required modules
var fs = require("fs");
var inquirer  = require("inquirer");
var flashCards = require("./flashCards.json");

console.log(flashCards);

function Cards(frontSide, backSide) {
    this.frontSide = frontSide;
    this.backSide = backSide;
};

function newCard() {
    inquirer.prompt([{
        type:"input",
        name:"front",
        message: "What is the questions you want to ask?"
    },{
        type: "input",
        name: "back",
        message: "What is the anwer to your question"
    }]).then(function(input) {
        let card = new Cards(input.front, input.back);
        flashCards.push(card);
    console.log(card);
    });
};

newCard();