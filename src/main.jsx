import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import FunctionsProvider from "./context/FunctionsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FunctionsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FunctionsProvider>
);
