import { useEffect, useState } from "react";

// const winnerPattern = [];

function useMemoryGame(size, move, setMove) {
  const [board, setBoard] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [win, setWin] = useState(false);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [message, setMessage] = useState("");

  const initialBoard = () => {
    const totalCards = size * size;
    const pairCount = Math.floor(totalCards / 2);
    const numbers = [...Array(pairCount).keys()].map((n) => n + 1);

    const shuffleCards = [...numbers, ...numbers]
      .sort(() => Math.random() - 0.5)
      .slice(0, totalCards)
      .map((card, index) => ({ id: index, card }));
    setBoard(shuffleCards);
    setFlipped([]);
    setWin(false);
    setSolved([]);
    setDisabled(false);
    setMessage("");
    setMove(0);
  };

  useEffect(() => {
    initialBoard();
  }, [size]);

  useEffect(() => {
    if (solved.length === board.length && board.length > 0) {
      // All cards matched
      setWin(true);
    }
  }, [solved, board]);

  const checkMatch = (secondId) => {
    const [firstId] = flipped;
    if (board[firstId].card === board[secondId].card) {
      // Implement logic to handle match found
      setSolved([...solved, firstId, secondId]);
      setFlipped([]);
      setDisabled(false);
    } else {
      // Implement logic to handle incorrect match
      setTimeout(() => {
        setFlipped([]);
        setDisabled(false);
      }, 1000);
    }
  };
  const onCellClick = (event) => {
    // Implement logic to handle cell click
    setClickCount((prevCount) => prevCount + 1);
    const index = parseInt(event.target.dataset.index);

    if (clickCount === parseInt(move) && parseInt(move) !== 0) {
      setDisabled(true);
      setMessage("Game Over!!!");
      return;
    }
    if (disabled || win) return;

    if (flipped.length === 0) {
      setFlipped([index]);
      return;
    }

    if (flipped.length === 1) {
      setDisabled(true);
      if (index !== flipped[0]) {
        setFlipped([...flipped, index]);
        // check match logic
        checkMatch(index);
      } else {
        setFlipped([]);
        setDisabled(false);
      }
    }
  };

  const isFlipped = (id) => flipped.includes(id) || solved.includes(id);
  const isSolved = (id) => solved.includes(id);

  const reset = () => {
    // Implement logic to reset the game
    initialBoard();
  };

  return {
    board,
    onCellClick,
    reset,
    isFlipped,
    isSolved,
    win,
    clickCount,
    message,
  };
}

export default useMemoryGame;
