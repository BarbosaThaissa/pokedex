import React, { useState, useEffect, createContext } from "react";

export const FunctionsContext = createContext();

const FunctionsProvider = ({ children }) => {
  const [cardPokemon, setCardPokemon] = useState([]);
  const [popUpVisivel, setPopUpVisivel] = useState(false);
  const [popAdd, setPopAdd] = useState(true);

  const addPokedex = (pokemon) => {
    abrirPopUp();
    setCardPokemon([...cardPokemon, pokemon]);
    setPopAdd(true);
  };

  const removePokedex = (pokemon) => {
    const newList = cardPokemon.filter((nameP) => nameP.name !== pokemon.name);

    abrirPopUp();
    setCardPokemon(newList);
    setPopAdd(false);
  };

  const abrirPopUp = () => {
    setPopUpVisivel(true);
  };

  const fecharPopUp = () => {
    setPopUpVisivel(false);
  };

  const test = [...cardPokemon, "vai", "porra"];

  // carregar itens no localStorage quando o componente for montado
  useEffect(() => {
    const pokeJSON = localStorage.getItem("pokedex");
    const myPokedex = JSON.parse(pokeJSON);
    if (myPokedex) {
      setCardPokemon(myPokedex);
    }
  }, []);

  // atualizar localStorage sempre que os itens mudarem
  useEffect(() => {
    const pokeJSON = JSON.stringify(cardPokemon);
    localStorage.setItem("pokedex", pokeJSON);
  }, [cardPokemon]);

  return (
    <FunctionsContext.Provider
      value={{
        cardPokemon,
        setCardPokemon,
        addPokedex,
        removePokedex,
        popAdd,
        popUpVisivel,
        fecharPopUp,
      }}
    >
      {children}
    </FunctionsContext.Provider>
  );
};

export default FunctionsProvider;
