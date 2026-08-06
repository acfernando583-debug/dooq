import { motion, useScroll, useTransform } from "framer-motion";
import Magnet from "./Magnet";
import DooqLogo from "./DooqLogo";

import dooqHeadImg from "../assets/img/Dooq Head 2.png";
export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const parallaxBg = useTransform(scrollYProgress, [0.8, 1], ["0%", "-20%"]);

  return (
    <section className="h-screen flex flex-col overflow-x-clip relative pt-16 md:pt-20">
      {/* Tech Pattern Background */}
      <div className="absolute inset-0 bg-tech-circuit opacity-60 pointer-events-none" />

      {/* Hero Heading */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5"
        >
          Hi, i&apos;m dooq
        </motion.h1>

        {/* Bottom bar */}
        <div className="w-full flex justify-between items-end mt-8 sm:mt-10 pb-7 sm:pb-8 md:pb-10 px-4 sm:px-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-balance"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            Ecosistema tecnológico: software, IA, cloud, ciberseguridad, diseño, marketing y logística conectados en una sola plataforma.
          </motion.p>
        </div>
      </div>

      {/* Hero Portrait */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <Magnet padding={150} strength={3}>
          <img
            src={dooqHeadImg}
            alt="DOOQ Portrait"
            className="w-full h-auto object-contain"
            loading="eager"
          />
        </Magnet>
      </motion.div>

      {/* Background pattern */}
      <motion.div
        style={{ y: parallaxBg }}
        className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none"
      />
    </section>
  );
}
