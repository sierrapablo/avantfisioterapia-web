import React, { useEffect, useState } from 'react'
import '../styles/LogoScreen.css'
import avantLogo from '../assets/Avant_logo6Recurso-1_4x.png'

interface LogoScreenProps {
  onStart: () => void
}

const LogoScreen: React.FC<LogoScreenProps> = ({ onStart }) => {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(onStart, 1000)
    }, 3000)

    return () => clearTimeout(timer)
  }, [onStart])

  return (
    <div className={`logo-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className='logo-container'>
        <img
          src={avantLogo}
          alt='Avant Fisioterapia Logo'
          className='logo pulse-animation'
        />
      </div>
    </div>
  )
}

export default LogoScreen
