import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { to: "/", label: "الرئيسية" },
  { to: "/about", label: "من نحن" },
  { to: "/services", label: "خدماتنا" },
  { to: "/projects", label: "مشاريعنا" },
  { to: "/partners", label: "شركاؤنا" },
  { to: "/contact", label: "تواصل معنا" },
] as const;

export function Header({ transparent = false }: { transparent?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    // Set initial scroll state in case of reload in middle of page
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = scrolled || transparent;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-out ${
        open
          ? "bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-lg py-0"
          : (transparent && !scrolled
              ? "bg-transparent border-b border-white/15 py-1"
              : "bg-black/80 backdrop-blur-lg border-b border-white/10 shadow-lg py-0")
      }`}
    >
      <div
        className={`container-x flex items-center justify-between gap-6 transition-all duration-500 ease-out ${
          scrolled || open ? "h-16 sm:h-20" : "h-20 sm:h-24"
        }`}
      >
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
          <div className="relative overflow-hidden rounded-full transition-transform duration-500 group-hover:scale-105">
            <img
              src="/logo_transparent.png"
              alt="مؤسسة الإصلاح المعماري"
              className="h-10 w-10 sm:h-14 sm:w-14 object-contain rounded-full bg-transparent"
              width={56}
              height={56}
            />
          </div>
          <div className="leading-tight flex flex-col">
            <div className="font-display text-sm sm:text-lg font-extrabold tracking-wide text-white transition-colors duration-500">
              مؤسسة الإصلاح المعماري
            </div>
            <div className="text-[9px] sm:text-[11px] font-medium tracking-widest uppercase mt-0.5 text-white/80 transition-colors duration-500">
              Alislah Architectural Est.
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links with sliding background pill & active underline */}
        <nav className="hidden items-center gap-1 lg:flex relative">
          {nav.map((n, idx) => (
            <Link
              key={n.to}
              to={n.to}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative rounded-full px-4.5 py-2 text-sm font-semibold transition-all duration-300"
              activeOptions={{ exact: n.to === "/" }}
            >
              {({ isActive }) => (
                <>
                  {/* Sliding Hover Pill */}
                  {hoveredIndex === idx && (
                    <motion.div
                      layoutId="navbarHoverPill"
                      className="absolute inset-0 rounded-full -z-10 bg-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  
                  {/* Active Indicator Underline */}
                  {isActive && (
                    <motion.div
                      layoutId="navbarActiveIndicator"
                      className="absolute bottom-0 left-4.5 right-4.5 h-0.5 bg-gold rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      isActive
                        ? "text-gold font-bold"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {n.label}
                  </span>
                </>
              )}
            </Link>
          ))}
        </nav>

        {/* Free Call Section (Desktop) */}
        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 transition-colors duration-500">
              رقم مجاني
            </span>
            <a
              href="tel:+966500708534"
              className="flex items-center gap-1.5 text-base font-bold text-gold transition-all duration-500 hover:scale-103"
            >
              <Phone className="h-4 w-4" /> 0500708534
            </a>
          </div>
        </div>

        {/* Mobile Menu Button — always white for dark-themed header */}
        <button
          className="lg:hidden p-2 rounded-lg transition-colors duration-300 text-white hover:bg-white/10"
          onClick={() => setOpen(!open)}
          aria-label="القائمة"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Smooth Mobile Menu Overlay — always dark for consistent premium look */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-white/10 bg-black/95 backdrop-blur-xl lg:hidden shadow-2xl relative z-40"
          >
            <div className="container-x flex flex-col gap-1.5 py-6">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white transition-all duration-300"
                  activeProps={{
                    className: "bg-gold/15 text-gold font-bold"
                  }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ))}
              <div className="mt-4 border-t border-white/10 pt-5">
                <a
                  href="tel:+966500708534"
                  className="flex items-center justify-center gap-2 rounded-xl bg-gold-gradient px-5 py-3.5 text-sm font-bold text-gold-foreground shadow-gold transition-all duration-300"
                >
                  <Phone className="h-4 w-4" /> اتصل بنا الآن
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
