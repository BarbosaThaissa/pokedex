import React from "react";
import styled from "styled-components";


const PokedexPage = () => {
  return (
    <Container>
      <h1>Meus Pokémons</h1>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  //justify-content: center;
  flex-direction: column;
  padding: 3rem 1.5rem;
  position: relative;
  top: 130px;
  min-height: calc(100vh - 250px);
  margin-bottom: 8rem;

  & > h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }
`;

export default PokedexPage;
