'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useDictionary } from '@/context/LocaleContext';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-[#1F1F1F] last:border-0 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-8 text-left group"
            >
                <h3 className={`text-xl md:text-2xl font-bold tracking-[-0.03em] transition-all ${isOpen ? "text-[#C8FF00]" : "text-[#F5F5F5]"}`}>
                    {question}
                </h3>
                <div className={`shrink-0 w-8 h-8 rounded-full border border-[#1F1F1F] flex items-center justify-center transition-all ${isOpen ? "text-[#C8FF00] border-[#C8FF00] rotate-180" : "text-[#888888] group-hover:border-[#C8FF00]"}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="pb-8 text-lg text-[#888888] leading-relaxed font-sans max-w-3xl">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function FAQ() {
    const dict = useDictionary();

    return (
        <section className="section-padding bg-[#080808] border-t border-[#1F1F1F]">
            <div className="container-px mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-[#F5F5F5] tracking-[-0.03em]">{dict.faq.title}</h2>
                    <p className="text-[#888888] text-xl max-w-2xl mx-auto">
                        {dict.faq.subtitle}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {dict.faq.items.map((faq, idx) => (
                        <FAQItem key={idx} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
}
