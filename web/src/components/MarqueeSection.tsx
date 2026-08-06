import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ServiceTile {
  name: string;
  color: string;
  image: string;
}

const services: ServiceTile[] = [
  { name: "Software", color: "#2563EB", image: "/marquee/01-software.jpg" },
  { name: "IA", color: "#8B5CF6", image: "/marquee/02-ia.jpg" },
  { name: "Cloud", color: "#06B6D4", image: "/marquee/03-cloud.jpg" },
  { name: "Database", color: "#F59E0B", image: "/marquee/04-database.jpg" },
  { name: "Hardware", color: "#EF4444", image: "/marquee/05-hardware.jpg" },
  { name: "Redes", color: "#10B981", image: "/marquee/06-redes.jpg" },
  { name: "Helpdesk", color: "#F97316", image: "/marquee/07-helpdesk.jpg" },
  { name: "Diseño", color: "#EC4899", image: "/marquee/08-diseno.jpg" },
  { name: "Marketing", color: "#EF4444", image: "/marquee/09-marketing.jpg" },
  { name: "Ciberseguridad", color: "#EF4444", image: "/marquee/10-ciberseguridad.jpg" },
  { name: "Consultoría", color: "#6366F1", image: "/marquee/11-consultoria.jpg" },
];

const servicesRow2: ServiceTile[] = [
  { name: "Marketplace", color: "#14B8A6", image: "/marquee/12-marketplace.jpg" },
  { name: "Transporte", color: "#F97316", image: "/marquee/13-transporte.jpg" },
  { name: "Q-Packs", color: "#3B82F6", image: "/marquee/14-qpacks.jpg" },
  { name: "Planika", color: "#8B5CF6", image: "/marquee/15-planika.jpg" },
  { name: "Web", color: "#2563EB", image: "/marquee/16-web.jpg" },
  { name: "Odoo ERP", color: "#F59E0B", image: "/marquee/17-odoo.jpg" },
  { name: "Mobile", color: "#10B981", image: "/marquee/18-mobile.jpg" },
  { name: "DevOps", color: "#06B6D4", image: "/marquee/19-devops.jpg" },
  { name: "IoT", color: "#6366F1", image: "/marquee/20-iot.jpg" },
  { name: "Blockchain", color: "#8B5CF6", image: "/marquee/21-blockchain.jpg" },
];

function MarqueeTile({ service }: { service: ServiceTile }) {
  return (
    <div
      className="marquee-tile relative overflow-hidden flex items-end p-4"
      style={{
        background: `linear-gradient(135deg, ${service.color}20 0%, ${service.color}05 100%)`,
        border: `1px solid ${service.color}30`,
      }}
    >
      <img
        src={service.image}
        alt={service.name}
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        loading="lazy"
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, ${service.color}40 0%, transparent 60%)`,
        }}
      />
      <span
        className="relative z-10 text-sm font-bold uppercase tracking-widest drop-shadow-lg"
        style={{ color: service.color }}
      >
        {service.name}
      </span>
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const row1Offset = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);
  const row2Offset = useTransform(scrollYProgress, [0, 1], ["-200%", "0%"]);

  const tripleRow = (items: ServiceTile[]) => [...items, ...items, ...items];

  return (
    <section ref={sectionRef} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden relative">
      {/* Tech Pattern Background */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="space-y-3 relative z-10">
        {/* Row 1 */}
        <motion.div className="marquee-row" style={{ translateX: row1Offset }}>
          {tripleRow(services).map((service, i) => (
            <MarqueeTile key={`r1-${i}`} service={service} />
          ))}
        </motion.div>

        {/* Row 2 */}
        <motion.div className="marquee-row" style={{ translateX: row2Offset }}>
          {tripleRow(servicesRow2).map((service, i) => (
            <MarqueeTile key={`r2-${i}`} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
