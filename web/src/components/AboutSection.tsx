import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
import { Cpu, Cloud, Shield, PenTool } from "lucide-react";
import dooqLogo from "../assets/logos/dooq-logo.svg";

const serviceIcons = [
  {
    Icon: Cpu,
    label: "Software & IA",
    color: "#1D63ED",
    className:
      "absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]",
  },
  {
    Icon: Cloud,
    label: "Cloud",
    color: "#2563EB",
    className:
      "absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]",
  },
  {
    Icon: Shield,
    label: "Ciberseguridad",
    color: "#EC4899",
    className:
      "absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]",
  },
  {
    Icon: PenTool,
    label: "Diseño & Marketing",
    color: "#8B5CF6",
    className:
      "absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0C0C0C] relative overflow-hidden px-5 sm:px-8 md:px-10 py-20"
    >
      {/* Tech Pattern Background */}
      <div className="absolute inset-0 bg-tech-hex opacity-40 pointer-events-none" />

      {/* Service Icons */}
      {serviceIcons.map((item, i) => (
        <FadeIn
          key={i}
          delay={0.1 + i * 0.15}
          x={i % 2 === 0 ? -80 : 80}
          y={0}
          duration={0.9}
          className={item.className}
        >
          <motion.div
            className="relative flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div
              className="w-full aspect-square rounded-3xl flex items-center justify-center relative overflow-hidden border border-white/10"
              style={{
                background: `linear-gradient(135deg, ${item.color}20 0%, ${item.color}05 100%)`,
              }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: `0 0 40px ${item.color}40, inset 0 0 30px ${item.color}20`,
                }}
              />
              <item.Icon
                className="w-3/5 h-3/5 relative z-10"
                style={{ color: item.color, strokeWidth: 1.5 }}
              />
            </div>
            <div
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-widest whitespace-nowrap"
              style={{ color: `${item.color}99` }}
            >
              {item.label}
            </div>
          </motion.div>
        </FadeIn>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
          <img src={dooqLogo} alt="DOOQ" className="w-20 h-auto mx-auto mb-4" />
            Acerca De
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} y={20}>
          <div className="max-w-[560px] text-center">
            <AnimatedText
              text="DOOQ Technology Holding es un ecosistema tecnológico que integra software, inteligencia artificial, cloud, ciberseguridad, diseño, marketing y logística. Conectamos la sabiduría estratégica, la estructura de procesos y la ejecución inteligente para construir soluciones que transforman empresas en Colombia."
              className="text-[#D7E2EA] font-medium leading-relaxed text-balance"
              style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

