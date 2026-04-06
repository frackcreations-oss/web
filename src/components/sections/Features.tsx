'use client';

import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Infinity, Sparkles, Users, RefreshCw } from 'lucide-react';

const features = [
    {
        title: "Rapid Prototyping",
        desc: "From idea to working prototype in days, not weeks. Validate fast.",
        icon: Zap,
        gradient: "from-amber-400 to-orange-500"
    },
    {
        title: "Tested & Validated Designs",
        desc: "User-tested solutions that are proven to drive results and engagement.",
        icon: ShieldCheck,
        gradient: "from-green-400 to-emerald-500"
    },
    {
        title: "Seamless Handoff",
        desc: "Developer-ready files with complete documentation and assets.",
        icon: Infinity,
        gradient: "from-blue-400 to-indigo-500"
    },
    {
        title: "AI-First Approach",
        desc: "Leveraging cutting-edge AI tools to enhance creativity and efficiency.",
        icon: Sparkles,
        gradient: "from-purple-400 to-pink-500"
    },
    {
        title: "Dedicated Team",
        desc: "Expert designers and strategists focused entirely on your success.",
        icon: Users,
        gradient: "from-rose-400 to-red-500"
    },
    {
        title: "Agile Process",
        desc: "Flexible, iterative development cycles that adapt to your needs.",
        icon: RefreshCw,
        gradient: "from-cyan-400 to-teal-500"
    },
];

export default function Features() {
    return (
        <section id="features" className="py-32 bg-secondary-bg relative">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Delivering Excellence: <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-pink">
                            Features & Benefits
                        </span>
                    </motion.h2>
                    <p className="text-text-secondary text-lg">
                        Built for speed, quality, and scalability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className="text-white w-6 h-6" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-purple transition-colors">
                                {feature.title}
                            </h3>

                            <p className="text-text-secondary leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
