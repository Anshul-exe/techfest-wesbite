import { useState } from 'react'
import './App.css'
import GlitchHomepage from './components/Home'
import NavBar from './components/NavBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GlitchHomepage/>
    </>
  )
}

export default App
