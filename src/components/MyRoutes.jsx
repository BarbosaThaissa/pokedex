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
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokedex" element={<PokedexPage />} />
          <Route path="/detail/:name" element={<Details />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default MyRoutes;
