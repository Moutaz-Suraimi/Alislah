import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({
  children,
  transparentHeader = false,
}: {
  children: React.ReactNode;
  transparentHeader?: boolean;
}) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden text-primary">
      {/* Global Background from Intro */}
      <div className="fixed inset-0 -z-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-50 via-white to-white" />

      {/* Subtle Gold Ambient Pulses — CSS only, opacity-only, no scale, no repaint */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes layoutPulse1 {
          0%, 100% { opacity: 0.01; }
          50%       { opacity: 0.04; }
        }
        @keyframes layoutPulse2 {
          0%, 100% { opacity: 0.01; }
          50%       { opacity: 0.03; }
        }
        .layout-glow-1 {
          animation: layoutPulse1 9s ease-in-out infinite;
          will-change: opacity;
        }
        .layout-glow-2 {
          animation: layoutPulse2 11s ease-in-out infinite 2.5s;
          will-change: opacity;
        }
      `}} />
      <div className="layout-glow-1 fixed top-1/4 -start-20 -z-40 h-[28rem] w-[28rem] rounded-full bg-gold blur-[100px] pointer-events-none" />
      <div className="layout-glow-2 fixed bottom-1/4 -end-20 -z-40 h-[32rem] w-[32rem] rounded-full bg-gold blur-[120px] pointer-events-none" />

      <Header transparent={transparentHeader} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
