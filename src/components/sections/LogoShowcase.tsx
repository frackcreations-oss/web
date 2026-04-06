'use client';

import { motion } from 'framer-motion';

const logos = [
    "Acme Corp", "TechFlow", "GlobalAI", "Nexus", "Visionary", "Summit", "Prime"
];

export default function LogoShowcase() {
    return (
        <div className="py-12 bg-bg-light overflow-hidden border-y border-black/5">
            <div className="flex relative items-center">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25,
                            ease: "linear"
                        }
                    }}
                    className="flex gap-20 items-center whitespace-nowrap"
                >
                    {[...logos, ...logos, ...logos].map((logo, idx) => (
                        <span
                            key={idx}
                            className="text-2xl font-bold text-black/20 hover:text-accent transition-all duration-300 cursor-default uppercase tracking-widest"
                        >
                            {logo}
                        </span>
                    ))}
                </motion.div>

                {/* Gradient Blur */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-bg-light to-transparent z-10" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-bg-light to-transparent z-10" />
            </div>
        </div>
    );
}
