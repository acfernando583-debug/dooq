import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";
import {
  paymentMethods,
  guarantees,
  discounts,
  commercialModels,
  slas,
} from "../data/catalog";
import {
  Check, ArrowRight, Shield, CreditCard, Award, Percent,
  Sparkles
} from "lucide-react";
import dooqLogo from "../assets/logos/dooq-logo.svg";
export default function ContactForm() {
  const { scrollYProgress } = useScroll();
  const parallaxBg = useTransform(scrollYProgress, [0.8, 1], ["0%", "-20%"]);

  return (
    <>
      {/* Modalidades de Contratación */}
      <section id="modelo" className="bg-[#0C0C0C] border-t border-white/10 relative">
        {/* Tech Pattern Background */}
        <div className="absolute inset-0 bg-tech-circuit opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

        <div className="section-container relative z-10 py-16 sm:py-20">
          <FadeIn delay={0} y={20}>
            <div className="mb-8 text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 text-[#D7E2EA]/80 font-mono text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
                <Sparkles className="w-4 h-4" />
                <span>Flexibilidad Financiera</span>
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight mb-2">
                Modalidades de Contratación
              </h2>
              <p className="text-[#D7E2EA]/60 text-sm">
                Adaptadas a la escala y ritmo de crecimiento de cada proyecto.
              </p>
            </div>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
            {commercialModels.map((model, i) => (
              <motion.span
                key={i}
                initial={{ y: -80, opacity: 0, rotateX: -20 }}
                whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.06,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-xl border border-white/10 bg-white/5 text-[#D7E2EA]/70 cursor-default"
              >
                <Sparkles className="w-3.5 h-3.5 text-white/40" />
                <span>{model}</span>
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* SLA Tabla */}
      <section id="sla" className="bg-[#0C0C0C] border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />
        <div className="section-container relative z-10 py-20 sm:py-24">
          <FadeIn delay={0} y={25}>
            <div className="mb-10 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 text-[#D7E2EA]/80 font-mono text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
                <Shield className="w-4 h-4" />
                <span>Garantía de Servicio</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-3">
                SLA — Acuerdos de Nivel de Servicio
              </h2>
              <p className="text-[#D7E2EA]/60 text-base sm:text-lg">
                Garantizamos tiempos de respuesta y disponibilidad continua según la criticidad de su operación.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} y={30}>
            <div className="glass-card p-2 sm:p-6 shadow-glass-lg border border-white/10 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-white/10 text-[#D7E2EA]/40 text-xs font-mono font-bold uppercase tracking-wider">
                    <th className="py-4 px-6">Plan SLA</th>
                    <th className="py-4 px-6">Tiempo de Respuesta</th>
                    <th className="py-4 px-6">Disponibilidad Soporte</th>
                    <th className="py-4 px-6">Nivel Prioridad</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm font-medium">
                  {slas.map((sla, i) => {
                    const directions = [
                      { x: -40, y: 0 },
                      { x: 40, y: 0 },
                      { x: 0, y: -30 },
                      { x: 0, y: 30 },
                    ];
                    const dir = directions[i % directions.length];
                    return (
                      <motion.tr
                        key={sla.name}
                        initial={{ opacity: 0, ...dir }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="hover:bg-white/5 transition-colors"
                      >
                      <td className="py-4 px-6 font-heading font-bold text-base text-white">
                        {sla.name}
                      </td>
                      <td className="py-4 px-6 text-[#D7E2EA]/70 font-mono flex items-center gap-2">
                        <Shield className="w-4 h-4 text-white/40" />
                        <span>{sla.responseTime}</span>
                      </td>
                      <td className="py-4 px-6 text-[#D7E2EA]/70 font-mono">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 text-[#D7E2EA]/60">
                          {sla.availability}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider ${
                          sla.priority === "Crítica" ? "bg-rose-500/10 text-rose-400 border border-rose-500/20" :
                          sla.priority === "Alta" ? "bg-orange-500/10 text-orange-400 border border-orange-500/20" :
                          sla.priority === "Media" ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" :
                          "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                        }`}>
                          {sla.priority === "Crítica" && <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />}
                          {sla.priority}
                        </span>
                      </td>
                    </motion.tr>
                  );
                })}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pagos, Garantías y Descuentos */}
      <section id="garantias" className="bg-[#0C0C0C] border-t border-white/10 relative">
        <div className="absolute inset-0 bg-tech-dots opacity-30 pointer-events-none" />
        <div className="section-container py-20 sm:py-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Payment Methods */}
            <FadeIn delay={0} y={20}>
              <motion.div
                className="relative h-full rounded-3xl p-6 overflow-hidden group cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(16,185,129,0.02) 100%)",
                  border: "1px solid rgba(16,185,129,0.25)",
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 50% 0%, rgba(16,185,129,0.2) 0%, transparent 60%)" }}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(16,185,129,0.2)", border: "1px solid rgba(16,185,129,0.3)" }}>
                      <CreditCard className="w-4 h-4" style={{ color: "#10B981" }} />
                    </div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Formas de Pago</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {paymentMethods.map((m, idx) => (
                      <span key={idx} className="px-2.5 py-1.5 rounded-xl text-[10px] font-mono font-medium transition-all duration-300 hover:scale-105" style={{ background: "rgba(16,185,129,0.1)", color: "#10B981", border: "1px solid rgba(16,185,129,0.2)" }}>
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(90deg, transparent, #10B981, transparent)" }} />
              </motion.div>
            </FadeIn>

            {/* Guarantees */}
            <FadeIn delay={0.1} y={20}>
              <motion.div
                className="relative h-full rounded-3xl p-6 overflow-hidden group cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(6,182,212,0.02) 100%)",
                  border: "1px solid rgba(6,182,212,0.25)",
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 50% 0%, rgba(6,182,212,0.2) 0%, transparent 60%)" }}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(6,182,212,0.2)", border: "1px solid rgba(6,182,212,0.3)" }}>
                      <Shield className="w-4 h-4" style={{ color: "#06B6D4" }} />
                    </div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Garantías</h3>
                  </div>
                  <ul className="space-y-2.5 text-xs font-medium">
                    {guarantees.map((g, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-white/70">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#06B6D4" }} />
                        <span>{g.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(90deg, transparent, #06B6D4, transparent)" }} />
              </motion.div>
            </FadeIn>

            {/* Discounts */}
            <FadeIn delay={0.2} y={20}>
              <motion.div
                className="relative h-full rounded-3xl overflow-hidden group cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, rgba(236,72,153,0.12) 0%, rgba(236,72,153,0.03) 100%)",
                  border: "1px solid rgba(236,72,153,0.25)",
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(/marquee/09-marketing.jpg)` }}
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.15 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 50% 0%, rgba(236,72,153,0.25) 0%, transparent 60%)" }}
                />
                <div className="relative z-10 p-6">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(236,72,153,0.2)", border: "1px solid rgba(236,72,153,0.3)" }}>
                      <Percent className="w-4 h-4" style={{ color: "#EC4899" }} />
                    </div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Descuentos</h3>
                  </div>
                  <ul className="space-y-2.5 text-xs font-medium">
                    {discounts.map((d, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-white/70">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#EC4899" }} />
                        <span>{d.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(90deg, transparent, #EC4899, transparent)" }} />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-gradient-to-b from-[#0C0C0C] to-[#111] relative overflow-hidden">
        {/* Tech Pattern Background */}
        <div className="absolute inset-0 bg-tech-circuit opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-20 -right-20 w-96 h-96 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(29,99,237,0.2) 0%, transparent 70%)" }}
            animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)" }}
            animate={{ y: [0, -30, 0], x: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="section-container text-center max-w-3xl mx-auto relative z-10 py-24 sm:py-32">
          {/* Badge con pulso intenso */}
          <FadeIn delay={0} y={20}>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white font-mono text-xs font-semibold uppercase tracking-wider mb-6 border border-white/20"
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0 0 rgba(255,255,255,0.2)",
                  "0 0 0 10px rgba(255,255,255,0)",
                  "0 0 0 0 rgba(255,255,255,0)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.span>
              <span>Cotización Inmediata</span>
            </motion.div>
          </FadeIn>

          {/* Título con shake sutil */}
          <FadeIn delay={0.1} y={20}>
            <motion.h2
              className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-6 leading-tight"
              animate={{
                x: [0, -2, 2, -2, 2, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
            >
              ¿Listo para transformar tu empresa con DOOQ?
            </motion.h2>
          </FadeIn>

          {/* Párrafo con efecto de reveal */}
          <FadeIn delay={0.2} y={20}>
            <motion.p
              className="text-white/90 text-lg mb-10 max-w-xl mx-auto font-normal leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Nuestros ingenieros y consultores están listos para estructurar la solución tecnológica que tu negocio requiere.
            </motion.p>
          </FadeIn>

          {/* Botón con efectos intensos */}
          <FadeIn delay={0.3} y={20}>
            <motion.div
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Efecto de pulso detrás del botón */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
                  filter: "blur(15px)",
                  opacity: 0.6,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0.3, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.a
                href="https://wa.me/573000000000?text=Hola%20DOOQ,%20deseo%20una%20cotizaci%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-white text-[#0C0C0C] font-semibold rounded-full py-4 px-8 sm:px-10 inline-flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 30px rgba(255,255,255,0.4)"
                }}
                whileTap={{ scale: 0.96 }}
              >
                <motion.span
                  animate={{
                    x: [0, 3, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span>Solicitar Cotización</span>
                  <ArrowRight className="w-4 h-4 inline ml-1" />
                </motion.span>
              </motion.a>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

