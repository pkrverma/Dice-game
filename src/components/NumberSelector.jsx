import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({ error, setError, selectedNum, setSelectedNum }) => {
  const num = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (n) => {
    setSelectedNum(n);
    setError("");
  };
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {num.map((n) => {
          return (
            <Box
              key={n}
              isSelected={n === selectedNum}
              onClick={()=>numberSelectorHandler(n)}
            >
              {n}
            </Box>
          );
        })}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .error {
    color: red;
    font-weight: normal;
    height: 28px;
  }
  .flex {
    display: flex;
    gap: 18px;
  }
  p {
    font-size: 18px;
    font-weight: 700;
  }
`;

const Box = styled.div`
  height: 52px;
  width: 52px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  cursor: pointer;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
