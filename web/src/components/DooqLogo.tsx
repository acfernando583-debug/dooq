import { motion } from "framer-motion";

interface DooqLogoProps {
  className?: string;
  variant?: "blue" | "white" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
}

export default function DooqLogo({ className = "", variant = "blue", size = "md" }: DooqLogoProps) {
  // Color mappings
  const mainColor = variant === "white" ? "#FFFFFF" : variant === "dark" ? "#0F172A" : "#1D63ED";

  // Height mappings
  const heightMap = {
    sm: "h-6",
    md: "h-8",
    lg: "h-12",
    xl: "h-16",
  };

  return (
    <div className={`inline-flex items-center select-none ${heightMap[size]} ${className}`}>
      <svg
        viewBox="0 0 420 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        {/* D Letter */}
        <path
          d="M 25 20 L 60 20 C 85 20 100 35 100 60 C 100 85 85 100 60 100 L 25 100 Z M 43 37 L 43 83 L 58 83 C 74 83 82 73 82 60 C 82 47 74 37 58 37 Z"
          fill={mainColor}
        />

        {/* First O & Second O (Infinity Loop ∞ with Arrows) */}
        {/* Left Loop */}
        <path
          d="M 155 60 C 155 42 140 28 122 28 C 104 28 90 42 90 60 C 90 78 104 92 122 92 C 140 92 155 78 155 60 Z M 107 60 C 107 51 114 44 122 44 C 130 44 137 51 137 60 C 137 69 130 76 122 76 C 114 76 107 69 107 60 Z"
          fill={mainColor}
        />
        {/* Arrow on top-right of left loop */}
        <path
          d="M 148 35 L 162 26 L 158 42 Z"
          fill={mainColor}
        />

        {/* Right Loop of Infinity */}
        <path
          d="M 230 60 C 230 42 215 28 197 28 C 179 28 165 42 165 60 C 165 78 179 92 197 92 C 215 92 230 78 230 60 Z M 182 60 C 182 51 189 44 197 44 C 205 44 212 51 212 60 C 212 69 205 76 197 76 C 189 76 182 69 182 60 Z"
          fill={mainColor}
        />
        {/* Arrow on bottom-left of right loop */}
        <path
          d="M 172 85 L 158 94 L 162 78 Z"
          fill={mainColor}
        />

        {/* Q Letter with Power Button Symbol inside */}
        {/* Outer Q Circle */}
        <path
          d="M 290 60 C 290 40 274 24 254 24 C 234 24 218 40 218 60 C 218 80 234 96 254 96 C 263 96 271 93 277 87 L 290 100 L 302 88 L 288 75 C 289 70 290 65 290 60 Z M 235 60 C 235 50 243 41 254 41 C 265 41 273 50 273 60 C 273 70 265 79 254 79 C 243 79 235 70 235 60 Z"
          fill={mainColor}
        />

        {/* Power Button Vertical Line at center top of Q */}
        <rect
          x="250"
          y="45"
          width="8"
          height="16"
          rx="4"
          fill={mainColor}
        />
        {/* Power Button Arc inside Q */}
        <path
          d="M 246 54 A 12 12 0 1 0 262 54"
          stroke={mainColor}
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

export function DooqSymbol({ className = "w-8 h-8", color = "#1D63ED" }: { className?: string; color?: string }) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      whileHover={{ scale: 1.08, rotate: 5 }}
      transition={{ duration: 0.2 }}
    >
      {/* Q Circle */}
      <circle cx="48" cy="48" r="32" stroke={color} strokeWidth="12" />
      {/* Q Leg */}
      <rect x="66" y="66" width="14" height="24" rx="7" transform="rotate(-45 66 66)" fill={color} />
      {/* Power Button Vertical Bar */}
      <rect x="44" y="30" width="8" height="18" rx="4" fill={color} />
      {/* Power Button Circle Arc */}
      <path
        d="M 36 44 A 16 16 0 1 0 60 44"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
    </motion.svg>
  );
}
