export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="container-x relative py-20 md:py-28">
        {eyebrow && (
          <div className="mb-4 inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-bold text-gold">
            {eyebrow}
          </div>
        )}
        <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base leading-8 text-primary-foreground/80 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
