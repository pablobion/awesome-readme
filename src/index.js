import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Styles from "./styles/global";

import ConfigsProvider from "../src/context/contextProvider";

ReactDOM.render(
    <React.StrictMode>
        <ConfigsProvider>
            <App />
            <Styles />
        </ConfigsProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
