import { useNavigate } from 'react-router-dom'
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  TextField,
  IconButton,
  AppBar,
  Toolbar,
  Stack
} from '@mui/material'
import {
  Email,
  LinkedIn,
  GitHub,
  Send,
  ArrowBack
} from '@mui/icons-material'
import './ContactUsPage.css'

function ContactUsPage() {
  const navigate = useNavigate()

  return (
    <Box className="contact-page">
      <div className="contact-content-wrapper">
        {/* Simple Header */}
        <AppBar position="static" className="contact-header">
          <Toolbar>
            <IconButton 
              edge="start" 
              color="inherit" 
              onClick={() => navigate('/')}
            >
              <ArrowBack />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Container maxWidth="md" className="contact-main-container">
        {/* Simple Title */}
        <Box className="contact-title-container">
          <Typography variant="h2" className="contact-main-title">
            Contact <span className="gradient-text">Us</span>
          </Typography>
          <Typography variant="h6" className="contact-subtitle">
            Get in touch with our team. We'd love to hear from you.
          </Typography>
        </Box>


        {/* Simple Contact Form */}
        <Paper className="contact-form-container">
          <Typography variant="h4" className="contact-form-title">
            Send us a Message
          </Typography>
          
          <Stack className="contact-form-stack">
            <TextField
              className="contact-text-field"
              fullWidth
              label="Name"
              variant="outlined"
              required
            />
            
            <TextField
              className="contact-text-field"
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              required
            />
            
            <TextField
              className="contact-text-field"
              fullWidth
              label="Subject"
              variant="outlined"
              required
            />
            
            <TextField
              className="contact-text-field"
              fullWidth
              label="Message"
              multiline
              rows={5}
              variant="outlined"
              required
            />
            
            <Box textAlign="center" pt={2}>
              <Button
                variant="contained"
                size="large"
                endIcon={<Send />}
                className="contact-submit-button"
              >
                Send Message
              </Button>
            </Box>
          </Stack>
        </Paper>

        {/* Social Links */}
        <Box className="social-links-container">
          <Typography variant="h6" className="social-links-title">
            Or connect with us on:
          </Typography>
          <Stack direction="row" className="social-links-stack">
            <IconButton className="social-icon-button linkedin">
              <LinkedIn sx={{ fontSize: 30 }} />
            </IconButton>
            <IconButton className="social-icon-button github">
              <GitHub sx={{ fontSize: 30 }} />
            </IconButton>
            <IconButton className="social-icon-button email">
              <Email sx={{ fontSize: 30 }} />
            </IconButton>
          </Stack>
        </Box>

        {/* Simple Footer */}
        <Box className="contact-footer">
          <Typography variant="body2" className="contact-footer-text">
            © 2025 Candidate.
          </Typography>
          <Button
            onClick={() => navigate('/')}
            className="back-to-home-button"
          >
            ← Back to Home
          </Button>
        </Box>
        </Container>
      </div>
    </Box>
  )
}

export default ContactUsPage