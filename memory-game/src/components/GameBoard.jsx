import useMemoryGame from "../hooks/useMemoryGame";

function GameBoard({ size, move, setMove }) {
  const { board, onCellClick, reset, isFlipped, isSolved, win, message } =
    useMemoryGame(size, move, setMove);
  return (
    <>
      <div
        className="board"
        style={{
          width: `min(100%, ${size * 100}px)`,
          gridTemplateColumns: `repeat(${size}, minmax(0,1fr))`,
        }}
        onClick={onCellClick}
      >
        {board.map((cell) => (
          <button
            key={cell.id}
            className="cell"
            style={{
              backgroundColor: isFlipped(cell.id)
                ? isSolved(cell.id)
                  ? "rgb(34 197 94)"
                  : "rgb(59 130 246)"
                : "rgb(209 213 219)",
              color: isFlipped(cell.id)
                ? "rgb(255 255 255"
                : "rgb(156 163 175)",
            }}
            data-index={cell.id}
          >
            {isFlipped(cell.id) ? cell.card : ""}
          </button>
        ))}
      </div>
      <div className="result">{win && "You won"}</div>
      <div className="msg">{message.length > 0 && message}</div>
      <div className="control">
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default GameBoard;
