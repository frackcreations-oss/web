'use client';

import { motion } from 'framer-motion';

export default function QuoteSection() {
    return (
        <section className="bg-gradient-primary relative overflow-hidden flex items-center justify-center section-padding min-h-[50vh]">
            {/* Decorative Orbs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="container-px relative z-10 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <div className="space-y-4">
                        <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-tight tracking-tighter">
                            Brand is not what you say,
                        </h2>
                        <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-tight tracking-tighter text-white/60 italic">
                            It is what they say.
                        </h2>
                    </div>

                    <div className="pt-8">
                        <p className="text-xl md:text-2xl font-medium tracking-widest uppercase opacity-80">
                            — Marty Neumeier
                        </p>
                        <motion.a
                            href="#pricing"
                            whileHover={{ x: 10 }}
                            className="inline-block mt-8 text-lg font-bold border-b-2 border-white/40 pb-1 hover:border-white transition-all cursor-pointer"
                        >
                            and they say what they see! →
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
