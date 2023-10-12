import styled from "styled-components";
import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Title>Home</Title>
      <Button onClick={() => setCount(count + 1)}>count is {count}</Button>
    </>
  );
};

const Button = styled.button`
  background-color: #1a1a1a;
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  font-family: inherit;
  font-size: 1em;
  font-weight: 500;
  padding: 0.6em 1.2em;
  transition: border-color 0.25s;

  &:hover {
    border-color: #646cff;
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

const Title = styled.h1`
  font-size: 3.2rem;
  line-height: 1.1;
  margin: 0.5em 0;
`;

export default Home;
