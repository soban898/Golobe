import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/Landing/HeroSection'
import SearchBox from './components/Landing/Searchbox'
import Recent from './components/Landing/Recent'

function App() {
 

  return (
    <>
      <div>
       <Navbar/>
       <HeroSection/>
       <SearchBox />
       <Recent />
      </div>
    </>
  )
}

export default App
