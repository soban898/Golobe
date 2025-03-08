import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/Landing/HeroSection'
import SearchBox from './components/Landing/Searchbox'

function App() {
 

  return (
    <>
      <div>
       <Navbar/>
       <HeroSection/>
       <SearchBox />
      </div>
    </>
  )
}

export default App
