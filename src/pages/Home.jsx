import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Cards from "../components/Cards";

const URLBase = "https://pokeapi.co/api/v2/pokemon/?offset=125&limit=27";

const Home = () => {
  const [pokemonsSt, setPokemonsSt] = useState([]);

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
      <StelydCard>
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
  }
`;

const StelydCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 3rem;
`;

export default Home;
