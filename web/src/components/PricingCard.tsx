import { motion } from "framer-motion";
import {
  Rocket, Building2, Code2, Landmark, Smartphone, MonitorSmartphone,
  Briefcase, Brain, Cloud, Database, Laptop, Server, Search, Wrench,
  Cpu, Network, ShieldCheck, Lock, Cable, Wifi, Ticket, Headphones,
  Palette, Sparkles, BookOpen, FileText, Share2, Monitor, User, Film,
  Video, Megaphone, Clock, RefreshCw, Truck, Box, PackageCheck, Check, Cog,
  ExternalLink, LucideIcon, ClipboardList, GraduationCap, ShoppingCart
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  rocket: Rocket,
  building: Building2,
  code: Code2,
  enterprise: Landmark,
  android: Smartphone,
  apple: Smartphone,
  devices: MonitorSmartphone,
  briefcase: Briefcase,
  brain: Brain,
  cloud: Cloud,
  database: Database,
  pc: Laptop,
  server: Server,
  search: Search,
  wrench: Wrench,
  cpu: Cpu,
  network: Network,
  router: Network,
  shield: ShieldCheck,
  lock: Lock,
  cable: Cable,
  wifi: Wifi,
  ticket: Ticket,
  headset: Headphones,
  palette: Palette,
  brand: Sparkles,
  book: BookOpen,
  document: FileText,
  social: Share2,
  monitor: Monitor,
  user: User,
  motion: Film,
  video: Video,
  marketing: Megaphone,
  clock: Clock,
  transform: RefreshCw,
  courier: Truck,
  van: Truck,
  truck: Truck,
  move: Box,
  delivery: PackageCheck,
  "clipboard-list": ClipboardList,
  "graduation-cap": GraduationCap,
  "shopping-cart": ShoppingCart,
  "cog": Cog,
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

interface PricingCardProps {
  name: string;
  description: string;
  features: string[];
  price: string;
  priceLabel: string;
  url: string;
  icon: string;
  index: number;
  highlight?: boolean;
}

export default function PricingCard({
  name,
  description,
  features,
  price,
  priceLabel,
  url,
  icon,
  index,
  highlight = false,
}: PricingCardProps) {
  const IconComponent = iconMap[icon] || Sparkles;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      viewport={{ once: true, amount: 0.15 }}
      className={`p-6 flex flex-col h-full rounded-2xl transition-all cursor-pointer ${
        highlight ? "glass-card-highlight" : "glass-card"
      }`}
    >
      {/* Top Banner for Highlight */}
      {highlight && (
        <div className="mb-3 inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-dooq-cta/10 text-dooq-cta text-xs font-mono font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Recomendado</span>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <motion.div
          className={`feature-icon ${
            highlight ? "bg-dooq-cta/10 text-dooq-cta" : ""
          }`}
          whileHover={{ rotate: 8, scale: 1.1 }}
        >
          <IconComponent className="w-6 h-6" strokeWidth={2} />
        </motion.div>
        <div>
          <h3 className="font-heading text-lg font-bold text-dooq-dark leading-snug">
            {name}
          </h3>
          {url && (
            <a
              href={`https://${url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono text-dooq-primary hover:text-dooq-violet transition-colors mt-0.5"
            >
              <span>{url}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      {description && (
        <p className="text-sm text-dooq-muted mb-4 leading-relaxed font-normal">
          {description}
        </p>
      )}

      {/* Features List */}
      {features.length > 0 && (
        <motion.ul
          className="space-y-2.5 mb-6 flex-1 pt-2 border-t border-dooq-border/60"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {features.map((feature, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 },
              }}
              className="flex items-start gap-2 text-xs sm:text-sm text-dooq-text font-medium"
            >
              <div className="mt-0.5 p-0.5 rounded-full bg-dooq-primary/10 text-dooq-primary flex-shrink-0">
                <Check className="w-3.5 h-3.5" strokeWidth={3} />
              </div>
              <span className="leading-snug">{feature}</span>
            </motion.li>
          ))}
        </motion.ul>
      )}

      {/* Price Footer */}
      <div className="mt-auto pt-4 border-t border-dooq-border/40 flex flex-col">
        {price && (
          <div>
            <span className="font-heading font-extrabold text-2xl sm:text-3xl text-dooq-dark tracking-tight">
              {price}
            </span>
            {priceLabel && (
              <span className="text-xs text-dooq-muted font-medium ml-1.5">
                / {priceLabel}
              </span>
            )}
          </div>
        )}

        <motion.a
          href="#contact"
          className={`mt-4 text-center w-full py-2.5 px-4 rounded-xl font-heading text-sm font-semibold transition-all ${
            highlight
              ? "btn-cta py-2.5"
              : "bg-slate-100 hover:bg-dooq-primary hover:text-white text-dooq-dark"
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          Solicitar Info
        </motion.a>
      </div>
    </motion.div>
  );
}