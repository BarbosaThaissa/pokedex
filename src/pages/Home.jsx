import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Cards from "../components/Cards";
import { FunctionsContext } from "../context/FunctionsContext";

const URLBase = "https://pokeapi.co/api/v2/pokemon/?offset=125&limit=27";

const Home = () => {
  const [pokemonsSt, setPokemonsSt] = useState([]);
  const { popUpVisivel } = useContext(FunctionsContext);
  const getPokemons = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setPokemonsSt([data.results]);
  };

  useEffect(() => {
    getPokemons(URLBase);
  }, []);

  return (
    <Container>
      <h1>Todos os Pokémons</h1>
      <StelydCard popUpVisivel={popUpVisivel}>
        {pokemonsSt.map((pokemonNt) =>
          pokemonNt.map((pokemon, index) => (
            <Cards key={index} pokemon={pokemon} />
          ))
        )}
      </StelydCard>
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

const StelydCard = styled.div`
  display: ${({ popUpVisivel }) => (popUpVisivel ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 3rem;
`;

export default Home;
