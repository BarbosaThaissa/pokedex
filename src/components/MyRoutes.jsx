import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";
import PokedexPage from "../pages/PokedexPage";
import Details from "../pages/Details";

const MyRoutes = () => {
  return (
    <div>
      <h1>Rotas aqui</h1>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pokedex" element={<PokedexPage />} />
          <Route path="/detail/:id" element={<Details />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default MyRoutes;
