import { motion } from "motion/react";

export function Marquee() {
  const text = "ENERGÍA SOLAR • ALUMBRADO PÚBLICO • SOSTENIBILIDAD • INNOVACIÓN • EFICIENCIA • ";
  
  return (
    <div className="bg-black py-6 overflow-hidden whitespace-nowrap border-y border-gray-800">
      <motion.div
        className="inline-block"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        <span className="text-white text-4xl md:text-6xl font-bold tracking-tighter uppercase opacity-80 mr-4">
          {text.repeat(4)}
        </span>
      </motion.div>
    </div>
  );
}
