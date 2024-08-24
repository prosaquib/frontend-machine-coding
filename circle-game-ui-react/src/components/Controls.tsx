export default function Controls({ onUndo, onRedo, onReset }) {
  return (
    <div className="controls" onClick={(e) => e.stopPropagation()}>
      <button onClick={onUndo}>Undo</button>
      <button onClick={onRedo}>Redo</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
