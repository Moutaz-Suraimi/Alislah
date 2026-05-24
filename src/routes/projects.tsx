import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { X, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "مشاريعنا | مؤسسة الإصلاح المعماري" },
      {
        name: "description",
        content: "معرض صور إنجازات ومشاريع مؤسسة الإصلاح المعماري للمقاولات العامة والإنشاءات.",
      },
    ],
  }),
  component: Projects,
});

const projectsList = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  image: `/projects/project_${i + 1}.jpg`,
}));

function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsList[0] | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative flex min-h-[35vh] flex-col justify-center overflow-hidden bg-primary pt-32 pb-16 text-primary-foreground">
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
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent z-0" />
        
        <div className="container-x relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-3 text-xs font-bold uppercase tracking-widest text-gold"
          >
            سجل إنجازاتنا المصور
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl text-white"
          >
            معرض <span className="text-gold">مشاريعنا</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/80"
          >
            تصفح سجل إنجازاتنا الذي يعكس التزامنا بالجودة والاحترافية. صروح معمارية تم تنفيذها بأعلى المعايير الهندسية.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid (Pure Visual Gallery) */}
      <section className="container-x py-16">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
          {projectsList.map((project) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-sm hover:shadow-elegant hover:-translate-y-1.5 transition-all duration-500"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={`مشروع الإصلاح المعماري رقم ${project.id}`}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Subtle Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Hover Maximize Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-gradient text-gold-foreground shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Maximize2 className="h-5 w-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-6"
          >
            {/* Click outside to close */}
            <div className="absolute inset-0" onClick={() => setSelectedProject(null)} />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-hidden rounded-[2rem] bg-transparent border-0 z-10 flex items-center justify-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 end-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-transform hover:scale-105 hover:bg-black/80 border border-white/10"
                aria-label="إغلاق النافذة"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Full Screen Image (No descriptions under image) */}
              <img
                src={selectedProject.image}
                alt={`مشروع الإصلاح المعماري رقم ${selectedProject.id}`}
                className="h-full w-full object-contain max-h-[80vh] rounded-[1.5rem]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
