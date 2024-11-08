import { useState } from 'react'
import './App.css'
import Glitch from './components/Home'
import NavBar from './components/NavBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Glitch><NavBar/></Glitch>  
    </>
  )
}

export default App
