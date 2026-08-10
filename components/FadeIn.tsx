import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "none";
}

const FadeIn = ({ children, delay = 0, className = "", direction = "up" }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0, y: direction === "up" ? 24 : 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default FadeIn;
