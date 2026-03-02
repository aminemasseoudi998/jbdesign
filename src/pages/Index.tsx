import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => (
  <>
    <ScrollProgress />
    <Navbar />
    <FloatingCTA />
    <main>
      <HeroSection />
      <PortfolioSection />
      <StatsSection />
      <ServicesSection />
      
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
