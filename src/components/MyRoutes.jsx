import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import PopUp from "./PopUp";
import Home from "../pages/Home";
import PokedexPage from "../pages/PokedexPage";
import Details from "../pages/Details";

const MyRoutes = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="https://pokedexlbn.vercel.app/pokedex" element={<PokedexPage />} />
          <Route path="https://pokedexlbn.vercel.app/detail/:name" element={<Details />} />
        </Routes>
        <PopUp />
        <Footer />
      </Router>
    </div>
  );
};

export default MyRoutes;
