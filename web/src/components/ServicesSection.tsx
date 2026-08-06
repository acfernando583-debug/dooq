import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import {
  Code, Brain, Cloud, Shield, Palette,
  ArrowRight
} from "lucide-react";

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  image: string;
  features: string[];
}

const services: ServiceItem[] = [
  {
    number: "01",
    title: "Software Custom",
    description: "Desarrollo de software a la medida: aplicaciones web, móviles y empresariales escalables con arquitectura moderna.",
    icon: <Code className="w-8 h-8" />,
    color: "#2563EB",
    image: "/marquee/01-software.jpg",
    features: ["Web Apps", "Móviles", "Enterprise", "APIs"],
  },
  {
    number: "02",
    title: "Inteligencia Artificial",
    description: "Soluciones de IA y machine learning para automatización, análisis predictivo y asistentes inteligentes.",
    icon: <Brain className="w-8 h-8" />,
    color: "#8B5CF6",
    image: "/marquee/02-ia.jpg",
    features: ["LLMs", "RAG", "Computer Vision", "Analytics"],
  },
  {
    number: "03",
    title: "Cloud & Infraestructura",
    description: "Infraestructura cloud, servidores, bases de datos y DevOps para garantizar disponibilidad y rendimiento.",
    icon: <Cloud className="w-8 h-8" />,
    color: "#06B6D4",
    image: "/marquee/03-cloud.jpg",
    features: ["AWS", "Azure", "K8s", "DevOps"],
  },
  {
    number: "04",
    title: "Ciberseguridad",
    description: "Protección integral: SOC, firewalls, monitoreo 24/7 y cumplimiento normativo para su operación.",
    icon: <Shield className="w-8 h-8" />,
    color: "#EF4444",
    image: "/marquee/10-ciberseguridad.jpg",
    features: ["SOC", "Pentesting", "Cumplimiento", "Monitoreo"],
  },
  {
    number: "05",
    title: "Diseño & Marketing",
    description: "Diseño UX/UI, identidad visual, marketing digital y estrategias de posicionamiento para marcas.",
    icon: <Palette className="w-8 h-8" />,
    color: "#EC4899",
    image: "/marquee/08-diseno.jpg",
    features: ["UX/UI", "Branding", "SEO", "Growth"],
  },
];

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  return (
    <FadeIn delay={index * 0.1} y={30}>
      <motion.div
        className="group relative h-full"
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Main card */}
        <div
          className="relative h-full rounded-3xl overflow-hidden transition-all duration-500"
          style={{
            background: `linear-gradient(135deg, ${service.color}15 0%, ${service.color}05 100%)`,
            border: `1px solid ${service.color}30`,
          }}
        >
          {/* Background Image */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${service.image})` }}
            initial={{ scale: 1.1, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />

          {/* Gradient overlay */}
          <motion.div
            className="absolute inset-0 opacity-80"
            style={{
              background: `linear-gradient(135deg, ${service.color}30 0%, ${service.color}10 50%, transparent 100%)`,
            }}
          />

          {/* Hover glow effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 0%, ${service.color}25 0%, transparent 60%)`,
            }}
          />

          {/* Animated background pattern */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(${service.color}20 1px, transparent 1px)`,
              backgroundSize: "16px 16px",
            }}
          />

          <div className="relative z-10 p-6 sm:p-8">
            {/* Icon container */}
            <motion.div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative"
              style={{
                background: `linear-gradient(135deg, ${service.color}25 0%, ${service.color}10 100%)`,
                border: `1px solid ${service.color}40`,
                boxShadow: `0 8px 32px ${service.color}20`,
              }}
              whileHover={{
                scale: 1.15,
                rotate: 5,
                boxShadow: `0 12px 48px ${service.color}40`,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div style={{ color: service.color }}>
                {service.icon}
              </div>

              {/* Pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                style={{
                  border: `2px solid ${service.color}50`,
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Number */}
            <motion.span
              className="text-xs font-mono uppercase tracking-widest mb-3 block"
              style={{ color: service.color }}
              whileHover={{ x: 5 }}
            >
              {service.number}
            </motion.span>

            {/* Title */}
            <h3
              className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300 drop-shadow-lg"
              style={{ fontSize: "clamp(1.1rem, 2.2vw, 2rem)" }}
            >
              {service.title}
            </h3>

            {/* Description */}
            <p
              className="text-white/70 leading-relaxed mb-6 drop-shadow-md"
              style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)" }}
            >
              {service.description}
            </p>

            {/* Features tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {service.features.map((feature, i) => (
                <motion.span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-mono font-medium transition-all duration-300"
                  style={{
                    background: `${service.color}20`,
                    color: service.color,
                    border: `1px solid ${service.color}30`,
                    backdropFilter: "blur(4px)",
                  }}
                  whileHover={{ scale: 1.08 }}
                >
                  {feature}
                </motion.span>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#catalogo"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group/link"
              style={{ color: service.color }}
              whileHover={{ x: 5 }}
            >
              <span>Explorar servicios</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </motion.a>
          </div>

          {/* Corner decoration */}
          <motion.div
            className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(circle at top right, ${service.color}30 0%, transparent 70%)`,
            }}
          />

          {/* Bottom gradient line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
            }}
          />
        </div>
      </motion.div>
    </FadeIn>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative overflow-hidden"
    >
      {/* Tech Pattern Background */}
      <div className="absolute inset-0 bg-tech-hex opacity-20 pointer-events-none" />

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)" }}
          animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)" }}
          animate={{ y: [0, -30, 0], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 60%)" }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white/80 font-mono text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-white/40" />
              <span>Nuestros Servicios</span>
            </span>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            >
              Services
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg font-light mt-4">
              Soluciones tecnológicas completas para cada etapa de tu negocio.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
