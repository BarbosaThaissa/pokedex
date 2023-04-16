import React, { useState, createContext } from "react";

export const FunctionsContext = createContext();

const FunctionsProvider = ({ children }) => {
  const [cardPokemon, setCardPokemon] = useState([]);

  const addPokedex = (pokemon) => {
    const test = 10;
  };

  const removePokedex = (pokemon) => {
    const outest = 20;
  };

  return (
    <FunctionsContext.Provider
      value={{ cardPokemon, setCardPokemon, addPokedex, removePokedex }}
    >
      {children}
    </FunctionsContext.Provider>
  );
};

export default FunctionsProvider;
