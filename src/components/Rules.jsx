import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          After click on dice if selected number is equal to dice number you
          will get same point as dice
        </p>
        <p>If you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
background-color: #fbf1f1;
padding: 20px;
max-width: 800px;
margin: 34px auto 68px;
border-radius: 10px;
border: 1px solid #ccc;
  h2 {
    font-size: 18px;
  }
  .text{
    margin-top: 10px;
  }
`;
