import Image from "next/image";
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
    <div
      className={cn(
        "absolute bottom-6 right-6 sm:bottom-10 sm:right-10 lg:bottom-16 lg:right-16 w-24 sm:w-32 lg:w-44 pointer-events-none z-0 select-none overflow-hidden opacity-15",
        className
      )}
    >
      <Image 
        src={src} 
        alt="" 
        width={176}
        height={176}
        className="w-full h-auto object-contain" 
      />
    </div>
  );
}
