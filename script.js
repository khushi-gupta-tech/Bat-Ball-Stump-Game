const buttons = document.querySelectorAll("button");
const Yours = document.querySelector("#yours");
const computer = document.querySelector("#computer");
const result = document.querySelector("h3");
const scores = document.querySelector("#score");
const reset = document.querySelector("#reset");

let score = {
    win :0,
    lose:0,
    tie:0
}
function sco(win,lose,tie){
    scores.innerHTML = `Win: ${win} <br>
                        Lose: ${lose} <br>
                        Tie: ${tie}`
}
function compare(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        score.tie++;
        result.innerHTML = "Match Draw!";
    } 
    else if (userChoice === "Bat" && computerChoice === "Ball") {
        score.win++;
        result.innerHTML = "You Win, your bat beats ball!";
    } 
    else if (userChoice === "Bat" && computerChoice === "Stump") {
        score.lose++;
        result.innerHTML = "You Lose,Stump beats your bat!";
    } 
    else if (userChoice === "Ball" && computerChoice === "Bat") {
        score.lose++;
        result.innerHTML = "You Lose,bat beats your ball!";
    } 
    else if (userChoice === "Ball" && computerChoice === "Stump") {
        score.win++;
        result.innerHTML = "You Win, your ball beats stump";
    } 
    else if (userChoice === "Stump" && computerChoice === "Bat") {
        score.win++;
        result.innerHTML = "You Win, your stump beats bat !";
    } 
    else if (userChoice === "Stump" && computerChoice === "Ball") {
        score.lose++;
        result.innerHTML = "You Lose,ball beats your stump!";
    }
    sco(score.win,score.lose,score.tie)
}

function playGame(userChoice) {
  const options = ["Bat", "Ball", "Stump"];
  const randIdx = Math.floor(Math.random() * options.length);
  const computerChoice = options[randIdx];
  //console.log(computerChoice)
  computer.innerHTML = `Computer's Choice - ${computerChoice}`;

  compare(userChoice, computerChoice);
}
buttons.forEach((b) => {
  b.addEventListener("click", () => {
    const userChoice = b.getAttribute("id");
    Yours.innerHTML = `Your's Choice - ${userChoice}`;
    // console.log(userChoice)
    playGame(userChoice);
  });
});

reset.addEventListener('click',()=>{
    Yours.innerHTML = '';
    computer.innerHTML = '';
    result.innerHTML = '';
    scores.innerHTML = '';
    
    score.win = 0;
    score.lose = 0;
    score.tie = 0;
})