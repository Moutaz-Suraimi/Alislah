import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Factory, Shield, Building2, Briefcase } from "lucide-react";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "شركاؤنا | الإصلاح المعماري" },
      {
        name: "description",
        content: "تعرف على أبرز شركاء النجاح وعملائنا الذين نعتز بثقتهم.",
      },
    ],
  }),
  component: Partners,
});

const partners = [
  { name: "شركة السويح للاستثمارات العقارية", projects: 1, value: "12,000,000", icon: Factory },
  { name: "الشيخ راشد العليان", projects: 1, value: "10,000,000", icon: Briefcase },
  { name: "شركة الهداب للاستشارات العقارية", projects: 1, value: "9,450,000", icon: Factory },
  { name: "الهاجري للاستثمارات العقارية", projects: 1, value: "8,000,000", icon: Factory },
  { name: "شركة وفال العالمية للتجهيزات العسكرية", projects: 2, value: "4,500,000", icon: Shield },
  { name: "شركة السلامة القباع", projects: 1, value: "4,400,000", icon: Factory },
  { name: "شركة نجوم السلام", projects: 3, value: "3,480,000", icon: Factory },
  { name: "الشيخ ماجد عبد الله الفوزان", projects: 1, value: "3,300,000", icon: Briefcase },
  { name: "شركة الجبر للسيارات", projects: 1, value: "2,600,000", icon: Building2 },
  { name: "صالح بن علي القحطاني", projects: 1, value: "2,400,000", icon: Briefcase },
  { name: "شركة العويضة العقارية", projects: 1, value: "1,800,000", icon: Factory },
  { name: "الشيخ وليد الهداب", projects: 1, value: "1,400,000", icon: Briefcase },
  { name: "الشيخ عبد الرحمن المحطب", projects: 1, value: "550,000", icon: Briefcase },
];

function Partners() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative flex min-h-[40vh] flex-col justify-center overflow-hidden bg-primary pt-24 pb-16 text-primary-foreground">
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent z-0" />
        <div className="container-x relative z-10 text-center">
          <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            نفخر <span className="text-gold">بشراكاتنا الناجحة</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            نفخر في مؤسستنا بشراكاتنا الناجحة وتنفيذنا لعدد من المشاريع المتميزة التي تخدم قطاعات متعددة، حيث تم تسليمها وفق أعلى معايير الجودة والاحترافية.
          </p>
        </div>
      </section>

      {/* OUR PROJECTS / PARTNERS */}
      <section className="py-20 md:py-28 bg-neutral-50/50">
        <div className="container-x">
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-gold">
              أبرز عملائنا ومشاريعنا السابقة
            </div>
            <h2 className="font-display text-3xl font-extrabold text-primary md:text-5xl">
              قائمة الشركاء والعملاء
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((p, idx) => (
              <div 
                key={idx}
                className="group flex flex-col bg-white border border-border p-8 rounded-2xl shadow-sm hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center rounded-full bg-gold/10 text-gold h-14 w-14 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:text-gold-foreground">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-primary">{p.name}</h3>
                  </div>
                </div>
                <div className="mt-auto border-t border-border pt-4 space-y-2">
                  <p className="text-sm font-medium text-muted-foreground flex items-center justify-between">
                    <span>عدد المشاريع:</span>
                    <span className="font-bold text-primary">{p.projects}</span>
                  </p>
                  <p className="text-sm font-medium text-muted-foreground flex items-center justify-between">
                    <span>إجمالي القيمة:</span>
                    <span className="font-bold text-gold">{p.value} ريال</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
