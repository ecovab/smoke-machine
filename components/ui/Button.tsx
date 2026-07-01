"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm tracking-[0.08em] uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-400/60";

const variants: Record<string, string> = {
  primary:
    "bg-amber-500 text-charcoal-950 hover:bg-amber-400 shadow-[0_0_30px_-8px_rgba(214,143,62,0.7)]",
  ghost:
    "border border-white/15 text-smoke-200 hover:border-amber-400/50 hover:text-amber-300 backdrop-blur-sm",
};

export const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  function Button(
    { children, href, onClick, variant = "primary", className = "", target, rel, type = "button" },
    ref
  ) {
    const classes = `${base} ${variants[variant]} ${className}`;

    if (href) {
      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          rel={rel}
          onClick={onClick}
          className={classes}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        onClick={onClick}
        className={classes}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.button>
    );
  }
);
