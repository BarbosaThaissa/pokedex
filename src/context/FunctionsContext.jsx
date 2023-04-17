import React, { useState, useEffect, createContext } from "react";

export const FunctionsContext = createContext();

const FunctionsProvider = ({ children }) => {
  const [cardPokemon, setCardPokemon] = useState([]);

  const addPokedex = (pokemon) => {
    setCardPokemon([...cardPokemon, pokemon]);
  };

  const removePokedex = (pokemon) => {
    const newList = cardPokemon.filter((nameP) => nameP.name !== pokemon.name);

    setCardPokemon(newList);
  };

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
      }}
    >
      {children}
    </FunctionsContext.Provider>
  );
};

export default FunctionsProvider;
