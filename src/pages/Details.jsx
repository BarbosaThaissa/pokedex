import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import { FunctionsContext } from "../context/FunctionsContext";

const Details = () => {
  const { cardPokemon, setTemPokedex, setNamePokemx } = useContext(FunctionsContext);

  const includesPokedex = (namePoke) => {
    let test = "fazer a funcao aqui";
  };
  return (
    <Container>
      <h1>Detalhes</h1>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  //justify-content: center;
  flex-direction: column;
  padding: 3rem 1.5rem;
  position: relative;
  top: 130px;
  min-height: calc(100vh - 250px);
  margin-bottom: 8rem;

  & > h1 {
    font-size: 2.5rem;
    font-weight: bold;

    @media (max-width: 500px) {
      font-size: 2rem;
      margin-top: -40px;
    }
  }
`;

export default Details;
