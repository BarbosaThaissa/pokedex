import React, { useContext } from "react";
import styled from "styled-components";

import { FunctionsContext } from "../context/FunctionsContext";

const PopUp = () => {
  const { popAdd, fecharPopUp } = useContext(FunctionsContext);

  return (
    <PopUpContainer onClick={fecharPopUp}>
      {popAdd ? (
        <WrapGet>
          <h1>Testa Pegar aquiiiiiii!!!!!!!!</h1>
        </WrapGet>
      ) : (
        <WrapRemv>
          <h1>Testa Remove aquiiiiiii!!!!!!!!</h1>
        </WrapRemv>
      )}
    </PopUpContainer>
  );
};

const PopUpContainer = styled.div`
  width: 100%;
  height: 40%;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  z-index: 5;
`;

const WrapGet = styled.div`
  width: 40%;
  color: black;
  background-color: white;
`;

const WrapRemv = styled.div`
  background-color: white;
`;

export default PopUp;
