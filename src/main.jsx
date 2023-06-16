import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ScroolToTop from "./components/ScroolToTop.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./dist/css/main.css";
import "animate.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScroolToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);