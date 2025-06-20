import { useState } from "react";
import StartGame from "./components/StartGame";
import "./App.css";
import GamePlay from "./components/GamePlay";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>
      {!isGameStarted ? (
        <StartGame toggle={toggleGamePlay} />
      ) : (
        <GamePlay />
      )}
    </>
  );
};

export default App;
