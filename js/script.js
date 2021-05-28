const letterinput = document.querySelector(".guessed-chaacters");
const button = document.querySelector(".guess");
const textinput = document.querySelector(".letter");
const progress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const spanremaining = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const buttonhidden = document.querySelector(".play-again hide");
const word = "magnolia";

const placeHolder = function (word) {
  const placeHolderletters = [];
  for (const letter of word) {
    console.log(letter);
    placeHolderletters.push("●");
  }
  progress.innerText = placeHolderletters.join("");
};

placeHolder(word);

guessLetterButton.addEventListener("click", function (e) {
  e.preventDefault();
  const guess = letterInput.value;
  console.log(guess);
  letterInput.value = "";
});
