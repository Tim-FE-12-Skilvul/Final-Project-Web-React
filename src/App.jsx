import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Article from './pages/Article'
import ArticleDetails from './pages/ArticleDetails'
import NotFound from './pages/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Article" element={<Article />} />
        <Route path="/Article/:title" element={<ArticleDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
