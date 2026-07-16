'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useDictionary } from '@/context/LocaleContext';

const projectMeta = [
  {
    image: '/portfolio/live-yoyocrm.png',
    href: 'https://yoyocrm.io/',
    objectPosition: 'center top',
    size: 'col-span-1 md:col-span-2 h-[520px] md:h-[560px]',
    imageFit: 'cover' as const,
    imageAreaClass: 'h-[62%] min-h-[240px] md:min-h-[280px]',
    quality: 95,
  },
  {
    image: '/portfolio/live-maktab.png',
    href: 'https://www.maktabelite.com/',
    objectPosition: 'center top',
    size: 'col-span-1 h-[560px] md:mt-16',
    imageFit: 'cover' as const,
    imageAreaClass: 'h-[62%] min-h-[240px]',
    quality: 95,
  },
  {
    image: '/portfolio/live-wasil.png',
    href: 'https://www.getwasil.com/',
    objectPosition: 'center top',
    size: 'col-span-1 h-[480px]',
    imageFit: 'cover' as const,
    imageAreaClass: 'h-[60%] min-h-[220px]',
    quality: 95,
  },
  {
    image: '/portfolio/live-bilal.png',
    href: 'https://www.mohammedbilalai.com/',
    objectPosition: 'center top',
    size: 'col-span-1 md:col-span-2 h-[520px] md:-mt-8',
    imageFit: 'cover' as const,
    imageAreaClass: 'h-[62%] min-h-[240px]',
    quality: 95,
  },
];

export default function Portfolio() {
  const dict = useDictionary();
  const projects = dict.portfolio.projects.map((p, i) => ({
    ...p,
    ...projectMeta[i],
    alt: p.title,
  }));

  return (
    <section className="section-padding bg-[#080808] overflow-hidden py-32">
      <div className="container-px mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {projects.map((project, idx) => {
            const areaClass =
              project.imageAreaClass ?? 'h-[58%] min-h-[200px]';
            const quality = project.quality ?? 92;

            return (
              <motion.a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`${project.size} relative group flex flex-col overflow-hidden rounded-[2rem] card-premium bg-[#111111] no-underline`}
              >
                <div
                  className={`relative w-full shrink-0 overflow-hidden bg-[#0D0D0D] ${areaClass}`}
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    quality={quality}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 42vw"
                    priority={idx < 2}
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    style={{ objectPosition: project.objectPosition }}
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0A0A0A]/90 to-transparent"
                    aria-hidden
                  />
                </div>

                <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-between gap-5 border-t border-[#1F1F1F] bg-[#0A0A0A] p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-block rounded border border-[#252525] bg-[#111111] px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-[#B0B0B0]">
                      {project.category}
                    </span>
                    <div className="-rotate-45 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#252525] bg-[#111111] text-[#F5F5F5] transition-all duration-300 group-hover:rotate-0 group-hover:border-[#C8FF00] group-hover:bg-[#C8FF00] group-hover:text-[#080808]">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-[-0.03em] text-[#F5F5F5] md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[#B8B8B8]">
                      {project.description}
                    </p>
                    <p className="text-xs font-medium text-[#666666] truncate pt-1">
                      {project.href.replace(/^https?:\/\//, '').replace(/\/$/, '')}
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
