import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Info from './components/Info'
import Interests from './components/Interests'

function App() {
  return (
    <>
    <main>
      <Info />
      <About />
      <Interests />
      <Footer />
    </main>
    </>
  )
}

export default App
