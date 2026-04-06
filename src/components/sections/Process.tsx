'use client';

import { motion } from 'framer-motion';
import { Clock, Search, Paintbrush, Globe, ChevronRight, Code } from 'lucide-react';

export default function Process() {
    return (
        <section id="process" className="py-24 md:py-32 bg-[#080808]">
            <div className="container mx-auto px-6 md:px-8 max-w-[1400px]">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-[44px] font-bold text-[#F5F5F5] tracking-tight leading-tight max-w-2xl">
                        How simple it can be
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* CARD 1: Onboarding */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-[#0C0C0C] border border-[#1F1F1F] rounded-[24px] p-6 md:p-8 flex flex-col hover:bg-[#111] transition-colors duration-500 overflow-hidden"
                    >
                        <div className="flex items-center gap-2 mb-8 px-3 py-1.5 w-fit rounded-full bg-[#1A1A1A] border border-[#2A2A2A]">
                            <Clock size={12} className="text-[#888888]" />
                            <span className="text-[#888888] text-[10px] font-mono tracking-widest font-bold">~ 10 MINUTES</span>
                        </div>

                        {/* Graphic Area */}
                        <div className="relative w-full h-[220px] mb-8 flex items-center justify-center">
                            {/* Stacked input boxes effect */}
                            <div className="relative w-full max-w-[280px]">
                                {/* Back box */}
                                <div className="absolute top-[-35px] left-[30px] w-[80%] h-12 bg-[#111111] border border-[#1F1F1F] rounded-lg rotate-[-8deg] opacity-20 flex items-center px-4">
                                    <span className="text-[#666666] text-[10px] truncate">Who is your target audience?</span>
                                </div>
                                {/* Middle box */}
                                <div className="absolute top-[-15px] left-[15px] w-[90%] h-12 bg-[#111111] border border-[#222222] rounded-lg rotate-[-4deg] opacity-60 flex items-center px-4">
                                    <span className="text-[#888888] text-[11px] truncate">Do you have a brand guide?</span>
                                </div>
                                {/* Front box */}
                                <div className="relative w-full h-12 bg-[#161616] border border-[#333333] rounded-lg flex items-center px-4 shadow-2xl z-10 overflow-hidden transform translate-z-0">
                                    <div className="absolute left-0 top-0 w-[3px] h-full bg-[#C8FF00] shadow-[0_0_15px_rgba(200,255,0,0.8)]" />
                                    <span className="text-[#F5F5F5] text-[12px] font-medium ml-2">What does your company do in one sentence?</span>
                                </div>
                                {/* Ambient Glow */}
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-48 h-20 bg-[#C8FF00] opacity-[0.06] blur-[40px] pointer-events-none" />
                            </div>
                        </div>

                        {/* Info Area */}
                        <div className="mt-auto">
                            <h3 className="text-[22px] font-bold text-[#F5F5F5] tracking-tight mb-2">1. Onboarding</h3>
                            <p className="text-[#888888] text-[15px] leading-relaxed font-medium">
                                A few questions about your goals, timeline, and assets.
                            </p>
                        </div>
                    </motion.div>

                    {/* CARD 2: Research & Design */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-[#0C0C0C] border border-[#1F1F1F] rounded-[24px] p-6 md:p-8 flex flex-col hover:bg-[#111] transition-colors duration-500 overflow-hidden"
                    >
                        <div className="flex items-center gap-2 mb-8 px-3 py-1.5 w-fit rounded-full bg-[#1A1A1A] border border-[#2A2A2A]">
                            <Clock size={12} className="text-[#888888]" />
                            <span className="text-[#888888] text-[10px] font-mono tracking-widest font-bold">~ 10-12 DAYS</span>
                        </div>

                        {/* Graphic Area */}
                        <div className="relative w-full h-[220px] mb-8 flex items-center justify-center">
                            {/* Wireframe Circle */}
                            <div className="relative w-[140px] h-[140px] rounded-full border-[1.5px] border-[#C8FF00]/50 flex items-center justify-center">
                                {/* Crosshair lines */}
                                <div className="absolute w-[140%] h-[1.5px] bg-gradient-to-r from-transparent via-[#C8FF00]/40 to-transparent border-dashed" style={{ backgroundImage: "linear-gradient(to right, transparent 50%, rgba(200,255,0,0.4) 50%)", backgroundSize: "10px 100%" }} />
                                <div className="absolute h-[140%] w-[1.5px] bg-gradient-to-b from-transparent via-[#C8FF00]/40 to-transparent border-dashed" style={{ backgroundImage: "linear-gradient(to bottom, transparent 50%, rgba(200,255,0,0.4) 50%)", backgroundSize: "100% 10px" }} />

                                {/* Anchor Points */}
                                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#C8FF00]" />
                                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#C8FF00]" />
                                <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 rounded-full bg-[#C8FF00]" />
                                <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 rounded-full bg-[#C8FF00]" />

                                {/* Center Anchor */}
                                <div className="w-1.5 h-1.5 border border-[#C8FF00] rotate-45" />

                                {/* Pen Cursor */}
                                <div className="absolute -bottom-4 -left-4 w-[28px] h-[28px] bg-white border-2 border-white rounded-[2px] shadow-lg flex items-center justify-center rotate-[-15deg] z-20">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="black" stroke="black" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /></svg>
                                </div>
                            </div>

                            {/* Dropdown Box */}
                            <div className="absolute top-4 right-2 md:-right-4 w-[170px] rounded-lg overflow-hidden border border-[#2A2A2A] shadow-2xl bg-[#111111] z-30">
                                <div className="flex items-center justify-between px-3 py-2.5 border-b border-[#2A2A2A]">
                                    <div className="flex items-center gap-2">
                                        <Search size={11} className="text-[#888888] font-bold" />
                                        <span className="text-[#888888] text-[9.5px] font-bold tracking-[0.05em] uppercase">Research</span>
                                    </div>
                                    <span className="text-[#888888] text-[9.5px] font-bold tracking-widest uppercase">Done</span>
                                </div>
                                <div className="flex items-center justify-between px-3 py-2.5 border-b border-[#2A2A2A]">
                                    <div className="flex items-center gap-2">
                                        <Paintbrush size={11} className="text-[#888888] font-bold" />
                                        <span className="text-[#888888] text-[9.5px] font-bold tracking-[0.05em] uppercase">Design</span>
                                    </div>
                                    <span className="text-[#888888] text-[9.5px] font-bold tracking-widest uppercase text-right">Done</span>
                                </div>
                                <div className="flex items-center justify-between px-3 py-2.5 bg-[#C8FF00]">
                                    <div className="flex items-center gap-2">
                                        <Code size={11} className="text-black font-bold" />
                                        <span className="text-black text-[9.5px] font-bold tracking-[0.05em] uppercase">Develop</span>
                                    </div>
                                    <span className="text-black text-[9.5px] font-bold tracking-widest uppercase text-right">In Progress</span>
                                </div>
                            </div>
                        </div>

                        {/* Info Area */}
                        <div className="mt-auto">
                            <h3 className="text-[20px] lg:text-[22px] font-bold text-[#F5F5F5] tracking-tight mb-2">2. Research, Design & Develop</h3>
                            <p className="text-[#888888] text-[15px] leading-relaxed font-medium">
                                We study your market, audience, and competitors. Then design and develop.
                            </p>
                        </div>
                    </motion.div>

                    {/* CARD 3: Launch */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-[#0C0C0C] border border-[#1F1F1F] rounded-[24px] p-6 md:p-8 flex flex-col hover:bg-[#111] transition-colors duration-500 overflow-hidden relative"
                    >
                        <div className="flex items-center gap-2 mb-8 px-3 py-1.5 w-fit rounded-full bg-[#1A1A1A] border border-[#2A2A2A]">
                            <Clock size={12} className="text-[#888888]" />
                            <span className="text-[#888888] text-[10px] font-mono tracking-widest font-bold">~ 1-2 DAYS</span>
                        </div>

                        {/* Graphic Area */}
                        <div className="relative w-full h-[220px] mb-8 flex items-center justify-center md:px-4">

                            {/* Folder Source */}
                            <div className="relative z-10 w-[85px] h-[65px] bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl rounded-tl-none flex items-center justify-center shadow-xl">
                                <div className="absolute top-[-8px] left-[-1px] w-[35px] h-[8px] bg-[#1A1A1A] border-t border-l border-r border-[#2A2A2A] rounded-t-[4px]" />
                                <span className="text-[#666666] text-[10.5px] font-bold tracking-[0.1em] uppercase">Project</span>
                            </div>

                            {/* Magic Arrows Array */}
                            <div className="flex flex-1 items-center justify-center relative mx-1">
                                <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-[#C8FF00]/30 to-transparent top-1/2 -translate-y-1/2" />
                                <div className="flex z-10 items-center justify-center w-full">
                                    <ChevronRight size={24} className="text-[#C8FF00] drop-shadow-[0_0_8px_rgba(200,255,0,0.8)] -ml-1" strokeWidth={3} />
                                    <ChevronRight size={24} className="text-[#C8FF00] drop-shadow-[0_0_8px_rgba(200,255,0,0.8)] -ml-4" strokeWidth={3} />
                                    <ChevronRight size={24} className="text-[#C8FF00] drop-shadow-[0_0_8px_rgba(200,255,0,0.8)] -ml-4" strokeWidth={3} />
                                    <ChevronRight size={24} className="text-[#C8FF00]/50 -ml-4" strokeWidth={3} />
                                </div>
                            </div>

                            {/* Folder Target */}
                            <div className="relative z-10 w-[95px] h-[75px] bg-[#161A10] border border-[#C8FF00]/30 rounded-xl rounded-tl-none flex items-center justify-center shadow-[0_0_40px_rgba(200,255,0,0.15)]">
                                <div className="absolute top-[-10px] left-[-1px] w-[40px] h-[10px] bg-[#161A10] border-t border-l border-r border-[#C8FF00]/30 rounded-t-[4px]" />
                                <Globe size={28} className="text-[#888888]" strokeWidth={1.5} />
                            </div>
                        </div>

                        {/* Info Area */}
                        <div className="mt-auto relative z-10">
                            <h3 className="text-[22px] font-bold text-[#F5F5F5] tracking-tight mb-2">3. Launch</h3>
                            <p className="text-[#888888] text-[15px] leading-relaxed font-medium">
                                You receive all files and assets. We handle handoff and launch.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
