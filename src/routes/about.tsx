import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { CheckCircle2, ArrowLeft, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "من نحن — مؤسسة الإصلاح المعماري للمقاولات" },
      {
        name: "description",
        content:
          "تعرّف على مؤسسة الإصلاح المعماري للمقاولات، مسيرتنا، رؤيتنا، رسالتنا، ومجالات خبرتنا في قطاع البناء والإنشاءات.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="container-x py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="max-w-2xl">
            <div className="mb-4 inline-block text-gold font-bold tracking-wider uppercase text-sm">
              [ الرئيسية / من نحن ]
            </div>

            {/* العنوان الرئيسي */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight">
              نصنع التميز <br />
              <span className="text-gold">معاً</span>
            </h1>

            {/* مقدمة تعريفية */}
            <div className="mt-7 space-y-5 text-base md:text-lg text-muted-foreground leading-[1.9]">
              <p>
                مؤسسة سعودية وطنية متخصصة في{" "}
                <span className="text-gold font-semibold">المقاولات العامة والإنشاءات</span>،
                تأسست على يد المقاول{" "}
                <span className="text-gold font-semibold">محمد بن قرشي شراحيلي</span>{" "}
                بهدف تقديم خدمات بناء شاملة تجمع بين الجودة العالية والكفاءة في التنفيذ.
              </p>
              <p>
                تعمل المؤسسة في قطاعات{" "}
                <span className="text-gold font-semibold">البناء السكني والتجاري والصناعي والحكومي</span>،
                وتنفّذ مشاريعها وفق أعلى المعايير الهندسية وبشروط السلامة المهنية المعتمدة.
              </p>
              <p>
                تتميز المؤسسة بامتلاكها{" "}
                <span className="text-gold font-semibold">كوادر هندسية وفنية متخصصة</span>{" "}
                وبنية تشغيلية متكاملة تمكّنها من تسليم المشاريع في المواعيد المتفق عليها —
                من مرحلة التصميم حتى{" "}
                <span className="text-gold font-semibold">التسليم المفتاح</span>.
              </p>
            </div>
          </div>

          
          <div className="relative">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-elegant">
              <img
                src="/hero.jpg"
                alt="فريق العمل في الموقع"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
            {/* Overlapping Badge */}
            <div className="absolute -bottom-8 -start-8 bg-white p-6 rounded-full shadow-xl hidden md:flex items-center justify-center animate-[spin_20s_linear_infinite]">
              <div className="w-32 h-32 rounded-full border border-dashed border-gold flex items-center justify-center">
                <span className="text-primary font-bold text-center text-sm">الإصلاح المعماري • خبرة وموثوقية •</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Text & Stats */}
      <section className="py-16 bg-neutral-50">
        <div className="container-x">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xl md:text-2xl text-primary font-medium leading-relaxed">
              نلتزم بإحداث ثورة في قطاع البناء من خلال حلول مبتكرة ومستدامة وفعالة من حيث التكلفة. 
              مع سجل حافل بتقديم مشاريع استثنائية، نجمع بين أحدث التقنيات والخبرات العالية 
              لإحياء رؤى عملائنا.
            </p>
          </div>

          <style dangerouslySetInnerHTML={{__html: `
            @keyframes goldPulse {
              0%, 100% { box-shadow: 0 0 0 0 rgba(212,175,55,0); background-position: 0% 50%; }
              50% { box-shadow: 0 0 30px 6px rgba(212,175,55,0.18); background-position: 100% 50%; }
            }
            .stat-card {
              background: linear-gradient(135deg, rgba(212,175,55,0.12) 0%, rgba(212,175,55,0.04) 50%, rgba(212,175,55,0.12) 100%);
              background-size: 200% 200%;
              animation: goldPulse 3s ease-in-out infinite;
            }
            .stat-card:nth-child(2) { animation-delay: 1s; }
            .stat-card:nth-child(3) { animation-delay: 2s; }
          `}} />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { value: "+60", label: "مليون ريال", sub: "إجمالي قيمة المشاريع" },
              { value: "56+", label: "عضو فريق", sub: "كوادر متخصصة" },
              { value: "92M", label: "حجم المشاريع", sub: "ريال سعودي" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="stat-card flex flex-col items-center justify-center rounded-2xl border border-gold/20 px-6 py-10 text-center shadow-sm"
              >
                <span className="text-5xl md:text-6xl font-extrabold bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]">
                  {stat.value}
                </span>
                <span className="mt-3 text-sm font-bold uppercase tracking-widest text-gold">
                  {stat.label}
                </span>
                <span className="mt-1 text-xs text-muted-foreground">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Mission Section */}
      <section className="container-x py-20">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/5] md:aspect-square shadow-2xl">
              <img src="/building_card.png" alt="رسالتنا" className="w-full h-full object-cover opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>

          <div className="lg:ps-12">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary mb-6">رسالتنا</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              تقديم خدمات مقاولات استثنائية تتجاوز توقعات العملاء من خلال الابتكار وجودة التنفيذ والالتزام بالاستدامة. 
              نهدف إلى بناء علاقات دائمة وإنشاء مساحات تعزز حياة عملائنا ومجتمعاتنا. من خلال الدقة، والخبرة، 
              والنهج الذي يركز على العميل، نسعى للتميز في كل مشروع.
            </p>
            <ul className="space-y-4">
              {[
                "تعزيز النمو المستدام والتطوير الأخضر",
                "الابتكار من أجل مستقبل مستدام",
                "نهج يركز على راحة العميل وتلبية احتياجاته",
                "بناء مجتمعات أقوى وأكثر ترابطاً",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 font-medium text-primary">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="container-x py-20">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1 lg:pe-12">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary mb-6">رؤيتنا</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              رؤيتنا هي إعادة تعريف مستقبل البناء من خلال الابتكار، والاستدامة، والتميز. 
              نطمح لإنشاء هياكل لا تُلهم فحسب، بل تساهم أيضاً في رفاهية المجتمعات والبيئة. 
              من خلال تبني أحدث التقنيات والممارسات الصديقة للبيئة، نسعى لقيادة الصناعة نحو غدٍ أكثر اخضراراً وذكاءً.
            </p>
            <ul className="space-y-4">
              {[
                "إلهام العمارة الحديثة والمبتكرة",
                "ريادة البناء المستدام والصديق للبيئة",
                "تمكين التقدم من خلال بنية تحتية قوية",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 font-medium text-primary">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="rounded-[2rem] overflow-hidden aspect-[4/3] md:aspect-video shadow-2xl">
              <img src="/industrial_card.png" alt="رؤيتنا" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="container-x py-20 bg-neutral-50 rounded-[3rem] my-10">
        <div className="grid gap-16 lg:grid-cols-2 items-center px-4 md:px-8">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
            <img src="/hero.jpg" alt="تاريخ المؤسسة" className="w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
          </div>

          <div className="lg:ps-8">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary mb-6">تاريخنا</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              تأسست مؤسسة الإصلاح المعماري بناءً على التزام راسخ بالجودة والابتكار. 
              بدأنا كفريق صغير برؤية كبيرة، وعلى مر السنين تطورنا لنصبح اسماً موثوقاً في قطاع المقاولات، 
              نقدم مشاريع استثنائية تصمد أمام اختبار الزمن. رحلتنا مليئة بمحطات النجاح التي قادها الشغف 
              والتفاني نحو التميز.
            </p>
            <ul className="space-y-4">
              {[
                "بدايات متواضعة وطموحات كبيرة",
                "إنجازات ومحطات بارزة في مسيرتنا",
                "بناء إرث من الثقة والموثوقية",
                "تشكيل المستقبل بناءً على خبرات الماضي",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 font-medium text-primary">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

    </Layout>
  );
}
