import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import { ExternalLink } from "lucide-react";
import { holdingPillars } from "../data/catalog";
import dooqLogo from "../assets/logos/dooq-logo.svg";
import zennonLogo from "../assets/logos/zennon-logo.svg";
import bfriendsLogo from "../assets/logos/kyboos-logo.svg";
import planikaLogo from "../assets/logos/planika-logo.svg";
const logoMap: Record<string, string> = { dooq: dooqLogo, zennon: zennonLogo, bfriends: bfriendsLogo, planika: planikaLogo };

function PillarCard({ pillar, index }: { pillar: typeof holdingPillars[0]; index: number }) {
  return (
    <FadeIn delay={index * 0.12} y={40}>
      <motion.div
        className="glass-card p-6 sm:p-8 border border-white/10 h-full flex flex-col relative overflow-hidden group cursor-pointer"
        whileHover={{
          scale: 1.03,
          borderColor: `${pillar.color}40`,
          boxShadow: `0 20px 60px ${pillar.color}20, 0 0 40px ${pillar.color}15`,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Glow background on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${pillar.color}15 0%, transparent 60%)`,
          }}
        />

        {/* Logo with glow */}
        <div className="relative mb-6">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center relative"
            style={{
              background: `linear-gradient(135deg, ${pillar.color}20 0%, ${pillar.color}05 100%)`,
              border: `1px solid ${pillar.color}30`,
            }}
          >
            <img
              src={logoMap[pillar.logo]}
              alt={pillar.name}
              className="w-10 h-10 relative z-10 object-contain"
            />
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                boxShadow: `0 0 30px ${pillar.color}40, inset 0 0 20px ${pillar.color}20`,
              }}
            />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 relative z-10">
          {pillar.name}
        </h3>
        <p className="text-xs font-mono uppercase tracking-widest mb-4 relative z-10" style={{ color: pillar.color }}>
          {pillar.target}
        </p>
        <p className="text-sm text-white/60 leading-relaxed flex-1 relative z-10">
          {pillar.description}
        </p>

        {/* Link */}
        <motion.div
          className="mt-6 pt-4 border-t border-white/10 relative z-10"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <a
            href={pillar.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-white/40 hover:text-white transition-colors"
          >
            {pillar.subdomain}
            <ExternalLink className="w-3 h-3" />
          </a>
        </motion.div>

        {/* Corner accent */}
        <div
          className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at top right, ${pillar.color}20 0%, transparent 70%)`,
          }}
        />
      </motion.div>
    </FadeIn>
  );
}

export default function HoldingArchitecture() {
  return (
    <section id="holding" className="bg-[#0C0C0C] relative overflow-hidden py-20 sm:py-24 md:py-32">
      {/* Tech Pattern Background */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
          style={{ background: `radial-gradient(circle, ${holdingPillars[0].color}20 0%, transparent 70%)` }}
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-20"
          style={{ background: `radial-gradient(circle, ${holdingPillars[2].color}20 0%, transparent 70%)` }}
          animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="section-container relative z-10">
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 text-white/80 font-mono text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-white/40" />
              <span>Arquitectura del Holding</span>
            </span>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight mb-4"
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            >
              4 Pilares
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg font-light">
              Ecosistema tecnológico integrado que conecta software, productividad, bienestar y educación.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {holdingPillars.map((pillar, i) => (
            <PillarCard key={pillar.id} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
