'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'AI Dashboard',
    category: 'Product Design',
    description: 'Analytics workspace with live KPIs and model health for an ML ops team.',
    image: '/portfolio/portfolio-ai-dashboard.png',
    alt: 'Dark analytics dashboard UI with charts',
    size: 'col-span-1 md:col-span-2 h-[500px]',
  },
  {
    title: 'EcoSmart App',
    category: 'Mobile Design',
    description: 'Carbon tracking and habits for a climate-focused consumer app.',
    image: '/portfolio/portfolio-ecosmart.png',
    alt: 'Eco sustainability mobile app mockup',
    size: 'col-span-1 h-[600px] md:mt-24',
  },
  {
    title: 'Nexus Branding',
    category: 'Identity',
    description: 'Visual system, motion rules, and launch assets for a B2B platform.',
    image: '/portfolio/portfolio-nexus-brand.png',
    alt: 'Abstract geometric brand identity artwork',
    size: 'col-span-1 h-[450px]',
  },
  {
    title: 'Lumina Web',
    category: 'Development',
    description: 'Marketing site and component library shipped with Next.js and a design token pipeline.',
    image: '/portfolio/portfolio-lumina-web.png',
    alt: 'Modern dark website on laptop screen',
    size: 'col-span-1 h-[550px] md:-mt-32',
  },
  {
    title: 'Crypto Wallet',
    category: 'Fintech',
    description: 'Secure onboarding, portfolio view, and transaction flows for a non-custodial wallet.',
    image: '/portfolio/portfolio-crypto-wallet.png',
    alt: 'Fintech crypto wallet dark UI concept',
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
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`${project.size} relative group overflow-hidden rounded-[2rem] card-premium flex flex-col cursor-pointer`}
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={idx < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/30 to-transparent opacity-60" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080808]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

              <div className="relative z-20 flex flex-col justify-between h-full p-8 md:p-10">
                <div className="flex justify-between items-start gap-4">
                  <span className="inline-block px-3 py-1 rounded border border-[#1F1F1F] bg-[#0A0A0A]/60 text-[#888888] text-xs font-bold uppercase tracking-[0.15em] backdrop-blur-md">
                    {project.category}
                  </span>
                  <div className="w-12 h-12 shrink-0 rounded-full border border-[#1F1F1F] bg-[#080808]/80 text-[#F5F5F5] flex items-center justify-center -rotate-45 group-hover:bg-[#F5F5F5] group-hover:text-[#080808] transition-all duration-300">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out space-y-3">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] tracking-[-0.03em]">
                    {project.title}
                  </h3>
                  <p className="text-[#A0A0A0] text-sm md:text-[15px] leading-relaxed max-w-md opacity-90 group-hover:opacity-100 line-clamp-3 md:line-clamp-none">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
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
