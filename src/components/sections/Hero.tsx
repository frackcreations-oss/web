'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import dynamic from 'next/dynamic';

const HeroCanvas = dynamic(() => import('@/components/ui/HeroCanvas'), { ssr: false });



export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-[#080808]">
            {/* Embedded Three.js Background Component */}
            <div className="absolute inset-0 w-full h-full z-0 opacity-60 pointer-events-none">
                <HeroCanvas />
            </div>

            {/* Background Texture & Strict Glow */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <div className="absolute inset-0 bg-[#080808]/50 backdrop-blur-[100px]" />
                <div className="absolute w-[800px] h-[800px] bg-[#ffffff] opacity-[0.02] blur-[150px] rounded-full mix-blend-screen" />
            </div>

            <div className="container-px relative z-10 flex flex-col items-center text-center mt-6">

                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-10"
                >
                    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-[#111111]/80 backdrop-blur-xl shadow-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00] animate-pulse shadow-[0_0_8px_rgba(200,255,0,0.6)]" />
                        <span className="text-[12px] font-semibold tracking-widest text-[#F5F5F5] uppercase">Available for New Projects</span>
                    </div>
                </motion.div>

                {/* Main Headline */}
                <div className="mb-8 max-w-5xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-[clamp(2.5rem,8vw,5.5rem)] font-bold tracking-[-0.04em] leading-[1.05]"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] to-[#888888]">
                            Design that Ships. <br /> Software that Scales.
                        </span>
                    </motion.h1>
                </div>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="max-w-2xl text-lg md:text-xl text-[#888888] mb-12 font-medium tracking-tight leading-relaxed"
                >
                    Ship-fast design team that obsesses over the tiny details that move the needle. Unified, premium, and fast. Led by research.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center gap-4 mb-32"
                >
                    <a
                        href="#booking"
                        className="btn-primary h-14 px-8 text-[15px]"
                    >
                        Book Intro Call
                    </a>
                    <a
                        href="#portfolio"
                        className="btn-ghost h-14 px-8 text-[15px]"
                    >
                        Our Work
                    </a>
                </motion.div>

                {/* Stats Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col w-full border-t border-[#1F1F1F] pt-12 pb-10"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full text-center md:text-left">
                        <div className="flex flex-col gap-2 group cursor-default">
                            <span className="text-[#888888] text-[15px] font-medium group-hover:text-white transition-colors duration-300">Helped startups</span>
                            <span className="text-5xl font-medium tracking-tight text-[#F5F5F5]">50+</span>
                        </div>
                        <div className="flex flex-col gap-2 group cursor-default">
                            <span className="text-[#888888] text-[15px] font-medium group-hover:text-white transition-colors duration-300">Raised by clients</span>
                            <span className="text-5xl font-medium tracking-tight text-[#F5F5F5]">3M+</span>
                        </div>
                        <div className="flex flex-col gap-2 group cursor-default">
                            <span className="text-[#888888] text-[15px] font-medium group-hover:text-white transition-colors duration-300">Reached users</span>
                            <span className="text-5xl font-medium tracking-tight text-[#F5F5F5]">24M+</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
