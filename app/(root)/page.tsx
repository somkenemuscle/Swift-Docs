import Navbar from "@/components/shared/Navbar"
import HeroSection from "@/components/shared/HeroSection"
import FeatureSection from "@/components/shared/Features"
import PricingFeatures from "@/components/shared/PricingFeatures"
import Footer from "@/components/shared/Footer"
import Services from "@/components/shared/Services"

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Services />
      <FeatureSection />
      <PricingFeatures />
      <Footer />
    </main>
  )
}

export default HomePage