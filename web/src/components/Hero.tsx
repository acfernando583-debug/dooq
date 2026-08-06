import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Zap, ChevronDown, Compass, Heart, Building2, Book } from "lucide-react";
import DooqLogo from "./DooqLogo";

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const heroChildVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function Hero() {
  const { scrollY } = useScroll();
  const yOrb1 = useTransform(scrollY, [0, 800], [0, 140]);
  const yOrb2 = useTransform(scrollY, [0, 800], [0, -100]);
  const yImage = useTransform(scrollY, [0, 800], [0, 60]);
  const opacityHero = useTransform(scrollY, [0, 600], [1, 0.5]);

  return (
    <section className="gradient-bg-hero relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Slow-Moving Background Mesh */}
      <div className="hero-bg-mesh" />

      {/* Slow Drifting Orbs */}
      <div className="hero-orb-slow hero-orb-slow-1 absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="hero-orb-slow hero-orb-slow-2 absolute bottom-10 -left-40 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />
      <div className="hero-orb-slow hero-orb-slow-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/8 blur-3xl pointer-events-none" />

      {/* PARALLAX Glowing Orbs */}
      <motion.div
        style={{ y: yOrb1 }}
        className="absolute top-1/4 -right-20 w-96 h-96 rounded-full opacity-25 blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <motion.div
        style={{ y: yOrb2 }}
        className="absolute bottom-10 -left-20 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      <motion.div style={{ opacity: opacityHero }} className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Logo & Badge */}
            <motion.div variants={heroChildVariants} className="mb-6 flex items-center gap-3">
              <DooqLogo variant="white" size="lg" />
              <div className="h-6 w-px bg-white/20" />
              <span className="text-slate-300 text-xs font-mono tracking-wider uppercase">
                Holding 2026
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={heroChildVariants}
              className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] mb-5"
            >
              Ecosistema Tecnológico, <br />
              <span className="gradient-text">Creativo y Logístico</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={heroChildVariants}
              className="text-slate-300 text-base sm:text-lg max-w-xl font-normal leading-relaxed mb-6"
            >
              "Donde la sabiduría estructura el flujo, la tecnología activa soluciones y cada conexión genera valor infinito."
            </motion.p>

            {/* 3 Pillar Badges */}
            <motion.div
              variants={heroChildVariants}
              className="flex flex-wrap gap-2.5 mb-8"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-mono">
                <Building2 className="w-3.5 h-3.5 text-blue-400" />
                <span>DOOQ Enterprise</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-mono">
                <Compass className="w-3.5 h-3.5 text-emerald-400" />
                <span>ZennOn</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-500/20 border border-rose-400/30 text-rose-200 text-xs font-mono">
                <Heart className="w-3.5 h-3.5 text-rose-400" />
                <span>BFriends Edu</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-violet-500/20 border border-violet-400/30 text-violet-200 text-xs font-mono">
                <Book className="w-3.5 h-3.5 text-violet-400" />
                <span>Planika</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={heroChildVariants}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8"
            >
              <motion.a
                href="#catalogo"
                className="btn-cta text-base w-full sm:w-auto inline-flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                Explorar Catálogo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-outline text-base w-full sm:w-auto inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <Zap className="w-4 h-4 text-white" />
                Cotizar Solución
              </motion.a>
            </motion.div>

            {/* Key Metrics */}
            <motion.div
              variants={heroChildVariants}
              className="grid grid-cols-3 gap-4 w-full max-w-lg pt-6 border-t border-white/10"
            >
              {[
                { label: "Marcas Holding", val: "3" },
                { label: "Líneas de Servicio", val: "14" },
                { label: "SLA Garantizado", val: "100%" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="font-heading font-extrabold text-2xl text-white">
                    {stat.val}
                  </p>
                  <p className="text-[11px] font-medium text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: PARALLAX Banner Image */}
          <motion.div
            style={{ y: yImage }}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="glass-card-dark p-3 rounded-3xl border border-white/15 shadow-glow-blue overflow-hidden">
              <img
                src="/images/hero.png"
                alt="DOOQ Technology Holding"
                className="w-full h-auto rounded-2xl object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10 text-slate-400 flex flex-col items-center gap-1 cursor-pointer"
        >
          <a href="#filosofia" className="flex flex-col items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors">
            <span>Descubre la Filosofía DOOQ</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}