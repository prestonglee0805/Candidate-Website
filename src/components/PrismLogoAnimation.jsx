import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import candidateLogoSeg1 from '../assets/Logos/candidateLogoSeg1.png'
import candidateLogoSeg2 from '../assets/Logos/candidateLogoSeg2.png'
import './PrismLogoAnimation.css'

function PrismLogoAnimation({ onComplete }) {
  const [animationPhase, setAnimationPhase] = useState('prism')
  const prismControls = useAnimation()
  const segment1Controls = useAnimation()
  const segment2Controls = useAnimation()
  
  // Logo segment initial positions and rotations (from navbar)
  const segment1Initial = { y: -5, rotate: 180 }
  const segment2Initial = { y: 5, rotate: -180 }

  useEffect(() => {
    const animateSequence = async () => {
      // Phase 1: Logo segments animation with hover effect
      // Container scale animation - bigger size
      prismControls.start({
        scale: [0.8, 1.3, 1.2],
        transition: { duration: 2.0, ease: "easeInOut" }
      })
      
      // Segment 1: Rotate +360 degrees with effects (similar to hover) - slower
      segment1Controls.start({
        rotate: [segment1Initial.rotate, segment1Initial.rotate + 360],
        scale: [1, 1.05, 1],
        filter: [
          "drop-shadow(0 0 0px rgba(255, 107, 53, 0)) brightness(1)",
          "drop-shadow(0 0 12px rgba(255, 107, 53, 0.6)) brightness(1.1)",
          "drop-shadow(0 0 0px rgba(255, 107, 53, 0)) brightness(1)"
        ],
        transition: { duration: 2.0, ease: "easeInOut" }
      })
      
      // Segment 2: Rotate -360 degrees with effects (opposite direction) - slower
      await segment2Controls.start({
        rotate: [segment2Initial.rotate, segment2Initial.rotate - 360],
        scale: [1, 1.05, 1],
        filter: [
          "drop-shadow(0 0 0px rgba(255, 107, 53, 0)) brightness(1)",
          "drop-shadow(0 0 12px rgba(255, 107, 53, 0.6)) brightness(1.1)",
          "drop-shadow(0 0 0px rgba(255, 107, 53, 0)) brightness(1)"
        ],
        transition: { duration: 2.0, ease: "easeInOut" }
      })

      // Phase 2: Quick fade out to reveal hero page
      setAnimationPhase('fading')
      
      // Fade out container
      prismControls.start({
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.8, ease: "easeOut" }
      })
      
      // Fade out segments
      segment1Controls.start({
        opacity: 0,
        transition: { duration: 0.8, ease: "easeOut" }
      })
      
      await segment2Controls.start({
        opacity: 0,
        transition: { duration: 0.8, ease: "easeOut" }
      })

      setAnimationPhase('complete')
      if (onComplete) onComplete()
    }

    animateSequence()
  }, [prismControls, segment1Controls, segment2Controls, onComplete])

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
      
      {/* Candidate Logo Segments with Hover-like Effects */}
      <motion.div
        className="logo-container"
        initial={{ x: 0, y: 0, scale: 0.8, opacity: 1 }}
        animate={prismControls}
      >
        <div className="logo-segments">
          <motion.img 
            src={candidateLogoSeg1} 
            alt="Candidate Logo Part 1" 
            className="logo-segment segment-1"
            initial={{
              x: "-50%",
              y: segment1Initial.y,
              rotate: segment1Initial.rotate,
              scale: 1,
              filter: "drop-shadow(0 0 0px rgba(255, 107, 53, 0)) brightness(1)"
            }}
            animate={segment1Controls}
          />
          <motion.img 
            src={candidateLogoSeg2} 
            alt="Candidate Logo Part 2" 
            className="logo-segment segment-2"
            initial={{
              x: "-50%",
              y: segment2Initial.y,
              rotate: segment2Initial.rotate,
              scale: 1,
              filter: "drop-shadow(0 0 0px rgba(255, 107, 53, 0)) brightness(1)"
            }}
            animate={segment2Controls}
          />
        </div>
      </motion.div>


    </div>
  )
}

export default PrismLogoAnimation