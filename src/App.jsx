import React from "react";
import MyRoutes from "./components/MyRoutes";

const App = () => {
  return (
    <div className="App">
      <a href="/detail/nome-aqui">Detalhes</a>
      <MyRoutes />
    </div>
  );
};

export default App;
