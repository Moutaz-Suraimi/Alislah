import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import {
  Building2,
  HardHat,
  Wrench,
  Hammer,
  Factory,
  Sparkles,
  ArrowLeft,
  Shield,
  Award,
  Clock,
  Users,
  PhoneCall,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "مؤسسة الإصلاح المعماري للمقاولات — رواد البناء في المملكة" },
      {
        name: "description",
        content:
          "مؤسسة سعودية متخصصة في المقاولات العامة، المباني السكنية والتجارية، المستودعات، التشطيبات، والترميم. خبرة موثوقة في الرياض.",
      },
      { property: "og:title", content: "مؤسسة الإصلاح المعماري للمقاولات" },
      { property: "og:description", content: "نبني مشاريع راسخة بمعايير عالمية." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: "مؤسسة الإصلاح المعماري للمقاولات",
          alternateName: "Alislah Almamary Contracting Est.",
          areaServed: "SA",
          address: { "@type": "PostalAddress", addressLocality: "الرياض", addressCountry: "SA" },
          telephone: "+966114034731",
        }),
      },
    ],
  }),
  component: Home,
});

const threeCards = [
  {
    img: "/building_card.png",
    title: "أعمال البناء",
    desc: "تنفيذ وبناء العمائر، الفلل، القصور، والاستراحات بأعلى مستويات الجودة.",
    linkText: "اقرأ المزيد",
  },
  {
    img: "/service_card.png",
    title: "المشاريع الخدمية",
    desc: "تنفيذ الفنادق، المساجد، المدارس، ومحطات الوقود بخبرة موثوقة.",
    linkText: "المميزات",
  },
  {
    img: "/industrial_card.png",
    title: "المنشآت الصناعية",
    desc: "بناء وتجهيز الهناجر، المستودعات، والورش الصناعية المتخصصة.",
    linkText: "التفاصيل",
  },
];

const services = [
  {
    icon: Building2,
    title: "المقاولات العامة",
    desc: "تنفيذ المباني السكنية والتجارية والصحية والتعليمية بأعلى المواصفات.",
  },
  {
    icon: Factory,
    title: "الهناجر والمستودعات",
    desc: "بناء المستودعات الصناعية والتجارية والمصانع والورش بكفاءة عالية.",
  },
  {
    icon: Sparkles,
    title: "التشطيبات والديكور",
    desc: "تشطيبات داخلية وخارجية وزخارف جبسية بلمسة معمارية متميزة.",
  },
  {
    icon: Wrench,
    title: "الأعمال الكهربائية والميكانيكية",
    desc: "تنفيذ الأنظمة الكهربائية والميكانيكية المتكاملة وفق المعايير الدولية.",
  },
  {
    icon: HardHat,
    title: "محطات الوقود والمصانع",
    desc: "إنشاء محطات الوقود والمصانع والورش الصناعية المتخصصة.",
  },
  {
    icon: Hammer,
    title: "الترميم والصيانة",
    desc: "أعمال الترميم والصيانة للمباني القائمة وإعادة التأهيل.",
  },
];

const values = [
  {
    icon: Shield,
    title: "الالتزام بالسلامة",
    desc: "نُطبق أعلى معايير السلامة المهنية في جميع مواقعنا.",
  },
  {
    icon: Award,
    title: "جودة لا تساوم",
    desc: "نختار أفضل المواد ونعتمد على كوادر هندسية متخصصة.",
  },
  {
    icon: Clock,
    title: "الالتزام بالمواعيد",
    desc: "نسلّم مشاريعنا في موعدها المتفق عليه دون تأخير.",
  },
  { icon: Users, title: "كوادر متخصصة", desc: "فريق هندسي وفني بخبرات متراكمة في كافة التخصصات." },
];

function Home() {
  return (
    <Layout transparentHeader>
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center pt-40 pb-56 text-center text-primary-foreground min-h-[95vh]">
        <img
          src="/hero.jpg"
          alt="موقع إنشائي"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 -z-10 bg-black/60" />
        
        <div className="container-x relative z-10 animate-fade-up">
          <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-widest text-white uppercase">
            مرحباً بكم
          </h1>
          <p className="mt-6 text-lg md:text-2xl font-bold tracking-widest text-white/90 uppercase">
            نبني مستقبلاً مشرقاً، معاً
          </p>
          <Link
            to="/about"
            className="mt-12 inline-flex items-center justify-center bg-gold px-10 py-4 text-sm font-bold uppercase text-gold-foreground transition-colors hover:bg-gold/90"
          >
            من نحن &raquo;
          </Link>
        </div>
      </section>

      {/* 3 HIGHLIGHT CARDS (OVERLAPPING HERO) */}
      <section className="relative z-20 -mt-32 pb-20">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-3">
            {threeCards.map((c) => (
              <div key={c.title} className="flex flex-col bg-card shadow-2xl overflow-hidden border border-border/50">
                <div className="relative h-56 w-full overflow-hidden">
                  <img src={c.img} alt={c.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
                  <div className="absolute top-4 end-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/70 bg-black/20 text-white backdrop-blur transition-colors hover:bg-gold hover:border-gold cursor-pointer">
                    <svg className="h-4 w-4 fill-current ms-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
                <div className="flex flex-col p-8 flex-1">
                  <h3 className="font-display text-xl font-bold text-primary">{c.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{c.desc}</p>
                  <Link to="/services" className="mt-auto pt-6 text-xs font-bold uppercase tracking-widest text-gold transition-colors hover:text-primary">
                    {c.linkText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SUMMARY */}
      <section className="py-16 md:py-24 bg-neutral-50/50">
        <div className="container-x text-center max-w-4xl mx-auto mb-16">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-gold">
            خدماتنا
          </div>
          <h2 className="font-display text-3xl font-extrabold text-primary md:text-4xl">
            حلول مقاولات متكاملة تحت سقف واحد
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            نقدم جميع أعمال المقاولات العامة باحترافية وجودة عالية، ونلبي كافة احتياجاتكم من أعمال البناء والمشاريع الخدمية والمنشآت الصناعية.
          </p>
        </div>
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-elegant text-center"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient text-gold-foreground shadow-gold transition-transform group-hover:scale-110">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-lg font-bold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES (Why Choose Us) */}
      <section className="bg-primary py-20 text-primary-foreground md:py-28">
        <div className="container-x">
          <div className="mb-14 text-center">
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-gold">
              لماذا نحن
            </div>
            <h2 className="font-display text-3xl font-extrabold md:text-5xl">
              قيمنا التي بنينا عليها سمعتنا
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-center">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                   <v.icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-display text-lg font-bold">{v.title}</h3>
                <p className="mt-3 text-sm leading-7 text-primary-foreground/75">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-neutral-50/50">
        <div className="container-x">
          <div className="mb-14 text-center">
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-gold">
              آراء العملاء
            </div>
            <h2 className="font-display text-3xl font-extrabold text-primary md:text-5xl">
              شركاء النجاح يثقون بنا
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "م. خالد عبدالعزيز",
                role: "مشروع سكني",
                rating: 5,
                quote: "تجربة ممتازة مع مؤسسة الإصلاح المعماري. احترافية عالية في تنفيذ مشروعنا السكني والتزام تام بالمواعيد المحددة مع جودة تشطيب تفوق التوقعات.",
              },
              {
                name: "شركة الأفق للتجارة",
                role: "مشروع مستودعات",
                rating: 5,
                quote: "أعمال الهناجر والمستودعات كانت مطابقة لأعلى المعايير الصناعية. نشكر الفريق الهندسي والفني على دقة الإنجاز وسرعة التنفيذ.",
              },
              {
                name: "عبدالله الراشد",
                role: "مشروع تجاري",
                rating: 5,
                quote: "تعامل راقٍ وشفافية مطلقة في الأسعار والمواد المستخدمة. تم الانتهاء من أعمال الترميم والصيانة قبل الموعد المحدد وبجودة استثنائية.",
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="flex flex-col bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-elegant transition-shadow">
                <div className="flex text-gold mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="flex-1 mb-6 text-muted-foreground leading-relaxed text-sm">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-auto border-t border-border pt-4">
                  <div className="font-bold text-primary">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20">
        <div className="relative overflow-hidden rounded-2xl bg-hero-gradient p-10 text-primary-foreground md:p-16 text-center">
          <div className="absolute -end-20 -top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative flex flex-col items-center max-w-2xl mx-auto gap-6">
            <h2 className="font-display text-3xl font-extrabold md:text-4xl">
              جاهز لبدء مشروعك القادم؟
            </h2>
            <p className="text-primary-foreground/80">
              تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر تفصيلي.
            </p>
            <Link
              to="/quote"
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-gold-gradient px-8 py-4 text-sm font-bold text-gold-foreground shadow-gold"
            >
              اطلب عرض سعر <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP / CALL BUTTONS */}
      <div className="fixed bottom-6 end-6 z-50 flex flex-col gap-3">
        <a 
          href="https://wa.me/966500000000" 
          target="_blank" 
          rel="noreferrer" 
          aria-label="تواصل عبر واتساب"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
        >
          <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
        <a 
          href="tel:+966114034731" 
          aria-label="اتصل بنا"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-gold-foreground shadow-lg shadow-gold transition-transform hover:scale-110"
        >
          <PhoneCall className="h-6 w-6" />
        </a>
      </div>
    </Layout>
  );
}
