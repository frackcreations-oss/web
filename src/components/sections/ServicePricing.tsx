'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    ArrowUpRight,
    Blocks,
    Bot,
    Boxes,
    Briefcase,
    Check,
    Cpu,
    Database,
    Layers3,
    LayoutTemplate,
    Linkedin,
    Megaphone,
    MessageCircle,
    Plug,
    Puzzle,
    Rocket,
    Sparkles,
    TrendingUp,
    Workflow,
} from 'lucide-react';
import { useDictionary } from '@/context/LocaleContext';
import { BOOKING_URL } from '@/lib/booking';

type Category = 'websites' | 'ai' | 'software' | 'growth' | 'web3';
const CATEGORIES: ('all' | Category)[] = ['all', 'websites', 'ai', 'software', 'growth', 'web3'];

// Prices, icons and categories, in the same order as dict.servicePricing.items
const services: { price: string; from: boolean; icon: typeof Bot; cats: Category[]; popular?: boolean; bundle?: boolean }[] = [
    { price: '$1,499', from: false, icon: LayoutTemplate, cats: ['websites'] },
    { price: '$2,999', from: false, icon: Layers3, cats: ['websites'], popular: true },
    { price: '$1,499', from: false, icon: Bot, cats: ['ai'] },
    { price: '$3,999', from: false, icon: Sparkles, cats: ['websites', 'ai'], bundle: true },
    { price: '$1,999', from: false, icon: MessageCircle, cats: ['ai'] },
    { price: '$1,499', from: true, icon: Plug, cats: ['software'] },
    { price: '$1,499', from: true, icon: Puzzle, cats: ['software'] },
    { price: '$3,999', from: true, icon: Blocks, cats: ['software'] },
    { price: '$7,999', from: true, icon: Briefcase, cats: ['software'] },
    { price: '$7,999', from: true, icon: Boxes, cats: ['software'] },
    { price: '$12,999', from: true, icon: Cpu, cats: ['ai', 'software'] },
    { price: '$9,999', from: true, icon: TrendingUp, cats: ['web3'] },
    { price: '$14,999', from: true, icon: Rocket, cats: ['web3'] },
    { price: '$4,999', from: false, icon: Linkedin, cats: ['growth'] },
    { price: '$2,197', from: false, icon: Megaphone, cats: ['growth'] },
    { price: '$5,799', from: false, icon: Database, cats: ['growth'] },
    { price: '$3,977', from: false, icon: Workflow, cats: ['growth'] },
];
const BUNDLE = services.findIndex((s) => s.bundle);
const BUNDLE_PARTS = [1, 2]; // 3D landing page + AI website chatbot
const BUNDLE_FULL_PRICE = '$4,498';

export default function ServicePricing() {
    const dict = useDictionary();
    const t = dict.servicePricing;
    const [cat, setCat] = useState<'all' | Category>('all');

    const visible = services
        .map((s, idx) => ({ ...s, idx, item: t.items[idx] }))
        .filter((s) => s.item && !s.bundle && (cat === 'all' || s.cats.includes(cat)));
    const showBundle = cat === 'all' || services[BUNDLE].cats.includes(cat as Category);
    const count = (c: 'all' | Category) =>
        services.filter((s) => c === 'all' || s.cats.includes(c)).length;

    return (
        <section id="pricing" className="py-24 md:py-32 bg-[#080808] border-t border-[#1F1F1F] scroll-mt-24">
            <div className="container mx-auto px-6 md:px-8 max-w-[1200px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-10 md:mb-12"
                >
                    <div className="mb-6 px-4 py-1.5 rounded-md bg-[#111111] border border-[#1F1F1F] text-[#888888] text-[11px] font-bold tracking-[0.1em] uppercase">
                        {t.badge}
                    </div>
                    <h2 className="text-3xl md:text-[44px] font-bold text-[#F5F5F5] tracking-tight leading-tight max-w-2xl">
                        {t.title}
                    </h2>
                    <p className="mt-4 text-[#888888] text-base md:text-lg max-w-2xl">{t.subtitle}</p>
                </motion.div>

                {/* Category tabs: scroll sideways on phones */}
                <div className="-mx-6 mb-10 overflow-x-auto px-6 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    <div role="tablist" aria-label={t.badge} className="mx-auto flex w-max gap-2 rounded-2xl border border-[#1F1F1F] bg-[#0C0C0C] p-1.5">
                        {CATEGORIES.map((c) => {
                            const active = c === cat;
                            return (
                                <button
                                    key={c}
                                    role="tab"
                                    aria-selected={active}
                                    onClick={() => setCat(c)}
                                    className={`relative flex h-11 items-center gap-2 whitespace-nowrap rounded-xl px-4 text-[14px] font-semibold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C8FF00] ${active ? 'text-[#080808]' : 'text-[#888888] hover:text-[#F5F5F5]'}`}
                                >
                                    {active && (
                                        <motion.span layoutId="pricing-tab" className="absolute inset-0 rounded-xl bg-[#C8FF00]" transition={{ type: 'spring', stiffness: 420, damping: 34 }} />
                                    )}
                                    <span className="relative">{t.categories[c]}</span>
                                    <span className={`relative text-[11px] font-bold ${active ? 'text-[#080808]/60' : 'text-[#555555]'}`}>{count(c)}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Featured bundle */}
                <AnimatePresence initial={false}>
                    {showBundle && t.items[BUNDLE] && (
                        <motion.a
                            key="bundle"
                            href={BOOKING_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.35 }}
                            className="group relative mb-5 grid overflow-hidden rounded-3xl border border-[#C8FF00]/40 bg-gradient-to-br from-[#C8FF00]/[0.08] via-[#0C0C0C] to-[#0C0C0C] p-7 md:grid-cols-[1.4fr_1fr] md:items-center md:gap-10 md:p-10 transition-colors duration-500 hover:border-[#C8FF00]/70"
                        >
                            <div>
                                <span className="inline-flex items-center gap-2 rounded border border-[#C8FF00] bg-[#C8FF00] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[#080808]">
                                    <Sparkles size={13} strokeWidth={2.5} />
                                    {t.bestValue}
                                </span>
                                <h3 className="mt-5 text-2xl md:text-[32px] font-bold leading-tight tracking-[-0.03em] text-[#F5F5F5]">{t.items[BUNDLE].name}</h3>
                                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#888888]">{t.items[BUNDLE].description}</p>
                                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                                    {BUNDLE_PARTS.map((i) => (
                                        <li key={i} className="flex items-center gap-2 text-[14px] font-medium text-[#F5F5F5]">
                                            <Check size={16} strokeWidth={3} className="text-[#C8FF00]" />
                                            {t.items[i].name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-8 flex flex-col gap-4 md:mt-0 md:items-end md:text-end">
                                <div dir="ltr" className="flex items-baseline gap-3">
                                    <span className="text-lg font-semibold text-[#555555] line-through decoration-2">{BUNDLE_FULL_PRICE}</span>
                                    <span className="text-5xl md:text-6xl font-bold tracking-[-0.03em] text-[#F5F5F5]">{services[BUNDLE].price}</span>
                                </div>
                                <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#C8FF00]">{t.saveBadge}</span>
                                <span className="btn-primary mt-2 inline-flex h-12 items-center justify-center gap-2 px-6 text-[15px]">
                                    {t.getStarted}
                                    <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100" />
                                </span>
                            </div>
                        </motion.a>
                    )}
                </AnimatePresence>

                {/* Service cards */}
                <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
                    <AnimatePresence mode="popLayout" initial={false}>
                        {visible.map((s) => {
                            const Icon = s.icon;
                            return (
                                <motion.a
                                    layout
                                    key={s.idx}
                                    href={BOOKING_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.3 }}
                                    className={`group relative flex flex-col rounded-2xl border bg-[#0C0C0C] p-6 md:p-7 transition-colors duration-300 hover:border-[#C8FF00]/40 ${s.popular ? 'border-[#C8FF00]/30' : 'border-[#1F1F1F]'}`}
                                >
                                    <div className="mb-5 flex items-start justify-between gap-3">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#1F1F1F] bg-[#111111] text-[#888888] transition-colors duration-300 group-hover:text-[#C8FF00]">
                                            <Icon size={22} strokeWidth={1.5} />
                                        </div>
                                        {s.popular && (
                                            <span className="rounded-full border border-[#C8FF00]/40 bg-[#C8FF00]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#C8FF00]">
                                                {t.popular}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-lg md:text-xl font-semibold tracking-[-0.02em] text-[#F5F5F5]">{s.item.name}</h3>
                                    <p className="mt-2 mb-7 text-[14px] leading-relaxed text-[#888888]">{s.item.description}</p>

                                    <div className="mt-auto border-t border-[#1F1F1F] pt-5">
                                        <span className={`block text-[11px] font-bold uppercase tracking-[0.12em] ${s.from ? 'text-[#666666]' : 'text-[#C8FF00]/80'}`}>
                                            {s.from ? t.fromLabel : t.fixedLabel}
                                        </span>
                                        <div className="mt-1 flex items-center justify-between gap-4">
                                            <span dir="ltr" className="text-3xl md:text-[34px] font-bold tracking-[-0.03em] text-[#F5F5F5]">{s.price}</span>
                                            <span className="inline-flex h-10 items-center gap-1.5 rounded-xl border border-[#1F1F1F] px-3.5 text-[13px] font-semibold text-[#F5F5F5] transition-colors duration-300 group-hover:border-[#C8FF00] group-hover:bg-[#C8FF00] group-hover:text-[#080808]">
                                                {t.getStarted}
                                                <ArrowUpRight size={15} className="rtl:-scale-x-100" />
                                            </span>
                                        </div>
                                    </div>
                                </motion.a>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* Not sure? + fine print */}
                <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl border border-[#1F1F1F] bg-[#0C0C0C] p-6 text-center md:flex-row md:p-8 md:text-start">
                    <div>
                        <h3 className="text-lg font-semibold text-[#F5F5F5]">{t.customTitle}</h3>
                        <p className="mt-1.5 max-w-2xl text-[14px] leading-relaxed text-[#888888]">{t.note}</p>
                    </div>
                    <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex h-12 shrink-0 items-center justify-center px-7 text-[15px]"
                    >
                        {t.cta}
                    </a>
                </div>
            </div>
        </section>
    );
}
