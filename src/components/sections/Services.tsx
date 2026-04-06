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
    Share2
} from 'lucide-react';

const specialities = [
    { name: "Product Design", icon: <Package size={28} strokeWidth={1.5} /> },
    { name: "UX & UI Design", icon: <Sun size={28} strokeWidth={1.5} /> },
    { name: "Design Systems", icon: <FlaskConical size={28} strokeWidth={1.5} /> },
    { name: "Functional Prototypes", icon: <Waypoints size={28} strokeWidth={1.5} /> },
    { name: "MVP Sprints", icon: <FastForward size={28} strokeWidth={1.5} /> },
    { name: "AI-Powered SEO", icon: <Search size={28} strokeWidth={1.5} /> },
];

const designOutputs = [
    { name: "Products", icon: <Cpu size={28} strokeWidth={1.5} /> },
    { name: "Web Apps", icon: <AppWindow size={28} strokeWidth={1.5} /> },
    { name: "Mobile Apps", icon: <Smartphone size={28} strokeWidth={1.5} /> },
    { name: "Websites + Brands", icon: <Palette size={28} strokeWidth={1.5} /> },
    { name: "Pitch Decks", icon: <Presentation size={28} strokeWidth={1.5} /> },
    { name: "Social Media Marketing", icon: <Share2 size={28} strokeWidth={1.5} /> },
];

export default function Services() {
    return (
        <section id="services" className="py-24 md:py-32 bg-[#080808] border-t border-[#1F1F1F]">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl">
                {/* Unified Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-2 mb-12 text-[#888888] text-[13px] font-mono tracking-[0.1em] uppercase"
                >
                    <span>We specialize & design</span>
                    <ArrowDownRight size={16} strokeWidth={2} />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <ul className="space-y-6">
                            {specialities.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-5 group cursor-default">
                                    <div className="text-[#888888] group-hover:text-[#C8FF00] transition-colors duration-300">
                                        {item.icon}
                                    </div>
                                    <span className="text-2xl md:text-[32px] font-medium text-[#F5F5F5] tracking-[-0.03em] group-hover:text-white transition-colors duration-300">
                                        {item.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <ul className="space-y-6">
                            {designOutputs.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-5 group cursor-default">
                                    <div className="text-[#888888] group-hover:text-[#C8FF00] transition-colors duration-300">
                                        {item.icon}
                                    </div>
                                    <span className="text-2xl md:text-[32px] font-medium text-[#F5F5F5] tracking-[-0.03em] group-hover:text-white transition-colors duration-300">
                                        {item.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
