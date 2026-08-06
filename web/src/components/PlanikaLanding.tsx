import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import {
  catalogData as planikaCatalogData,
  holdingCombos,
} from "../data/catalog";

const planikaColor = "#8B5CF6";

const planikaItems = planikaCatalogData.filter((item) => item.category === "Planika");

import planikaLogo from "../assets/logos/planika-logo.svg";
export default function PlanikaLanding() {
  return (
    <section id="planika" className="bg-[#0C0C0C] relative overflow-hidden py-20 sm:py-24 md:py-32">
      {/* Tech Pattern Background */}
      <div className="absolute inset-0 bg-tech-circuit opacity-30 pointer-events-none" />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)" }}
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)" }}
          animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="section-container relative z-10">
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 text-white/80 font-mono text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-violet-400/60" />
              <span>Gobierno Curricular & Educación Superior</span>
            </span>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight mb-4"
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            >
              Planika
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg font-light">
              Motor de gobernanza curricular CKGE y generador de mallas curriculares profesionales para instituciones educativas de Colombia.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {planikaItems.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.08} y={25}>
              <motion.div
                className="group relative h-full"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div
                  className="relative h-full rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${planikaColor}12 0%, ${planikaColor}05 100%)`,
                    border: `1px solid ${planikaColor}25`,
                  }}
                >
                  {/* Hover glow */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${planikaColor}20 0%, transparent 60%)`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{
                        background: `linear-gradient(135deg, ${planikaColor}25 0%, ${planikaColor}10 100%)`,
                        border: `1px solid ${planikaColor}30`,
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <span className="text-xl font-black" style={{ color: planikaColor }}>
                        P
                      </span>
                    </motion.div>

                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: planikaColor }}>
                          {item.subcategory}
                        </span>
                        <h3 className="text-lg font-bold text-white mt-1 group-hover:translate-x-1 transition-transform duration-300">
                          {item.name}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-white/60 leading-relaxed mb-4 flex-1">
                      {item.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.features.slice(0, 4).map((feature, j) => (
                        <span
                          key={j}
                          className="px-2 py-1 rounded-md text-[10px] font-mono font-medium transition-all duration-300"
                          style={{
                            background: `${planikaColor}15`,
                            color: planikaColor,
                            border: `1px solid ${planikaColor}25`,
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="pt-4 border-t border-white/10 flex items-end justify-between">
                      <div>
                        <span className="text-2xl font-black text-white drop-shadow-md">{item.price}</span>
                        <p className="text-[10px] font-mono text-white/40 uppercase tracking-wider mt-0.5">
                          {item.priceLabel}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Corner glow */}
                  <motion.div
                    className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at top right, ${planikaColor}25 0%, transparent 70%)`,
                    }}
                  />
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* DOOQ 360 Combos in Planika section */}
        <FadeIn delay={0.3} y={40}>
          <div className="text-center mb-10">
            <h3
              className="hero-heading font-black uppercase leading-none tracking-tight text-white"
              style={{ fontSize: "clamp(2rem, 6vw, 80px)" }}
            >
              DOOQ 360
            </h3>
            <p className="text-white/60 mt-2">Combos integrados del holding</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {holdingCombos.map((combo, i) => (
            <FadeIn key={i} delay={i * 0.1} y={20}>
              <motion.div
                className="relative h-full rounded-3xl overflow-hidden group cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Background Image */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(/marquee/${i === 0 ? '01-software' : '02-ia'}.jpg)` }}
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.15 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />

                {/* Gradient overlay */}
                <motion.div
                  className="absolute inset-0 opacity-80"
                  style={{
                    background: "linear-gradient(135deg, rgba(12,12,12,0.9) 0%, rgba(12,12,12,0.7) 50%, rgba(12,12,12,0.5) 100%)",
                  }}
                />

                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 50% 0%, rgba(139,92,246,0.25) 0%, transparent 60%)",
                  }}
                />

                <div className="relative z-10 p-6 sm:p-8">
                  {/* Badge */}
                  {combo.highlight && (
                    <motion.div
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] font-mono uppercase tracking-wider text-white">Más Popular</span>
                    </motion.div>
                  )}

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                          {combo.name.includes("Enterprise") ? "Enterprise" : "PyME"}
                        </span>
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:translate-x-1 transition-transform duration-300">
                        {combo.name}
                      </h4>
                      <p className="text-sm text-white/60 mt-1">{combo.description}</p>
                    </div>
                    <div className="text-left sm:text-right flex-shrink-0">
                      <p className="text-2xl sm:text-3xl font-black text-white drop-shadow-lg">
                        {combo.price}
                      </p>
                      <p className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
                        {combo.priceLabel}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6">
                    {combo.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-white/70 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${j * 50}ms` }}>
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-emerald-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group/link"
                    style={{ color: planikaColor }}
                    whileHover={{ x: 5 }}
                  >
                    <span>Ver detalles</span>
                    <motion.span whileHover={{ x: 3 }}>→</motion.span>
                  </motion.a>
                </div>

                {/* Corner glow */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at top right, rgba(139,92,246,0.3) 0%, transparent 70%)",
                  }}
                />

                {/* Bottom gradient line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(90deg, transparent, #8B5CF6, transparent)",
                  }}
                />
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

