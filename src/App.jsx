import { useState } from 'react'
import { AuthProvider } from './context/AuthContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Daftar from "./pages/login-register/Daftar";
import Login from "./pages/login-register/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./Navbar";

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
