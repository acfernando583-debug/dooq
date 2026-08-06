import { motion, useScroll, useTransform } from "framer-motion";
import { slas } from "../data/catalog";
import { ShieldCheck, Clock, CheckCircle2, AlertTriangle } from "lucide-react";

export default function SLATable() {
  const { scrollYProgress } = useScroll();
  const parallaxPattern = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section id="sla" className="py-20 bg-surface-card bg-tech-dots relative overflow-hidden">
      {/* Parallax Pattern Background */}
      <motion.div
        style={{ y: parallaxPattern }}
        className="absolute inset-0 bg-tech-lines opacity-60 pointer-events-none"
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dooq-primary/10 text-dooq-primary font-mono text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Garantía de Servicio</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-dooq-dark tracking-tight mb-3">
            SLA — Acuerdos de Nivel de Servicio
          </h2>
          <p className="text-dooq-muted text-base sm:text-lg">
            Garantizamos tiempos de respuesta y disponibilidad continua según la criticidad de su operación.
          </p>
        </motion.div>

        {/* Glass Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card p-2 sm:p-6 shadow-glass-lg border border-white/80"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-dooq-border/80 text-dooq-muted text-xs font-mono font-bold uppercase tracking-wider">
                  <th className="py-4 px-6">Plan SLA</th>
                  <th className="py-4 px-6">Tiempo de Respuesta</th>
                  <th className="py-4 px-6">Disponibilidad Soporte</th>
                  <th className="py-4 px-6">Nivel Prioridad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dooq-border/50 text-sm font-medium">
                {slas.map((sla, i) => (
                  <motion.tr
                    key={sla.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="hover:bg-slate-50/80 transition-colors"
                  >
                    <td className="py-4 px-6 font-heading font-bold text-base text-dooq-dark">
                      {sla.name}
                    </td>
                    <td className="py-4 px-6 text-dooq-text font-mono flex items-center gap-2">
                      <Clock className="w-4 h-4 text-dooq-primary" />
                      <span>{sla.responseTime}</span>
                    </td>
                    <td className="py-4 px-6 text-dooq-text font-mono">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-dooq-success" />
                        {sla.availability}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`q-tag ${
                          sla.priority === "Crítica"
                            ? "q-tag-rose"
                            : sla.priority === "Alta"
                            ? "q-tag-orange"
                            : sla.priority === "Media"
                            ? "q-tag-blue"
                            : "q-tag-cyan"
                        }`}
                      >
                        {sla.priority === "Crítica" && <AlertTriangle className="w-3 h-3 inline mr-1" />}
                        {sla.priority}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}