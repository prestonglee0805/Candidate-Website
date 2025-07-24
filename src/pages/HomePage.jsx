import HeroSection from '../components/HeroSection'
import MissionStatement from '../components/MissionStatement'
import MatrixGrid from '../components/MatrixGrid' 
import DemoSection from '../components/DemoSection'
import FutureIterations from '../components/FutureIterations'
import SecurityPage from '../components/SecurityPage'
import AboutUsSection from '../components/AboutUsSection'
import ContactUs from '../components/ContactUs'

function HomePage() {
  return (
    <div>
      <MatrixGrid />
      <HeroSection />
      <MissionStatement /> 
      <SecurityPage />
      <DemoSection /> 
      <FutureIterations />
      <AboutUsSection />
      <ContactUs />
    </div>
  )
}

export default HomePage