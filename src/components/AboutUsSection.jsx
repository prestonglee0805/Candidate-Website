import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import './AboutUsSection.css'

// Import logo assets
import googleLogo from '../assets/Logos/google.png'
import amazonLogo from '../assets/Logos/amazon.png'
import datadogLogo from '../assets/Logos/datadog.png'
import nyuLogo from '../assets/Logos/NYU.png'

function AboutUsSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100])

  const companies = [
    { name: "Google", logo: googleLogo },
    { name: "Amazon", logo: amazonLogo },
    { name: "Datadog", logo: datadogLogo },
    { name: "NYU", logo: nyuLogo }
  ]

  // Create multiple sets for seamless scrolling
  const logoSets = [
    ...companies,
    ...companies,
    ...companies,
    ...companies
  ]

  return (
    <section className="aboutus-section" ref={ref} id="aboutus">
      <div className="aboutus-container">
        <motion.div 
          className="aboutus-content"
          style={{ opacity, y }}
          transition={{ duration: 0.1 }}
        >
          <motion.div 
            className="aboutus-hero"
            initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 1.2, 
              delay: 0.2,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
          >
            <motion.h2 
              className="aboutus-title"
              initial={{ opacity: 0, y: 30, letterSpacing: "0.3em" }}
              whileInView={{ opacity: 1, y: 0, letterSpacing: "normal" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              About
            </motion.h2>
          </motion.div>
          
          <div className="aboutus-main-content">
            <motion.div 
              className="aboutus-description"
              initial={{ opacity: 0, y: 60, x: -30 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 1, 
                delay: 0.7,
                ease: "easeOut"
              }}
            >
              <motion.p 
                className="aboutus-text"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                We're a group of <motion.span 
                  className="highlight"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                >
                  NYU students
                </motion.span> - coders, designers, and more - 
                with experience in big tech, banking, and startups alike.
              </motion.p>
            </motion.div>

            <motion.div 
              className="companies-section"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 1, 
                delay: 1.5,
                type: "spring",
                stiffness: 80
              }}
            >
              <motion.h3 
                className="companies-title"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.7 }}
              >
                Made by Engineers at:
              </motion.h3>
              <motion.div 
                className="logos-container"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.9 }}
              >
                <motion.div 
                  className="logos-track"
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  animate={{
                    x: [0, -2000]
                  }}
                  style={{
                    animationDelay: "2.5s"
                  }}
                  transition={{
                    opacity: { duration: 1, delay: 2.1 },
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 60,
                      ease: "linear",
                      delay: 2.5
                    }
                  }}
                >
                  {logoSets.map((company, index) => (
                    <motion.div 
                      key={index} 
                      className="logo-item"
                      initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 2.3 + (index % 4) * 0.1,
                        type: "spring",
                        stiffness: 150
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <img 
                        src={company.logo} 
                        alt={`${company.name} logo`}
                        className="company-logo-img"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="team-values"
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 1, 
                delay: 2.8,
                type: "spring",
                stiffness: 60
              }}
            >
              <motion.p 
                className="values-text"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 3.1 }}
              >
                Our diverse backgrounds and shared passion for technology drive us to create 
                innovative solutions that transform the technical interview experience.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUsSection