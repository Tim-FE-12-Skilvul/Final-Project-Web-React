import { useState } from "react";
import { AuthProvider } from './context/AuthContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Daftar from "./pages/login-register/Daftar";
import Login from "./pages/login-register/Login";
import Article from "./pages/Article"
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
      {isNavbarVisible && <Navbar />}
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home userType={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/daftar" element={<Daftar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Article" element={<Article />} />
          <Route path="/Article/:title" element={<ArticleDetails />} />
          <Route path="/newarticle" element={<NewArticle />} />
          <Route path="/Article/editarticle/:title" element={<EditArticle/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
