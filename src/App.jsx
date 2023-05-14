import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Redirect } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import MyRoutes from "./router/MyRoutes";
import { FunctionsContext } from "./context/FunctionsContext";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";
import PopUp from "./components/PopUp";
import Home from "./pages/Home";
import PokedexPage from "./pages/PokedexPage";
import Details from "./pages/Details";

const GlobalStyle = createGlobalStyle`
  body {
      overflow: ${({ popUpVisivel }) => (popUpVisivel ? "hidden" : "")} ;
  }
`;

const App = () => {
  const { popUpVisivel } = useContext(FunctionsContext);
  return (
    <div className={`${popUpVisivel ? "hidden" : ""} relative`}>
      <GlobalStyle popUpVisivel={popUpVisivel} />
      {/* <MyRoutes /> */}

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokedex" element={<PokedexPage />} />
          <Route path="/detail/:name" element={<Details />} />
        </Routes>
        <PopUp />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
