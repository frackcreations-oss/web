'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, MessageSquare, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
    {
        type: "Retainer",
        badge: "Make it Faster",
        price: "$7199",
        billing: "per month",
        description: "Ideal for those who need an ongoing quick design support.",
        features: [
            "1 Active request at a time",
            "2X Senior designer",
            "Bi-weekly progress meetings",
            "Fast turnaround",
            "Unlimited design requests",
            "Daily 4 hours of work",
            "Expert project management",
            "Slack, Loom & Meetings",
            "Free Website with Framer"
        ],
        highlight: true
    },
    {
        type: "Landing Page Design",
        price: "$5149",
        billing: "one time",
        description: "Bring your dream website to life in just days, not months.",
        features: [
            "Wireframes",
            "Custom Layout",
            "Mobile Responsive Design",
            "Brand Consistency",
            "Figma File",
            "Updates every 48 hours",
            "2X Revision",
            "+$400 For Each Extra Page",
            "Website (Framer) +2k"
        ],
        highlight: false
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="section-padding bg-[#080808] relative">
            <div className="container-px mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-[#F5F5F5] tracking-[-0.03em]">No Contract, No Surprises</h2>
                    <p className="text-[#888888] text-lg max-w-2xl mx-auto">
                        Consistent pricing and value each month, with the flexibility to cancel anytime.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className={`relative p-8 md:p-12 rounded-[2rem] group transition-all duration-500 card-premium ${plan.highlight
                                ? "border-[#C8FF00] shadow-[0_0_30px_rgba(200,255,0,0.05)]"
                                : ""
                                }`}
                        >
                            {plan.badge && (
                                <span className="absolute top-8 right-8 bg-[#C8FF00] text-[#080808] text-[11px] font-bold px-3 py-1 rounded border border-[#C8FF00] tracking-[0.1em] uppercase">
                                    {plan.badge}
                                </span>
                            )}

                            <div className="mb-10">
                                <h3 className="text-2xl font-bold text-[#F5F5F5] mb-2 tracking-[-0.03em]">{plan.type}</h3>
                                <p className="text-[#888888] font-medium mb-10 min-h-[48px]">{plan.description}</p>
                                <div className="flex items-baseline gap-2 mb-10">
                                    <span className="text-6xl md:text-7xl font-bold text-[#F5F5F5] tracking-[-0.03em]">{plan.price}</span>
                                    <span className="text-[#444444] font-bold uppercase tracking-[0.15em] text-[11px]">{plan.billing}</span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-12">
                                {plan.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="flex gap-4 items-center">
                                        <div className="shrink-0 text-[#C8FF00]">
                                            <Check size={16} strokeWidth={3} />
                                        </div>
                                        <span className="text-[#888888] font-medium text-[15px]">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-4">
                                <a
                                    href="https://calendly.com/frack"
                                    className={`btn-primary w-full h-14 text-[15px]`}
                                >
                                    Book a Call
                                </a>
                                <a
                                    href="https://t.me/frack"
                                    className="btn-secondary w-full h-14 text-[15px]"
                                >
                                    Connect on Telegram
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
