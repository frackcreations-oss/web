'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const clocks = [
    {
        city: "New York, USA",
        timezone: "America/New_York",
        message: "Best time to get your website online"
    },
    {
        city: "London, UK",
        timezone: "Europe/London",
        message: "Perfect for brand strategy calls"
    },
    {
        city: "Dubai, UAE",
        timezone: "Asia/Dubai",
        message: "Best time to get your brand design"
    },
    {
        city: "Tokyo, Japan",
        timezone: "Asia/Tokyo",
        message: "Ideal for AI development kickoffs"
    }
];

const ClockCard = ({ city, timezone, message }: { city: string, timezone: string, message: string }) => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', {
                timeZone: timezone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            }));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, [timezone]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-10 rounded-[2.5rem] bg-[#111111] border border-white/5 text-center group hover:bg-[#1A1A1A] transition-all duration-500"
        >
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                {city}
            </p>
            <div className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter tabular-nums">
                {time || "00:00:00 AM"}
            </div>
            <p className="text-white/40 text-sm italic">{message}</p>
        </motion.div>
    );
};

export default function WorldClock() {
    return (
        <section className="section-padding bg-bg-dark border-t border-white/5 overflow-hidden">
            <div className="container-px mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {clocks.map((clock, idx) => (
                        <ClockCard key={idx} {...clock} />
                    ))}
                </div>
            </div>
        </section>
    );
}
