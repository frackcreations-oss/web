'use client';

import { motion } from 'framer-motion';
import { Activity, Square, Zap } from 'lucide-react';

const benefits = [
    {
        icon: <Activity size={80} strokeWidth={1} className="text-[#C8FF00] drop-shadow-[0_0_25px_rgba(200,255,0,0.5)]" />,
        title: "Built to Perform",
        description: "Research-backed design that doesn't just look good — it does its job."
    },
    {
        icon: <Square size={80} strokeWidth={1} className="rotate-45 text-[#C8FF00] drop-shadow-[0_0_25px_rgba(200,255,0,0.5)]" />,
        title: "Premium Quality",
        description: "Obsessive attention to detail from senior designers. Your startup looks like it means business."
    },
    {
        icon: <Zap size={80} strokeWidth={1} className="text-[#C8FF00] drop-shadow-[0_0_25px_rgba(200,255,0,0.5)]" />,
        title: "Fast Delivery",
        description: "Most projects ship in 10-14 days. One team, no handoff gaps."
    }
];

export default function Benefits() {
    return (
        <section id="benefits" className="py-24 md:py-32 bg-[#080808] border-t border-[#1F1F1F]">
            <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-[44px] font-bold text-[#F5F5F5] tracking-tight leading-tight max-w-2xl">
                        Why Startups Choose Frack
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* CARD 1: Built to Perform */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="bg-[#0C0C0C] border border-[#1F1F1F] rounded-[24px] p-6 md:p-8 flex flex-col hover:bg-[#111] transition-colors duration-500 overflow-hidden relative"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#C8FF00] opacity-[0.03] blur-[50px] pointer-events-none" />

                        {/* Graphic Area */}
                        <div className="relative w-full h-[220px] mb-8 flex items-center justify-center">

                            {/* Analytics Overlay */}
                            <div className="absolute top-0 right-4 flex flex-col gap-1 z-20">
                                <div className="flex items-center gap-4 text-[10px] font-mono font-bold tracking-widest text-[#888888]">
                                    <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-[#C8FF00]" />TRAFFIC</div>
                                    <span className="text-[#C8FF00]">+20%</span>
                                </div>
                                <div className="flex items-center gap-4 text-[10px] font-mono font-bold tracking-widest text-[#666666]">
                                    <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-[#666666]" />CONV.</div>
                                    <span>+12%</span>
                                </div>
                            </div>

                            {/* Chart SVG */}
                            <svg className="absolute bottom-0 w-[120%] h-full -ml-[10%] opacity-90" viewBox="0 0 400 200" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#C8FF00" stopOpacity="0.2" />
                                        <stop offset="100%" stopColor="#C8FF00" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                {/* Background Line */}
                                <path d="M0 160 Q 40 160 80 130 T 160 140 T 240 110 T 320 120 T 400 90" fill="none" stroke="#333333" strokeWidth="1.5" />

                                {/* Foreground Line */}
                                <path d="M0 180 Q 50 170 80 140 T 160 80 L 170 50 L 190 70 L 220 50 T 320 70 T 400 60 L 400 200 L 0 200 Z" fill="url(#chartGlow)" />
                                <path d="M0 180 Q 50 170 80 140 T 160 80 L 170 50 L 190 70 L 220 50 T 320 70 T 400 60" fill="none" stroke="#C8FF00" strokeWidth="2" />

                                {/* Peak Data Point Node */}
                                <circle cx="170" cy="50" r="4" fill="#0C0C0C" stroke="#C8FF00" strokeWidth="2" />
                            </svg>
                        </div>

                        <div className="w-full text-left mt-auto z-10">
                            <h3 className="text-[22px] font-bold text-[#F5F5F5] tracking-tight mb-2">Built to Perform</h3>
                            <p className="text-[#888888] leading-relaxed text-[15px] font-medium">Research-backed design that doesn't just look good — it does its job.</p>
                        </div>
                    </motion.div>

                    {/* CARD 2: Premium Quality */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="bg-[#0C0C0C] border border-[#1F1F1F] rounded-[24px] p-6 md:p-8 flex flex-col hover:bg-[#111] transition-colors duration-500 overflow-hidden relative"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#C8FF00] opacity-[0.03] blur-[50px] pointer-events-none" />

                        {/* Graphic Area */}
                        <div className="relative w-full h-[220px] mb-8 flex items-center justify-center">

                            {/* Glowing Wireframe Diamond/Square */}
                            <div className="relative flex items-center justify-center w-[120px] h-[120px]">
                                {/* Outer blur/glow */}
                                <div className="absolute inset-0 bg-[#C8FF00] rounded-[1rem] rotate-45 opacity-40 blur-xl" />

                                {/* Core shape */}
                                <div className="absolute inset-0 border-2 border-[#C8FF00] rounded-[1rem] rotate-45 z-10 shadow-[0_0_15px_rgba(200,255,0,0.5)]" />
                                <div className="absolute inset-0 bg-transparent rounded-[1rem] rotate-45 z-20 border-[0.5px] border-white/20 scale-95" />

                                {/* Inner texture */}
                                <div className="absolute inset-0 bg-[#C8FF00]/10 rounded-[1rem] rotate-45 z-0" />
                            </div>
                        </div>

                        <div className="w-full text-left mt-auto z-10">
                            <h3 className="text-[22px] font-bold text-[#F5F5F5] tracking-tight mb-2">Premium Quality</h3>
                            <p className="text-[#888888] leading-relaxed text-[15px] font-medium">Obsessive attention to detail from senior designers. Your startup looks like it means business.</p>
                        </div>
                    </motion.div>

                    {/* CARD 3: Fast Delivery */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="bg-[#0C0C0C] border border-[#1F1F1F] rounded-[24px] p-6 md:p-8 flex flex-col hover:bg-[#111] transition-colors duration-500 overflow-hidden relative"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#C8FF00] opacity-[0.03] blur-[50px] pointer-events-none" />

                        {/* Graphic Area */}
                        <div className="relative w-full h-[220px] mb-8 flex flex-col items-center justify-center">

                            <div className="relative flex items-center justify-center w-[100px] h-[100px]">
                                {/* Speed/wind lines */}
                                <div className="absolute top-1/2 -translate-y-1/2 -left-16 w-12 h-[2px] bg-gradient-to-r from-transparent to-[#c8ff00]/40 rounded-full" />
                                <div className="absolute top-[30%] -left-10 w-6 h-[2px] bg-gradient-to-r from-transparent to-[#c8ff00]/20 rounded-full" />
                                <div className="absolute top-[70%] -left-12 w-8 h-[2px] bg-gradient-to-r from-transparent to-[#c8ff00]/30 rounded-full" />

                                <div className="absolute top-[40%] -right-12 w-10 h-[2px] bg-gradient-to-l from-transparent to-[#c8ff00]/40 rounded-full" />
                                <div className="absolute top-[60%] -right-8 w-6 h-[2px] bg-gradient-to-l from-transparent to-[#c8ff00]/20 rounded-full" />


                                {/* Lightning core */}
                                <div className="absolute inset-0 bg-[#C8FF00] rounded-full opacity-20 blur-xl" />
                                <Zap
                                    size={80}
                                    className="text-[#C8FF00] drop-shadow-[0_0_15px_rgba(200,255,0,0.6)] z-10"
                                    strokeWidth={1.5}
                                    fill="rgba(200, 255, 0, 0.1)"
                                />
                            </div>
                        </div>

                        <div className="w-full text-left mt-auto z-10">
                            <h3 className="text-[22px] font-bold text-[#F5F5F5] tracking-tight mb-2">Fast Delivery</h3>
                            <p className="text-[#888888] leading-relaxed text-[15px] font-medium">Most projects ship in 10-14 days. One team, no handoff gaps.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
