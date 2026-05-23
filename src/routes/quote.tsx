import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CheckCircle2, Send } from "lucide-react";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "اطلب عرض سعر — مؤسسة الإصلاح المعماري" },
      {
        name: "description",
        content:
          "احصل على عرض سعر مجاني وتفصيلي لمشروعك خلال 48 ساعة من فريق الإصلاح المعماري للمقاولات.",
      },
      { property: "og:title", content: "اطلب عرض سعر مجاني" },
      { property: "og:description", content: "ابدأ مشروعك القادم معنا." },
      { property: "og:url", content: "/quote" },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
  component: Quote,
});

const types = [
  "مبنى سكني",
  "مبنى تجاري",
  "مستودع/هنجر",
  "محطة وقود",
  "تشطيبات وديكور",
  "ترميم وصيانة",
  "أخرى",
];
const budgets = [
  "أقل من 500 ألف",
  "500 ألف – 2 مليون",
  "2 – 10 مليون",
  "10 – 50 مليون",
  "أكثر من 50 مليون",
];

function Quote() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <Layout>
      <PageHero
        eyebrow="ابدأ مشروعك"
        title="اطلب عرض سعر مجاني"
        subtitle="املأ النموذج التالي وسيتواصل معك فريقنا خلال 48 ساعة بعرض سعر تفصيلي مخصص لمشروعك."
      />

      <section className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-elegant md:p-12">
            {sent ? (
              <div className="flex flex-col items-center py-16 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gold-gradient text-gold-foreground shadow-gold">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h2 className="mt-6 font-display text-2xl font-extrabold text-primary">
                  تم إرسال طلبك بنجاح
                </h2>
                <p className="mt-3 max-w-md text-muted-foreground">
                  شكراً لتواصلك. سيقوم فريقنا بمراجعة طلبك والرد عليك خلال 48 ساعة عمل.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="الاسم الكامل *">
                    <input
                      required
                      name="name"
                      className={inputCls}
                      placeholder="مثال: محمد العتيبي"
                    />
                  </Field>
                  <Field label="رقم الجوال *">
                    <input
                      required
                      name="phone"
                      type="tel"
                      className={inputCls}
                      placeholder="05XXXXXXXX"
                    />
                  </Field>
                  <Field label="البريد الإلكتروني">
                    <input
                      name="email"
                      type="email"
                      className={inputCls}
                      placeholder="name@email.com"
                    />
                  </Field>
                  <Field label="جهة العمل / الشركة">
                    <input name="company" className={inputCls} placeholder="اختياري" />
                  </Field>
                  <Field label="نوع المشروع *">
                    <select required name="type" className={inputCls}>
                      <option value="">اختر نوع المشروع</option>
                      {types.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="الميزانية التقديرية">
                    <select name="budget" className={inputCls}>
                      <option value="">اختر النطاق</option>
                      {budgets.map((b) => (
                        <option key={b}>{b}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="موقع المشروع">
                    <input name="location" className={inputCls} placeholder="المدينة / الحي" />
                  </Field>
                  <Field label="موعد البدء المتوقع">
                    <input name="start" type="month" className={inputCls} />
                  </Field>
                </div>
                <Field label="وصف المشروع *">
                  <textarea
                    required
                    name="details"
                    rows={5}
                    className={inputCls}
                    placeholder="صف لنا تفاصيل المشروع، المساحة التقريبية، الأعمال المطلوبة، أي ملاحظات خاصة..."
                  />
                </Field>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold-gradient px-8 py-4 text-sm font-bold text-gold-foreground shadow-gold transition-transform hover:-translate-y-0.5 md:w-auto"
                >
                  <Send className="h-4 w-4" /> إرسال الطلب
                </button>
                <p className="text-xs text-muted-foreground">
                  بالإرسال أنت توافق على أن نتواصل معك بخصوص مشروعك.
                </p>
              </form>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-primary p-8 text-primary-foreground">
              <h3 className="font-display text-xl font-bold">لماذا تطلب عرض السعر منّا؟</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {[
                  "رد خلال 48 ساعة عمل",
                  "دراسة فنية ومالية مفصّلة",
                  "استشارة هندسية مجانية",
                  "جدول زمني واقعي وملزم",
                  "شفافية كاملة في الأسعار",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" /> {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-display text-lg font-bold text-primary">
                تفضّل التواصل المباشر؟
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                نحن متاحون من السبت إلى الخميس، 8 صباحاً – 6 مساءً.
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <a
                  href="tel:+966500708534"
                  className="block font-bold text-primary hover:text-gold"
                >
                  📱 0500708534
                </a>
                <a
                  href="mailto:info@alislah-almamary.sa"
                  className="block font-bold text-primary hover:text-gold"
                >
                  ✉️ info@alislah-almamary.sa
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}

const inputCls =
  "w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-foreground">{label}</span>
      {children}
    </label>
  );
}
