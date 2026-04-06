'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';

const CTACanvas = dynamic(() => import('@/components/ui/CTACanvas'), { ssr: false });

export default function CTA() {
    return (
        <section className="section-padding bg-[#080808] overflow-hidden relative">
            <div className="container-px mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-[3rem] bg-[#111111] border border-[#1F1F1F] p-12 md:p-24 text-center"
                >
                    {/* Decorative background blur and 3D Canvas */}
                    <CTACanvas />
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8FF00] opacity-[0.03] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none mix-blend-screen" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C8FF00] opacity-[0.02] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none mix-blend-screen" />

                    <div className="relative z-10 space-y-10">
                        <h2 className="text-4xl md:text-7xl font-bold text-[#F5F5F5] tracking-[-0.03em] leading-[1.05] max-w-4xl mx-auto">
                            Elevate your brand with intelligent design systems.
                        </h2>

                        <div className="flex flex-col items-center gap-6 mt-8">
                            <a
                                href="#pricing"
                                className="btn-primary h-16 px-10 text-[16px] group"
                            >
                                View Plans and Pricing
                            </a>
                            <p className="text-[#444444] font-bold uppercase tracking-[0.15em] text-xs">
                                Limited Slots Available
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
