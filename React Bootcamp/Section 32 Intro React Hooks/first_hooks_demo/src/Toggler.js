import React from "react";
import useToggle from "./hooks/useToggle";

function Toggler() {
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isCat, toggleIsCat] = useToggle(false);
  const [isRain, toggleIsRain] = useToggle(true);

  return (
    <div>
      <h1 onClick={toggleIsHappy}>{isHappy ? "😀" : "😭"}</h1>
      <h1 onClick={toggleIsCat}>{isCat ? "🐕" : "🐱"}</h1>
      <h1 onClick={toggleIsRain}>{isRain ? "⛈" : "☀"}</h1>
    </div>
  );
}

export default Toggler;
