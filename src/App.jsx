import React from "react";
import styled from "styled-components";
import MyRoutes from "./components/MyRoutes";

const App = () => {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Div></Div>
      <MyRoutes />
    </div>
  );
};

const Div = styled.div`
  width: 300px;
  height: 300px;
  background-color: purple;
`;

export default App;
