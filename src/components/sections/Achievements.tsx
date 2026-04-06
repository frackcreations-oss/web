'use client';

import { motion } from 'framer-motion';
import { Trophy, Zap, CircleDollarSign } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const stats = [
    {
        icon: <Trophy className="text-accent" size={32} />,
        number: 95,
        suffix: "+",
        label: "Brands Served",
        description: "Helping businesses across various industries achieve their goals"
    },
    {
        icon: <Zap className="text-accent" size={32} />,
        number: 8,
        suffix: " Years",
        label: "Years of Experience",
        description: "Bringing seasoned expertise to every project"
    },
    {
        icon: <CircleDollarSign className="text-accent" size={32} />,
        number: 100000,
        prefix: "$",
        suffix: "+",
        label: "Saved for Brands",
        description: "so they can reinvest where it matters the most"
    }
];

const tickerItems = [
    "Mobile App Design", "Webflow Development", "Framer Development",
    "Social Media Posts", "Web Designs", "Pitch Decks",
    "Email Designs", "Branding", "Copywriting",
    "Logos", "Landing pages", "Video & Motion Graphics", "Creative Strategy"
];

const CountUp = ({ end, prefix = "", suffix = "" }: { end: number, prefix?: string, suffix?: string }) => {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);

    useEffect(() => {
        let startTime: number;
        const duration = 2000; // 2 seconds

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                requestAnimationFrame(animate);
            }
        }, { threshold: 0.1 });

        if (nodeRef.current) observer.observe(nodeRef.current);

        return () => observer.disconnect();
    }, [end]);

    return <span ref={nodeRef}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

export default function Achievements() {
    return (
        <section className="section-padding bg-white relative">
            <div className="container-px mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter">Our Achievement</h2>
                        <p className="text-black/50 text-lg max-w-2xl mx-auto">
                            Curious about what we&apos;ve accomplished? Let our track record speak for itself.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="group p-10 bg-white border border-black/5 rounded-[2.5rem] shadow-[0_10px_50px_rgba(0,0,0,0.05)] hover:-translate-y-3 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
                        >
                            <div className="mb-8 w-16 h-16 rounded-2xl bg-accent/5 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                {stat.icon}
                            </div>
                            <p className="text-5xl font-black text-black mb-2 tracking-tighter">
                                <CountUp end={stat.number} prefix={stat.prefix} suffix={stat.suffix} />
                            </p>
                            <p className="text-xl font-bold text-black mb-4">{stat.label}</p>
                            <p className="text-black/40 leading-relaxed leading-relaxed">{stat.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Services Ticker */}
            <div className="bg-accent/5 py-8 border-y border-accent/10 -rotate-1 origin-center scale-105">
                <motion.div
                    animate={{ x: [0, -1500] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear"
                        }
                    }}
                    className="flex gap-16 items-center whitespace-nowrap"
                >
                    {[...tickerItems, ...tickerItems].map((item, idx) => (
                        <span
                            key={idx}
                            className="text-2xl font-bold text-accent italic uppercase tracking-tight flex items-center gap-4"
                        >
                            <span className="w-2 h-2 rounded-full bg-accent" />
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
