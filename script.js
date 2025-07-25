const buttons = document.querySelectorAll("button");
const Yours = document.querySelector("#yours");
const computer = document.querySelector("#computer");
const result = document.querySelector("h3");

function compare(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        result.innerHTML = "Match Draw!";
    } 
    else if (userChoice === "Bat" && computerChoice === "Ball") {
        result.innerHTML = "You Win, your bat beats ball!";
    } 
    else if (userChoice === "Bat" && computerChoice === "Stump") {
        result.innerHTML = "You Lose,Stump beats your bat!";
    } 
    else if (userChoice === "Ball" && computerChoice === "Bat") {
        result.innerHTML = "You Lose,bat beats your ball!";
    } 
    else if (userChoice === "Ball" && computerChoice === "Stump") {
        result.innerHTML = "You Win, your ball beats stump";
    } 
    else if (userChoice === "Stump" && computerChoice === "Bat") {
        result.innerHTML = "You Win, your stump beats bat!";
    } 
    else if (userChoice === "Stump" && computerChoice === "Ball") {
        result.innerHTML = "You Lose,ball beats your stump!";
    }
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
