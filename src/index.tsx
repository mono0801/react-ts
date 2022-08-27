import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Animation from "./Animation";
import Theme from "./Theme";
import { ThemeProvider } from "styled-components";

// textColor, backgroundColor와 같이 이름이 같아야한다
const darkTheme = {
    textColor: "white",
    backgroundColor: "#111",
};

const lightTheme = {
    textColor: "#111",
    backgroundColor: "white",
};

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <App />
            <Animation />
            <Theme />
        </ThemeProvider>
    </React.StrictMode>
);
