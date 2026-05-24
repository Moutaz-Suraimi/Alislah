import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Hash } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-x grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-transparent p-1 border border-white/20">
              <img
                src="/logo_transparent.png"
                alt="شعار المؤسسة"
                className="h-12 w-12 object-contain rounded-full bg-transparent"
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

          {/* Ministry of Commerce Badge + CR Number */}
          <div className="mt-6 flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 w-fit">
            <img
              src="/%D9%88%D8%B2%D8%A7%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D8%A9.jpg"
              alt="وزارة التجارة السعودية"
              className="h-14 w-14 object-contain rounded-lg bg-white p-1"
              loading="lazy"
            />
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-bold uppercase tracking-widest text-gold">
                وزارة التجارة
              </span>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-primary-foreground/90">
                <Hash className="h-3.5 w-3.5 text-gold shrink-0" />
                <span>السجل التجاري: <span className="text-gold font-bold tracking-wide">1010745510</span></span>
              </div>
            </div>
          </div>
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
              <Link to="/partners" className="text-primary-foreground/80 hover:text-gold">
                شركاؤنا
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
              <Phone className="h-4 w-4 text-gold" /> 0500708534 (م/ أبو نايف)
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold" /> info@alislah-almamary.sa
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-xs text-primary-foreground/60 md:flex-row">
          <p>© {new Date().getFullYear()} مؤسسة الإصلاح المعماري للمقاولات. جميع الحقوق محفوظة.</p>
          <div className="flex gap-4 items-center">
            <p>الرياض، المملكة العربية السعودية</p>
            <span className="h-3 w-px bg-white/20"></span>
            <p>تم التصميم والتطوير بواسطة <a href="https://suriix.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Suriix</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
