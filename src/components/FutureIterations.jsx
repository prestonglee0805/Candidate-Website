import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
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
      icon: "🤖",
      description: "Intelligent code analysis that provides real-time feedback and suggestions during interviews, helping both candidates and interviewers focus on problem-solving approach."
    },
    {
      title: "Collaborative Whiteboarding",
      icon: "📝",
      description: "Interactive digital whiteboard with real-time collaboration, allowing candidates to visualize algorithms and system designs seamlessly."
    },
    {
      title: "Skill Assessment Analytics",
      icon: "📊",
      description: "Comprehensive analytics dashboard that tracks candidate performance across multiple dimensions, providing data-driven insights for hiring decisions."
    },
    {
      title: "Interview Recording & Playback",
      icon: "🎥",
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
          <h2 className="future-title">Future Iterations</h2>
          <p className="future-subtitle">
            Explore the exciting features and enhancements we're planning to bring to Candidate
          </p>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(255, 107, 53, 0.1)"
                }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FutureIterations