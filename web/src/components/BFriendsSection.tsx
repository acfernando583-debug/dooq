import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import { bfriendsEduPlans } from "../data/catalog";

const bfriendsColor = "#F43F5E";

export default function BFriendsSection() {
  return (
    <section id="bfriends" className="bg-[#0C0C0C] relative overflow-hidden py-20 sm:py-24 md:py-32">
      {/* Tech Pattern Background */}
      <div className="absolute inset-0 bg-tech-hex opacity-30 pointer-events-none" />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(244,63,94,0.15) 0%, transparent 70%)" }}
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(244,63,94,0.1) 0%, transparent 70%)" }}
          animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="section-container relative z-10">
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 text-white/80 font-mono text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-rose-400/60" />
              <span>Bienestar Humano & Educación</span>
            </span>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight mb-4"
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            >
              BFriends
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg font-light">
              Ecosistema de salud mental, apoyo emocional y programa escolar integral para instituciones educativas.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {bfriendsEduPlans.map((plan, i) => (
            <FadeIn key={i} delay={i * 0.1} y={30}>
              <motion.div
                className="group relative h-full"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div
                  className="relative h-full rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${bfriendsColor}12 0%, ${bfriendsColor}05 100%)`,
                    border: `1px solid ${bfriendsColor}25`,
                  }}
                >
                  {/* Hover glow */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${bfriendsColor}20 0%, transparent 60%)`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{
                        background: `linear-gradient(135deg, ${bfriendsColor}25 0%, ${bfriendsColor}10 100%)`,
                        border: `1px solid ${bfriendsColor}30`,
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <span className="text-xl font-black" style={{ color: bfriendsColor }}>
                        B
                      </span>
                    </motion.div>

                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:translate-x-1 transition-transform duration-300">
                          {plan.name}
                        </h3>
                        <p className="text-xs text-white/40 font-mono mt-1">{plan.capacity}</p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-2">
                      <span className="text-2xl sm:text-3xl font-black text-white drop-shadow-md">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-xs text-white/40 mb-4">{plan.priceLabel}</p>
                    <p className="text-xs text-white/50 mb-4 italic">{plan.example}</p>

                    {/* Features */}
                    <ul className="space-y-2 flex-1 mb-4">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-white/70">
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: bfriendsColor }} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <motion.a
                      href="#catalogo"
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300"
                      style={{ color: bfriendsColor }}
                      whileHover={{ x: 5 }}
                    >
                      <span>Ver planes</span>
                      <motion.span whileHover={{ x: 3 }}>→</motion.span>
                    </motion.a>
                  </div>

                  {/* Corner glow */}
                  <motion.div
                    className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at top right, ${bfriendsColor}25 0%, transparent 70%)`,
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
