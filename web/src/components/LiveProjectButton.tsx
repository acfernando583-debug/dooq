import { motion } from "framer-motion";

interface LiveProjectButtonProps {
  href?: string;
}

export default function LiveProjectButton({ href = "#" }: LiveProjectButtonProps) {
  return (
    <motion.a
      href={href}
      className="inline-flex items-center justify-center rounded-full border-2 font-medium uppercase tracking-widest text-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors"
      style={{ borderColor: "#D7E2EA" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Live Project
    </motion.a>
  );
}
