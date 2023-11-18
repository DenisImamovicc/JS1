let currUserTries = 0;


const input = document.querySelector("#numInput")
const submitGuessNum = document.querySelector("#submitGuessBtn")
const restartGameBtn = document.querySelector("#restartBtn")
const alertBox = document.querySelector("#alertBox")

console.log(restartGameBtn);

submitGuessNum.addEventListener("click",()=>{
  const userGuess = Number(input.value)
  console.log(userGuess);
  handleGame(userGuess)
})

restartGameBtn.addEventListener("click",()=>{
  restartGame()
})

const message = {
  defeat: "🐔Bawk🐔Bawk🐔Bawk🐔Bawk",
  default: "Guess tha number from 1 to 10 now or press 0 to 🐔 out!",
  victory: (currUserTries) =>
    `You have beaten the Dommy Mommy overlord with ${currUserTries} ${handleTryGrammar(
      currUserTries
    )}\nYour 🐔 is safe ....for now🤖🤖🤖🤖`,
  continue: (currUserTries) =>
    `Guess again the number from 1 to 10 now.\nPress 0 to 🐔 out with your ${currUserTries} ${handleTryGrammar(
      currUserTries
    )} of shame 😈😈😈`,
};

const getRandomNumber = (max = 10) => 
  Math.ceil(Math.random() * max);

const handleFedback = (userGuess, robotGuess) =>
  userGuess > robotGuess ? "Guessed to high! " : "Guessed to low! ";

const handleTryGrammar = (currUserTries) =>
  currUserTries === 1 ? "try" : "tries";

const handleVictory = () => {
  currUserTries++;
  alertBox.innerText = `${message.victory(currUserTries)}`
  restartGameBtn.style.visibility = 'visible';
  submitGuessNum.style.visibility = "hidden"
};

const handleDefeat = () => {
  alertBox.innerText = `${message.defeat}`
  restartGameBtn.style.visibility = 'visible';
  submitGuessNum.style.visibility = "hidden"
};

const handleContinuation = (userGuess, robotGuess) => {
    currUserTries++;
    alertBox.innerText = `${handleFedback(userGuess, robotGuess)} ${message.continue(currUserTries)}`
};

const compareGuesses = (userGuess, robotGuess) => {
   console.log(
     `User guessed: ${userGuess} and Robutt overlord guessed ${robotGuess}`
   );

  userGuess === robotGuess
    ? handleVictory()
    : handleContinuation(userGuess, robotGuess);
};

const restartGame = () => {
  console.log("restart used");
  currUserTries = 0;
  restartGameBtn.style.visibility = "hidden"
  submitGuessNum.style.visibility = 'visible';
  alertBox.innerText = ""
  input.value = ""
};

const handleGame = (Userguess) => {
 let CPU_NUM = getRandomNumber();

 Userguess 
    ? compareGuesses(Userguess, CPU_NUM) 
    : handleDefeat();
};