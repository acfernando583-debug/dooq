import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import AboutSection from "./components/AboutSection";
import HoldingArchitecture from "./components/HoldingArchitecture";
import CatalogSection from "./components/CatalogSection";
import ZennOnSection from "./components/ZennOnSection";
import BFriendsSection from "./components/BFriendsSection";
import PlanikaLanding from "./components/PlanikaLanding";
import ContactForm from "./components/ContactForm";
import FloatingContactButton from "./components/FloatingContactButton";
import TermsPage from "./components/TermsPage";
import Footer from "./components/Footer";

export default function App() {
  const { scrollYProgress } = useScroll();
  const parallaxBg = useTransform(scrollYProgress, [0.8, 1], ["0%", "-20%"]);

  return (
    <div className="min-h-screen bg-dooq-dark text-dooq-light font-sans antialiased selection:bg-white/20 selection:text-white overflow-x-hidden">
      <Navigation />

      {/* 1. HERO */}
      <HeroSection />

      <main className="relative">
        {/* 2. MARQUEE */}
        <MarqueeSection />

        {/* 3. ABOUT */}
        <AboutSection />

        {/* 4. HOLDING ARCHITECTURE */}
        <HoldingArchitecture />

        {/* 5. CATALOG */}
        <CatalogSection />

        {/* 6. ZENN ON */}
        <ZennOnSection />

        {/* 7. BFRIENDS */}
        <BFriendsSection />

        {/* 8. PLANIKA */}
        <PlanikaLanding />

        {/* 9. CONTACT, SLA, PAYMENTS, GUARANTEES, DISCOUNTS */}
        <ContactForm />
      </main>

      <TermsPage />
      <Footer />
      <FloatingContactButton />
    </div>
  );
}
