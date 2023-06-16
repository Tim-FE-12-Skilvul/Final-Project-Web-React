import { useState } from "react";
import { AuthProvider } from './context/AuthContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useLocation } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import Homepage from "./pages/Homepage";
import Daftar from "./pages/login-register/Daftar";
import Login from "./pages/login-register/Login";
import ArtikelPage from "./pages/ArtikelPage";
import TestimonialPage from "./pages/TestimonialPage";
import FaqPage from "./pages/FaqPage";
import KonsulPage from "./pages/KonsulPage";
import CekPage from "./pages/CekPage";
import ArticleDetails from "./pages/ArticleDetails";
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
        <AuthProvider>
        {isNavbarVisible && (<NavbarComponent userType={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> )}
         <Routes>
           <Route exact path="/" element={<Homepage />} />
           <Route path="/Artikel" element={<ArtikelPage />} />
           <Route path="/Artikel/:title" element={<ArticleDetails />} />
           <Route path="/Artikel/editarticle/:title" element={<EditArticle/>} />
           <Route path="/Artikel/newarticle" element={<NewArticle />} />
           <Route path="/testimonial" element={<TestimonialPage />} />
           <Route path="/faq" element={<FaqPage />} />
           {/* kurang bagian halaman konsultasi dan cek stunting */}
           <Route path="/cek" element={<CekPage />} />
           <Route path="/konsul" element={<KonsulPage />} />
           <Route path="/daftar" element={<Daftar />} />
           <Route path="/login" element={<Login />} />
           <Route path="*" element={<NotFound />} />
         </Routes>
        </AuthProvider>
        <FooterComponent />
      </div>
    </>
  );
}
export default App;