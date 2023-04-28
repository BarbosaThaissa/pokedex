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

  let result = 0;

  return (
    <Container>
      <h1>Detalhes</h1>
      {pokemonDet.map((pokemon) => (
        <Card key={pokemon.id} back={pokemon.name}>
          <ImgsSecon>
            <div>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <div>
              <img src={pokemon.sprites.back_default} alt={pokemon.name} />
            </div>
          </ImgsSecon>
          <Status>
            <div>
              <span>Base Stats</span>
              <div>
                {pokemon.stats.map((item) => (
                  <ContainerStatus key={item.stat.name}>
                    <Nome>
                      {item.stat.name === "special-defense"
                        ? "Sp. Def"
                        : item.stat.name === "special-attack"
                        ? "Sp. Atk"
                        : item.stat.name}
                    </Nome>
                    <Numb>{item.base_stat}</Numb>
                    <Porcentagem porc={item.base_stat}>
                      <div>.</div>
                    </Porcentagem>
                  </ContainerStatus>
                ))}
              </div>

              <Total>
                <Nome>Total</Nome>
                <Numb>
                  {pokemon.stats.map((num) => {
                    result += Number(num.base_stat);
                  })}
                  {result}
                </Numb>
              </Total>
            </div>
          </Status>
          <DetailsPrinc>
            <p>#{pokemon.id}</p>
            <h1>{pokemon.name}</h1>
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
            <Text>
              <Title>Moves:</Title>
              {pokemon.moves.slice(0, 4).map((moveI) => (
                <SubTitle key={moveI.move.name}>
                  {moveI.move.name.replace("-", " ")}
                </SubTitle>
              ))}
            </Text>
          </DetailsPrinc>
          <ImgsPrinc imgBac={pokemon.sprites.other.dream_world.front_default}>
            {/* <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt="phto pokemon"
            /> */}
          </ImgsPrinc>
          <Buttons>
            {cardPokemon.find((nameP) => nameP.name === pokemon.name) ? (
              <BtnEx onClick={() => removePokedex(pokemon)}>Excluir</BtnEx>
            ) : (
              <BtnAdd onClick={() => addPokedex(pokemon)}>Capturar!</BtnAdd>
            )}
          </Buttons>
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
  //overflow-x: hidden;

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
  margin-top: 2.5rem;
  background: url(${Pokeball});
  background-color: ${({ back }) =>
    back === "pinsir"
      ? "#76A866"
      : back === "magmar" || back === "flareon" || back === "moltres"
      ? "#EAAB7D"
      : back === "aerodactyl" ||
        back === "kabutops" ||
        back === "omanyte" ||
        back === "omastar" ||
        back === "kabuto"
      ? "#d4a373"
      : back === "ditto" ||
        back === "tauros" ||
        back === "eevee" ||
        back === "porygon" ||
        back === "snorlax"
      ? "#BF9762"
      : back === "vaporeon" ||
        back === "lapras" ||
        back === "gyarados" ||
        back === "magikarp" ||
        back === "articuno"
      ? "#71C3FF"
      : back === "dragonite" || back === "dragonair" || back === "dratini"
      ? "#004170"
      : back === "mew" || back === "mewtwo"
      ? "#ea9ab2"
      : back === "jolteon" || back === "zapdos"
      ? "#eec170"
      : "#729F92"};
  background-repeat: no-repeat;
  background-position: right;
  background-position-x: 630px;
  padding: 1rem 1.5rem;
  border-radius: 37px;
  display: flex;
  gap: 1.5rem;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

const ImgsSecon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 600px;

  & > div {
    background-color: #fff;
    width: 280px;
    height: 280px;
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    & > img {
      width: 80%;
    }

    @media (max-width: 752px) {
      width: 140px;
      height: 140px;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: row;
    gap: 7rem;
    height: auto;
    margin-top: 10rem;
  }

  @media (max-width: 752px) {
    gap: 1rem;
  }
`;

const Status = styled.div`
  border-radius: 8px;
  background-color: #fff;
  width: 343px;
  height: 600px;
  color: black;
  padding: 1rem;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    & > span {
      font-weight: bold;
      font-size: 24px;
      line-height: 29px;
    }
  }

  @media (max-width: 1000px) {
    height: auto;
  }
`;

const ContainerStatus = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: center;
  padding-top: 4px;
  padding-bottom: 4px;
  border-top: 1px solid rgba(0, 0, 0, 0.14);
  text-transform: capitalize;
`;

const Porcentagem = styled.div`
  width: 100%;
  color: transparent;
  display: flex;
  align-items: center;

  & > div {
    width: ${({ porc }) => `${porc}%`};
    height: 50%;
    background-color: #fb8500;
    border-radius: 8px;
  }
`;

const Nome = styled.span`
  color: rgba(0, 0, 0, 0.5);
  min-width: 60px;
  text-align: end;
`;

const Numb = styled.span`
  font-weight: 500;
`;

const Total = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 4px;
  padding-bottom: 4px;
  border-top: 1px solid rgba(0, 0, 0, 0.14);
  border-bottom: 1px solid rgba(0, 0, 0, 0.14);
  margin-top: -1rem;
`;

const DetailsPrinc = styled.div`
  width: 290px;
  height: 600px;
  display: flex;
  flex-direction: column;

  & > h1::first-letter {
    text-transform: uppercase;
  }

  & > p {
    font-size: 14px;
    margin-bottom: -5px;
  }
`;

const DivSpans = styled.div`
  display: flex;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 1.5rem;
  height: 20%;
`;

const Text = styled.div`
  color: black;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 1rem;
  min-height: 80%;

  span {
    text-transform: capitalize;
  }
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
`;

const SubTitle = styled.span`
  margin-top: 1rem;
  background-color: #ececec;
  border-radius: 12px;
  border: 1px dashed rgba(0, 0, 0, 0.14);
  width: fit-content;
  padding: 8px;
  font-size: 14px;
  line-height: 17px;
`;

const Icons = styled.div`
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

const Span = styled.div`
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

const ImgsPrinc = styled.div`
  width: 250px;
  height: 250px;
  position: absolute;
  left: 950px;
  top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${({ imgBac }) => imgBac})});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @media (max-width: 1000px) {
    position: relative;
    top: -1200px;
    left: 420px;
  }

  @media (max-width: 752px) {
    left: 200px;
    top: -1400px;
    width: 140px;
  }
`;

const Buttons = styled.div`
  position: relative;
  top: 530px;
  right: -35px;
  height: fit-content;

  @media (max-width: 1000px) {
    position: relative;
    top: -1073px;
    left: -270px;
  }

  @media (max-width: 752px) {
      left: 0;
      top: -1500px;
  }
`;

const BtnAdd = styled.button`
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 10px;
  background-color: #38b000;
  font-size: 17px;
  transition: all 0.3;

  &:hover {
    cursor: pointer;
    background-color: #6a994e;
  }
`;

const BtnEx = styled(BtnAdd)`
  background-color: #f94144;
  padding: 1rem 2.5rem;

  &:hover {
    background-color: #df2935;
    cursor: pointer;
  }
`;

export default Details;
