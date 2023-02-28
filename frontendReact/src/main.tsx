import "./index.css";
import "tw-elements";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter, } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import UserPeovider from "./context/UserContext";
import FilterContextPeovider from "./context/Filterscontext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <UserPeovider>
          <FilterContextPeovider>
            <MantineProvider withGlobalStyles withNormalizeCSS>
              <App />
            </MantineProvider>
          </FilterContextPeovider>
        </UserPeovider>
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);
