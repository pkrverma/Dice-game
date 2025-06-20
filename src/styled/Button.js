import styled from "styled-components";

export const Button = styled.button`
  color: #fff;
  padding: 10px 18px;
  border-radius: 5px;
  background: #000;
  min-width: 220px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.4s background ease-in-out;
  &:hover {
    background: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in-out;
  }
`;

export const OutlineButton = styled(Button)`
  background: #fff;
  border: 1px solid black;
  color: black;
  transition: 0.4s background ease-in-out;
    &:hover {
    background: black;
    border: 1px solid transparent;
    color: white;
  }
`;
