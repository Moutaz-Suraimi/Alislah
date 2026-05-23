import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Intro() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!sessionStorage.getItem("intro_seen")) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem("intro_seen", "true");
      }, 3500);
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
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white text-primary overflow-hidden"
        >
          {/* Subtle light background gradient */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-50 via-white to-white" />

          {/* Animated Gold Pulses in Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              scale: [0.8, 1.3, 0.8],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 3.5,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 -start-10 h-72 w-72 rounded-full bg-gold blur-3xl pointer-events-none"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              scale: [0.8, 1.3, 0.8],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 3.5,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute bottom-1/4 -end-10 h-96 w-96 rounded-full bg-gold blur-3xl pointer-events-none"
          />
          
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-display text-3xl md:text-5xl font-extrabold text-primary tracking-tight"
            >
              مؤسسة الإصلاح المعماري للمقاولات
            </motion.h1>

            {/* Divider Line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
              className="mt-6 mb-8 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent origin-center"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-base md:text-xl leading-relaxed md:leading-loose text-muted-foreground font-medium px-4"
            >
              منشأة سعودية وطنية مقرها الرياض، متخصصة في تنفيذ مشاريع المباني والأعمال الإنشائية
              والديكورات الداخلية والخارجية، وفق أعلى المواصفات الفنية.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
