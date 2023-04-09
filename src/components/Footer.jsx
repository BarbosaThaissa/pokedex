import React from "react";
import styled from "styled-components";
import { FaInstagramSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import LogoFooter from '../assets/poke-icon.svg'

const Footer = () => {
  return (
    <div>
      <FooterStelyd>
        <Logo href="/">
          <h1>Pokedéx</h1>
        </Logo>
        <p>Copyright &copy; 2023 Thaissa Barbosa. All rights reserved.</p>

        <Icons>
          <a href="https://www.linkedin.com/in/barbosathaissa/">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/thaissabarbosaa/">
            <FaInstagramSquare />
          </a>
          <a href="https://github.com/BarbosaThaissa">
            <FaGithub />
          </a>
        </Icons>
      </FooterStelyd>
    </div>
  );
};

const FooterStelyd = styled.footer`
  background-color: #090b13;
  color: white;
  padding: 0.8rem 3rem;
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: space-around;

  & > p {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    text-decoration: none;
    color: white;

    &:hover {
      color: yellow;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    & > p {
      display: none;
    }
  }
`;
const Logo = styled.a`
  padding: 0;
  letter-spacing: 0;
  & > h1 {
    font-family: sans-serif;
    font-weight: bold;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  & > a {
    color: #fafafa;
    font-size: 2rem;
  }
  & > a:hover {
    cursor: pointer;
    color: pink;
  }
`;

export default Footer;
