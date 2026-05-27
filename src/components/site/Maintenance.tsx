import { motion } from "framer-motion";

export function Maintenance() {
  return (
    <div className="min-h-screen w-full bg-black text-white flex items-center justify-center selection:bg-white selection:text-black">
      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-neutral-300"
      >
        الموقع مغلق
      </motion.h1>
    </div>
  );
}
