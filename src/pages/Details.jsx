import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Pokeball from "../assets/pokedetail.svg";

import { FunctionsContext } from "../context/FunctionsContext";

//imgs
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

const Details = () => {
  const [pokemonDet, setPokemonDet] = useState([]);

  const { cardPokemon, addPokedex, removePokedex } =
    useContext(FunctionsContext);

  const { name } = useParams();

  const getPokemons = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setPokemonDet([data]);
  };

  useEffect(() => {
    const URL = `${URLBase}${name}/`;
    getPokemons(URL);
  }, []);

  return (
    <Container>
      <h1>Detalhes</h1>
      {pokemonDet.map((pokemon) => (
        <Card key={pokemon.id} back={pokemon.name}>
          <ImgsSecon>
            <div></div>
            <div></div>
          </ImgsSecon>
          <Status>
            <div></div>
          </Status>
          <DetailsPrinc>
            <p>#{pokemon.id}</p>
            <h2>{pokemon.name}</h2>
            <DivSpans>
              {pokemon.types.map((typeA) => (
                <>
                  <Icons back={typeA.type.name}>
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
                  </Icons>
                  <Span back={typeA.type.name}>{typeA.type.name}</Span>
                </>
              ))}
            </DivSpans>
            <Text></Text>
          </DetailsPrinc>
          <ImgsPrinc></ImgsPrinc>
          <div>
            {cardPokemon.find((nameP) => nameP.name === pokemon.name) ? (
              <BtnEx onClick={() => removePokedex(pokemon)}>Excluir</BtnEx>
            ) : (
              <BtnAdd onClick={() => addPokedex(pokemon)}>Capturar!</BtnAdd>
            )}
          </div>
        </Card>
      ))}
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
  background: url(${Pokeball});
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: -63px;

  & > h1 {
    font-size: 2.5rem;
    font-weight: bold;

    @media (max-width: 500px) {
      font-size: 2rem;
      margin-top: -40px;
    }
  }
`;

const Card = styled.div`
  background-color: #729f92;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  display: flex;
  gap: 1rem;
`;

const ImgsSecon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 600px;

  & > div {
    background-color: #fff;
    width: 282px;
    height: 282px;
    border-radius: 8px;
  }
`;
const Status = styled.div`
  border-radius: 8px;
  background-color: #fff;
  width: 343px;
  height: 600px;
`;
const DetailsPrinc = styled.div`
  width: 290px;
  height: 600px;
  background-color: pink;
`;

const DivSpans = styled.div``;

const Span = styled.div``;

const Text = styled.div`
  background-color: #fff;
`;

const Icons = styled.div``;

const ImgsPrinc = styled.div`
  width: 240px;
  background-color: blue;
`;

const BtnAdd = styled.button`
  color: white;
  background-color: green;
`;

const BtnEx = styled.button`
  color: white;
  background-color: red;
`;

export default Details;
