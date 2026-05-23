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
    desc: "تنفيذ وبناء المشاريع السكنية بجودة عالية والتزام تام بالمواعيد.",
    features: ["عمائر", "فلل", "قصور", "قصور أفراح", "استراحات وشاليهات"]
  },
  {
    title: "المشاريع الخدمية والتجارية",
    desc: "نلبي احتياجات قطاع الأعمال والمرافق العامة بأعلى معايير الجودة.",
    features: ["فنادق", "مساجد", "مدارس", "محطات وقود", "معارض وكافيهات"]
  },
  {
    title: "المنشآت الصناعية والزراعية",
    desc: "بناء وتجهيز المنشآت بمواصفات عالية لضمان السلامة والتحمل.",
    features: ["هناجر", "مستودعات", "ورش", "حضائر دواجن وملحقاتها"]
  },
  {
    title: "خدمات التنفيذ",
    desc: "حلول متكاملة لتجهيز المواقع والتشطيبات الفاخرة للواجهات والديكورات.",
    features: ["أعمال التشطيب والترميم", "الكلادنج", "الردم والسفلتة", "الهدم والترحيل"]
  },
  {
    title: "أنظمة التنفيذ",
    desc: "نقدم مرونة عالية في أنظمة التعاقد لتناسب ميزانيتك ومتطلبات مشروعك.",
    features: ["تسليم مفتاح (بالمواد)", "عظم (بالمواد)", "عظم (بدون مواد)"]
  }
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
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-card rounded-[2rem] overflow-hidden border border-border shadow-sm hover:shadow-elegant transition-all duration-300"
            >
              
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
