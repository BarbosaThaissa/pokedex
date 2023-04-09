import React from "react";
import styled from "styled-components";
import Logo from "../assets/pngwing.com.png";

const Header = () => {
  return (
    <Container>
      <A
        href="/"
        className={window.location.pathname === "/" ? "display-header" : ""}
      >
        {" "}
        &#60; Todos os Pokémons
      </A>
      <img src={Logo} alt="logo" />
      {window.location.pathname === "/" ? (
        <a href="/pokedex">
          <Button
            className={
              window.location.pathname === "/pokedex" ? "display-header" : ""
            }
          >
            Pokedéx
          </Button>
        </a>
      ) : (
        <ButtonEx
          className={
            window.location.pathname === "/pokedex" ? "display-header" : ""
          }
        >
          Excluir da Pokédex
        </ButtonEx>
      )}
    </Container>
  );
};

const Container = styled.header`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1.3rem;

  & > img {
    width: 250px;
    margin-left: -10px;
  }
`;

const A = styled.a`
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
`;

const ButtonEx = styled(Button)`
  background-color: #f94144;
  padding: 1rem 3rem;

  &:hover {
    background-color: #df2935;
  }
`;
export default Header;
