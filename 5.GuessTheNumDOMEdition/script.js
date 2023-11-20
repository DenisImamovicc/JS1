let currUserTries = 0;
gameContainer
const input = document.querySelector("#numInput");
const form = document.querySelector("#gameContainer");
const submitGuessNum = document.querySelector("#submitGuessBtn");
const restartGameBtn = document.querySelector("#restartBtn");
const alertBox = document.querySelector("#alertBox");

submitGuessNum.addEventListener("click", () => handleGame(Number(input.value)));
restartGameBtn.addEventListener("click", () => restartGame());
form.addEventListener("submit", (e) => {
  e.preventDefault()
});

const message = {
  defeat: "Pathetic!",
  default: "Guess tha number from 1 to 10 now or press 0 to 🐔 out!",
  victory: (currUserTries) =>
    `You have beaten the Dommy Mommy overlord with ${currUserTries} ${handleTryGrammar(
      currUserTries
    )}\nYour 🐔 is safe ....for now😈😈😈`,
  continue: (currUserTries) =>
    `Guess again the number from 1 to 10 now.\nPress 0 to 🐔 out with your ${currUserTries} ${handleTryGrammar(
      currUserTries
    )} of shame 😈😈😈`,
};

const getRandomNumber = (max = 10) => Math.ceil(Math.random() * max);

const handleFedback = (userGuess, robotGuess) =>
  userGuess > robotGuess ? "Guessed to high! " : "Guessed to low! ";

const handleTryGrammar = (currUserTries) =>
  currUserTries === 1 ? "try" : "tries";

const compareGuesses = (userGuess, robotGuess) => {
  userGuess === robotGuess
    ? handleGameWin()
    : handleGameContinue(userGuess, robotGuess);
};

const handleGameWin = () => {
  currUserTries++;
  alertBox.innerText = `${message.victory(currUserTries)}`;
  restartGameBtn.removeAttribute("disabled")
  submitGuessNum.setAttribute("disabled","")
};

const handleGameForfeit = () => {
  alertBox.innerText = `${message.defeat}`;
  restartGameBtn.removeAttribute("disabled")
  submitGuessNum.setAttribute("disabled","")
};

const handleGameContinue = (userGuess, robotGuess) => {
  currUserTries++;
  alertBox.innerText = `${handleFedback(
    userGuess,
    robotGuess
  )} ${message.continue(currUserTries)}`;
};

const restartGame = () => {
  currUserTries = 0;
  restartGameBtn.setAttribute("disabled","")
  submitGuessNum.removeAttribute("disabled")
  alertBox.innerText = "";
  input.value = "";
};

const handleGame = (Userguess) => {
  let CPU_NUM = getRandomNumber();
  Userguess ? compareGuesses(Userguess, CPU_NUM) : handleGameForfeit();
};