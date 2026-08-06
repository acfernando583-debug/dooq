import { motion, useScroll, useTransform } from "framer-motion";
import { holdingCombos } from "../data/catalog";
import { Zap, Sparkles, Check, ArrowRight } from "lucide-react";

export default function Combo360Section() {
  const { scrollYProgress } = useScroll();
  const parallaxPattern = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  return (
    <section id="dooq360" className="py-24 bg-gradient-to-br from-dooq-dark via-slate-900 to-dooq-dark text-white relative overflow-hidden bg-tech-circuit">
      {/* Parallax Pattern Background */}
      <motion.div
        style={{ y: parallaxPattern }}
        className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none"
      />

      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-amber-400 font-mono text-xs font-semibold uppercase tracking-wider mb-4 border border-white/15 backdrop-blur-md">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Paquete Todo Incluido</span>
          </div>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-4 leading-tight">
            Combo Holding <span className="gradient-text">DOOQ 360</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Un paquete premium que integra los 3 pilares del holding (DOOQ Enterprise + ZennOn + BFriends) en una única suscripción unificada.
          </p>
        </motion.div>

        {/* Combo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {holdingCombos.map((combo, i) => (
            <motion.div
              key={combo.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`glass-card-dark p-8 flex flex-col justify-between rounded-3xl border ${
                combo.highlight
                  ? "border-amber-500/60 bg-amber-950/20 shadow-glow-orange"
                  : "border-white/15"
              }`}
            >
              <div>
                {combo.highlight && (
                  <div className="mb-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-mono text-xs font-semibold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Recomendado Enterprise</span>
                  </div>
                )}
                <h3 className="font-heading font-extrabold text-3xl text-white mb-2">{combo.name}</h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">{combo.description}</p>

                <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="font-heading font-extrabold text-4xl text-amber-400">
                    {combo.price}
                  </span>
                  <span className="text-xs text-slate-400 block mt-1 font-mono">{combo.priceLabel}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {combo.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                      <Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`btn-cta py-3.5 text-base w-full text-center inline-flex items-center justify-center gap-2 ${
                  combo.highlight ? "bg-gradient-to-r from-amber-500 to-orange-600" : ""
                }`}
              >
                <span>Contratar DOOQ 360</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
