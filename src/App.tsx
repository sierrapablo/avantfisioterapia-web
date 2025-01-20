import React, { useState } from 'react'
import LogoScreen from './components/LogoScreen'
import LandingPage from './components/LandingPage'

const App: React.FC = () => {
  const [showLanding, setShowLanding] = useState(false)

  const handleStart = () => {
    setShowLanding(true)
  }

  return (
    <div className='App'>
      {showLanding ? <LandingPage /> : <LogoScreen onStart={handleStart} />}
    </div>
  )
}

export default App
