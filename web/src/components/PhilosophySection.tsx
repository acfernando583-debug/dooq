import { motion, useScroll, useTransform } from "framer-motion";
import { dooqPhilosophy } from "../data/catalog";
import { Compass, Layers, Zap, Power, Sparkles, CheckCircle2 } from "lucide-react";

export default function PhilosophySection() {
  const { scrollYProgress } = useScroll();
  const parallaxPattern = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section id="filosofia" className="py-20 bg-dooq-dark text-white relative overflow-hidden bg-tech-circuit">
      {/* Parallax Pattern Background */}
      <motion.div
        style={{ y: parallaxPattern }}
        className="absolute inset-0 bg-tech-grid opacity-80 pointer-events-none"
      />

      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-dooq-cta text-xs font-mono font-semibold uppercase tracking-wider mb-4 border border-white/15 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Filosofía Operativa</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4 leading-tight">
            Concepto & Origen de <span className="gradient-text">DOOQ</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            "{dooqPhilosophy.tagline}"
          </p>
        </motion.div>

        {/* Fusion Formula Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {dooqPhilosophy.fusion.map((item, idx) => {
            const icons = [Compass, Layers, Zap, Power];
            const colors = ["text-blue-400", "text-emerald-400", "text-amber-400", "text-rose-400"];
            const Icon = icons[idx];
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-card-dark p-6 border border-white/10 hover:border-white/25 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-4 ${colors[idx]}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white mb-2">{item.name}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Units Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
          {dooqPhilosophy.units.map((unit, i) => (
            <motion.div
              key={unit.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10"
            >
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-dooq-cta" />
                <h4 className="font-heading font-bold text-lg text-white">{unit.title}</h4>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">{unit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
