import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-x grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-transparent p-1 border border-white/20">
              <img
                src="/logo.png"
                alt="شعار المؤسسة"
                className="h-12 w-12 object-contain rounded-full mix-blend-screen"
                style={{ filter: "invert(1)" }}
                width={48}
                height={48}
                loading="lazy"
              />
            </div>
            <div>
              <div className="font-display text-lg font-extrabold">
                مؤسسة الإصلاح المعماري
              </div>
              <div className="text-[11px] font-medium tracking-widest text-primary-foreground/70 uppercase mt-0.5">
                Alislah Architectural Est.
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-primary-foreground/75">
            مؤسسة سعودية وطنية متخصصة في المقاولات العامة والإنشاءات، نُنفّذ المشاريع السكنية
            والتجارية والصناعية والحكومية بأعلى معايير الجودة والسلامة منذ تأسيسنا.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gold">روابط سريعة</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link to="/about" className="text-primary-foreground/80 hover:text-gold">
                من نحن
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-primary-foreground/80 hover:text-gold">
                خدماتنا
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-primary-foreground/80 hover:text-gold">
                المشاريع
              </Link>
            </li>
            <li>
              <Link to="/quote" className="text-primary-foreground/80 hover:text-gold">
                طلب عرض سعر
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-gold">
                تواصل معنا
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gold">تواصل معنا</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-gold" /> الرياض – طريق عرفات، المملكة العربية
              السعودية
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold" /> 011-4034731 / 0505141577
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold" /> info@alislah-almamary.sa
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-primary-foreground/60 md:flex-row">
          <p>© {new Date().getFullYear()} مؤسسة الإصلاح المعماري للمقاولات. جميع الحقوق محفوظة.</p>
          <p>الرياض، المملكة العربية السعودية</p>
        </div>
      </div>
    </footer>
  );
}
