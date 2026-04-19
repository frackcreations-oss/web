'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

type ImageFit = 'cover' | 'contain';

const projects: {
  title: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  objectPosition: string;
  size: string;
  imageFit?: ImageFit;
  /** Inset for contained images so the full mockup stays visible */
  containInset?: string;
  /** Tailwind classes for the image region height */
  imageAreaClass?: string;
  quality?: number;
}[] = [
  {
    title: 'AI Dashboard',
    category: 'Product Design',
    description: 'Analytics workspace with live KPIs and model health for an ML ops team.',
    image: '/portfolio/portfolio-ai-dashboard.png',
    alt: 'Dark analytics dashboard UI with charts',
    objectPosition: 'center center',
    size: 'col-span-1 md:col-span-2 h-[560px] md:h-[580px]',
    imageFit: 'contain',
    containInset: 'inset-2 md:inset-6',
    imageAreaClass: 'h-[62%] min-h-[240px] md:min-h-[280px]',
    quality: 96,
  },
  {
    title: 'EcoSmart App',
    category: 'Mobile Design',
    description: 'Carbon tracking and habits for a climate-focused consumer app.',
    image: '/portfolio/portfolio-ecosmart.png',
    alt: 'Eco sustainability mobile app mockup',
    objectPosition: 'center center',
    size: 'col-span-1 h-[640px] md:mt-24',
    imageFit: 'contain',
    containInset: 'inset-2 md:inset-4',
    imageAreaClass: 'h-[64%] min-h-[260px] md:min-h-[300px]',
    quality: 96,
  },
  {
    title: 'Nexus Branding',
    category: 'Identity',
    description: 'Visual system, motion rules, and launch assets for a B2B platform.',
    image: '/portfolio/portfolio-nexus-brand.png',
    alt: 'Abstract geometric brand identity artwork',
    objectPosition: 'center center',
    size: 'col-span-1 h-[450px]',
  },
  {
    title: 'Lumina Web',
    category: 'Development',
    description: 'Marketing site and component library shipped with Next.js and a design token pipeline.',
    image: '/portfolio/portfolio-lumina-web.png',
    alt: 'Modern dark website on laptop screen',
    objectPosition: 'center center',
    size: 'col-span-1 h-[640px] md:-mt-32',
    imageFit: 'contain',
    containInset: 'inset-2 md:inset-5',
    imageAreaClass: 'h-[64%] min-h-[260px] md:min-h-[300px]',
    quality: 96,
  },
  {
    title: 'Crypto Wallet',
    category: 'Fintech',
    description: 'Secure onboarding, portfolio view, and transaction flows for a non-custodial wallet.',
    image: '/portfolio/portfolio-crypto-wallet.png',
    alt: 'Fintech crypto wallet dark UI concept',
    objectPosition: 'center center',
    size: 'col-span-1 h-[400px]',
  },
];

export default function Portfolio() {
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
              Selected <br />
              <span className="text-[#888888] font-normal">Works.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <p className="text-[#888888] text-xl font-medium max-w-xs ml-auto leading-relaxed">
              Case-style snapshots: product, brand, and shipped interfaces.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {projects.map((project, idx) => {
            const fit = project.imageFit ?? 'cover';
            const areaClass =
              project.imageAreaClass ?? 'h-[58%] min-h-[200px]';
            const quality = project.quality ?? 92;
            const inset = project.containInset ?? 'inset-3 md:inset-4';

            return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`${project.size} relative group flex flex-col overflow-hidden rounded-[2rem] card-premium cursor-pointer bg-[#111111]`}
            >
              <div
                className={`relative w-full shrink-0 overflow-hidden ${areaClass} ${fit === 'contain' ? 'bg-[#0B0B0B]' : 'bg-[#0D0D0D]'}`}
              >
                {fit === 'contain' ? (
                  <div className={`absolute ${inset}`}>
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      quality={quality}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 42vw"
                      priority={idx < 2}
                      className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      style={{ objectPosition: project.objectPosition }}
                    />
                  </div>
                ) : (
                  <>
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      quality={quality}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 38vw"
                      priority={idx < 2}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      style={{ objectPosition: project.objectPosition }}
                    />
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0A0A0A]/90 to-transparent"
                      aria-hidden
                    />
                  </>
                )}
              </div>

              {/* Copy: solid panel — text never competes with the artwork */}
              <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-between gap-5 border-t border-[#1F1F1F] bg-[#0A0A0A] p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-block rounded border border-[#252525] bg-[#111111] px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-[#B0B0B0]">
                    {project.category}
                  </span>
                  <div className="-rotate-45 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#252525] bg-[#111111] text-[#F5F5F5] transition-all duration-300 group-hover:rotate-0 group-hover:border-[#F5F5F5] group-hover:bg-[#F5F5F5] group-hover:text-[#080808]">
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
                </div>
              </div>
            </motion.article>
            );
          })}
        </div>

        <div className="mt-24 text-center">
          <a href="#booking" className="btn-ghost h-14 px-10 text-[15px]">
            Start a project
          </a>
        </div>
      </div>
    </section>
  );
}
