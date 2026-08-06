import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import { zennonPlans } from "../data/catalog";
import { ArrowRight } from "lucide-react";
import zennonLogo from "../assets/logos/zennon-logo.svg";

const zennonColor = "#10B981";

export default function ZennOnSection() {
  return (
    <section id="zennon" className="bg-[#0C0C0C] relative overflow-hidden py-20 sm:py-24 md:py-32">
      {/* Tech Pattern Background */}
      <div className="absolute inset-0 bg-tech-dots opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-tech-lines opacity-20 pointer-events-none" />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)" }}
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)" }}
          animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="section-container relative z-10">
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 text-white/80 font-mono text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400/60" />
              <span>Productividad & Talento Local</span>
            </span>
            <img src={zennonLogo} alt="ZennOn" className="w-24 h-auto mx-auto mb-4" />
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight mb-4"
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            >
              ZennOn
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg font-light">
              Red inteligente de oportunidades hiperlocales. Geolocalización, gestión personal, IA asistida y marketplace digital.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {zennonPlans.map((plan, i) => (
            <FadeIn key={i} delay={i * 0.05} y={20}>
              <motion.div
                className="group relative h-full"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div
                  className="relative h-full rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${zennonColor}12 0%, ${zennonColor}05 100%)`,
                    border: `1px solid ${zennonColor}25`,
                  }}
                >
                  {/* Hover glow */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${zennonColor}20 0%, transparent 60%)`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{
                        background: `linear-gradient(135deg, ${zennonColor}25 0%, ${zennonColor}10 100%)`,
                        border: `1px solid ${zennonColor}30`,
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <span className="text-xl font-black" style={{ color: zennonColor }}>
                        Z
                      </span>
                    </motion.div>

                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-white group-hover:translate-x-1 transition-transform duration-300">
                        {plan.name}
                      </h3>
                      {plan.period && (
                        <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider flex-shrink-0 ml-2">
                          {plan.period}
                        </span>
                      )}
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-2xl sm:text-3xl font-black text-white drop-shadow-md">
                        {plan.price}
                      </span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 flex-1 mb-4">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-white/70">
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: zennonColor }} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <motion.a
                      href="#catalogo"
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300"
                      style={{ color: zennonColor }}
                      whileHover={{ x: 5 }}
                    >
                      <span>Ver planes</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  </div>

                  {/* Corner glow */}
                  <motion.div
                    className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at top right, ${zennonColor}25 0%, transparent 70%)`,
                    }}
                  />
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

