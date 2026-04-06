'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const faqs = [
    {
        question: "How long does a project take?",
        answer: "It depends on the project. Landing page design takes 10 days. With development, 14 days. Full branding is 14 days. For larger Apps, Websites or complex projects, timing varies — book a call and we'll give you a clear timeline."
    },
    {
        question: "Do you handle development or just design?",
        answer: "Both. We design and develop in Next.js, and React. We use Rive for animations. If you need an MVP built, contact us and we'll discuss scope."
    },
    {
        question: "How does the delivery process work?",
        answer: "Once you submit a request, our team reviews the brief. You'll receive an initial draft within 48 hours. We work closely with you, incorporating feedback until you're 100% satisfied."
    },
    {
        question: "Is there a limit to design requests?",
        answer: "No limit! However, we work on one request at a time to ensure maximum quality and focus. Once a design is approved, we immediately jump to the next one in your queue."
    },
    {
        question: "How fast will I receive my designs?",
        answer: "For most requests, you can expect an initial draft within 48 hours. Larger projects like full platform designs may take slightly longer, but we maintain constant communication."
    },
    {
        question: "What if I don't like the design?",
        answer: "Your satisfaction is our priority. We offer unlimited revisions and will refine the design until it matches your vision perfectly."
    },
    {
        question: "Can I get a refund?",
        answer: "We allocate dedicated time and resources to each client, so we don't offer refunds. However, we offer the flexibility to pause your service at any time and resume when you're ready."
    }
];

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
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
    return (
        <section className="section-padding bg-[#080808] border-t border-[#1F1F1F]">
            <div className="container-px mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-[#F5F5F5] tracking-[-0.03em]">Frequently Asked Questions</h2>
                    <p className="text-[#888888] text-xl max-w-2xl mx-auto">
                        Got questions? Great! Let's clear some things up.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto mb-20">
                    {faqs.map((faq, idx) => (
                        <FAQItem key={idx} {...faq} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center p-12 card-premium rounded-[2rem] max-w-2xl mx-auto"
                >
                    <p className="text-xl font-bold text-[#F5F5F5] tracking-[-0.02em] mb-8">Can't find your answer?</p>
                    <a href="mailto:hello@frack.com" className="btn-primary h-14 px-10 text-[15px] mx-auto group w-[fit-content]">
                        Send us a Mail
                        <Mail className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
