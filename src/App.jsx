import { useState } from "react";
import { AuthProvider } from './context/AuthContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import Homepage from "./pages/Homepage";
import ArtikelPage from "./pages/ArtikelPage";
import TestimonialPage from "./pages/TestimonialPage";
import FaqPage from "./pages/FaqPage";
import KonsulPage from "./pages/KonsulPage";
import CekPage from "./pages/CekPage";
import NewArticle from "./pages/NewArticle";
import EditArticle from "./pages/EditArticle";
import NotFound from "./pages/NotFound";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const isNavbarVisible = location.pathname !== "/login" && location.pathname !== "/daftar";
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
          <Route path="/cek" Component={CekPage} />
          <Route path="/konsul" Component={KonsulPage} />
        </Routes>

        <FooterComponent />
      </div>
    </>
  );
}

export default App;
