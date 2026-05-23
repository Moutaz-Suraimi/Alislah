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
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight">
              نصنع التميز <br />
              <span className="text-gold">معاً</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              في مؤسسة الإصلاح المعماري للمقاولات، نؤمن بقوة التعاون لتحقيق نتائج مبهرة. 
              مع فريق من المهنيين ذوي المهارات العالية والالتزام الراسخ بالجودة، نعمل جنباً إلى جنب 
              لتحويل الأفكار إلى واقع، وخلق مساحات وحلول تدوم طويلاً.
            </p>
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-x-reverse divide-border">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold text-primary mb-2">150+</span>
              <span className="text-sm font-semibold text-muted-foreground uppercase">مشروع مكتمل</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold text-primary mb-2">56+</span>
              <span className="text-sm font-semibold text-muted-foreground uppercase">عضو فريق</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold text-primary mb-2">200+</span>
              <span className="text-sm font-semibold text-muted-foreground uppercase">عميل راضٍ</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold text-primary mb-2">92M</span>
              <span className="text-sm font-semibold text-muted-foreground uppercase">حجم المشاريع</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container-x py-20">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/5] md:aspect-square shadow-2xl">
              <img src="/building_card.png" alt="رسالتنا" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -end-10 w-2/3 rounded-3xl overflow-hidden shadow-2xl border-4 border-background hidden md:block">
              <img src="/service_card.png" alt="مشاريعنا" className="w-full aspect-[4/3] object-cover" />
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
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img src="/hero.jpg" alt="history 1" className="rounded-2xl w-full aspect-square object-cover shadow-lg" />
              <img src="/service_card.png" alt="history 2" className="rounded-2xl w-full aspect-[4/5] object-cover shadow-lg" />
            </div>
            <div className="space-y-4 pb-12">
              <img src="/building_card.png" alt="history 3" className="rounded-2xl w-full aspect-[4/5] object-cover shadow-lg" />
              <img src="/industrial_card.png" alt="history 4" className="rounded-2xl w-full aspect-square object-cover shadow-lg" />
            </div>
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

      {/* Team Section */}
      <section className="container-x py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary mb-4">
              نصنع التميز كفريق واحد
            </h2>
            <p className="text-muted-foreground">
              نجاحنا مبني على تفاني وخبرة فريقنا، الذي يعمل بشغف لجلب أفكار مبتكرة وحرفية استثنائية لكل مشروع. 
              معاً، نحول الرؤى إلى واقع ملموس.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-2.5 text-sm font-bold text-gold-foreground transition-all hover:opacity-90 whitespace-nowrap"
          >
            انضم إلينا <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "محمد شراحيلي", role: "المدير العام", img: "/hero.jpg" },
            { name: "أحمد عبدالله", role: "مدير المشاريع", img: "/building_card.png" },
            { name: "سالم العتيبي", role: "كبير المهندسين", img: "/industrial_card.png" },
            { name: "خالد سعيد", role: "منسق العمليات", img: "/service_card.png" },
          ].map((member, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden bg-white shadow-elegant">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white text-center translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-sm text-gold">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
