import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import './DemoSection.css'
import demoVideo from '../assets/DemoVideo.mp4'

function DemoSection() {
  const ref = useRef(null)
  const textRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const { scrollYProgress: textScrollProgress } = useScroll({
    target: textRef,
    offset: ["start 0.8", "end 0.2"]
  })

  const videoOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const videoY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100])
  const videoScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])
  
  const textOpacity = useTransform(textScrollProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const textY = useTransform(textScrollProgress, [0, 0.3, 0.7, 1], [30, 0, 0, -30])

  return (
    <section className="demo-section" ref={ref} id="demo">
      <div className="demo-container">
        <div className="demo-content">
          <div className="demo-layout">
            <motion.div 
              ref={textRef}
              className="demo-text-section"
              style={{ opacity: textOpacity, y: textY }}
              transition={{ duration: 0.1 }}
            >
              <h2 className="demo-title">See It In Action</h2>
              <p className="demo-description">
                This demo of Candidate is a minimal viable product (MVP) showcasing our approach to improving the technical interview experience. It's an early iteration focused on our core security functionality. We plan to gather feedback, iterate, and shape the future of Candidate.
              </p>
            </motion.div>
            <motion.div 
              className="video-container"
              style={{ opacity: videoOpacity, y: videoY, scale: videoScale }}
              transition={{ duration: 0.1 }}
            >
              <video 
                className="demo-video"
                controls
              >
                <source src={demoVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DemoSection