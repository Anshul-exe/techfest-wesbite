import { useState } from 'react'
import './App.css'
import GlitchHomepage from './components/Home'
import NavBar from './components/NavBar'
import BranchingTimeline from './components/Timeline'
import AboutSection from './components/Aboutus'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GlitchHomepage/>
    <AboutSection/>
    </>
  )
}

export default App
