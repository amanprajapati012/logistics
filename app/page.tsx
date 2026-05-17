import FactsSection from "./component/homepage/FactsSection";
import HeroSection from "./component/homepage/HeroSection";
import MainSection from "./component/homepage/MainSection";
import QuoteSection from "./component/homepage/QuoteSection";
import ServicesSection from "./component/homepage/ServicesSection";

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