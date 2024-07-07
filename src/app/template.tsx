"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-start"
      initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ ease: "easeInOut", duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
}
