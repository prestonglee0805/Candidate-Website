import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import './AboutUs.css'

function AboutUs() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100])

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Co-Founder & CEO",
      description: "Former engineering manager at Google with 8+ years in technical recruitment and interview optimization.",
      image: "👩‍💼"
    },
    {
      name: "Marcus Rodriguez",
      role: "Co-Founder & CTO", 
      description: "Ex-Meta senior engineer passionate about building tools that improve developer experiences and hiring fairness.",
      image: "👨‍💻"
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Product",
      description: "PhD in Human-Computer Interaction, previously led product teams at Microsoft focused on developer productivity.",
      image: "👩‍🔬"
    }
  ]

  return (
    <section className="about-section" ref={ref} id="about">
      <div className="about-container">
        <motion.div 
          className="about-content"
          style={{ opacity, y }}
          transition={{ duration: 0.1 }}
        >
          <h2 className="about-title">About Us</h2>
          
          <div className="about-story">
            <p className="about-text">
              Founded in 2024, Candidate emerged from a simple yet powerful observation: technical interviews are broken. 
              Too often, brilliant engineers are overlooked due to interview anxiety, while companies struggle to 
              identify true technical talent through outdated assessment methods.
            </p>
            <p className="about-text">
              Our founding team combines decades of experience in software engineering, technical recruitment, 
              and human-computer interaction. We've sat on both sides of the interview table – as candidates 
              facing nerve-wracking technical challenges and as interviewers trying to make fair, accurate assessments.
            </p>
            <p className="about-text">
              We believe that great engineering talent deserves a fair chance to shine, and that companies deserve 
              better tools to identify the right candidates. That's why we're building Candidate – to create a more 
              equitable, insightful, and collaborative approach to technical interviews.
            </p>
          </div>

          <div className="team-section">
            <h3 className="team-title">Meet Our Team</h3>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="team-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(142, 68, 173, 0.1)"
                  }}
                >
                  <div className="team-image">{member.image}</div>
                  <h4 className="team-name">{member.name}</h4>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="values-section">
            <h3 className="values-title">Our Values</h3>
            <div className="values-grid">
              <div className="value-item">
                <h4 className="value-name">Fairness First</h4>
                <p className="value-description">Every candidate deserves an equal opportunity to demonstrate their skills, regardless of background or interview anxiety.</p>
              </div>
              <div className="value-item">
                <h4 className="value-name">Innovation</h4>
                <p className="value-description">We continuously push the boundaries of what's possible in technical assessment and candidate evaluation.</p>
              </div>
              <div className="value-item">
                <h4 className="value-name">Transparency</h4>
                <p className="value-description">Clear expectations, honest feedback, and open communication throughout the entire interview process.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs