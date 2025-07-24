import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PrismLogoAnimation from './PrismLogoAnimation'
import candidateLogoSeg1 from '../assets/Logos/candidateLogoSeg1.png'
import candidateLogoSeg2 from '../assets/Logos/candidateLogoSeg2.png'
import './HeroSection.css'

function HeroSection() {
  const navigate = useNavigate()
  const [scrollOpacity, setScrollOpacity] = useState(1)
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [showPrismAnimation, setShowPrismAnimation] = useState(true)
  const [showHeroContent, setShowHeroContent] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  // Logo segment initial positions and rotations (editable)
  // These should combine to form compositeLogo.png
  const segment1Initial = { y: -5, rotate: 180 }
  const segment2Initial = { y: 5, rotate: -180 }
  
  const fullText = "Streamlining the Technical Interview Process"

  // Handle animation completion
  const handlePrismAnimationComplete = () => {
    setShowPrismAnimation(false)
    setShowHeroContent(true)
  }

  // Typing animation effect
  useEffect(() => {
    if (!showHeroContent) return

    const startTyping = setTimeout(() => {
      let index = 0
      const typingInterval = setInterval(() => {
        if (index < fullText.length) {
          setDisplayedText(fullText.slice(0, index + 1))
          index++
        } else {
          clearInterval(typingInterval)
          // Hide cursor after typing is complete to 5000ms (5 sec)
          setTimeout(() => setShowCursor(false), 5000)
        }
      }, 50) // 50ms delay between each character

      return () => clearInterval(typingInterval)
    }, 500) // Start typing 0.5 seconds after hero content shows

    return () => clearTimeout(startTyping)
  }, [fullText, showHeroContent])

  // Scroll opacity effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // Fade out much faster - arrow disappears within first 150px of scroll
      const opacity = Math.max(0, 1 - (scrollY / 150))
      setScrollOpacity(opacity)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToMission = () => {
    const heroHeight = window.innerHeight
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth'
    })
  }

  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo')
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('aboutus')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section className="hero-section">
      {/* Navigation - always visible */}
      <nav className="navbar">
        <motion.div 
          className="navbar-logo-container"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div 
            className="logo-segments"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
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
              animate={{
                x: "-50%",
                y: isHovered ? segment1Initial.y : segment1Initial.y,
                rotate: isHovered ? segment1Initial.rotate + 360 : segment1Initial.rotate,
                scale: isHovered ? 1.05 : 1,
                filter: isHovered ? "drop-shadow(0 0 12px rgba(255, 107, 53, 0.6)) brightness(1.1)" : "drop-shadow(0 0 0px rgba(255, 107, 53, 0)) brightness(1)"
              }}
              transition={{ duration: 1.2, ease: "easeOut" }}
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
              animate={{
                x: "-50%",
                y: isHovered ? segment2Initial.y : segment2Initial.y,
                rotate: isHovered ? segment2Initial.rotate - 360 : segment2Initial.rotate,
                scale: isHovered ? 1.05 : 1,
                filter: isHovered ? "drop-shadow(0 0 12px rgba(255, 107, 53, 0.6)) brightness(1.1)" : "drop-shadow(0 0 0px rgba(255, 107, 53, 0)) brightness(1)"
              }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </div>
        </motion.div>
        
        {/* Mobile hamburger menu */}
        <motion.button
          className="mobile-menu-button"
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </motion.button>

        <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <motion.button 
          className="nav-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => { scrollToMission(); setIsMobileMenuOpen(false); }}
        >
          Our Mission
        </motion.button>
        <motion.button 
          className="nav-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => { scrollToDemo(); setIsMobileMenuOpen(false); }}
        >
          Demo
        </motion.button>
        <motion.button 
          className="nav-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => { scrollToAbout(); setIsMobileMenuOpen(false); }}
        >
          About Us
        </motion.button>
        <motion.button 
          className="nav-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => { navigate('/contact'); setIsMobileMenuOpen(false); }}
        >
          Contact Us
        </motion.button>
        </div>
      </nav>
      
      {/* Hero Content - show after animation */}
      {showHeroContent && (
        <>
          <div className="hero-content">
            <div className="hero-text">
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  opacity: { duration: 1.5, ease: "easeOut" },
                  y: { duration: 1.5, ease: "easeOut" },
                  backgroundPosition: { 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: 1.5
                  }
                }}
              >
                Candidate
              </motion.h1>
              <div className="hero-subtitle-container">
                <span className="hero-subtitle">{displayedText}</span>
                {showCursor && <span className="typing-cursor"></span>}
              </div>
            </div>
          </div>
          
          <motion.div 
            className="scroll-arrow"
            style={{ opacity: scrollOpacity }}
            animate={{ y: [0, 10, 0] }}
            transition={{
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            onClick={scrollToMission}
          >
            <div className="arrow-icon">↓</div>
          </motion.div>
        </>
      )}

      {/* Prism Animation Overlay */}
      {showPrismAnimation && (
        <PrismLogoAnimation onComplete={handlePrismAnimationComplete} />
      )}
    </section>
  )
}

export default HeroSection