let currUserTries = 0;

const message = {
  defeat: "🐔Bawk🐔Bawk🐔Bawk🐔Bawk",
  default: "Guess tha number from 1 to 10 now or press 0 to 🐔 out!",
  victory: (currUserTries) =>
    `You beaten the ai overlord with ${currUserTries} ${handleTryGrammar(
      currUserTries
    )},for now....🤖🤖🤖🤖`,
  continue: (currUserTries) =>
    `Guess again the number from 1 to 10 now or press 0 to 🐔 out with your ${currUserTries} ${handleTryGrammar(
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
  alert(message.victory(currUserTries));
  currUserTries = 0;
};

const handleDefeat = () => {
  alert(message.defeat);
  currUserTries = 0;
  console.log("Humanity left the chat");
};

const handleContinuation = (userGuess, robotGuess) => {
  currUserTries++;
  handleGame(
    `${handleFedback(userGuess, robotGuess)} ${message.continue(currUserTries)}`
  );
  currUserTries = 0;
};

const compareGuesses = (userGuess, robotGuess) => {
  console.log(
    `User guessed: ${userGuess} and Robutt overlord guessed ${robotGuess}`
  );

  userGuess === robotGuess
    ? handleVictory()
    : handleContinuation(userGuess, robotGuess);
};

const handleGame = (currText = message.default) => {
  let CPU_NUM = getRandomNumber();
  let User_NUM = Number(prompt(currText));

  User_NUM 
    ? compareGuesses(User_NUM, CPU_NUM) 
    : handleDefeat();
};