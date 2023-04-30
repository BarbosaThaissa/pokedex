import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PopUp from "../components/PopUp";
import Home from "../pages/Home";
import PokedexPage from "../pages/PokedexPage";
import Details from "../pages/Details";

const MyRoutes = () => {
  return (
    <>
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
    </>
  );
};

export default MyRoutes;
