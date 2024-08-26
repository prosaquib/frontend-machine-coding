import useTicTacToe from "../hooks/useTicTacToe";

function TicTacToe() {
  const { board, handleClick, getMessage, reset } = useTicTacToe();
  const message = getMessage();
  return (
    <div className="game">
      <div className="status">
        <h2>{message}</h2>
        <button onClick={reset}>reset</button>
      </div>
      <div className="board" onClick={handleClick}>
        {board.map((b, index) => (
          <button
            key={index}
            className="cell"
            data-index={index}
            data-status={b}
            aria-disabled={b !== null}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TicTacToe;
