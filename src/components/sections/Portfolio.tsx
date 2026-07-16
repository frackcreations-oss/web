'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { useDictionary } from '@/context/LocaleContext';

type ProjectMeta = {
  image: string;
  href: string;
  /** false when the site blocks iframes (X-Frame / CSP) — show crisp live screenshot instead */
  embed?: boolean;
};

/** Order: Wasil first · 3D · Maktab · Care At Heart · YOYO last */
const projectMeta: ProjectMeta[] = [
  { image: '/portfolio/live-wasil.png', href: 'https://www.getwasil.com/' },
  { image: '/portfolio/live-bilal.png', href: 'https://www.mohammedbilalai.com/' },
  { image: '/portfolio/live-nomada.png', href: 'https://www.nomadamiami.com/' },
  { image: '/portfolio/live-maktab.png', href: 'https://www.maktabelite.com/', embed: false },
  { image: '/portfolio/live-careatheart.png', href: 'https://www.careathearthhs.com/', embed: false },
  { image: '/portfolio/live-yoyocrm.png', href: 'https://yoyocrm.io/' },
];

function displayHost(href: string) {
  return href.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return isDesktop;
}

function LiveFrame({
  href,
  image,
  alt,
  priority,
  embed = true,
}: {
  href: string;
  image: string;
  alt: string;
  priority?: boolean;
  embed?: boolean;
}) {
  const isDesktop = useIsDesktop();
  const [active, setActive] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [iframeFailed, setIframeFailed] = useState(!embed);
  const interactive = isDesktop && active && embed && !iframeFailed;

  // If iframe is blocked, onLoad may still fire — detect empty frame after timeout
  useEffect(() => {
    if (!embed) return;
    const t = window.setTimeout(() => {
      // Keep screenshot visible if embed never meaningfully loaded
      if (!loaded) setIframeFailed(true);
    }, 8000);
    return () => window.clearTimeout(t);
  }, [embed, loaded]);

  const showScreenshotOnly = !embed || iframeFailed;

  return (
    <div
      className="relative w-full aspect-[16/10] min-h-[240px] sm:min-h-[320px] md:aspect-auto md:min-h-[min(72vh,780px)] overflow-hidden bg-[#0A0A0A]"
      onMouseEnter={() => isDesktop && embed && !iframeFailed && setActive(true)}
      onMouseLeave={() => isDesktop && setActive(false)}
    >
      <Image
        src={image}
        alt={alt}
        fill
        quality={95}
        priority={priority}
        sizes="100vw"
        className={`object-cover object-top transition-opacity duration-500 ${
          showScreenshotOnly ? 'opacity-100' : loaded ? 'opacity-0' : 'opacity-80'
        }`}
      />

      {embed && !iframeFailed && (
        <iframe
          src={href}
          title={`${alt} live preview`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setIframeFailed(true)}
          className={`absolute inset-0 h-full w-full border-0 bg-[#0A0A0A] ${
            interactive ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-presentation"
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}

      {!interactive && (
        <div className="absolute inset-0 z-10 flex items-end justify-center bg-gradient-to-t from-[#080808]/65 via-transparent to-transparent p-4 md:items-center md:bg-transparent md:p-0">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (isDesktop && embed && !iframeFailed) {
                e.preventDefault();
                setActive(true);
              }
            }}
            className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#C8FF00]/40 bg-[#0A0A0A]/90 px-4 py-2.5 text-[12px] font-bold uppercase tracking-[0.12em] text-[#C8FF00] shadow-[0_8px_24px_rgba(0,0,0,0.45)] backdrop-blur-md transition hover:bg-[#C8FF00] hover:text-[#080808] md:mb-0 md:opacity-0 md:group-hover:opacity-100"
          >
            {isDesktop && embed && !iframeFailed ? 'Click to interact' : 'Open live site'}
            <ExternalLink size={12} />
          </a>
        </div>
      )}

      {interactive && (
        <div className="pointer-events-none absolute left-3 top-3 z-10 rounded-full border border-[#C8FF00]/40 bg-[#0A0A0A]/85 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#C8FF00] backdrop-blur-sm">
          Live · scrolling inside
        </div>
      )}
    </div>
  );
}

export default function Portfolio() {
  const dict = useDictionary();
  const projects = dict.portfolio.projects
    .map((p, i) => {
      const meta = projectMeta[i];
      if (!meta) return null;
      return { ...p, ...meta, alt: p.title, embed: meta.embed !== false };
    })
    .filter(Boolean) as Array<{
    title: string;
    category: string;
    description: string;
    image: string;
    href: string;
    alt: string;
    embed: boolean;
  }>;

  return (
    <section className="section-padding bg-[#080808] overflow-hidden py-24 md:py-32 relative">
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

      <div className="container-px mx-auto max-w-[1400px] relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-14 md:mb-20 gap-6 md:gap-8">
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
            className="text-left md:text-right"
          >
            <p className="text-[#888888] text-base md:text-xl font-medium max-w-xs md:ml-auto leading-relaxed">
              {dict.portfolio.subtitle}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-10 items-stretch">
          {projects.map((project, idx) => {
            const host = displayHost(project.href);

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: Math.min(idx * 0.05, 0.25) }}
                viewport={{ once: true }}
                className="group relative flex h-full w-full flex-col overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-[#1F1F1F] bg-[#0C0C0C] transition-all duration-500 hover:border-[#2E2E2E] hover:shadow-[0_0_0_1px_rgba(200,255,0,0.12),0_24px_48px_rgba(0,0,0,0.45)]"
              >
                <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-64 -translate-x-1/2 rounded-full bg-[#C8FF00]/[0.07] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />

                <div className="relative p-3 sm:p-4 md:p-5 pb-0">
                  <div className="relative overflow-hidden rounded-xl border border-[#252525] bg-[#111111] shadow-[0_12px_40px_rgba(0,0,0,0.5)] ring-1 ring-white/[0.04]">
                    <div className="flex items-center gap-2 sm:gap-3 border-b border-[#1F1F1F] bg-[#141414] px-2.5 sm:px-3 py-2 sm:py-2.5">
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                      </div>
                      <div className="flex min-w-0 flex-1 items-center gap-2 rounded-md border border-[#1F1F1F] bg-[#0A0A0A] px-2 sm:px-3 py-1.5">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8FF00] animate-pulse shadow-[0_0_6px_rgba(200,255,0,0.7)]" />
                        <span className="truncate text-[11px] font-medium tracking-tight text-[#888888]">
                          {host}
                        </span>
                      </div>
                      <span className="shrink-0 rounded-full border border-[#C8FF00]/35 bg-[#C8FF00]/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[#C8FF00]">
                        Live
                      </span>
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 p-1 text-[#555555] transition-colors hover:text-[#C8FF00]"
                        aria-label={`Open ${project.title}`}
                      >
                        <ExternalLink size={12} />
                      </a>
                    </div>

                    <LiveFrame
                      href={project.href}
                      image={project.image}
                      alt={project.alt}
                      priority={idx < 2}
                      embed={project.embed}
                    />
                  </div>
                </div>

                <div className="relative z-10 flex min-h-[160px] flex-1 flex-col justify-between gap-4 p-5 sm:p-6 md:p-7 pt-5">
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-block rounded-full border border-[#252525] bg-[#111111] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#A0A0A0]">
                      {project.category}
                    </span>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="-rotate-45 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#252525] bg-[#111111] text-[#F5F5F5] transition-all duration-300 hover:rotate-0 hover:border-[#C8FF00] hover:bg-[#C8FF00] hover:text-[#080808]"
                      aria-label={`Visit ${project.title}`}
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-[-0.03em] text-[#F5F5F5]">
                      {project.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[#9A9A9A] line-clamp-3">
                      {project.description}
                    </p>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block pt-1 text-xs font-semibold tracking-wide text-[#C8FF00]/80 transition-colors hover:text-[#C8FF00]"
                    >
                      {host} ↗
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-16 md:mt-24 text-center">
          <a href="#booking" className="btn-ghost h-14 px-10 text-[15px]">
            {dict.portfolio.startProject}
          </a>
        </div>
      </div>
    </section>
  );
}
