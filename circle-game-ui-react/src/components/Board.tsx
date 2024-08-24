import React, { useState } from "react";
import { COLORS } from "../Colors";
import Circles from "./Circle";
import Controls from "./Controls";

const getRandomColor = () => {
  return Math.floor(Math.random() * COLORS.length);
};

//Support undo i.e remove last added circle
//Support redo i.e add last added circle
//reset => resetting the board to its orginal state
export default function Board() {
  const [circle, setCircle] = useState([]);
  const [history, setHistory] = useState([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setCircle((prev) => {
      return [
        ...prev,
        {
          x: e.clientX,
          y: e.clientY,
          id: +new Date(),
          bgColor: COLORS[getRandomColor()],
        },
        // ...prev.slice(0, 5), // Limit the size of circle array to 6
      ];
    });
  };

  const handleUndo = () => {
    const copy = [...circle];
    if (!copy.length) return;
    const lastCircle = copy.pop();

    if (lastCircle) {
      setHistory((prev) => [...prev, lastCircle]);
      setCircle(copy);
    }
  };

  const handleRedo = () => {
    const copy = [...history];
    if (!copy.length) return;
    const lastCircle = copy.pop();

    if (lastCircle) {
      setCircle((prev) => [...prev, lastCircle]);
      setHistory(copy);
    }
  };

  const handleReset = () => {
    setCircle([]);
    setHistory([]);
  };

  return (
    <div className="board" onClick={handleClick}>
      <Circles circle={circle} />
      <Controls onUndo={handleUndo} onRedo={handleRedo} onReset={handleReset} />
    </div>
  );
}
