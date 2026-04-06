'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "AI Dashboard",
        category: "Product Design",
        size: "col-span-1 md:col-span-2 h-[500px]"
    },
    {
        title: "EcoSmart App",
        category: "Mobile Design",
        size: "col-span-1 h-[600px] md:mt-24"
    },
    {
        title: "Nexus Branding",
        category: "Identity",
        size: "col-span-1 h-[450px]"
    },
    {
        title: "Lumina Web",
        category: "Development",
        size: "col-span-1 h-[550px] md:-mt-32"
    },
    {
        title: "Crypto Wallet",
        category: "Fintech",
        size: "col-span-1 h-[400px]"
    }
];

export default function Portfolio() {
    return (
        <section className="section-padding bg-[#080808] overflow-hidden py-32">
            <div className="container-px mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-8xl font-bold text-[#F5F5F5] tracking-[-0.03em] leading-none">
                            Selected <br /><span className="text-[#888888] font-normal">Works.</span>
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-right"
                    >
                        <p className="text-[#888888] text-xl font-medium max-w-xs ml-auto leading-relaxed">
                            A curated selection of brands we've helped scale to millions.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className={`${project.size} relative group overflow-hidden rounded-[2rem] card-premium flex flex-col cursor-pointer`}
                        >
                            {/* Inner dark gradient to simulate depth */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080808]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                            {/* Base Image Placeholder - Solid Surface */}
                            <div className="absolute inset-0 bg-[#0A0A0A] flex items-center justify-center">
                                {/* Abstract wireframe or pattern indication */}
                                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:24px_24px]" />
                            </div>

                            {/* Content Layer */}
                            <div className="relative z-20 flex flex-col justify-between h-full p-8 md:p-10">
                                <div className="flex justify-between items-start">
                                    <span className="inline-block px-3 py-1 rounded border border-[#1F1F1F] bg-[#0A0A0A]/50 text-[#888888] text-xs font-bold uppercase tracking-[0.15em] backdrop-blur-md">
                                        {project.category}
                                    </span>
                                    <div className="w-12 h-12 rounded-full border border-[#1F1F1F] bg-[#080808] text-[#F5F5F5] flex items-center justify-center -rotate-45 group-hover:bg-[#F5F5F5] group-hover:text-[#080808] transition-all duration-300">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>
                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <h3 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] tracking-[-0.03em]">{project.title}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <a
                        href="/work"
                        className="btn-ghost h-14 px-10 text-[15px]"
                    >
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    );
}
