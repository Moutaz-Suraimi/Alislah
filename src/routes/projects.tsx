import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { MapPin, Calendar, Building, ArrowLeft } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "مشاريعنا | الإصلاح المعماري" },
      {
        name: "description",
        content: "تصفح إنجازاتنا ومشاريعنا المتكاملة في البناء والإنشاءات والتشطيبات.",
      },
    ],
  }),
  component: Projects,
});

const projectsList = [
  {
    id: 1,
    title: "إنشاء فيلا سكنية فاخرة",
    type: "مشاريع سكنية",
    location: "الرياض، حي الملقا",
    duration: "12 شهراً",
  },
  {
    id: 2,
    title: "مستودعات الشركة الصناعية",
    type: "منشآت صناعية",
    location: "الرياض، المدينة الصناعية الثانية",
    duration: "8 أشهر",
  },
  {
    id: 3,
    title: "مشروع الفندق التجاري",
    type: "مشاريع خدمية وتجارية",
    location: "جدة، حي الشاطئ",
    duration: "18 شهراً",
  },
  {
    id: 4,
    title: "مجمع استراحات فندقية",
    type: "مشاريع سكنية وترفيهية",
    location: "الرياض، العمارية",
    duration: "10 أشهر",
  }
];

function Projects() {
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
            مشاريعنا <span className="text-gold">المنفذة</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            تصفح سجل إنجازاتنا الذي يعكس التزامنا بالجودة والاحترافية. كل مشروع يمثل قصة نجاح 
            وشهادة على قدراتنا في تحويل التصاميم إلى واقع صلب.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container-x py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:gap-12">
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm hover:shadow-elegant transition-all duration-300"
            >
              {/* Project Details */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-display text-2xl font-bold text-primary mb-6">
                  {project.title}
                </h3>
                
                <div className="space-y-4 text-sm font-medium text-muted-foreground flex-grow">
                  <div className="flex items-start gap-3">
                    <Building className="h-5 w-5 text-gold shrink-0" />
                    <div>
                      <span className="block text-xs text-muted-foreground/70 mb-1">نوع المشروع</span>
                      <span className="text-primary text-base">{project.type}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gold shrink-0" />
                    <div>
                      <span className="block text-xs text-muted-foreground/70 mb-1">الموقع</span>
                      <span className="text-primary text-base">{project.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-gold shrink-0" />
                    <div>
                      <span className="block text-xs text-muted-foreground/70 mb-1">مدة التنفيذ</span>
                      <span className="text-primary text-base">{project.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </Layout>
  );
}
