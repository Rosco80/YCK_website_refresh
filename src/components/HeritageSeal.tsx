"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeritageSealProps {
  variant?: "light" | "dark";
  className?: string;
}

/**
 * HeritageSeal component to be placed in the corner of sections.
 * @param variant - "light" for dark backgrounds, "dark" for light backgrounds.
 */
export function HeritageSeal({ variant = "dark", className }: HeritageSealProps) {
  const src = variant === "light" 
    ? "/images/logo/whitesiluette.png" 
    : "/images/logo/kungFu_siluette (1).png";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      whileInView={{ opacity: 0.15, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "absolute bottom-6 right-6 sm:bottom-10 sm:right-10 lg:bottom-16 lg:right-16 w-24 sm:w-32 lg:w-44 pointer-events-none z-0 select-none overflow-hidden",
        className
      )}
    >
      <img 
        src={src} 
        alt="" 
        className="w-full h-auto object-contain" 
      />
    </motion.div>
  );
}
