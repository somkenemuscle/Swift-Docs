import Navbar from "@/components/shared/Navbar"
import FeatureSection from "@/components/shared/Features"
import PricingFeatures from "@/components/shared/PricingFeatures"
import Footer from "@/components/shared/Footer"
import Services from "@/components/shared/Services"
import About from "@/components/shared/about"
const HomePage = () => {
  return (
    <main>
      <Navbar />
      <Services />
      <FeatureSection />
      <About />
      <PricingFeatures />
      <Footer />
    </main>
  )
}

export default HomePage