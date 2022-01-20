// imports
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
// components
import Nav from './Components/Nav'
import Footer from './Components/Footer'
// pages
import Home from './pages/Home'
import NASAList from './pages/NASAList.js'
import About from './pages/About'
import Giphy from './pages/Giphy'
// contexts
import UserContext from './contexts/UserContext'
// css
import './App.css'

function App() {
  const [user, setUser] = useState('David')
  const value = {user, setUser}

  console.log('App', user)
  return (
    <div className="App">

      <UserContext.Provider value={value}>
        <Nav />

        {/* we were nesting before */}
        {/* <Route>

  </Route> */}

        {/* the component that changes in our browser is inside the Routes component, Routes is the new name for Switch in v6. */}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='nasalist' element={<NASAList />} />
          <Route path='about' element={<About />} />
          <Route path='giphy' element={<Giphy />} />
        </Routes>

        <Footer />
      </UserContext.Provider>

    </div>
  );
}

export default App