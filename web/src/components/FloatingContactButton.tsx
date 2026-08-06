import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function FloatingContactButton() {
  return (
    <motion.a
      href="#contact"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center rounded-full text-white shadow-2xl"
      style={{
        width: "56px",
        height: "56px",
        background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow:
          "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset, 0 0 20px rgba(181, 1, 167, 0.3)",
      }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contactar"
    >
      <Mail className="w-6 h-6" />
    </motion.a>
  );
}
