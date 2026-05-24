import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا — مؤسسة الإصلاح المعماري" },
      {
        name: "description",
        content:
          "تواصل مع مؤسسة الإصلاح المعماري للمقاولات في الرياض عبر الهاتف، الواتساب، أو من خلال نموذج التواصل المباشر.",
      },
      { property: "og:title", content: "تواصل معنا" },
      { property: "og:description", content: "تواصل معنا لمناقشة تفاصيل مشروعك القادم." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const items = [
  {
    icon: MapPin,
    title: "موقعنا",
    text: "الرياض – طريق عرفات\nص.ب 281082، الرياض 11392",
    href: "https://maps.google.com/?q=Riyadh+Saudi+Arabia",
  },
  { 
    icon: Phone, 
    title: "اتصل بنا", 
    text: "0500708534\nم/ أبو نايف",
    href: "tel:+966500708534"
  },
  {
    icon: MessageCircle,
    title: "واتساب",
    text: "تواصل معنا مباشرة للحصول على الدعم الفوري",
    href: "https://wa.me/966500708534"
  },
  { 
    icon: Mail, 
    title: "البريد الإلكتروني", 
    text: "info@alislah-almamary.sa\nprojects@alislah-almamary.sa",
    href: "mailto:info@alislah-almamary.sa"
  },
];

function Contact() {
  return (
    <Layout>
      <PageHero
        eyebrow="تواصل معنا"
        title="نحن هنا للإجابة على استفساراتك"
        subtitle="تواصل مع فريقنا للحصول على استشارة مجانية، أو لمناقشة تفاصيل مشروعك القادم."
      />

      <section className="container-x py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-20">
          {items.map((i) => (
            <a
              key={i.title}
              href={i.href}
              target={i.href.startsWith("http") ? "_blank" : undefined}
              rel={i.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-2xl border border-border bg-card p-7 text-center transition-all duration-350 hover:-translate-y-2 hover-shadow-gold group"
            >
              <div className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-100 text-primary transition-all duration-350 group-hover:scale-110 group-hover:bg-gold-gradient group-hover:text-gold-foreground group-hover:shadow-gold">
                <i.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary">{i.title}</h3>
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                {i.text}
              </p>
            </a>
          ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-stretch">
          {/* Contact Form */}
          <div className="bg-card border border-border p-8 md:p-12 rounded-[2rem] shadow-sm">
            <div className="mb-8">
              <h3 className="text-3xl font-bold font-display text-primary mb-3">أرسل لنا رسالة</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                املأ النموذج أدناه وسيقوم فريقنا بالرد عليك في أقرب وقت ممكن لترتيب موعد أو تقديم عرض مبدئي.
              </p>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("تم إرسال رسالتك بنجاح. سنتواصل معك قريباً."); }}>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">الاسم الكامل *</label>
                  <input type="text" className="w-full rounded-xl border border-border bg-background px-4 py-3.5 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all" placeholder="الاسم الكامل" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">رقم الجوال *</label>
                  <input type="tel" className="w-full rounded-xl border border-border bg-background px-4 py-3.5 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all" placeholder="05xxxxxxxx" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary">البريد الإلكتروني (اختياري)</label>
                <input type="email" className="w-full rounded-xl border border-border bg-background px-4 py-3.5 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all" placeholder="example@domain.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary">الرسالة أو الاستفسار *</label>
                <textarea rows={5} className="w-full rounded-xl border border-border bg-background px-4 py-3.5 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all resize-none" placeholder="اكتب تفاصيل مشروعك أو استفسارك هنا..." required></textarea>
              </div>
              <button type="submit" className="w-full bg-gold-gradient text-gold-foreground font-bold py-4 rounded-xl shadow-gold hover:opacity-90 transition-opacity mt-2 text-lg">
                إرسال الرسالة
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-elegant h-full min-h-[400px]">
            <iframe
              title="موقع المؤسسة على الخريطة"
              src="https://www.google.com/maps?q=Riyadh+Saudi+Arabia&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
