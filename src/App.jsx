import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Article from './pages/Article'
import ArticleDetails from './pages/ArticleDetails'
import NewArticle from './pages/NewArticle'
import NotFound from './pages/NotFound'
import BookingDoctor  from './pages/bookDokter/BookingDoctor'
import DoctorDetail from './pages/bookDokter/DoctorDetail'
import { DoctorContext } from './pages/bookDokter/context/DoctorContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Booking" element={<BookingDoctor />}/>
        <Route path="/Booking/:name" element={<DoctorDetail/>}/>
        <Route path="/Article" element={<Article />} />
        <Route path="/Article/:title" element={<ArticleDetails />} />
        <Route path="/newarticle" element={<NewArticle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
