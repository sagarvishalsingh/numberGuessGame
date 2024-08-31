
# Number Guessing Game

Welcome to the Number Guessing Game! This is a simple and interactive web-based game where users try to guess a randomly generated number within a specified range. The game provides feedback on the user's guesses and tracks the number of attempts.

## Features

- **Number Generation**: A random number between 1 and 50 is generated at the start of the game.
- **User Input**: Users can input their guesses via a text input field.
- **Feedback**: The game provides feedback if the guess is too high, too low, or correct.
- **Attempt Tracking**: The number of attempts is displayed.
- **Restart**: Users can restart the game, which resets the number and attempt count.

## Getting Started

To run this project locally on your computer, follow these steps:

1. **Open the Project**

   Open `index.html` in your preferred web browser to start playing the game.

## Project Structure

- `index.html`: The main HTML file for the Number Guessing Game.
- `styles.css`: The stylesheet for styling the game interface.
- `script.js`: The JavaScript file containing the game logic.

## How It Works

- When the game starts, a random number between 1 and 50 is generated.
- The user inputs their guess and clicks "Submit Guess".
- Feedback is provided based on the guess:
  - **Too low** or **Too high** with additional proximity hints.
  - **Congratulations** message when the correct number is guessed.
- The number of attempts is updated with each guess.
- Users can restart the game at any time by clicking "Restart Game", which generates a new number and resets the attempt count.

