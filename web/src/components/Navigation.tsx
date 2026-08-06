import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import DooqLogo from "./DooqLogo";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Acerca de", href: "#about", color: "#1D63ED" },
  { label: "Holding", href: "#holding", color: "#2563EB" },
  { label: "Catalogo", href: "#catalogo", color: "#2563EB" },
  { label: "ZennOn", href: "#zennon", color: "#10B981" },
  { label: "BFriends", href: "#bfriends", color: "#F43F5E" },
  { label: "Planika", href: "#planika", color: "#8B5CF6" },
  { label: "Contacto", href: "#contact", color: "#1D63ED" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? window.scrollY / docHeight : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollProgress }}
      />

      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed z-50 transition-all duration-500 ${
          scrolled
            ? "top-3 left-3 right-3 bg-[#0C0C0C]/90 backdrop-blur-2xl shadow-glass rounded-2xl border border-white/10"
            : "top-0 left-0 right-0 bg-[#0C0C0C]/60 backdrop-blur-xl border-b border-white/10"
        }`}
      >
        <div className={`section-container flex items-center justify-between transition-all duration-500 ${scrolled ? "h-16" : "h-24"}`}>
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2.5 cursor-pointer py-1"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <DooqLogo variant="blue" size={scrolled ? "md" : "lg"} />
          </motion.a>

          {/* Desktop Nav */}
          <div className={`hidden lg:flex items-center transition-all duration-500 ${scrolled ? "text-sm gap-6" : "text-2xl gap-3"}`}>
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="nav-link"
                style={{ color: "#D7E2EA" }}
                whileHover={{ color: link.color }}
                transition={{ duration: 0.3 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-3">
            <motion.button
              className="lg:hidden p-2 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
              onClick={() => setMobileOpen(true)}
              whileTap={{ scale: 0.9 }}
              aria-label="Abrir menú"
            >
              <Menu className="w-5 h-5 text-dooq-light" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="mobile-menu-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center justify-between mb-8">
                <DooqLogo variant="blue" size="md" />
                <motion.button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
                  whileTap={{ scale: 0.9 }}
                  aria-label="Cerrar menú"
                >
                  <X className="w-5 h-5 text-dooq-light" />
                </motion.button>
              </div>
               <div className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-dooq-light hover:bg-white/10 transition-all cursor-pointer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                    onClick={() => setMobileOpen(false)}
                    style={{ color: "#D7E2EA" }}
                    whileHover={{ color: link.color }}
                  >
                    <span className="font-medium text-sm">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
