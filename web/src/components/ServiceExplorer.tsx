import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import PricingCard from "./PricingCard";
import { catalogData, serviceCategories } from "../data/catalog";
import {
  Code2, Brain, Cloud, Database, Cpu, Network, Headphones,
  Palette, Megaphone, ShieldCheck, Users, Store, Truck, Package,
  ExternalLink, Sparkles, Book, Cog, Monitor
} from "lucide-react";

const categoryIconMap: Record<string, any> = {
  Software: Code2,
  IA: Brain,
  Cloud: Cloud,
  "Bases de Datos": Database,
  Hardware: Cpu,
  Redes: Network,
  Helpdesk: Headphones,
  Diseño: Palette,
  "Marketing Digital": Megaphone,
  Ciberseguridad: ShieldCheck,
  Consultoría: Users,
  Marketplace: Store,
  "Transporte Q-Cargo": Truck,
  "Q-Packs": Package,
  Planika: Book,
  "Paginas Web": Monitor,
  "Odoo ERP": Cog,
};

export default function ServiceExplorer() {
  const [activeCategory, setActiveCategory] = useState("Software");
  const { scrollYProgress } = useScroll();
  const parallaxPattern = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  const currentCategoryObj = serviceCategories.find((c) => c.name === activeCategory);
  const currentItems = catalogData.filter((i) => i.category === activeCategory);

  return (
    <section id="catalogo" className="py-20 relative bg-surface-card bg-tech-dots">
      {/* Parallax Pattern Background */}
      <motion.div
        style={{ y: parallaxPattern }}
        className="absolute inset-0 bg-tech-circuit opacity-50 pointer-events-none"
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dooq-primary/10 text-dooq-primary font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Explorador de Servicios B2B</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-dooq-dark tracking-tight mb-3">
            Catálogo Interactivo <span className="gradient-text">DOOQ</span>
          </h2>
          <p className="text-dooq-muted text-base sm:text-lg">
            Selecciona una categoría para explorar servicios, especificaciones y precios transparentes.
          </p>
        </motion.div>

        {/* Category Tabs Scroll Bar */}
        <div className="mb-10 overflow-x-auto pb-4 pt-1 no-scrollbar">
          <div className="flex items-center gap-2 min-w-max mx-auto justify-start md:justify-center px-2">
            {serviceCategories.map((cat) => {
              const Icon = categoryIconMap[cat.name] || Sparkles;
              const isActive = activeCategory === cat.name;

              return (
                <motion.button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-heading font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-dooq-dark text-white shadow-lg shadow-dooq-dark/20 ring-2 ring-dooq-primary"
                      : "glass-card text-dooq-text/80 hover:bg-white hover:text-dooq-primary border border-dooq-border/60"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-dooq-cta" : "text-dooq-primary"}`} />
                  <span>{cat.name}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-200/70 text-slate-700"
                  }`}>
                    {cat.items}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Category Domain Banner */}
        {currentCategoryObj?.url && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between p-4 mb-8 rounded-2xl bg-white border border-dooq-border shadow-sm max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-dooq-primary/10 text-dooq-primary">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-dooq-dark">Portal Especializado</h4>
                <p className="text-xs text-dooq-muted">Accede a las herramientas dedicadas de {activeCategory}</p>
              </div>
            </div>
            <a
              href={`https://${currentCategoryObj.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-dooq-primary hover:text-white text-dooq-dark text-xs font-mono font-medium transition-all"
            >
              <span>{currentCategoryObj.url}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        )}

        {/* Dynamic Pricing Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {currentItems.map((item, index) => (
              <PricingCard
                key={item.id}
                name={item.name}
                description={item.description}
                features={item.features}
                price={item.price}
                priceLabel={item.priceLabel}
                url={item.url}
                icon={item.icon}
                index={index}
                highlight={item.id.includes("enterprise") || item.id.includes("business")}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
