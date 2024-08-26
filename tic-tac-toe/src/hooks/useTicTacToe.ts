import { useState } from "react";

const initialBoard = () => Array(9).fill(null);
const winnerPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard());
  const [isCurrentPlayer, setIsNextPlayer] = useState(true);
  
const checkWin = (board: string[]) => {
    for(let i=0; i<winnerPattern.length; i++) {
    const [a,b,c] = winnerPattern[i];
    if(board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
    }
    }
    return null;
  }

const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
  const index = parseInt((event.target as HTMLDivElement).dataset.index!);
  console.log('index: ' + index);
  
  if (board[index] || checkWin(board)) {
    return;
  }
  const newBoard = [...board];
  newBoard[index] = isCurrentPlayer ? 'X' : 'O';
  setBoard(newBoard);
  setIsNextPlayer(!isCurrentPlayer);
}
  const getMessage = () => {
    const winner = checkWin(board);
    if (winner) {
      return `Player ${winner} wins!`;
    }
    if(!board.includes(null)) return 'Match drawn!';
    return `Player ${isCurrentPlayer? 'X' : 'O'}, your turn!`;
  }
  const reset = () => {
    setBoard(initialBoard());
    setIsNextPlayer(true);
  }
  return {board, handleClick, getMessage, reset}
}

export default useTicTacToe;