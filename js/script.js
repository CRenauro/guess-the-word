const letterinput = document.querySelector(".guessed-chaacters");
const button = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const progress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const spanremaining = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const buttonhidden = document.querySelector(".play-again hide");

const word = "magnolia";
const guessedLetters = [];

const placeHolder = function (word) {
  const placeHolderletters = [];
  for (const letter of word) {
    console.log(letter);
    placeHolderletters.push("●");
  }
  progress.innerText = placeHolderletters.join("");
};

placeHolder(word);

button.addEventListener("click", function (e) {
  e.preventDefault();
  message.innerText = "";
  const guess = textInput.value;
  // console.log(guess);

  const goodGuess = validateInput(guess);

  if (goodGuess) {
    makeGuess(guess);
  }
  textInput.value = "";
});
// guessLetterButton(value);
// console.log(value);

const validateInput = function (input) {
  const acceptedLetter = /[a-zA-Z]/;
  if (input.length === 0) {
    message.innerText = "Please input a letter";
  } else if (input.length > 1) {
    message.innerText = "Please input a single letter";
  } else if (!input.match(acceptedLetter)) {
    message.innerText = "Please enter a letter from A to Z";
  } else {
    return input;
  }
};

const makeGuess = function (guess) {
  guess = guess.toUpperCase();
  if (guessedLetters.includes(guess)) {
    message.innerText = "You have already guessed that letter, try again.";
  } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
  }
};
