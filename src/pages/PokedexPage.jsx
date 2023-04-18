import React, { useState, useContext } from "react";
import styled from "styled-components";

import { FunctionsContext } from "../context/FunctionsContext";
import Cards from "../components/Cards";

const PokedexPage = () => {
  const { cardPokemon } = useContext(FunctionsContext);

  return (
    <Container>
      <h1>Meus Pokémons</h1>

      {cardPokemon.length <= 0 ? (
        <Text>
          <h2>A Pokedex estar vazia!</h2>
          <h2>Adicione um Pokemon aqui.</h2>
        </Text>
      ) : (
        <StelydCard>
          {cardPokemon.map((pokemon) => (
            <Cards key={pokemon.name} pokemon={pokemon} />
          ))}
        </StelydCard>
      )}
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

  @media (max-width: 500px) {
    min-height: calc(100vh - 270px);
  }
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 63.4vh;
  padding-top: 10rem;

  & > h2 {
    font-size: 2rem;
    margin-top: 10px;
  }

  @media (max-width: 850px) {
    height: 59.6vh;
  }

  @media (max-width: 500px) {
    & > h2 {
      font-size: 1.5rem;
    }
  }
`;

const StelydCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 3rem;
  min-height: 58.2vh;

  @media (max-width: 850px) {
    min-height: auto;
  }
`;

export default PokedexPage;
