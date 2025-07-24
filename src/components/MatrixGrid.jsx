import { useEffect, useRef } from 'react'

function MatrixGrid() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Coding-specific characters and keywords for technical interviews
    const codingElements = [
      // Symbols
      '{}', '[]', '()', '=>', '++', '--', '==', '!=', '&&', '||', 
      // Short keywords
      'if', 'for', 'let', 'var', 'int', 'def', 'fn', 'do',
      // Data structures
      'arr', 'obj', 'map', 'set', 'list', 'node', 'tree',
      // Common coding terms
      'API', 'SQL', 'DOM', 'CSS', 'JS', 'PY', 'CPP', 'GO',
      // Interview concepts
      'O(n)', 'O(1)', 'BFS', 'DFS', 'DP', 'BST',
      // Single chars
      '0', '1', '{', '}', '[', ']', '(', ')', '<', '>', '/', '\\', '|', '.', ';', ':'
    ]
    
    const fontSize = 11
    const columns = Math.floor(canvas.width / fontSize)
    const drops = []

    // Initialize drops with random starting positions
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * canvas.height / fontSize)
    }

    let isVisible = false
    let fadeOpacity = 0
    let lastToggle = Date.now()
    const visibleDuration = 8000// 6 seconds visible
    const hiddenDuration = 7000 // 15 seconds hidden
    const fadeDuration = 4000 // 5 seconds fade in/out

    const draw = () => {
      const now = Date.now()
      
      // Toggle visibility logic
      if (!isVisible && now - lastToggle > hiddenDuration) {
        isVisible = true
        lastToggle = now
      } else if (isVisible && now - lastToggle > visibleDuration) {
        isVisible = false
        lastToggle = now
      }

      // Calculate fade opacity
      const timeSinceToggle = now - lastToggle
      if (isVisible) {
        // Fading in
        fadeOpacity = Math.min(1, timeSinceToggle / fadeDuration)
      } else {
        // Fading out
        fadeOpacity = Math.max(0, 1 - (timeSinceToggle / fadeDuration))
      }

      // Clear canvas
      context.clearRect(0, 0, canvas.width, canvas.height)

      if (fadeOpacity > 0) {
        context.font = fontSize + 'px "SF Mono", "Monaco", "Inconsolata", monospace'

        for (let i = 0; i < drops.length; i++) {
          // Create fading trail effect
          for (let j = 0; j < 8; j++) {
            if (drops[i] - j > 0) {
              const trailOpacity = ((8 - j) / 8) * 0.25 * fadeOpacity // More defined
              context.fillStyle = `rgba(180, 180, 180, ${trailOpacity})`
              const fadeElement = codingElements[Math.floor(Math.random() * codingElements.length)]
              context.fillText(fadeElement, i * fontSize, (drops[i] - j) * fontSize)
            }
          }

          // Very slow fall speed and rare resets
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.995) {
            drops[i] = 0
          }
          
          // Very slow movement - only move occasionally
          if (Math.random() > 0.92) {
            drops[i]++
          }
        }
      }
    }

    // Slower animation interval for subtlety
    const interval = setInterval(draw, 120)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'transparent',
        pointerEvents: 'none'
      }}
    />
  )
}

export default MatrixGrid