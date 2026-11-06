'use client';

import { motion } from 'framer-motion';
import {
    ArrowUpRight,
    Blocks,
    Bot,
    Boxes,
    Briefcase,
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

// Prices and icons, in the same order as dict.servicePricing.items
const services = [
    { price: '$1,499', from: false, icon: LayoutTemplate },
    { price: '$2,999', from: false, icon: Layers3 },
    { price: '$1,499', from: false, icon: Bot },
    { price: '$3,999', from: false, icon: Sparkles, bundle: true },
    { price: '$1,999', from: false, icon: MessageCircle },
    { price: '$1,499', from: true, icon: Plug },
    { price: '$1,499', from: true, icon: Puzzle },
    { price: '$3,999', from: true, icon: Blocks },
    { price: '$7,999', from: true, icon: Briefcase },
    { price: '$7,999', from: true, icon: Boxes },
    { price: '$12,999', from: true, icon: Cpu },
    { price: '$9,999', from: true, icon: TrendingUp },
    { price: '$14,999', from: true, icon: Rocket },
    { price: '$4,999', from: false, icon: Linkedin },
    { price: '$2,197', from: false, icon: Megaphone },
    { price: '$5,799', from: false, icon: Database },
    { price: '$3,977', from: false, icon: Workflow },
];

export default function ServicePricing() {
    const dict = useDictionary();
    const t = dict.servicePricing;

    return (
        <section id="pricing" className="py-24 md:py-32 bg-[#080808] border-t border-[#1F1F1F] scroll-mt-24">
            <div className="container mx-auto px-6 md:px-8 max-w-[1200px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-14 md:mb-20"
                >
                    <div className="mb-6 px-4 py-1.5 rounded-md bg-[#111111] border border-[#1F1F1F] text-[#888888] text-[11px] font-bold tracking-[0.1em] uppercase">
                        {t.badge}
                    </div>
                    <h2 className="text-3xl md:text-[44px] font-bold text-[#F5F5F5] tracking-tight leading-tight max-w-2xl">
                        {t.title}
                    </h2>
                    <p className="mt-4 text-[#888888] text-base md:text-lg max-w-2xl">{t.subtitle}</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                    {t.items.map((item, idx) => {
                        const s = services[idx];
                        if (!s) return null;
                        const Icon = s.icon;
                        return (
                            <motion.a
                                key={item.name}
                                href={BOOKING_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
                                className={`group relative flex flex-col rounded-2xl border p-6 md:p-7 transition-all duration-500 hover:-translate-y-1 ${s.bundle
                                    ? 'border-[#C8FF00]/50 bg-[#C8FF00]/[0.04] shadow-[0_0_40px_rgba(200,255,0,0.06)]'
                                    : 'border-[#1F1F1F] bg-[#0C0C0C] hover:border-[#C8FF00]/40'
                                    }`}
                            >
                                {s.bundle && (
                                    <span className="absolute top-5 end-5 rounded border border-[#C8FF00] bg-[#C8FF00] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[#080808]">
                                        {t.saveBadge}
                                    </span>
                                )}
                                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-[#1F1F1F] bg-[#111111] text-[#888888] transition-colors duration-300 group-hover:text-[#C8FF00]">
                                    <Icon size={22} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg md:text-xl font-semibold text-[#F5F5F5] tracking-[-0.02em]">{item.name}</h3>
                                <p className="mt-2 mb-8 text-[14px] leading-relaxed text-[#888888]">{item.description}</p>
                                <div className="mt-auto flex items-end justify-between gap-4">
                                    <div>
                                        {s.from && (
                                            <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#666666]">{t.fromLabel}</span>
                                        )}
                                        <span dir="ltr" className="text-3xl md:text-[34px] font-bold text-[#F5F5F5] tracking-[-0.03em]">{s.price}</span>
                                    </div>
                                    <ArrowUpRight size={20} className="mb-1.5 shrink-0 text-[#444444] transition-all duration-300 group-hover:text-[#C8FF00] rtl:-scale-x-100" />
                                </div>
                            </motion.a>
                        );
                    })}
                </div>

                <p className="mt-10 text-center text-[13px] text-[#666666] max-w-2xl mx-auto">{t.note}</p>
                <div className="mt-6 flex justify-center">
                    <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary h-14 px-8 text-[15px] inline-flex items-center justify-center"
                    >
                        {t.cta}
                    </a>
                </div>
            </div>
        </section>
    );
}
