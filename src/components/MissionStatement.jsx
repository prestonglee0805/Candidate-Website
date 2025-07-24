import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react' 
import { FaStar, FaLightbulb, FaPlay } from 'react-icons/fa';
import './MissionStatement.css'

function MissionStatement() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])

  return (
    <section className="mission-section" ref={ref}>
      <div className="mission-container">
        <motion.div 
          className="mission-content"
          style={{ opacity, y, scale }}
          transition={{ duration: 0.1 }}
        >
          <div className="mission-hero">
            <h2 className="mission-title">
              <motion.span 
                className="mission-word"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Our
              </motion.span>
              <motion.span 
                className="mission-highlight"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Mission
              </motion.span>
            </h2>
          </div>
          
          <div className="leetcode-container">
            <div className="leetcode-header">
              <div className="header-left">
                <div className="logo">
                  <span className="logo-icon"></span>
                  <span className="logo-text">Candidate</span>
                </div>
                <div className="problem-nav">
                  <button className="nav-btn active">Description</button>
                  <button className="nav-btn">Editorial</button>
                  <button className="nav-btn">Solutions</button>
                </div>
              </div>
              <div className="header-right">
                <span className="difficulty medium">Medium</span>
              </div>
            </div>
            
            <div className="leetcode-layout">
              <div className="problem-panel">
                <div className="problem-header">
                  <h3 className="problem-title">1. Define Mission Statement</h3>
                  <div className="problem-stats">
                    <span className="stat"><FaStar color="white" size={14} /> 5.0</span>
                    <span className="stat">
                      <FaLightbulb size = {14} color = "white" /> Company Values 
                    </span>                   
                  </div>
                </div>
                
                <div className="problem-content">
                  <div className="problem-section">
                    <p>Candidate is an interview platform that creates a standard of fairness and integrity in the hiring process. We're rethinking how companies connect with the technical interview process for more equitable, insightful, and collaborative evaluation.</p>
                  </div>
                  
                  <div className="problem-section">
                    <p>Our mission is to bridge the gap between talent and opportunity. Through innovative tools and thoughtful design, we help teams uncover true potential, reduce bias, and make more confident hiring decisions.</p>
                  </div>
                  
                  <div className="problem-section">
                    <h4>Example:</h4>
                    <div className="example-box">
                      <div><strong>Input:</strong> Traditional interview process</div>
                      <div><strong>Output:</strong> Secure, fair, and collaborative technical evaluation</div>
                      <div><strong>Explanation:</strong> Transform hiring through innovative technology</div>
                    </div>
                  </div>
                  
                </div>
              </div>
              
              <div className="code-panel">
                <div className="code-header">
                  <div className="code-tabs">
                    <div className="code-tab">JavaScript</div>
                    <div className="code-tab active">Python</div>
                    <div className="code-tab">Java</div>
                  </div>
                  <div className="code-actions">
                    <button className="action-btn">↻ Reset</button>
                    <button className="action-btn"><FaPlay style={{ marginRight: '0.3rem' }}/> Run</button>
                    <button className="action-btn submit">Submit</button>
                  </div>
                </div>
                
                <div className="code-editor">
                  <div className="line-numbers">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                    <span>11</span>
                    <span>12</span>
                    <span>13</span>
                    <span>14</span>
                  </div>
                  <div className="code-content">
                    <div className="code-line">
<span className="keyword">def</span> <span className="function">candidate_mission</span><span className="punctuation">(</span><span className="parameter">process</span><span className="punctuation">):</span>
                    </div>
                    <div className="code-line">
<span className="indent">    </span><span className="comment"># Elevate fairness and integrity in hiring</span>
                    </div>
                    <div className="code-line">
<span className="indent">    </span><span className="variable">mission</span> <span className="operator">=</span> <span className="punctuation">{'{'}</span>
                    </div>
                    <div className="code-line">
<span className="indent">        </span><span className="string">"purpose"</span><span className="punctuation">:</span> <span className="string">"Bridge talent and opportunity"</span><span className="punctuation">,</span>
                    </div>
                    <div className="code-line">
<span className="indent">        </span><span className="string">"approach"</span><span className="punctuation">:</span> <span className="string">"Collaborative evaluation"</span><span className="punctuation">,</span>
                    </div>
                    <div className="code-line">
<span className="indent">        </span><span className="string">"impact"</span><span className="punctuation">:</span> <span className="string">"Reduce bias, uncover potential"</span>
                    </div>
                    <div className="code-line">
<span className="indent">    </span><span className="punctuation">{'}'}</span>
                    </div>
                    <div className="code-line">
<span className="indent">    </span>
                    </div>
                    <div className="code-line">
<span className="indent">    </span><span className="comment"># Transform the hiring process</span>
                    </div>
                    <div className="code-line">
<span className="indent">    </span><span className="keyword">return</span> <span className="function">transform_hiring</span><span className="punctuation">(</span><span className="variable">process</span><span className="punctuation">,</span> <span className="variable">mission</span><span className="punctuation">)</span>
                    </div>
                    <div className="code-line">
<span className="indent">    </span>
                    </div>
                    <div className="code-line">
<span className="comment"># Example usage:</span>
                    </div>
                    <div className="code-line">
<span className="comment"># improved_process = candidate_mission(traditional_process)</span>
                    </div>
                    <div className="code-line">
<span className="comment"># print(improved_process.fairness_score)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MissionStatement