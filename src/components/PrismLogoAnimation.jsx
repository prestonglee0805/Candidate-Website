import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import candidateLogo from '../assets/Logos/candidateLogo.png'
import './PrismLogoAnimation.css'

function PrismLogoAnimation({ onComplete }) {
  const [animationPhase, setAnimationPhase] = useState('prism')
  const prismControls = useAnimation()

  useEffect(() => {
    const animateSequence = async () => {
      // Phase 1: Prism rotation and spinning in center
      await prismControls.start({
        rotateY: [0, 540], // Reduced rotation
        rotateX: [0, 15, -15, 0],
        scale: [0.8, 1.1, 1],
        transition: { duration: 1.5, ease: "easeInOut" }
      })

      // Phase 2: Quick fade out to reveal hero page
      setAnimationPhase('fading')
      await prismControls.start({
        opacity: 0,
        scale: 0.8,
        rotateY: 720, // Continue rotating while fading
        transition: { duration: 0.8, ease: "easeOut" }
      })

      setAnimationPhase('complete')
      if (onComplete) onComplete()
    }

    animateSequence()
  }, [prismControls, onComplete])

  return (
    <div className="prism-animation-container">
      {/* Background overlay for animation */}
      <motion.div 
        className="animation-overlay"
        initial={{ opacity: 0.95 }}
        animate={{ 
          opacity: animationPhase === 'complete' ? 0 : (animationPhase === 'fading' ? 0.3 : 0.95)
        }}
        transition={{ 
          duration: animationPhase === 'fading' ? 0.8 : 0.3, 
          ease: "easeOut" 
        }}
      />
      
      {/* Candidate Logo with Prism Effects */}
      <motion.div
        className="logo-container"
        initial={{ x: 0, y: 0, scale: 0.8, opacity: 1 }}
        animate={prismControls}
      >
        <img 
          src={candidateLogo} 
          alt="Candidate Logo" 
          className="candidate-logo-animation"
        />
      </motion.div>


    </div>
  )
}

export default PrismLogoAnimation