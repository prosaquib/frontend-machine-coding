# Memory Game

A **Memory Game** built with React.js, where users match pairs of cards by flipping them over. This project demonstrates key React concepts and practices, including component-based design, state management, and conditional rendering.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [How to Play](#how-to-play)
- [Project Structure](#project-structure)
- [Possible Improvements](#possible-improvements)
- [License](#license)

## Overview

The Memory Game is a simple but challenging game that tests the player's memory. The player is presented with a grid of cards, all face down. The objective is to find and match all pairs of cards by flipping them two at a time.

This project was inspired by a Google interview challenge, designed to assess problem-solving abilities and proficiency in React.

## Features

- **Single-player gameplay**: Click to flip cards and try to match all pairs.
- **Responsive design**: Works well on desktop and mobile screens.
- **Dynamic grid layout**: Grid size is adaptable and can be configured for different difficulty levels.
- **Game state management**: Game state is efficiently managed using React's `useState` and `useEffect` hooks.
- **Winning condition**: Displays a congratulatory message when all pairs are matched.

## Tech Stack

- **React.js**: Functional components, hooks (`useState`, `useEffect`)
- **CSS**: Basic styling for layout and animations
- **JavaScript (ES6+)**: Core game logic and utilities

## Getting Started

To run this game locally, follow these steps:

### Prerequisites

Ensure you have the following installed:
- [Node.js (v12+)](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/memory-game.git
   cd memory-game
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm start
   ```

4. Open the game in your browser:
   ```plaintext
   http://localhost:3000
   ```

## How to Play

1. Click on any card to flip it over.
2. Try to find and flip another card that matches the first card.
3. If the cards match, they remain face-up. If they don’t, both cards flip back over.
4. Continue until all pairs are matched.
5. Celebrate your win!

## Project Structure

```plaintext
memory-game/
├── public/
│   ├── index.html          # HTML template
│   └── ...
├── src/
│   ├── components/
│   │   ├── GameBoard.jsx   # Game board layout
│   │   └──    
│   ├── App.jsx             # Main application component
│   ├── App.css             # Main CSS styles
│   ├── index.js            # Entry point for React
│   └── hooks/
│       └── useMemoryGame.js      # Hook for memory game
└── README.md
```

### Key Components

- **`Card`**: Renders each card and handles its flip animation.
- **`GameBoard`**: Manages the grid of cards and tracks game state, including matched pairs and player moves.

## Possible Improvements

- **Timer and move counter**: Add a timer and counter to track the player's performance.
- **Difficulty levels**: Allow different grid sizes for varying difficulty.
- **Animations**: Add smooth animations for card flipping and match indication.
- **Leaderboard**: Track high scores and display the fastest completion times.

## License

This project is licensed under the MIT License.