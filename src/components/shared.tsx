import React from 'react';

export function SectionContainer({
  id,
  className = '',
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`rounded-3xl border border-white/10 bg-[#0f172a]/80 p-8 shadow-glow ${className}`}>
      {children}
    </section>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-4xl font-semibold text-white sm:text-5xl">{children}</h2>;
}

export function SectionSubtitle({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 max-w-3xl text-lg text-gray-300">{children}</p>;
}

export function fadeInUpVariants(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.7, ease: 'easeOut' },
    viewport: { once: true },
  };
}
