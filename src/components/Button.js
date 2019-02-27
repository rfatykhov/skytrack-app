import styled from "styled-components";

const Button = styled.button`
  width: auto;
  height: 50px;
  background-color: #1da1f2;
  color: white;
  font-size: 20px;
  padding: 5px 10px;
  margin: 10px 10px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  outline: none;
  &:hover {
    background-color: #0072bb;
  }
`;

export default Button;
