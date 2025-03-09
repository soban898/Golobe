import React from 'react'
import HeroSection from '../components/Landing/HeroSection'
import Searchbox from '../components/Landing/Searchbox'
import Recent from '../components/Landing/Recent'
import TravelSection from '../components/Landing/TravelSection'
const Landing = () => {
  return (
    <div>
      <HeroSection/>
      <Searchbox/>
      <Recent/>
      <TravelSection/>
    </div>
  )
}

export default Landing
