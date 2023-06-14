import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import Homepage from "./pages/Homepage";
import ArtikelPage from "./pages/ArtikelPage";
import TestimonialPage from "./pages/TestimonialPage";
import FaqPage from "./pages/FaqPage";

function App() {
  return (
    <>
      <div>
        <NavbarComponent />

        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/artikel" Component={ArtikelPage} />
          <Route path="/testimonial" Component={TestimonialPage} />
          <Route path="/faq" Component={FaqPage} />
          {/* kurang bagian halaman konsultasi dan cek stunting */}
        </Routes>

        <FooterComponent />
      </div>
    </>
  );
}

export default App;
