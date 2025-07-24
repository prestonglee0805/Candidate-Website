import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './HeroSection.css'

function HeroSection() {
  const navigate = useNavigate()
  const [scrollOpacity, setScrollOpacity] = useState(1)
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  
  const fullText = "Streamlining the Technical Interview Process"

  // Typing animation effect
  useEffect(() => {
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
    }, 2000) // Start typing 2 seconds after component mounts

    return () => clearTimeout(startTyping)
  }, [fullText])

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
      <nav className="navbar">
        <motion.button 
          className="nav-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={scrollToMission}
        >
          Our Mission
        </motion.button>
        <motion.button 
          className="nav-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={scrollToDemo}
        >
          Demo
        </motion.button>
        <motion.button 
          className="nav-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={scrollToAbout}
        >
          About Us
        </motion.button>
        <motion.button 
          className="nav-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => navigate('/contact')}
        >
          Contact Us
        </motion.button>
      </nav>
      
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
    </section>
  )
}

export default HeroSection