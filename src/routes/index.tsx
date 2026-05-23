import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
  Briefcase,
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
    icon: Building2,
    title: "أعمال البناء",
    desc: "عمائر، فلل، قصور، قصور أفراح، استراحات وشاليهات",
    linkText: "اقرأ المزيد",
  },
  {
    icon: Sparkles,
    title: "المشاريع الخدمية والتجارية",
    desc: "فنادق، مساجد، مدارس، محطات وقود، معارض وكافيهات",
    linkText: "اقرأ المزيد",
  },
  {
    icon: Factory,
    title: "المنشآت الصناعية والزراعية",
    desc: "هناجر، مستودعات، ورش، حضائر دواجن وملحقاتها",
    linkText: "اقرأ المزيد",
  },
];

const services = [
  {
    icon: Building2,
    title: "أعمال البناء",
    subServices: ["عمائر", "فلل", "قصور", "قصور أفراح", "استراحات وشاليهات"],
  },
  {
    icon: Briefcase,
    title: "المشاريع الخدمية والتجارية",
    subServices: ["فنادق", "مساجد", "مدارس", "محطات وقود", "معارض وكافيهات"],
  },
  {
    icon: Factory,
    title: "المنشآت الصناعية والزراعية",
    subServices: ["هناجر", "مستودعات", "ورش", "حضائر دواجن وملحقاتها"],
  },
  {
    icon: Sparkles,
    title: "خدمات التشطيب والتجهيز",
    subServices: ["أعمال التشطيب والترميم", "الكلادنج", "الردم والسفلتة", "الهدم والترحيل"],
  },
  {
    icon: HardHat,
    title: "أنظمة التنفيذ",
    subServices: ["تسليم مفتاح (بالمواد)", "عظم (بالمواد)", "عظم (بدون مواد)"],
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
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const startAutoScroll = () => {
      // Only run on mobile/tablet (less than 1024px)
      if (window.innerWidth >= 1024) return;

      intervalId = setInterval(() => {
        if (scrollRef.current) {
          const container = scrollRef.current;
          const { scrollLeft, scrollWidth, clientWidth } = container;
          
          // Scroll left continuously (works in RTL by scrolling to negative values)
          container.scrollBy({ left: -320, behavior: "smooth" });

          // Reset when reaching the end
          if (Math.abs(scrollLeft) >= scrollWidth - clientWidth - 50) {
            container.scrollTo({ left: 0, behavior: "smooth" });
          }
        }
      }, 2000); // Move every 2 seconds (medium speed)
    };

    // Delay the auto-scroll start slightly to allow rendering
    const timeoutId = setTimeout(startAutoScroll, 2000);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <Layout transparentHeader>
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center pt-40 pb-56 text-center min-h-[95vh] overflow-hidden">
        {/* Optimized Background (No heavy framer-motion scale) */}
        <div className="absolute inset-0 -z-20 h-full w-full bg-black">
          <img
            src="/hero.jpg"
            alt="موقع إنشائي"
            fetchPriority="high"
            loading="eager"
            className="h-full w-full object-cover object-center opacity-90 animate-intro-fade-in"
          />
        </div>
        
        {/* Cinematic Dark Overlay with Soft Radial Lighting */}
        <div className="absolute inset-0 -z-10 bg-black/60 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/30 via-black/60 to-black/90" />
        
        <div className="container-x relative z-10 flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            نبني الجمال… ونصمم المستقبل
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="mt-6 text-lg md:text-2xl font-medium text-white/80 max-w-2xl leading-relaxed drop-shadow-md"
          >
            خبرة معمارية تجمع بين الإبداع والدقة في كل مشروع.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-10 py-4 text-sm font-bold uppercase tracking-widest text-gold-foreground shadow-gold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
            >
              تواصل معنا
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:border-white/50"
            >
              اكتشف المزيد
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3 HIGHLIGHT CARDS (OVERLAPPING HERO) */}
      <section className="relative z-20 -mt-32 pb-20">
        <div className="container-x">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          >
            {threeCards.map((c) => (
              <div key={c.title} className="flex flex-col flex-none w-[85vw] sm:w-[45vw] lg:w-auto snap-center bg-card shadow-2xl rounded-2xl overflow-hidden border border-border/50 transition-all duration-300 lg:hover:-translate-y-2 hover:shadow-elegant">
                <div className="flex flex-col p-8 flex-1">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold shadow-sm shrink-0">
                    <c.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-primary">{c.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{c.desc}</p>
                  <Link to="/services" className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold transition-colors hover:text-primary">
                    {c.linkText} <ArrowLeft className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* VALUES (Why Choose Us) */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <div className="mb-14 text-center">
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-gold">
              لماذا نحن
            </div>
            <h2 className="font-display text-3xl font-extrabold text-primary md:text-5xl">
              قيمنا التي بنينا عليها سمعتنا
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-center">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-elegant"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                   <v.icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-display text-lg font-bold text-primary">{v.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
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
          <div className="absolute -end-20 -top-20 h-72 w-72 rounded-full bg-gold-gradient opacity-10" />
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
          href="https://wa.me/966500708534" 
          target="_blank" 
          rel="noreferrer" 
          aria-label="تواصل عبر واتساب"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
        >
          <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>
    </Layout>
  );
}
