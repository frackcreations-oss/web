'use client';

import { motion } from 'framer-motion';
import { useDictionary } from '@/context/LocaleContext';

const testimonials = [
    {
        name: "CHRIS @ ODOWN",
        image: "https://i.pravatar.cc/150?u=1",
        quote: "Frack and the team took our loose brand guidelines and built something from the ground up, delivering a total redesign with strong foundations we can confidently take forward."
    },
    {
        name: "TY FRANKEL",
        image: "https://i.pravatar.cc/150?u=2",
        quote: "He's one of the most talented people that I've ever met, that I've ever worked with in the web dev space, by far."
    },
    {
        name: "CHRIS (REVGROWTH.AI)",
        image: "https://i.pravatar.cc/150?u=3",
        quote: "The final result has been incredible. The best landing page we've had so far. Any changes we wanted were immediately implemented exactly how we envisioned."
    },
    {
        name: "RYAN BRYDEN (BREAKOUT CAPITAL)",
        image: "https://i.pravatar.cc/150?u=4",
        quote: "He took my vision and brought it to life insanely well, adding his own sauce that I truly appreciated. Extremely timely. Worked through every detail and iteration."
    },
    {
        name: "FELIX SUEN",
        image: "https://i.pravatar.cc/150?u=5",
        quote: "Incredibly responsive, they've delivered on time, and they've got a lot of creative talent. I recommend them to anyone who's looking to build a brand."
    },
    {
        name: "GEORGE WERT (DESIGNSPO)",
        image: "https://i.pravatar.cc/150?u=6",
        quote: "I loved working with Frack. They did a fantastic job with the hero section of DesignSpo.co. I highly recommend them."
    },
    {
        name: "LEO",
        image: "https://i.pravatar.cc/150?u=7",
        quote: "Frack transformed my boring landing page into a really great banger. He made every revision until I was 100% satisfied. Truly cares about the client's success."
    },
    {
        name: "VLADIMIR",
        image: "https://i.pravatar.cc/150?u=8",
        quote: "The landing page now runs way smoother. You click the link and it loads instantly, fixing the issues that cost me leads."
    },
    {
        name: "DR. SANGEETHSIVAN @ ARDHANN",
        image: "https://i.pravatar.cc/150?u=9",
        quote: "Frack designed a pitch deck for my company. I really love the approach. It was very well thought out, very well designed. Definitely recommend it to other people."
    }
];

export default function Testimonials() {
    const dict = useDictionary();

    return (
        <section id="testimonials" className="py-24 md:py-32 bg-[#080808]">
            <div className="container mx-auto px-6 md:px-8 max-w-[1400px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-16 md:mb-24"
                >
                    <div className="mb-6 px-4 py-1.5 rounded-md bg-[#111111] border border-[#1F1F1F] text-[#888888] text-[11px] font-bold tracking-[0.1em] uppercase">
                        {dict.testimonials.badge}
                    </div>
                    <h2 className="text-3xl md:text-[44px] font-bold text-[#F5F5F5] tracking-tight leading-tight max-w-2xl">
                        {dict.testimonials.title}
                    </h2>
                </motion.div>

                {/* 3D tilted marquee: rows drift in opposite directions on a tilted plane */}
                <div className="testi-stage relative -mx-6 md:mx-0 h-[520px] md:h-[640px] overflow-hidden">
                    <div className="testi-plane absolute left-1/2 top-1/2 flex w-[180%] md:w-[150%] flex-col gap-5 md:gap-6">
                        {[0, 1, 2].map((row) => {
                            const items = testimonials.filter((_, i) => i % 3 === row);
                            const loop = [...items, ...items, ...items, ...items];
                            return (
                                <div key={row} className={`testi-row flex w-max gap-5 md:gap-6 ${row % 2 ? 'testi-rev' : ''}`} style={{ animationDuration: `${46 + row * 8}s` }}>
                                    {loop.map((item, idx) => (
                                        <figure
                                            key={idx}
                                            className="group w-[280px] md:w-[380px] shrink-0 rounded-2xl border border-[#1F1F1F] bg-[#0C0C0C]/90 p-6 md:p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#C8FF00]/40 hover:shadow-[0_20px_60px_-20px_rgba(200,255,0,0.25)]"
                                        >
                                            <div className="mb-4 flex items-center gap-3">
                                                <img src={item.image} alt={item.name} className="h-8 w-8 rounded-full grayscale opacity-80 transition group-hover:grayscale-0 group-hover:opacity-100" />
                                                <figcaption className="text-[#888888] text-[11px] md:text-[12px] font-bold tracking-[0.05em] uppercase">
                                                    {item.name}
                                                </figcaption>
                                            </div>
                                            <blockquote className="text-[#F5F5F5] text-[14px] md:text-[15.5px] leading-[1.6] font-medium">
                                                {item.quote}
                                            </blockquote>
                                        </figure>
                                    ))}
                                </div>
                            );
                        })}
                    </div>

                    {/* Edge fades */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#080808] to-transparent" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080808] to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-[#080808] to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-[#080808] to-transparent" />
                </div>
            </div>
        </section>
    );
}
