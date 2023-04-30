import React from "react";
import styled from "styled-components";
import Logo from "../assets/pngwing.com.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <A to="/" className={location.pathname === "/" ? "display-header" : ""}>
        {" "}
        &#60; Todos os Pokémons
      </A>
      <img src={Logo} alt="logo" />

      <Link to="/pokedex">
        <Button
          className={location.pathname === "/pokedex" ? "display-header" : ""}
        >
          Pokedéx
        </Button>
      </Link>
    </Container>
  );
};

const Container = styled.header`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1.3rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;

  & > img {
    width: 250px;
    margin-left: -10px;

    @media (max-width: 850px) {
      width: 200px;
    }

    @media (max-width: 580px) {
      width: 80px;
    }
  }
`;

const A = styled(Link)`
  font-weight: bold;
  font-size: 1.3rem;
  color: black;
  text-decoration: none;
  border-bottom: 2px solid #333;

  &:hover {
    transition: all 0.3s ease;
    background-color: #c7f9cc;
    border-radius: 8px;
  }

  @media (max-width: 880px) {
    font-size: 1rem;
  }

  @media (max-width: 580px) {
    font-size: 0.7rem;
  }
`;

const Button = styled.button`
  border: none;
  background-color: #33a1fd;
  padding: 1rem 5rem;
  font-size: 1.5rem;
  fontt-weight: bold;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4cc9f0;
  }

  @media (max-width: 850px) {
    font-size: 1rem;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }

  @media (max-width: 580px) {
    font-size: 0.8rem;
  }
`;

const ButtonEx = styled(Button)`
  background-color: #f94144;
  padding: 1rem 3rem;

  &:hover {
    background-color: #df2935;
  }

  @media (max-width: 850px) {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }
`;

const ButtonAdd = styled(ButtonEx)`
  background-color: #70e000;

  &:hover {
    background-color: #a7c957;
  }
`;

export default Header;
