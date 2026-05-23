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
    imageAfter: "/building_card.png",
    // imageBefore: "/hero.jpg", // إضافة صورة 'قبل' إذا توفرت
  },
  {
    id: 2,
    title: "مستودعات الشركة الصناعية",
    type: "منشآت صناعية",
    location: "الرياض، المدينة الصناعية الثانية",
    duration: "8 أشهر",
    imageAfter: "/industrial_card.png",
  },
  {
    id: 3,
    title: "مشروع الفندق التجاري",
    type: "مشاريع خدمية وتجارية",
    location: "جدة، حي الشاطئ",
    duration: "18 شهراً",
    imageAfter: "/service_card.png",
  },
  {
    id: 4,
    title: "مجمع استراحات فندقية",
    type: "مشاريع سكنية وترفيهية",
    location: "الرياض، العمارية",
    duration: "10 أشهر",
    imageAfter: "/hero.jpg",
  }
];

function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
              {/* Project Image Area (supports Before/After mentally if added) */}
              <div 
                className="relative aspect-video overflow-hidden cursor-pointer" 
                onClick={() => setSelectedImage(project.imageAfter)}
              >
                <img
                  src={project.imageAfter}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Badge for Before/After if configured */}
                {project.imageBefore && (
                  <div className="absolute top-4 start-4 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold"></span> متوفر صور قبل/بعد
                  </div>
                )}
                
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 text-primary px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    تكبير الصورة
                  </span>
                </div>
              </div>

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

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] md:max-w-6xl p-1 bg-transparent border-none shadow-none flex justify-center items-center">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="عرض تفصيلي للمشروع"
              className="w-full h-auto max-h-[90vh] object-contain rounded-xl shadow-2xl"
            />
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
