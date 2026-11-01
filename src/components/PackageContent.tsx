'use client';

import { motion } from 'framer-motion';
import { Bot, Box, Megaphone, MessageCircle, Search } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import WhatsAppButton, { WhatsAppIcon } from '@/components/ui/WhatsAppButton';
import { useDictionary } from '@/context/LocaleContext';
import { getWhatsAppUrl } from '@/lib/whatsapp';

const ICONS = [Box, Bot, MessageCircle, Megaphone, Search];
const PRICE = '$9,999';

export default function PackageContent() {
    const dict = useDictionary();
    const offer = dict.packageOffer;
    const whatsappUrl = getWhatsAppUrl(offer.whatsappMessage);

    const cta = (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary h-14 px-8 text-[15px] no-underline inline-flex w-full sm:w-fit items-center justify-center gap-2"
        >
            {offer.cta}
            <WhatsAppIcon className="h-4 w-4" />
        </a>
    );

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <section className="relative overflow-hidden pt-36 md:pt-48 pb-20 md:pb-28">
                <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#C8FF00] opacity-[0.08] blur-[130px]" />
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="relative container mx-auto px-6 md:px-8 max-w-[1000px] flex flex-col items-center text-center"
                >
                    <div className="mb-6 px-4 py-1.5 rounded-md bg-[#111111] border border-[#1F1F1F] text-[#888888] text-[11px] font-bold tracking-[0.1em] uppercase">
                        {offer.badge}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-[#F5F5F5] tracking-tight leading-[1.1] max-w-3xl">
                        {offer.title}
                    </h1>
                    <p className="mt-6 text-[#888888] text-lg md:text-xl leading-relaxed max-w-2xl">
                        {offer.subtitle}
                    </p>
                    <p dir="ltr" className="mt-10 text-6xl md:text-8xl font-bold tracking-tight text-[#C8FF00]">
                        {PRICE}
                    </p>
                    <p className="mt-2 mb-8 text-[#888888] text-[15px] font-medium">{offer.priceLabel}</p>
                    {cta}
                </motion.div>
            </section>

            <section className="py-20 md:py-28 border-t border-[#1F1F1F]">
                <div className="container mx-auto px-6 md:px-8 max-w-[1000px]">
                    <h2 className="text-3xl md:text-[44px] font-bold text-[#F5F5F5] tracking-tight leading-tight mb-10 md:mb-14">
                        {offer.includedTitle}
                    </h2>
                    <ul>
                        {offer.items.map((item, idx) => {
                            const Icon = ICONS[idx];
                            return (
                                <motion.li
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, ease: 'easeOut' }}
                                    className="flex items-start gap-5 md:gap-8 border-t border-[#1F1F1F] py-7 md:py-9"
                                >
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#C8FF00]/25 bg-[#C8FF00]/[0.06] text-[#C8FF00]">
                                        <Icon size={22} />
                                    </span>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-[#F5F5F5] tracking-tight">{item.title}</h3>
                                        <p className="mt-2 text-[#888888] text-[15.5px] md:text-[17px] leading-relaxed max-w-2xl">{item.description}</p>
                                    </div>
                                </motion.li>
                            );
                        })}
                    </ul>
                </div>
            </section>

            <section className="py-20 md:py-28 border-t border-[#1F1F1F]">
                <div className="container mx-auto px-6 md:px-8 max-w-[1000px] flex flex-col items-center text-center">
                    <h2 className="text-3xl md:text-[44px] font-bold text-[#F5F5F5] tracking-tight leading-tight">{offer.closingTitle}</h2>
                    <p className="mt-4 mb-8 text-[#888888] text-lg max-w-xl">{offer.closingBody}</p>
                    {cta}
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
