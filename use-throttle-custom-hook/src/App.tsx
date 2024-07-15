import { useEffect, useState } from "react";
import "./App.css";
import useThrottle from "./hooks/use-throttle-hook";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    console.log("Throttle Called");

    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  const throttleResize = useThrottle(handleResize, 1000);

  useEffect(() => {
    window.addEventListener("resize", throttleResize);

    return () => {
      window.removeEventListener("resize", throttleResize);
    };
  }, []);
  return (
    <div>
      Window: {windowSize.width} x {windowSize.height}
    </div>
  );
}

export default App;
