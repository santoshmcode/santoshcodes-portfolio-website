import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyles />
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
