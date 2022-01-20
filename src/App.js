// imports
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
// components
import Nav from './Components/Nav'
import Footer from './Components/Footer.js'
// pages
import Home from './pages/Home'
import NASAList from './pages/NASAList.js'
import About from './pages/About'
import Giphy from './pages/Giphy.js'
// css
import './App.css'

function App() {
  return (
    <div className="App">
      <Nav />
      
      {/* The component that changes in our browser is inside the Routes component */}

      <Routes>
        <Route path='nasalist' element={<NASAList />} />
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='giphy' element={<Giphy />} />
      </Routes>

      <Footer />
      
      {/* <Outlet /> */}
    </div>
  );
}

export default App