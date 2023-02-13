import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import "./index.css";
import "tw-elements";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <App />
        </MantineProvider>
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);
