import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Container,
  Typography,
  Button,
  Divider,
  Grid
} from '@mui/material'
import {
  ArrowForward
} from '@mui/icons-material'
import { styled } from '@mui/material/styles'

const GradientTypography = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(45deg, #ff6b35, #8e44ad)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 800,
}))

const AnimatedGradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(135deg, #ff6b35, #8e44ad, #00d4ff)',
  backgroundSize: '300% 300%',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  animation: 'gradientShift 3s ease-in-out infinite',
  fontWeight: 800,
  '@keyframes gradientShift': {
    '0%, 100%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
  },
}))

function ContactUs() {
  const ref = useRef(null)
  const navigate = useNavigate()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100])

  return (
    <Box
      ref={ref}
      id="contact"
      sx={{
        width: '100vw',
        background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.2) 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          style={{ opacity, y }}
          transition={{ duration: 0.1 }}
        >
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Box textAlign="center" mb={8}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '3rem', md: '5rem' },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  color: 'white',
                  mb: 3,
                }}
              >
                Ready to{' '}
                <AnimatedGradientText
                  component="span"
                  variant="h1"
                  sx={{ fontSize: 'inherit' }}
                >
                  Connect?
                </AnimatedGradientText>
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontWeight: 300,
                  letterSpacing: 0.5,
                  maxWidth: '700px',
                  mx: 'auto',
                  lineHeight: 1.7,
                  mb: 6
                }}
              >
                Have questions about our platform? Want to schedule a demo? 
                Let's discuss how we can transform your technical interview process.
              </Typography>
            </Box>
          </motion.div>


          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Box textAlign="center" mb={8}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                onClick={() => navigate('/contact')}
                sx={{
                  background: 'linear-gradient(45deg, #ff6b35, #8e44ad)',
                  borderRadius: '16px',
                  px: 6,
                  py: 2,
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  textTransform: 'none',
                  boxShadow: '0 15px 40px rgba(142, 68, 173, 0.3)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #8e44ad, #ff6b35)',
                    boxShadow: '0 20px 50px rgba(142, 68, 173, 0.4)',
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                Get in Touch
              </Button>
            </Box>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', mb: 4 }} />
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={6}>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box textAlign={{ xs: 'center', md: 'right' }}>
                  <Typography
                    variant="body2"
                    sx={{ color: 'rgba(255, 255, 255, 0.6)', fontWeight: 300 }}
                  >
                    © 2025 Candidate.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  )
}

export default ContactUs