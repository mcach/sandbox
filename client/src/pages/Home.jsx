// Import libraries.
import styled from "styled-components";
import { useState } from "react";

const Home = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;

    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/api/people", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  return (
    <Wrapper>
      <Title>Please enter your credentials</Title>
      <Form onSubmit={handleSubmit}>
        <Input id="username" onChange={handleChange} placeholder="Username" />
        <Input
          id="language"
          onChange={handleChange}
          placeholder="Programming language"
        />
        <Button>Submit</Button>
      </Form>
    </Wrapper>
  );
};

const Button = styled.button`
  background: #ffffff;
  border: 3px solid transparent;
  border-radius: 8px;
  color: #000000;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: bold;
  padding: 0.6em 1.2em;
  transition: border-color 0.25s;
  width: 100%;

  &:hover {
    border-color: #007066;
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 60%;
`;

const Input = styled.input`
  background: #ffffff;
  border: 3px solid #007066;
  border-radius: 8px;
  box-sizing: border-box;
  color: #000000;
  font-size: 1.4rem;
  height: 3em;
  padding: 0 0.5em;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const Title = styled.h1`
  font-size: 3.2rem;
  line-height: 1.1;
  margin: 0.5em 0;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export default Home;
