import React, { useState } from 'react'
import '../styles/LogoScreen.css'
import avantLogo from '../assets/Avant_logo6Recurso-1_4x.png'

interface LogoScreenProps {
  onStart: () => void
}

const LogoScreen: React.FC<LogoScreenProps> = ({ onStart }) => {
  const [fadeOut, setFadeOut] = useState(false)

  const handleClick = () => {
    setFadeOut(true)
    setTimeout(onStart, 1000)
  }

  return (
    <div className={`logo-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className='logo-container' onClick={handleClick}>
        <img src={avantLogo} alt='Avant Fisioterapia Logo' className='logo' />
      </div>
    </div>
  )
}

export default LogoScreen
