import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Visualization from './pages/Visualization'
import Concepts from './pages/Concepts'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visualization" element={<Visualization />} />
        <Route path="/concepts" element={<Concepts />} />
      </Routes>
    </div>
  )
}

export default App
