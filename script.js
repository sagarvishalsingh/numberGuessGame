let randomNumber;
let attempts = 0;
let lastGuess = null;

document.addEventListener("DOMContentLoaded", () => {
    initializeGame();

    document.getElementById("submitGuess").addEventListener("click", () => {
        const guessInputElement = document.getElementById("guessInput");
        const guess = parseInt(guessInputElement?.value, 10);

        if (isNaN(guess)) {
            document.getElementById("feedback").textContent = "Please enter a valid number.";
            document.getElementById("feedback").className = "feedback-error";
        } else if (guess === lastGuess) {
            document.getElementById("feedback").textContent = "You've already guessed that number. Try a different one.";
            document.getElementById("feedback").className = "feedback-error";
        } else {
            validateGuess(guess);
            lastGuess = guess;
        }
    });

    document.getElementById("restartGame").addEventListener("click", () => {
        initializeGame();
    });
});

function initializeGame() {
    randomNumber = Math.floor(Math.random() * 50) + 1;
    lastGuess = null;

    const feedbackElement = document.getElementById("feedback");
    const attemptsElement = document.getElementById("attempts");
    const guessInputElement = document.getElementById("guessInput");
    const submitGuessButton = document.getElementById("submitGuess");
    const restartGameButton = document.getElementById("restartGame");

    if (feedbackElement && attemptsElement && guessInputElement && submitGuessButton && restartGameButton) {
        feedbackElement.textContent = "";
        feedbackElement.className = "";
        attemptsElement.textContent = "Attempts: 0";
        guessInputElement.value = "";
        guessInputElement.disabled = false;
        submitGuessButton.disabled = false;
        restartGameButton.style.display = "block";
    } else {
        console.error("One or more DOM elements are missing.");
    }
}

function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 50) {
        const feedbackElement = document.getElementById("feedback");
        if (feedbackElement) {
            feedbackElement.textContent = "Please enter a number between 1 and 50.";
            feedbackElement.className = "feedback-error";
        }
        return;
    }

    attempts++;
    const difference = Math.abs(randomNumber - guess);

    const feedbackElement = document.getElementById("feedback");
    const attemptsElement = document.getElementById("attempts");
    const restartGameButton = document.getElementById("restartGame");

    if (feedbackElement && attemptsElement && restartGameButton) {
        if (guess < randomNumber) {
            feedbackElement.textContent = difference <= 10 ? "Too low! You're very close!" : "Too low!";
            feedbackElement.className = "feedback-low";
        } else if (guess > randomNumber) {
            feedbackElement.textContent = difference <= 10 ? "Too high! You're very close!" : "Too high!";
            feedbackElement.className = "feedback-high";
        } else {
            feedbackElement.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
            feedbackElement.className = "feedback-correct";
            document.getElementById("guessInput").disabled = true;
            document.getElementById("submitGuess").disabled = true;
            restartGameButton.style.display = "block"; 
        }
        attemptsElement.textContent = `Attempts: ${attempts}`;
    }
}
