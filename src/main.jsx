import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import FunctionsProvider from "./context/FunctionsContext";
import LoadingProvider from "./context/LoadingContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FunctionsProvider>
    <LoadingProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </LoadingProvider>
  </FunctionsProvider>
);
