import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
<Navbar title={
  <>
  <span className="jasmi">JASMI</span>
    <span className="nova">NOVA</span>
    </>
}/>
  )
}

export default App
