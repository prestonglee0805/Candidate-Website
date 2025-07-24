import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import './SecurityPage.css'

function SecurityPage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100])

  return (
    <section className="security-section" ref={ref} id="security">
      <div className="security-container">
        <motion.div 
          className="security-content-wrapper"
          style={{ opacity, y }}
          transition={{ duration: 0.1 }}
        >
          <motion.div 
            className="security-hero"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="security-title">
              <motion.span 
                className="security-word"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Security,
              </motion.span>
              <motion.span 
                className="security-highlight"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                at your finger tips
              </motion.span>
            </h2>
          </motion.div>
          
          <div className="security-content">
            <motion.div 
              className="security-description-left"
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="security-text">
                Candidate is rethinking the technical interview from the ground up to ensure safety, fairness, and security in a world of AI. Our invisible safeguards help companies assess real skill, not borrowed answers.


              </p>
            </motion.div>

            <motion.div 
              className="security-features"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="security-grid">
                <motion.div 
                  className="security-feature"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="feature-icon"> 🖥️</div>
                  <span className="feature-text">On-Screen Overlay Monitoring</span>
                </motion.div>
                <motion.div 
                  className="security-feature"
                  whileHover={{ scale: 1.05, rotateY: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="feature-icon">📸</div>
                  <span className="feature-text">Screen Capture Detection</span>
                </motion.div>
                <motion.div 
                  className="security-feature"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="feature-icon">🔒</div>
                  <span className="feature-text">Illegal Tool Usage Prevention</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="security-description-right"
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <p className="security-text">
               By running intelligent protections behind the scenes, we create a level playing field—so teams can focus on identifying real talent, not navigating noise.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SecurityPage