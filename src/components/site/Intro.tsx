import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Intro() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!sessionStorage.getItem("intro_seen")) {
      setIsVisible(true);
      // Reduced from 3500 to 1800 to fix lag and block time
      const timer = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem("intro_seen", "true");
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, []);

  const closeIntro = () => {
    setIsVisible(false);
    sessionStorage.setItem("intro_seen", "true");
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-screen"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white text-primary overflow-hidden"
        >
          {/* Skip Button */}
          <button
            onClick={closeIntro}
            className="absolute top-8 end-8 text-sm font-bold text-primary/40 hover:text-gold transition-colors duration-300 z-50"
          >
            تخطي
          </button>

          <div className="container-x max-w-3xl text-center flex flex-col items-center relative z-10 -mt-10">
            {/* Logo Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img
                src="/logo_transparent.png"
                alt="شعار المؤسسة"
                fetchPriority="high"
                loading="eager"
                className="mx-auto mb-6 h-28 w-28 md:h-36 md:w-36 object-contain"
              />
            </motion.div>

            {/* Company Name */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="font-display text-2xl md:text-5xl font-extrabold text-primary tracking-tight"
            >
              مؤسسة الإصلاح المعماري
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
