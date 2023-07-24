function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  if (randomNumber <= 20) {
    return "Rock";
  } else if (randomNumber <= 40) {
    return "Paper";
  } else if (randomNumber <= 60) {
    return "Scisor";
  } else if (randomNumber <= 80) {
    return "Lizard";
  } else {
    return "Spock";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Rock") {
    if (computerSelection == "Rock") {
      return "tie";
    } else if (computerSelection == "Paper") {
      return "Computer";
    } else if (computerSelection == "Scisor") {
      return "Player";
    } else if (computerSelection == "Lizard") {
      return "Player";
    } else {
      return "Computer";
    }
  } else if (playerSelection == "Paper") {
    if (computerSelection == "Rock") {
      return "Player";
    } else if (computerSelection == "Paper") {
      return "tie.";
    } else if (computerSelection == "Scisor") {
      return "Computer";
    } else if (computerSelection == "Lizard") {
      return "Computer";
    } else {
      return "Player";
    }
  } else if (playerSelection == "Scisor") {
    if (computerSelection == "Rock") {
      return "Computer";
    } else if (computerSelection == "Paper") {
      return "Player";
    } else if (computerSelection == "Scisor") {
      return "tie.";
    } else if (computerSelection == "Lizard") {
      return "Player";
    } else {
      return "Computer";
    }
  } else if (playerSelection == "Lizard") {
    if (computerSelection == "Rock") {
      return "Computer";
    } else if (computerSelection == "Paper") {
      return "Player";
    } else if (computerSelection == "Scisor") {
      return "Computer";
    } else if (computerSelection == "Lizard") {
      return "tie.";
    } else {
      return "Player";
    }
  } else {
    if (computerSelection == "Rock") {
      return "Player";
    } else if (computerSelection == "Paper") {
      return "Computer";
    } else if (computerSelection == "Scisor") {
      return "Player";
    } else if (computerSelection == "Lizard") {
      return "Computer";
    } else {
      return "tie";
    }
  }
}

let buttons = document.querySelectorAll("button");
let count = 1;
let player = 0;
let computer = 0;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    playerSelection = this.id;
    const computerSelection = getComputerChoice();
    document.getElementById("playerChoise").src =
      "./IMG/" + playerSelection + ".png";
    document.getElementById("playerChoise").alt = playerSelection;
    document.getElementById("computerChoise").src =
      "./IMG/" + computerSelection + ".png";
    document.getElementById("computerChoise").alt = computerSelection;
    if (count < 5) {
      if (playRound(playerSelection, computerSelection) == "tie") {
      } else if (playRound(playerSelection, computerSelection) == "Player") {
        player++;
        count++;
        document.getElementById("playerScore").textContent = "Score: " + player;
        document.getElementById("computerScore").textContent = "Score: " + computer;
        document.getElementById("roundNumber").textContent = "Round " + count;
      } else {
        computer++;
        count++;
        document.getElementById("playerScore").textContent = "Score: " + player;
        document.getElementById("computerScore").textContent = "Score: " + computer;
        document.getElementById("roundNumber").textContent = "Round " + count;
      }
    } 
    else {
      if (playRound(playerSelection, computerSelection) == "tie") {
        /*Até aqui está okay*/
        alert(playerSelection);
        alert(computerSelection);
        alert(player);
        alert(computer);

      } else if (playRound(playerSelection, computerSelection) == "Player") {
        player++;
        document.getElementById("playerScore").textContent = "Score: " + player;
        if (parseInt(player) > parseInt(computer)) {
          document.getElementById("roundNumber").textContent = "Round 5 - Player won";
        } else {
          document.getElementById("roundNumber").textContent = "Round 5 - Computer won";
        }
       count = 1;
       player = 0;
       computer = 0;
      } else {
        computer++;
        document.getElementById("computerScore").textContent = "Score: " + computer;
        if (parseInt(player) > parseInt(computer)) {
          document.getElementById("roundNumber").textContent = "Round 5 - Player won";
        } else {
          document.getElementById("roundNumber").textContent = "Round 5 - Computer won";
        }
        count = 1;
        player = 0;
        computer = 0;
      }
    }
  });
}
