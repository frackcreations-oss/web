'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { useDictionary } from '@/context/LocaleContext';

const projectMeta = [
  {
    image: '/portfolio/live-yoyocrm.png',
    href: 'https://yoyocrm.io/',
    size: 'col-span-1 md:col-span-2',
  },
  {
    image: '/portfolio/live-maktab.png',
    href: 'https://www.maktabelite.com/',
    size: 'col-span-1',
  },
  {
    image: '/portfolio/live-wasil.png',
    href: 'https://www.getwasil.com/',
    size: 'col-span-1',
  },
  {
    image: '/portfolio/live-bilal.png',
    href: 'https://www.mohammedbilalai.com/',
    size: 'col-span-1',
  },
  {
    image: '/portfolio/live-nomada.png',
    href: 'https://www.nomadamiami.com/',
    size: 'col-span-1 md:col-span-2',
  },
];

function displayHost(href: string) {
  return href.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

export default function Portfolio() {
  const dict = useDictionary();
  const projects = dict.portfolio.projects.map((p, i) => ({
    ...p,
    ...projectMeta[i],
    alt: p.title,
  }));

  return (
    <section className="section-padding bg-[#080808] overflow-hidden py-32 relative">
      {/* Soft section atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #C8FF00 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute top-1/4 -left-32 w-[420px] h-[420px] rounded-full bg-[#C8FF00]/[0.04] blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute bottom-1/4 -right-24 w-[380px] h-[380px] rounded-full bg-[#C8FF00]/[0.03] blur-[100px]" aria-hidden />

      <div className="container-px mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-8xl font-bold text-[#F5F5F5] tracking-[-0.03em] leading-none">
              {dict.portfolio.titleMain} <br />
              <span className="text-[#888888] font-normal">{dict.portfolio.titleMuted}</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <p className="text-[#888888] text-xl font-medium max-w-xs ml-auto leading-relaxed">
              {dict.portfolio.subtitle}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, idx) => {
            const host = displayHost(project.href);

            return (
              <motion.a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.08 }}
                viewport={{ once: true }}
                className={`${project.size} group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-[#1F1F1F] bg-[#0C0C0C] no-underline transition-all duration-500 hover:border-[#2E2E2E] hover:shadow-[0_0_0_1px_rgba(200,255,0,0.12),0_24px_48px_rgba(0,0,0,0.45)]`}
              >
                {/* Card glow */}
                <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-64 -translate-x-1/2 rounded-full bg-[#C8FF00]/[0.07] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />

                {/* Browser chrome + screenshot */}
                <div className="relative p-4 md:p-5 pb-0">
                  <div className="relative overflow-hidden rounded-xl border border-[#252525] bg-[#111111] shadow-[0_12px_40px_rgba(0,0,0,0.5)] ring-1 ring-white/[0.04]">
                    {/* Title bar */}
                    <div className="flex items-center gap-3 border-b border-[#1F1F1F] bg-[#141414] px-3 py-2.5">
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                      </div>
                      <div className="flex min-w-0 flex-1 items-center gap-2 rounded-md border border-[#1F1F1F] bg-[#0A0A0A] px-3 py-1.5">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8FF00] shadow-[0_0_6px_rgba(200,255,0,0.7)]" />
                        <span className="truncate text-[11px] font-medium tracking-tight text-[#888888]">
                          {host}
                        </span>
                      </div>
                      <ExternalLink
                        size={12}
                        className="shrink-0 text-[#555555] transition-colors group-hover:text-[#C8FF00]"
                      />
                    </div>

                    {/* Live screenshot */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A0A0A]">
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        quality={95}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 66vw"
                        priority={idx < 2}
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                      {/* Soft vignette + lime edge on hover */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/50 via-transparent to-transparent" />
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_top,rgba(200,255,0,0.08),transparent_55%)]" />
                    </div>
                  </div>
                </div>

                {/* Copy panel */}
                <div className="relative z-10 flex flex-1 flex-col justify-between gap-5 p-6 md:p-8 pt-6">
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-block rounded-full border border-[#252525] bg-[#111111] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#A0A0A0]">
                      {project.category}
                    </span>
                    <div className="-rotate-45 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#252525] bg-[#111111] text-[#F5F5F5] transition-all duration-300 group-hover:rotate-0 group-hover:border-[#C8FF00] group-hover:bg-[#C8FF00] group-hover:text-[#080808]">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-[-0.03em] text-[#F5F5F5] md:text-[1.75rem]">
                      {project.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[#9A9A9A]">
                      {project.description}
                    </p>
                    <p className="pt-1 text-xs font-semibold tracking-wide text-[#C8FF00]/70 transition-colors group-hover:text-[#C8FF00]">
                      {host} ↗
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <div className="mt-24 text-center">
          <a href="#booking" className="btn-ghost h-14 px-10 text-[15px]">
            {dict.portfolio.startProject}
          </a>
        </div>
      </div>
    </section>
  );
}
