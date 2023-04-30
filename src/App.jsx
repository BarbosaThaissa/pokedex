import React, { useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";
import MyRoutes from "./router/MyRoutes";
import { FunctionsContext } from "./context/FunctionsContext";

const App = () => {
  const { popUpVisivel } = useContext(FunctionsContext);
  return (
    <div className={`${popUpVisivel ? "hidden" : ""} relative`}>
      <MyRoutes />
      <GlobalStyle popUpVisivel={popUpVisivel} />
    </div>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
      overflow: ${({ popUpVisivel }) => (popUpVisivel ? "hidden" : "")} ;
  }
`;

export default App;
