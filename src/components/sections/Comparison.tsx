'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import Image from 'next/image';

const rows = [
    {
        feature: "Cost",
        frack: { text: "$", check: true },
        fulltime: { text: "$$$$ (High Overhead)", check: false },
        agencies: { text: "$$", check: false }
    },
    {
        feature: "Senior Designer & Developer",
        frack: { text: "Guaranteed", check: true },
        fulltime: { text: "Hopefully", check: false },
        agencies: { text: "Maybe", check: false }
    },
    {
        feature: "Turnaround Time",
        frack: { text: "48 hours for most projects", check: true },
        fulltime: { text: "Can take weeks due to other tasks", check: false },
        agencies: { text: "Weeks, depending on workload", check: false }
    },
    {
        feature: "Start Time",
        frack: { text: "Today itself", check: true },
        fulltime: { text: "Weeks to onboard and train", check: false },
        agencies: { text: "Days to set up agreements", check: false }
    },
    {
        feature: "Unlimited Revisions",
        frack: { text: "Yes, we keep working until it's perfect", check: true },
        fulltime: { text: "Limited, with extra time constraints", check: false },
        agencies: { text: "Limited revisions per project", check: false }
    },

    {
        feature: "Scalability",
        frack: { text: "Scale up or down with ease", check: true },
        fulltime: { text: "Possible", check: true },
        agencies: { text: "Limited by freelancer's capacity", check: false }
    },
    {
        feature: "Flexibility",
        frack: { text: "Pause or adjust your subscription anytime", check: true },
        fulltime: { text: "Locked into salaries and benefits", check: false },
        agencies: { text: "Inflexible, project-based", check: false }
    }
];

export default function Comparison() {
    return (
        <section id="comparison" className="py-24 md:py-32 bg-[#080808]">
            <div className="container mx-auto px-6 md:px-8 max-w-[1200px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <h2 className="text-4xl md:text-[52px] font-bold text-[#F5F5F5] tracking-tight leading-tight mb-4">
                        Why choose us?
                    </h2>
                    <p className="text-[#888888] text-[17px] font-medium max-w-2xl">
                        Check out what Frack offers Vs employees and other agencies. It's quite a lot!
                    </p>
                </motion.div>

                <div className="bg-[#0C0C0C] border border-[#1F1F1F] rounded-[32px] p-4 md:p-10 shadow-2xl overflow-x-auto">
                    <table className="w-full min-w-[900px] border-collapse">
                        <thead>
                            <tr>
                                <th className="w-[20%] p-6"></th>
                                <th className="w-[26%] p-6 text-left align-bottom pb-6">
                                    <div className="flex flex-col items-center justify-center gap-1 w-fit">
                                        <img
                                            src="/assets/logow.png"
                                            alt="Frack Logo"
                                            className="h-[40px] w-auto object-contain brightness-0 invert"
                                        />
                                    </div>
                                </th>
                                <th className="w-[26%] p-6 text-left align-bottom pb-8">
                                    <span className="text-[17px] font-bold text-[#F5F5F5]">Full-time Hire</span>
                                </th>
                                <th className="w-[26%] p-6 text-left align-bottom pb-8">
                                    <span className="text-[17px] font-bold text-[#F5F5F5]">Other agencies</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, idx) => (
                                <tr key={idx} className="border-b border-[#1F1F1F] last:border-0 hover:bg-[#111] transition-colors duration-300">
                                    {/* Feature Column */}
                                    <td className={`p-6 bg-[#161616] text-[15px] font-medium text-[#F5F5F5] transition-colors duration-300 ${idx === 0 ? 'rounded-tl-2xl' : ''} ${idx === rows.length - 1 ? 'rounded-bl-2xl' : ''}`}>
                                        {row.feature}
                                    </td>

                                    {/* Frack Column */}
                                    <td className="p-6">
                                        <div className="flex items-start gap-3">
                                            {row.frack.check ?
                                                <Check size={18} className="text-[#C8FF00] shrink-0 mt-0.5" strokeWidth={3} /> :
                                                <X size={18} className="text-[#FF453A] shrink-0 mt-0.5" strokeWidth={3} />
                                            }
                                            <span className="text-[#F5F5F5] text-[15px] font-medium leading-relaxed">{row.frack.text}</span>
                                        </div>
                                    </td>

                                    {/* Full-time Column */}
                                    <td className="p-6">
                                        <div className="flex items-start gap-3">
                                            {row.fulltime.check ?
                                                <Check size={18} className="text-[#C8FF00] shrink-0 mt-0.5" strokeWidth={3} /> :
                                                <X size={18} className="text-[#FF453A] shrink-0 mt-0.5" strokeWidth={3} />
                                            }
                                            <span className="text-[#F5F5F5] text-[15px] font-medium leading-relaxed">{row.fulltime.text}</span>
                                        </div>
                                    </td>

                                    {/* Agencies Column */}
                                    <td className="p-6">
                                        <div className="flex items-start gap-3">
                                            {row.agencies.check ?
                                                <Check size={18} className="text-[#C8FF00] shrink-0 mt-0.5" strokeWidth={3} /> :
                                                <X size={18} className="text-[#FF453A] shrink-0 mt-0.5" strokeWidth={3} />
                                            }
                                            <span className="text-[#F5F5F5] text-[15px] font-medium leading-relaxed">{row.agencies.text}</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
