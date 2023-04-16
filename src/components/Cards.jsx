import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { FunctionsContext } from "../context/FunctionsContext";

//imgs
import Pokeball from "../assets/pokeball.svg";
import BugSvg from "../assets/bug.svg";
import Dragon from "../assets/dragon.svg";
import Fire from "../assets/fire.svg";
import Grass from "../assets/grass.svg";
import Ice from "../assets/ice.svg";
import Normal from "../assets/normal.svg";
import Psch from "../assets/psychi.svg";
import Water from "../assets/water.svg";
import Rock from "../assets/rock.svg";
import Eletr from "../assets/electric.svg";
import Flying from "../assets/flying.svg";

const URLBase = "https://pokeapi.co/api/v2/pokemon/";

const Cards = (props) => {
  const [pokemonDet, setPokemonDet] = useState([]);

  const { cardPokemon, addPokedex, removePokedex } =
    useContext(FunctionsContext);

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
    <>
      {pokemonDet.map((pokemonD) => (
        <Container key={pokemonD.id} bg={pokemonD.name}>
          <Wrap>
            <CardText>
              <p>#{pokemonD.id}</p>
              <h2>{pokemonD.name}</h2>
              <SpanDiv>
                {pokemonD.types.map((typeA, index) => (
                  <>
                    <Icon back={typeA.type.name}>
                      <img
                        src={
                          typeA.type.name === "bug"
                            ? BugSvg
                            : typeA.type.name === "fire"
                            ? Fire
                            : typeA.type.name === "rock"
                            ? Rock
                            : typeA.type.name === "normal"
                            ? Normal
                            : typeA.type.name === "grass"
                            ? Grass
                            : typeA.type.name === "dragon"
                            ? Dragon
                            : typeA.type.name === "ice"
                            ? Ice
                            : typeA.type.name === "psychic"
                            ? Psch
                            : typeA.type.name === "electric"
                            ? Eletr
                            : typeA.type.name === "flying"
                            ? Flying
                            : Water
                        }
                        alt="icon"
                      />
                    </Icon>
                    <Span key={index} back={typeA.type.name}>
                      {typeA.type.name}
                    </Span>
                  </>
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
            <button>Capturar!</button>
          </Buttons>
        </Container>
      ))}
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background: url(${Pokeball});
  background-color: ${({ bg }) =>
    bg === "pinsir"
      ? "#76A866"
      : bg === "magmar" || bg === "flareon" || bg === "moltres"
      ? "#EAAB7D"
      : bg === "aerodactyl" ||
        bg === "kabutops" ||
        bg === "omanyte" ||
        bg === "omastar" ||
        bg === "kabuto"
      ? "#d4a373"
      : bg === "ditto" ||
        bg === "tauros" ||
        bg === "eevee" ||
        bg === "porygon" ||
        bg === "snorlax"
      ? "#BF9762"
      : bg === "vaporeon" ||
        bg === "lapras" ||
        bg === "gyarados" ||
        bg === "magikarp" ||
        bg === "articuno"
      ? "#71C3FF"
      : bg === "dragonite" || bg === "dragonair" || bg === "dratini"
      ? "#77a6b6"
      : bg === "mew" || bg === "mewtwo"
      ? "#ea9ab2"
      : bg === "jolteon" || bg === "zapdos"
      ? "#eec170"
      : "#729F92"};
  background-repeat: no-repeat;
  background-position: right;
  width: 389px;
  border: none;
  padding: 0.8rem;
  border-radius: 10px;
  min-height: 180px;
  margin-bottom: 1.5rem;

  @media (max-width: 880px) {
    width: 335px;
  }
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
      background-color: #999;
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

  & > h2::first-letter {
    text-transform: uppercase;
  }

  & > p {
    font-weight: bold;
    font-size: 14px;
    margin-bottom: -5px;
  }
`;

const SpanDiv = styled.div`
  display: flex;
  width: 100%;
  margin-top: 8px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5px;
  background-color: ${({ back }) =>
    back === "bug"
      ? "#316520"
      : back === "fire"
      ? "#F44900"
      : back === "rock"
      ? "#C8B686"
      : back === "normal"
      ? "#8A8A8A"
      : back === "water"
      ? "#33A4F5"
      : back === "ice"
      ? "#74CEC0"
      : back === "dragon"
      ? "#0A6CBF"
      : back === "psychic"
      ? "#F67176"
      : back === "electric"
      ? "#F4D23B"
      : back === "flying"
      ? "#6290c3"
      : "#70B873"};
  border-top: 1px dashed white;
  border-left: 1px dashed white;
  border-bottom: 1px dashed white;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

  & > img {
    height: 15px;
  }
`;

const Span = styled.span`
  background-color: ${({ back }) =>
    back === "bug"
      ? "#316520"
      : back === "fire"
      ? "#F44900"
      : back === "rock"
      ? "#C8B686"
      : back === "normal"
      ? "#8A8A8A"
      : back === "water"
      ? "#33A4F5"
      : back === "ice"
      ? "#74CEC0"
      : back === "dragon"
      ? "#0A6CBF"
      : back === "psychic"
      ? "#F67176"
      : back === "electric"
      ? "#F4D23B"
      : back === "flying"
      ? "#6290c3"
      : "#70B873"};
  //border-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 3px 7px;
  border-top: 1px dashed white;
  border-right: 1px dashed white;
  border-bottom: 1px dashed white;
  font-size: 13px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  margin-right: 8px;
`;

const CardImg = styled.div`
  width: 35%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  & > img {
    width: 170px;
    height: 150px;
    position: absolute;
    right: 0;
    top: -83px;
  }
`;

export default Cards;
