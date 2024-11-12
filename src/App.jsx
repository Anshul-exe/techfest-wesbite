import { useState } from 'react'
import './App.css'
import Glitch from './components/Home'
import NavBar from './components/NavBar'
import BranchingTimeline from './components/Timeline'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Glitch><BranchingTimeline/><NavBar/></Glitch>  
    </>
  )
}

export default App
