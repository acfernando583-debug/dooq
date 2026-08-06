import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";
import DooqLogo from "./DooqLogo";

export default function Footer() {
  const { scrollYProgress } = useScroll();
  const parallaxPattern = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0C0C0C] text-slate-300 relative overflow-hidden pt-20 pb-12 border-t border-white/10">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <DooqLogo variant="white" size="lg" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Technology Holding + Marketplace + Ecosistema Digital. Conectando software, inteligencia artificial, infraestructura, creatividad, salud emocional y logística hiperlocal en Colombia.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white mb-4">
              Servicios
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              <li><a href="#services" className="hover:text-dooq-light transition-colors">Software</a></li>
              <li><a href="#services" className="hover:text-dooq-light transition-colors">Inteligencia Artificial</a></li>
              <li><a href="#services" className="hover:text-dooq-light transition-colors">Cloud & Infraestructura</a></li>
              <li><a href="#services" className="hover:text-dooq-light transition-colors">Ciberseguridad</a></li>
              <li><a href="#services" className="hover:text-dooq-light transition-colors">Marketing Digital</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white mb-4">
              Contacto
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              <li><a href="mailto:contacto@dooq.dev" className="hover:text-dooq-light transition-colors">contacto@dooq.dev</a></li>
              <li><a href="tel:+573000000000" className="hover:text-dooq-light transition-colors">+57 300 000 0000</a></li>
              <li><span className="text-slate-500">Bogotá, Colombia</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© 2026 DOOQ Technology Holding. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#terminos" className="hover:text-dooq-light transition-colors">Términos</a>
            <a href="#terminos" className="hover:text-dooq-light transition-colors">Privacidad</a>
            <a href="#terminos" className="hover:text-dooq-light transition-colors">Cookies</a>
          </div>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="hidden sm:inline">Arriba</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
