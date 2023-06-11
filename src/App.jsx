import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
// import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import ArtikelPage from "./pages/ArtikelPage";
import TestimonialPage from "./pages/TestimonialPage";
import FaqPage from "./pages/FaqPage";

function App() {
  return (
    <>
      <div>
        <NavbarComponent />

        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/artikel" Component={ArtikelPage} />
          <Route path="/testimonial" Component={TestimonialPage} />
          <Route path="/faq" Component={FaqPage} />
        </Routes>

        {/* <FooterComponent /> */}
      </div>
    </>
  );
}

export default App;
