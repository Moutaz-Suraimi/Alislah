import { Header } from "./Header";
import { Footer } from "./Footer";
import { motion } from "framer-motion";

export function Layout({
  children,
  transparentHeader = false,
}: {
  children: React.ReactNode;
  transparentHeader?: boolean;
}) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden text-primary">
      {/* Global Background from Intro */}
      <div className="fixed inset-0 -z-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-50 via-white to-white" />

      {/* Animated Gold Pulses in Background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed top-1/4 -start-20 -z-40 h-[40rem] w-[40rem] rounded-full bg-gold blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="fixed bottom-1/4 -end-20 -z-40 h-[50rem] w-[50rem] rounded-full bg-gold blur-[180px] pointer-events-none"
      />

      <Header transparent={transparentHeader} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
