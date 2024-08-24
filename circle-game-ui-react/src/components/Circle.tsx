const Circle = ({ x, y, bgColor }) => {
  return (
    <div
      className="circle"
      style={{
        backgroundColor: bgColor,
        top: `${y - 12}px`,
        left: `${x - 12}px`,
      }}
    />
  );
};

export default function Circles({ circle }) {
  return circle.map((cell) => <Circle key={cell.id} {...cell} />);
}
