

const handOptions = {
    "rock" : "images/rock.png",
    "paper" : "images/paper.jpg",
    "scissors" : "images/scissors.jpg"
}

var SCORE = 0;

const pickUserHand = (hand) => {
    console.log(hand);
    //hide the first slide 
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
    //show the next page with the hand you picked
    let contest = document.querySelector(".contest");
    contest.style.display = "grid";

    //set the user pick
    document.getElementById("userPickImage").src = handOptions[hand];
       
    let cpHand = pickComputerHand();
    referee(hand, cpHand);

}

const pickComputerHand = () => {
    let hands = ["rock", "paper", "scissors"];
    let cpHand = hands[Math.floor(Math.random()*3)];

    //set the computer pick 
    document.getElementById('computerPickImage').src = handOptions[cpHand];

    return cpHand;
}

const referee = (userHand, cpHand) => {
    //paper user
    if (userHand == "paper" && cpHand == "rock") {
        setDecision("HURRAY YOU WIN!!")
        setScore(SCORE + 1)
    } 
    if (userHand == "paper" && cpHand == "scissors") {
        setDecision("OH NO!, YOU LOSE!!")
    } 
    if (userHand == "paper" && cpHand == "paper") {
        setDecision("UH UH ITS A TIE !!")
    } 

    //rock user
    if (userHand == "rock" && cpHand == "paper") {
        setDecision("WHOA! YOU LOSE!!")
    } 
    if (userHand == "rock" && cpHand == "scissors") {
        setDecision("NICE, YOU WIN!! \n CRUSH 'EM DOWN")
        setScore(SCORE + 1)
    } 
    if (userHand == "rock" && cpHand == "rock") {
        setDecision("OH NO ITS A TIE")
    } 
    //scissors user
    if (userHand == "scissors" && cpHand == "paper") {
        setDecision("CUT! CUT!!\n YEAH, YOU WIN!!")
        setScore(SCORE + 1)
    } 
    if (userHand == "scissors" && cpHand == "rock") {
        setDecision("OH NO! \n YOU LOST!!")
    } 
    if (userHand == "scissors" && cpHand == "scissors") {
        setDecision("A TIE AGAIN \n YOU CAN DO BETTER")
    } 
}

const restartGame = () => {
     //hide the first slide 
     let hands = document.querySelector(".hands");
     hands.style.display = "flex";
     //show the next page with the hand you picked
     let contest = document.querySelector(".contest");
     contest.style.display = "none";
}

const setDecision = (decision) => {
    document.querySelector(".referee p").innerText = decision;
}


const setScore = (score) => {
    SCORE = score;
    document.querySelector(".score h1").innerText = score;
}