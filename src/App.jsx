import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import Landing from './pages/Landing'
import Results from './pages/Results'


function App() {
  return (
   <>
   <Router>
    <Layout>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/results' element={<Results />} />
        </Routes>
        </Layout>
        </Router>
   </>
  )
}

export default App
