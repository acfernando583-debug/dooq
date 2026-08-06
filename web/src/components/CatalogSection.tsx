import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";
import {
  ChevronRight, Search, Grid3X3, Sparkles,
  CreditCard, Shield, Percent, ArrowRight
} from "lucide-react";
import {
  catalogData,
  serviceCategories,
  qPacks,
  slas,
  paymentMethods,
  guarantees,
  discounts,
  holdingCombos,
} from "../data/catalog";

const categoryColors: Record<string, string> = {
  "Software": "#2563EB",
  "IA": "#8B5CF6",
  "Cloud": "#06B6D4",
  "Bases de Datos": "#F59E0B",
  "Hardware": "#EF4444",
  "Redes": "#10B981",
  "Helpdesk": "#F97316",
  "Diseño": "#EC4899",
  "Marketing Digital": "#EF4444",
  "Ciberseguridad": "#EF4444",
  "Consultoría": "#6366F1",
  "Marketplace": "#14B8A6",
  "Transporte Q-Cargo": "#F97316",
  "Q-Packs": "#3B82F6",
  "Planika": "#8B5CF6",
  "Paginas Web": "#2563EB",
  "Odoo ERP": "#F59E0B",
};

const categoryImages: Record<string, string> = {
  "Software": "/marquee/01-software.jpg",
  "IA": "/marquee/02-ia.jpg",
  "Cloud": "/marquee/03-cloud.jpg",
  "Bases de Datos": "/marquee/04-database.jpg",
  "Hardware": "/marquee/05-hardware.jpg",
  "Redes": "/marquee/06-redes.jpg",
  "Helpdesk": "/marquee/07-helpdesk.jpg",
  "Diseño": "/marquee/08-diseno.jpg",
  "Marketing Digital": "/marquee/09-marketing.jpg",
  "Ciberseguridad": "/marquee/10-ciberseguridad.jpg",
  "Consultoría": "/marquee/11-consultoria.jpg",
  "Marketplace": "/marquee/12-marketplace.jpg",
  "Transporte Q-Cargo": "/marquee/13-transporte.jpg",
  "Q-Packs": "/marquee/14-qpacks.jpg",
  "Planika": "/marquee/15-planika.jpg",
  "Paginas Web": "/marquee/16-web.jpg",
  "Odoo ERP": "/marquee/17-odoo.jpg",
};

const categories = [...new Set(catalogData.map((item) => item.category))];

function ServiceCard({ item, index }: { item: typeof catalogData[0]; index: number }) {
  const color = categoryColors[item.category] || "#2563EB";
  const image = categoryImages[item.category] || "/marquee/01-software.jpg";

  return (
    <FadeIn delay={index * 0.04} y={15}>
      <motion.div
        className="group relative h-full"
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div
          className="relative h-full rounded-2xl overflow-hidden transition-all duration-500"
          style={{
            background: `linear-gradient(135deg, ${color}12 0%, ${color}05 100%)`,
            border: `1px solid ${color}25`,
          }}
        >
          {/* Background Image */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            initial={{ scale: 1.1, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />

          {/* Gradient overlay */}
          <motion.div
            className="absolute inset-0 opacity-70"
            style={{
              background: `linear-gradient(135deg, ${color}25 0%, ${color}10 50%, transparent 100%)`,
            }}
          />

          {/* Hover glow */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 0%, ${color}20 0%, transparent 60%)`,
            }}
          />

          <div className="relative z-10 p-5 sm:p-6">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-[10px] font-mono uppercase tracking-widest"
                    style={{ color: color }}
                  >
                    {item.subcategory}
                  </span>
                  {item.highlight && (
                    <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] font-mono uppercase tracking-wider text-white">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:translate-x-1 transition-transform duration-300 drop-shadow-md">
                  {item.name}
                </h3>
              </div>
              <motion.div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${color}25 0%, ${color}10 100%)`,
                  border: `1px solid ${color}30`,
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-lg font-black" style={{ color }}>
                  {item.name.charAt(0)}
                </span>
              </motion.div>
            </div>

            {/* Description */}
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
              {item.description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {item.features.slice(0, 3).map((feature, i) => (
                <motion.span
                  key={i}
                  className="px-2 py-1 rounded-lg text-[10px] sm:text-xs font-mono font-medium transition-all duration-300"
                  style={{
                    background: `${color}15`,
                    color: color,
                    border: `1px solid ${color}25`,
                    backdropFilter: "blur(4px)",
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {feature}
                </motion.span>
              ))}
              {item.features.length > 3 && (
                <span className="px-2 py-1 rounded-lg text-[10px] font-mono text-white/40 border border-white/5">
                  +{item.features.length - 3}
                </span>
              )}
            </div>

            {/* Price and CTA */}
            <div className="flex items-end justify-between pt-3 border-t border-white/10">
              <div>
                <p className="text-lg sm:text-xl font-black text-white drop-shadow-md">
                  {item.price}
                </p>
                {item.priceLabel && (
                  <p className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
                    {item.priceLabel}
                  </p>
                )}
              </div>
              <motion.div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  background: `${color}20`,
                  border: `1px solid ${color}30`,
                }}
                whileHover={{ scale: 1.1, x: 3 }}
              >
                <ChevronRight className="w-4 h-4" style={{ color }} />
              </motion.div>
            </div>
          </div>

          {/* Corner glow */}
          <motion.div
            className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(circle at top right, ${color}25 0%, transparent 70%)`,
            }}
          />
        </div>
      </motion.div>
    </FadeIn>
  );
}

export default function CatalogSection() {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = catalogData.filter((item) => {
    const matchesCategory = item.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="catalogo" className="bg-[#0C0C0C] relative overflow-hidden">
      {/* Tech Pattern Background */}
      <div className="absolute inset-0 bg-tech-dots opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-tech-lines opacity-30 pointer-events-none" />

      <div className="section-container relative z-10 py-20 sm:py-24 md:py-32">
        {/* Header */}
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 text-white/80 font-mono text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
              <Grid3X3 className="w-4 h-4" />
              <span>Catálogo Completo</span>
            </span>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight mb-4"
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            >
              Servicios
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg font-light">
              Soluciones tecnológicas completas para cada etapa de tu negocio. Selecciona una categoría para explorar.
            </p>
          </div>
        </FadeIn>

        {/* Search */}
        <FadeIn delay={0.1} y={20}>
          <div className="max-w-md mx-auto mb-10 sm:mb-12 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Buscar servicios..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm font-medium focus:outline-none focus:border-white/20 transition-colors"
            />
          </div>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Category Navigation */}
          <FadeIn delay={0.15} y={20} className="hidden lg:block lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4 px-3">
                Categorías
              </h3>
              <nav className="space-y-1">
                {categories.map((cat) => {
                  const color = categoryColors[cat] || "#2563EB";
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer relative overflow-hidden"
                      style={{
                        color: activeCategory === cat ? "#FFFFFF" : "rgba(215,226,234,0.6)",
                        background: activeCategory === cat ? `${color}25` : "transparent",
                        border: `1px solid ${activeCategory === cat ? `${color}40` : "transparent"}`,
                      }}
                    >
                      {activeCategory === cat && (
                        <motion.div
                          className="absolute left-0 top-0 bottom-0 w-1"
                          style={{ background: color }}
                          layoutId="activeCategory"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      {cat}
                    </button>
                  );
                })}
              </nav>

              {/* Q-Packs mini */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4 px-3">
                  Q-Packs
                </h3>
                <div className="space-y-2">
                  {qPacks.map((pack) => (
                    <div
                      key={pack.name}
                      className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all cursor-pointer group"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-white group-hover:text-white/90 transition-colors">
                          {pack.name}
                        </span>
                        <span className="text-xs text-white/40">{pack.hours}h</span>
                      </div>
                      <p className="text-xs text-white/50 mt-0.5">{pack.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Mobile Category Selector */}
          <FadeIn delay={0.15} y={20} className="lg:hidden mb-6">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((cat) => {
                const color = categoryColors[cat] || "#2563EB";
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all cursor-pointer"
                    style={{
                      background: isActive ? `${color}25` : "rgba(255,255,255,0.05)",
                      color: isActive ? "#FFFFFF" : "rgba(215,226,234,0.6)",
                      border: `1px solid ${isActive ? `${color}40` : "rgba(255,255,255,0.1)"}`,
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </FadeIn>

          {/* Service Items */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory + searchQuery}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
              >
                {filteredItems.length === 0 ? (
                  <div className="col-span-full text-center py-20 text-white/40">
                    <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium">No se encontraron servicios</p>
                    <p className="text-sm mt-1">Intenta con otra búsqueda o categoría</p>
                  </div>
                ) : (
                  filteredItems.map((item, idx) => (
                    <ServiceCard key={item.id} item={item} index={idx} />
                  ))
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* SLA, Payments, Guarantees, Discounts */}
        <div className="mt-20 sm:mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* SLA */}
          <FadeIn delay={0} y={20}>
            <motion.div
              className="relative h-full rounded-3xl p-6 overflow-hidden group cursor-pointer"
              style={{
                background: "linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(37,99,235,0.02) 100%)",
                border: "1px solid rgba(37,99,235,0.25)",
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 0%, rgba(37,99,235,0.2) 0%, transparent 60%)" }}
              />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(37,99,235,0.2)", border: "1px solid rgba(37,99,235,0.3)" }}>
                  <Sparkles className="w-5 h-5" style={{ color: "#3B82F6" }} />
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">SLA</h3>
                <div className="space-y-3">
                  {slas.map((sla) => (
                    <div key={sla.name} className="flex justify-between items-center text-xs">
                      <span className="text-white/60 font-medium">{sla.name}</span>
                      <span className="text-white/40 font-mono">{sla.responseTime}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(90deg, transparent, #2563EB, transparent)" }} />
            </motion.div>
          </FadeIn>

          {/* Payment Methods */}
          <FadeIn delay={0.1} y={20}>
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
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(16,185,129,0.2)", border: "1px solid rgba(16,185,129,0.3)" }}>
                  <CreditCard className="w-5 h-5" style={{ color: "#10B981" }} />
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Pagos</h3>
                <div className="flex flex-wrap gap-2">
                  {paymentMethods.slice(0, 6).map((m, i) => (
                    <span key={i} className="px-2.5 py-1.5 rounded-xl text-[10px] font-mono font-medium transition-all duration-300" style={{ background: "rgba(16,185,129,0.1)", color: "#10B981", border: "1px solid rgba(16,185,129,0.2)" }}>
                      {m}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(90deg, transparent, #10B981, transparent)" }} />
            </motion.div>
          </FadeIn>

          {/* Guarantees */}
          <FadeIn delay={0.2} y={20}>
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
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(6,182,212,0.2)", border: "1px solid rgba(6,182,212,0.3)" }}>
                  <Shield className="w-5 h-5" style={{ color: "#06B6D4" }} />
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Garantías</h3>
                <ul className="space-y-2.5">
                  {guarantees.slice(0, 4).map((g, i) => (
                    <li key={i} className="text-xs text-white/70 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#06B6D4" }} />
                      {g.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(90deg, transparent, #06B6D4, transparent)" }} />
            </motion.div>
          </FadeIn>

          {/* Discounts */}
          <FadeIn delay={0.3} y={20}>
            <motion.div
              className="relative h-full rounded-3xl p-6 overflow-hidden group cursor-pointer"
              style={{
                background: "linear-gradient(135deg, rgba(236,72,153,0.1) 0%, rgba(236,72,153,0.02) 100%)",
                border: "1px solid rgba(236,72,153,0.25)",
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 0%, rgba(236,72,153,0.2) 0%, transparent 60%)" }}
              />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(236,72,153,0.2)", border: "1px solid rgba(236,72,153,0.3)" }}>
                  <Percent className="w-5 h-5" style={{ color: "#EC4899" }} />
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Descuentos</h3>
                <ul className="space-y-2.5">
                  {discounts.slice(0, 4).map((d, i) => (
                    <li key={i} className="text-xs text-white/70 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#EC4899" }} />
                      {d.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(90deg, transparent, #EC4899, transparent)" }} />
            </motion.div>
          </FadeIn>
        </div>

        {/* DOOQ 360 Combos */}
        <div className="mt-20 sm:mt-24 md:mt-32">
          <FadeIn delay={0} y={40}>
            <div className="text-center mb-10 sm:mb-12">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 text-white/80 font-mono text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
                <Sparkles className="w-4 h-4" />
                <span>DOOQ 360</span>
              </span>
              <h3
                className="hero-heading font-black uppercase leading-none tracking-tight text-white"
                style={{ fontSize: "clamp(2rem, 6vw, 80px)" }}
              >
                Combos del Holding
              </h3>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
                      background: "radial-gradient(circle at 50% 0%, rgba(29,99,237,0.25) 0%, transparent 60%)",
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
                      style={{ color: "#10B981" }}
                      whileHover={{ x: 5 }}
                    >
                      <span>Ver detalles</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </motion.a>
                  </div>

                  {/* Corner glow */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: "radial-gradient(circle at top right, rgba(16,185,129,0.3) 0%, transparent 70%)",
                    }}
                  />

                  {/* Bottom gradient line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(90deg, transparent, #10B981, transparent)",
                    }}
                  />
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
