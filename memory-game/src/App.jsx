import { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";

function App() {
  const [grid, setGrid] = useState(4);
  const [move, setMove] = useState(0);
  return (
    <div className="container">
      <h1>Memory Game</h1>
      <div>
        <label htmlFor="grid">Grid Size: max(10)</label>
        <input
          type="number"
          id="grid"
          name="grid"
          value={grid}
          min={2}
          max={10}
          onChange={(e) => setGrid(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="grid">Max moves: (0 for unlimited)</label>
        <input
          type="number"
          id="moves"
          name="moves"
          value={move}
          min={0}
          max={10}
          onChange={(e) => setMove(e.target.value)}
        />
      </div>
      <GameBoard size={grid} move={move} setMove={setMove} />
    </div>
  );
}

export default App;
