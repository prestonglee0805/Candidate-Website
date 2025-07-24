import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FaRobot, FaPenToSquare, FaChartBar, FaVideo } from 'react-icons/fa6'
import './FutureIterations.css'

function FutureIterations() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100])

  const features = [
    {
      title: "AI-Powered Code Review",
      icon: FaRobot,
      description: "Intelligent code analysis that provides real-time feedback and suggestions during interviews, helping both candidates and interviewers focus on problem-solving approach."
    },
    {
      title: "Collaborative Whiteboarding",
      icon: FaPenToSquare,
      description: "Interactive digital whiteboard with real-time collaboration, allowing candidates to visualize algorithms and system designs seamlessly."
    },
    {
      title: "Skill Assessment Analytics",
      icon: FaChartBar,
      description: "Comprehensive analytics dashboard that tracks candidate performance across multiple dimensions, providing data-driven insights for hiring decisions."
    },
    {
      title: "Interview Recording & Playback",
      icon: FaVideo,
      description: "Secure recording capabilities with automated transcription and key moment highlighting for thorough candidate evaluation and team alignment."
    }
  ]

  return (
    <section className="future-section" ref={ref} id="future">
      <div className="future-container">
        <motion.div 
          className="future-content"
          style={{ opacity, y }}
          transition={{ duration: 0.1 }}
        >
          <motion.h2 
            className="future-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Future Iterations
          </motion.h2>
          <motion.p 
            className="future-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Explore the exciting features and enhancements we're planning to bring to Candidate
          </motion.p>
          
          <motion.div 
            className="features-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.6 + (index * 0.15),
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 25px 50px rgba(255, 107, 53, 0.15)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="feature-icon"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + (index * 0.15),
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <feature.icon />
                </motion.div>
                <motion.h3 
                  className="feature-title"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.9 + (index * 0.15)
                  }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="feature-description"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.0 + (index * 0.15)
                  }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FutureIterations