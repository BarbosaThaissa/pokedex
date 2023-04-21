import React from "react";
import styled, { keyframes } from "styled-components";

const Loading = () => {
  return (
    <Container>
      <Wrap>
        <h1>Loading...</h1>
        <LoadingBar></LoadingBar>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 55.5vh;
  border-radius: 10px;
  margin-top: 20px;

  @media (max-width: 850px) {
    min-height: 51vh;
  }
`;

const Wrap = styled.div`
  width: 100%;
  padding: 1rem 9rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  & > h1 {
    color: #a2d2ff;
  }

  @media (max-width: 650px) {
    padding: 1rem 1rem;
  }
`;

const move = keyframes`
  0% {
    left: 0;
  }
  100% {
    left: 100%;
  }
`;

const LoadingBar = styled.div`
  width: 100%;
  height: 15px;
  background-color: #33a1fd;
  position: relative;
  border-radius: 3px;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 40%;
    height: 15px;
    background-color: #4cc9f0;
    border-radius: 2px;
    animation: ${move} 1s infinite;
  }
`;

export default Loading;
