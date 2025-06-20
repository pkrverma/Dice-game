import React, { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNum, setSelectedNum] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomDice = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const rollDice = () => {
    if (!selectedNum) {
      setError("Please select a number before rolling the dice.");
      return;
    }
    const randomNumber = generateRandomDice(1, 6);
    setCurrentDice(randomNumber);

    if (selectedNum === randomNumber) {
      setTimeout(() => {
        setScore((prevScore) => prevScore + randomNumber);
      }, 300);
    } else {
      setTimeout(() => {
        setScore((prevScore) => prevScore - 2);
      }, 300);
    }

    setSelectedNum(undefined);
  };

  const resetScore = () => {
    setScore(0);
    setSelectedNum(undefined);
    // setCurrentDice(1);
    setError("");
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNum={selectedNum}
          setSelectedNum={setSelectedNum}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button
          onClick={() => {
            setShowRules((prev) => !prev);
          }}
        >
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  max-width: 1180px;
  margin: 0 auto;
  padding-top: 20px;
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 24px;
  }
`;
