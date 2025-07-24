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
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="aboutus-title">About Us</h2>
          </motion.div>
          
          <div className="aboutus-main-content">
            <motion.div 
              className="aboutus-description"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="aboutus-text">
                We're a group of <span className="highlight">NYU students</span> - coders, designers, and more - 
                with experience in big tech, banking, and startups alike.
              </p>
            </motion.div>

            <motion.div 
              className="companies-section"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="companies-title">Made by Engineers at:</h3>
              <div className="logos-container">
                <motion.div 
                  className="logos-track"
                  animate={{
                    x: [0, -2000]
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 60,
                      ease: "linear"
                    }
                  }}
                >
                  {logoSets.map((company, index) => (
                    <div key={index} className="logo-item">
                      <img 
                        src={company.logo} 
                        alt={`${company.name} logo`}
                        className="company-logo-img"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="team-values"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <p className="values-text">
                Our diverse backgrounds and shared passion for technology drive us to create 
                innovative solutions that transform the technical interview experience.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUsSection