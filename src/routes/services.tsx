import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "خدماتنا — مقاولات عامة وإنشاءات | الإصلاح المعماري" },
      {
        name: "description",
        content:
          "نقدم جميع أعمال المقاولات العامة باحترافية وجودة عالية، ونلبي كافة احتياجاتكم من بناء، تشطيبات، هناجر، وصيانة.",
      },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const servicesList = [
  {
    title: "أعمال البناء",
    desc: "تنفيذ متكامل لجميع المشاريع السكنية والتجارية (عمائر، فلل، قصور، استراحات، ومشاريع خدمية) وفق أحدث المعايير الهندسية وأعلى مستويات الجودة.",
    img: "/building_card.png",
    features: ["تخطيط وتصميم", "تسليم مفتاح", "هيكل عظم (مواد/بدون)"]
  },
  {
    title: "التشطيبات والترميم",
    desc: "حلول تشطيب متكاملة وعالية الفخامة للواجهات والديكورات الداخلية، بالإضافة إلى أعمال الترميم للمباني القائمة وإعادة تأهيلها.",
    img: "/service_card.png",
    features: ["ديكورات جبسية", "واجهات كلادنج", "أعمال كهربائية وميكانيكية"]
  },
  {
    title: "بناء الهناجر والمستودعات",
    desc: "تصميم وتنفيذ المنشآت الصناعية، الهناجر، المستودعات، الورش، وحضائر الدواجن بمواصفات عالية لضمان السلامة والتحمل.",
    img: "/industrial_card.png",
    features: ["مستودعات تجارية", "هناجر صناعية", "تجهيزات المصانع"]
  },
  {
    title: "الصيانة العامة",
    desc: "خدمات صيانة شاملة ودورية للمباني والمجمعات والمرافق الخدمية لضمان استدامتها وعملها بكفاءة عالية على مدار الساعة.",
    img: "/hero.jpg",
    features: ["صيانة وقائية", "حلول سريعة", "فريق طوارئ مختص"]
  },
];

function Services() {
  return (
    <Layout>
      <PageHero
        eyebrow="ما نُقدّمه"
        title="خدمات مقاولات شاملة ومتكاملة"
        subtitle="نقدم جميع أعمال المقاولات العامة باحترافية وجودة عالية، لنضع بين يديك حلولاً مبتكرة تلبي كافة تطلعاتك."
      />

      <section className="container-x py-20 bg-neutral-50/50">
        <div className="grid gap-10 md:grid-cols-2">
          {servicesList.map((service, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-card rounded-[2rem] overflow-hidden border border-border shadow-sm hover:shadow-elegant transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-display text-2xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {service.desc}
                </p>
                <div className="pt-6 border-t border-border">
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-sm font-medium text-primary">
                        <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-20">
        <div className="rounded-3xl bg-hero-gradient p-12 text-center text-primary-foreground shadow-2xl">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">
            حدّد احتياجك واترك التنفيذ علينا
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            سواء كنت تخطط لبناء مشروع جديد أو ترميم وتطوير منشأتك الحالية، فريقنا الهندسي جاهز لتحويل أفكارك إلى واقع.
          </p>
          <Link
            to="/quote"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-sm font-bold text-gold-foreground shadow-gold transition-transform hover:-translate-y-1"
          >
            اطلب عرض سعر مبدئي <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
