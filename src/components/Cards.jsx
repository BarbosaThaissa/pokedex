import React, { useState, useEffect } from "react";
import styled from "styled-components";

const URLBase = "https://pokeapi.co/api/v2/pokemon/";

const Cards = (props) => {
  const [pokemonDet, setPokemonDet] = useState([]);

  const { pokemon } = props;

  const getPokemons = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setPokemonDet([data]);
  };

  useEffect(() => {
    const URL = `${URLBase}${pokemon.name}/`;
    getPokemons(URL);
  }, []);

  return (
    <div>
      {pokemonDet.map((pokemonD) => (
        <Container key={pokemonD.id}>
          <Wrap>
            <CardText>
              <p>#{pokemonD.id}</p>
              <h2>{pokemonD.name}</h2>
              <SpanDiv>
                {pokemonD.types.map((typeA, index) => (
                  <span key={index}>emo {typeA.type.name}</span>
                ))}
              </SpanDiv>
            </CardText>
            <CardImg>
              <img
                src={pokemonD.sprites.other.dream_world.front_default}
                alt="photo"
              />
            </CardImg>
          </Wrap>
          <Buttons>
            <a href={`/detail/${pokemonD.name}`}>Detales</a>
            <button>Captura!</button>
          </Buttons>
        </Container>
      ))}
    </div>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 389px;
  border: 1px solid blue;
  padding: 0.8rem;
  border-radius: 10px;
  min-height: 180px;
`;
const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
  align-items: center;
`;

const Buttons = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
  align-items: center;
  justify-content: space-between;

  & > button {
    padding: 0.5rem 2rem;
    border-radius: 8px;
    border: none;
    font-family: Verdana;
    font-weight: 600;
    transition: all 0.3s ease-in-out;

    &:hover {
      cursor: pointer;
    }
  }

  & > a {
    color: white;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover {
      text-decoration: none;
      color: pink;
    }
  }
`;

const CardText = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: lightgreen;

  & > h2::first-letter {
    text-transform: uppercase;
  }
`;

const SpanDiv = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;

  & > span {
    background-color: orange;
    border-radius: 8px;
    padding: 3px 7px;
  }
`;

const CardImg = styled.div`
  width: 30%;
  background-color: purple;

  & > img {
    width: 100%;
  }
`;

export default Cards;
