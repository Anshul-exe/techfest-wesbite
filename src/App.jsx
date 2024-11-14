import { useState } from 'react'
import './App.css'
import GlitchHomepage from './components/Home'
import NavBar from './components/NavBar'
import BranchingTimeline from './components/Timeline'
import AboutSection from './components/Aboutus'
import HoverCards from './components/Card'
import { TiMediaPlay } from 'react-icons/ti'
import TVABackground from './components/TvaBg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GlitchHomepage/>
    <AboutSection/>
       <TVABackground>
        <BranchingTimeline/>
       </TVABackground>
    
     <HoverCards/>
     </>
    
  )
}

export default App
