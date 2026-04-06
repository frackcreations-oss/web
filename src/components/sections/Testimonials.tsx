'use client';

import { motion } from 'framer-motion';

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
                        Selected Testimonials
                    </div>
                    <h2 className="text-3xl md:text-[44px] font-bold text-[#F5F5F5] tracking-tight leading-tight max-w-2xl">
                        Talk is cheap, results on the other hand...
                    </h2>
                </motion.div>

                {/* CSS Columns (Masonry effect) */}
                <div className="relative max-h-[600px] md:max-h-[800px] overflow-hidden pb-10">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
                        {testimonials.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                                viewport={{ once: true }}
                                className="break-inside-avoid bg-transparent border border-[#1F1F1F] rounded-2xl p-8 flex flex-col gap-6 hover:bg-[#0C0C0C] transition-colors duration-300 w-full mb-6 inline-block"
                            >
                                {/* Author Row */}
                                <div className="flex items-center gap-4">
                                    <img src={item.image} alt={item.name} className="w-8 h-8 rounded-full grayscale opacity-80" />
                                    <span className="text-[#888888] text-[12px] font-bold tracking-[0.05em] uppercase">
                                        {item.name}
                                    </span>
                                </div>

                                {/* Quote */}
                                <p className="text-[#F5F5F5] text-[15.5px] leading-[1.65] font-medium">
                                    {item.quote}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Endless Fade Out Effect */}
                    <div className="absolute bottom-0 left-0 w-full h-48 md:h-64 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
