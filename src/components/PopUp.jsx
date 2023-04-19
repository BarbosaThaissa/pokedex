import React, { useContext } from "react";
import styled from "styled-components";

import { FunctionsContext } from "../context/FunctionsContext";

const PopUp = () => {
  const { popAdd, popUpVisivel, fecharPopUp } = useContext(FunctionsContext);

  return (
    <PopUpContainer onClick={fecharPopUp} popUpVisivel={popUpVisivel}>
      {popAdd ? (
        <Wrap>
          <h1>Gotcha!</h1>
          <p>O Pokémon foi adicionado a sua Pokédex</p>
        </Wrap>
      ) : (
        <Wrap>
          <h1>Oh, no!</h1>
          <p>O Pokémon foi removido da sua Pokédex</p>
        </Wrap>
      )}
    </PopUpContainer>
  );
};

const PopUpContainer = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
  display: ${({ popUpVisivel }) => (popUpVisivel ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  z-index: 5;
`;

const Wrap = styled.div`
  max-width: 400px;
  color: black;
  background-color: white;
  padding: 3.3rem 3rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > h1 {
    font-weight: 900;
    font-size: 2.3rem;
  }

  & > p {
    font-weight: bold;
    font-size: 13px;
  }
`;

export default PopUp;
