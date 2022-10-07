const randomNumberBetween0and1 = Math.random()
const randomNumberBetween0and19 = (randomNumberBetween0and1 * 20);
const luckyNumber = Math.floor(randomNumberBetween0and19);     //decimal removed here 
console.log("Lucky Number:" + luckyNumber)

let score = 5;


const userInput = document.getElementById("guessing");
const msgBox = document.querySelector("#message");
const main = document.getElementById("main");
const scoreEle = document.getElementById("scores");
scoreEle.textContent = score;

// check if user input is equals to lucky number

const checkButton = document.getElementById("check");

function checkNumber() {
    const userGuess = Number(userInput.value); //converting to num and saving  to const varaiable

    if(userGuess === luckyNumber) {
      //  alert("YOU GUESSED THE CORRECT NUM!!")
      msgBox.textContent = 'YOU GUESSED THE CORRECT NUM!! ';
      //color change on ans correct
      main.style.background = "Green";
      score++;
      scoreEle.textContent = score;
    } else {
      if(userGuess > luckyNumber) {
        //alert('Sorry, wrong answer guessed');
        msgBox.textContent = 'Too Hi ';
      } else {
        if (userGuess < luckyNumber)
        msgBox.textContent = "Too Lo "
      }
      main.style.backgroundColor = "Red";
      score--;
      scoreEle.textContent = score;
      


    }
    
}

checkButton.addEventListener("click", checkNumber)






