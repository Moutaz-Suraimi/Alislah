import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const nav = [
  { to: "/", label: "الرئيسية" },
  { to: "/about", label: "من نحن" },
  { to: "/services", label: "خدماتنا" },
  { to: "/projects", label: "مشاريعنا" },
  { to: "/contact", label: "تواصل معنا" },
] as const;

export function Header({ transparent = false }: { transparent?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header
      className={`absolute top-0 z-50 w-full ${
        transparent
          ? "bg-transparent text-white border-b border-white/20"
          : "bg-background/85 backdrop-blur-md text-primary border-b border-border/60 sticky"
      }`}
    >
      <div className="container-x flex h-24 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <img
            src="/logo.png"
            alt="مؤسسة الإصلاح المعماري"
            className="h-10 w-10 sm:h-14 sm:w-14 object-contain"
            width={56}
            height={56}
          />
          <div className="leading-tight">
            <div className="font-display text-sm sm:text-lg font-extrabold tracking-wide uppercase">
              الإصلاح المعماري
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
                transparent ? "hover:text-gold" : "hover:bg-accent hover:text-primary"
              }`}
              activeProps={{
                className: transparent
                  ? "text-gold font-bold"
                  : "rounded-md px-4 py-2 text-sm font-semibold bg-accent text-primary",
              }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex flex-col items-end">
            <span className={`text-[10px] font-bold uppercase tracking-widest ${transparent ? "text-white/70" : "text-muted-foreground"}`}>
              رقم مجاني
            </span>
            <a
              href="tel:+966114034731"
              className={`flex items-center gap-1.5 text-base font-bold ${transparent ? "text-gold" : "text-primary"}`}
            >
              <Phone className="h-4 w-4" /> 011-4034731
            </a>
          </div>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="القائمة">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background text-primary lg:hidden shadow-xl">
          <div className="container-x flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold hover:bg-accent"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-4 border-t border-border pt-4">
              <a
                href="tel:+966114034731"
                className="flex items-center justify-center gap-2 rounded-md bg-gold-gradient px-5 py-3 text-sm font-bold text-gold-foreground"
              >
                <Phone className="h-4 w-4" /> اتصل بنا الآن
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
