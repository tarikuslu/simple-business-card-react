import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'
function App() {

  return (
    <div className='container'>
      <Info/>
      <About />
      <Interests/>
      <Footer/>
    </div>
  )
}

export default App
