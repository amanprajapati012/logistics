import FactsSection from "../src/component/homepage/FactsSection";
import HeroSection from "../src/component/homepage/HeroSection";
import MainSection from "../src/component/homepage/MainSection";
import QuoteSection from "../src/component/homepage/QuoteSection";
import ServicesSection from "../src/component/homepage/ServicesSection";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <HeroSection />

      {/* ABOUT / MAIN SECTION */}
      <MainSection />

  

      <FactsSection />

      <ServicesSection />

      <QuoteSection />
    </>
  );
}