import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, AlertTriangle } from "lucide-react";

export function Maintenance() {
  const contacts = [
    {
      icon: MessageCircle,
      title: "تواصل عبر واتساب",
      desc: "راسلنا مباشرة للاستفسارات والخدمات الفورية",
      value: "0500708534",
      href: "https://wa.me/966500708534",
      color: "hover:text-[#25D366] hover:border-[#25D366]/40",
      iconBg: "bg-[#25D366]/10 text-[#25D366]"
    },
    {
      icon: Phone,
      title: "اتصل بنا هاتفياً",
      desc: "م/ أبو نايف — نسعد بمكالمتك في أي وقت",
      value: "0500708534",
      href: "tel:+966500708534",
      color: "hover:text-gold hover:border-gold/40",
      iconBg: "bg-gold/10 text-gold"
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      desc: "لإرسال المخططات وطلبات عروض الأسعار",
      value: "info@alislah-almamary.sa",
      href: "mailto:info@alislah-almamary.sa",
      color: "hover:text-amber-400 hover:border-amber-400/40",
      iconBg: "bg-amber-400/10 text-amber-400"
    },
    {
      icon: MapPin,
      title: "مقر المؤسسة",
      desc: "الرياض – طريق عرفات",
      value: "تفضل بزيارة مكتبنا الرئيسي",
      href: "https://maps.google.com/?q=Riyadh+Saudi+Arabia",
      color: "hover:text-blue-400 hover:border-blue-400/40",
      iconBg: "bg-blue-400/10 text-blue-400"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-black text-white flex flex-col items-center justify-between overflow-hidden py-12 px-4 selection:bg-gold selection:text-black">
      
      {/* Background spotlights & radial dark overlays */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background: "radial-gradient(ellipse 80% 70% at 50% 40%, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.98) 100%)"
        }}
      />
      
      {/* Golden glow spotlight behind the central block */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] rounded-full pointer-events-none -z-10 opacity-60"
        style={{ 
          background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)", 
          filter: "blur(60px)",
        }} 
      />

      {/* Top Brand logo / Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center gap-3 md:gap-4 mt-4"
      >
        <img
          src="/logo_transparent.png"
          alt="مؤسسة الإصلاح المعماري"
          className="h-12 w-12 md:h-16 md:w-16 object-contain rounded-full bg-transparent border border-gold/10 p-0.5"
        />
        <div className="flex flex-col text-right">
          <span className="font-display text-base md:text-xl font-black tracking-wide text-white">
            مؤسسة الإصلاح المعماري للمقاولات
          </span>
          <span className="text-[10px] md:text-xs font-bold tracking-widest text-gold/80 uppercase">
            Alislah Architectural Contracting
          </span>
        </div>
      </motion.div>

      {/* Main content block */}
      <motion.main 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full text-center my-auto py-12 flex flex-col items-center"
      >
        
        {/* Status Eyebrow Badge */}
        <motion.div 
          variants={itemVariants}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-md px-4 py-1.5"
        >
          <AlertTriangle className="h-4 w-4 text-gold" />
          <span className="text-xs font-bold tracking-wider text-gold">
            الموقع مغلق حالياً
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          variants={itemVariants}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
        >
          الموقع الإلكتروني مغلق حالياً
        </motion.h1>

        {/* Text description */}
        <motion.p 
          variants={itemVariants}
          className="mt-6 text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
        >
          عملائنا الكرام، نود إحاطتكم بأن الموقع الإلكتروني مغلق حالياً. أعمالنا ومشاريعنا مستمرة كالمعتاد دون أي توقف، ويسعدنا دائماً تواصلكم المباشر معنا وخدمتكم وتلقي طلباتكم عبر قنوات الاتصال الرسمية التالية:
        </motion.p>

        {/* Contact Links Grid */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 grid gap-4 sm:grid-cols-2 w-full text-right"
        >
          {contacts.map((c, idx) => (
            <motion.a
              key={idx}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noreferrer" : undefined}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 transition-all duration-300 ${c.color} group shadow-lg`}
            >
              {/* Icon Container */}
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 ${c.iconBg}`}>
                <c.icon className="h-6 w-6" />
              </div>
              
              {/* Details */}
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-base font-bold text-white group-hover:text-gold transition-colors duration-300">
                  {c.title}
                </h3>
                <p className="mt-1 text-xs text-white/40 leading-relaxed truncate">
                  {c.desc}
                </p>
                <div className="mt-2 text-sm font-semibold tracking-wide text-white/90 group-hover:text-white transition-colors duration-300">
                  {c.value}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </motion.main>

      {/* Footer copyright */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-[11px] md:text-xs text-white/30 text-center mt-4 border-t border-white/5 pt-6 w-full max-w-sm"
      >
        <p className="font-medium">
          &copy; {new Date().getFullYear()} جميع الحقوق محفوظة لمؤسسة الإصلاح المعماري للمقاولات
        </p>
        <p className="mt-1 opacity-70">
          الرياض، المملكة العربية السعودية
        </p>
      </motion.footer>

    </div>
  );
}
