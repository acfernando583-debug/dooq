import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = "",
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const distX = Math.abs(e.clientX - centerX);
      const distY = Math.abs(e.clientY - centerY);
      const maxDist = Math.max(width, height) / 2 + padding;

      if (distX < maxDist && distY < maxDist) {
        const x = (e.clientX - centerX) / strength;
        const y = (e.clientY - centerY) / strength;
        setPosition({ x, y });
      } else {
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [padding, strength]);

  const isHovering = position.x !== 0 || position.y !== 0;

  return (
    <motion.div
      ref={ref}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        duration: isHovering ? 0.3 : 0.6,
        ease: isHovering ? "easeOut" : "easeInOut",
      }}
      style={{ willChange: "transform" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
