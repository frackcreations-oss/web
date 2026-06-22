'use client';

import { motion } from 'framer-motion';
import {
    ArrowDownRight,
    Package,
    Sun,
    FlaskConical,
    Waypoints,
    FastForward,
    Cpu,
    AppWindow,
    Smartphone,
    Palette,
    Presentation,
    Search,
    Share2,
    MessageCircle,
    Bot,
    Globe2,
    Sparkles,
} from 'lucide-react';
import { useDictionary } from '@/context/LocaleContext';

const specialityIcons = [
    Package, Sun, FlaskConical, Waypoints, FastForward, Search, MessageCircle, Bot,
];
const outputIcons = [
    Cpu, AppWindow, Smartphone, Palette, Presentation, Share2, Globe2, Sparkles,
];

export default function Services() {
    const dict = useDictionary();

    return (
        <section id="services" className="py-24 md:py-32 bg-[#080808] border-t border-[#1F1F1F]">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-2 mb-12 text-[#888888] text-[13px] font-mono tracking-[0.1em] uppercase"
                >
                    <span>{dict.services.eyebrow}</span>
                    <ArrowDownRight size={16} strokeWidth={2} />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <ul className="space-y-6">
                            {dict.services.specialities.map((name, idx) => {
                                const Icon = specialityIcons[idx];
                                return (
                                    <li key={name} className="flex items-center gap-5 group cursor-default">
                                        <div className="text-[#888888] group-hover:text-[#C8FF00] transition-colors duration-300">
                                            <Icon size={28} strokeWidth={1.5} />
                                        </div>
                                        <span className="text-2xl md:text-[32px] font-medium text-[#F5F5F5] tracking-[-0.03em] group-hover:text-white transition-colors duration-300">
                                            {name}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <ul className="space-y-6">
                            {dict.services.outputs.map((name, idx) => {
                                const Icon = outputIcons[idx];
                                return (
                                    <li key={name} className="flex items-center gap-5 group cursor-default">
                                        <div className="text-[#888888] group-hover:text-[#C8FF00] transition-colors duration-300">
                                            <Icon size={28} strokeWidth={1.5} />
                                        </div>
                                        <span className="text-2xl md:text-[32px] font-medium text-[#F5F5F5] tracking-[-0.03em] group-hover:text-white transition-colors duration-300">
                                            {name}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
