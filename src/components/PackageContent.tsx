'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Check, Search } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import BookingButton from '@/components/ui/BookingButton';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { useDictionary } from '@/context/LocaleContext';
import { BOOKING_URL } from '@/lib/booking';

const PRICE = '$9,999';

/* Text-free illustrations, so they work in every language */
const Cube = () => (
    <div className="pkg-cube" aria-hidden>
        {['front', 'back', 'right', 'left', 'top', 'bottom'].map((face) => (
            <span key={face} className={`pkg-face pkg-face-${face}`} />
        ))}
    </div>
);

const Bubble = ({ side, width }: { side: 'in' | 'out'; width: string }) => (
    <div
        className={`h-9 rounded-2xl ${side === 'out' ? 'ml-auto rounded-br-sm bg-[#C8FF00]' : 'rounded-bl-sm border border-[#2A2A2A] bg-[#161616]'}`}
        style={{ width }}
    />
);

const Chat = () => (
    <div dir="ltr" className="flex w-full max-w-[300px] flex-col gap-2.5" aria-hidden>
        <Bubble side="out" width="58%" />
        <Bubble side="in" width="82%" />
        <Bubble side="out" width="42%" />
        <div className="flex w-fit gap-1 rounded-2xl rounded-bl-sm border border-[#2A2A2A] bg-[#161616] px-3.5 py-3">
            {[0, 1, 2].map((i) => (
                <span key={i} className="pkg-typing h-1.5 w-1.5 rounded-full bg-[#888888]" style={{ animationDelay: `${i * 0.18}s` }} />
            ))}
        </div>
    </div>
);

const WhatsApp = () => (
    <div className="flex h-20 w-20 items-center justify-center rounded-[1.4rem] bg-[#C8FF00] text-[#080808] shadow-[0_0_60px_rgba(200,255,0,0.25)]" aria-hidden>
        <WhatsAppIcon className="h-10 w-10" />
    </div>
);

const Bars = () => (
    <div dir="ltr" className="flex h-24 w-full max-w-[220px] items-end gap-2" aria-hidden>
        {[28, 42, 36, 58, 72, 100].map((h, i, all) => (
            <span
                key={i}
                className={`flex-1 rounded-t-[4px] ${i === all.length - 1 ? 'bg-[#C8FF00]' : 'bg-[#2A2A2A]'}`}
                style={{ height: `${h}%` }}
            />
        ))}
    </div>
);

const SearchResult = () => (
    <div dir="ltr" className="w-full max-w-[240px]" aria-hidden>
        <div className="mb-4 flex h-10 items-center gap-2 rounded-full border border-[#2A2A2A] bg-[#161616] px-3.5 text-[#888888]">
            <Search size={15} />
            <span className="h-1.5 w-24 rounded-full bg-[#333333]" />
        </div>
        <div className="space-y-2 px-1">
            <span className="block h-2 w-3/4 rounded-full bg-[#C8FF00]" />
            <span className="block h-1.5 w-full rounded-full bg-[#2A2A2A]" />
            <span className="block h-1.5 w-5/6 rounded-full bg-[#2A2A2A]" />
        </div>
    </div>
);

const VISUALS: ReactNode[] = [<Cube key="cube" />, <Chat key="chat" />, <WhatsApp key="wa" />, <Bars key="bars" />, <SearchResult key="search" />];
/* The two build items get the wide cards, the three channels share the row below */
const SPANS = ['md:col-span-3', 'md:col-span-3', 'md:col-span-2', 'md:col-span-2', 'md:col-span-2'];

export default function PackageContent() {
    const dict = useDictionary();
    const offer = dict.packageOffer;

    return (
        <main className="pkg-body min-h-screen overflow-x-clip bg-background">
            <Navbar />

            <section className="relative pt-32 md:pt-44 pb-20 md:pb-32">
                <div className="pkg-grid pointer-events-none absolute inset-0" aria-hidden />
                <div className="relative container mx-auto grid max-w-[1240px] items-center gap-12 px-6 md:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="pkg-label mb-6 text-[#C8FF00]">{offer.badge}</p>
                        <h1 className="pkg-display text-[44px] sm:text-6xl lg:text-[76px] text-[#F5F5F5]">{offer.title}</h1>
                        <p className="mt-7 max-w-xl text-[17px] md:text-xl leading-relaxed text-[#A0A0A0]">{offer.subtitle}</p>
                    </motion.div>

                    <motion.aside
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                        className="rounded-[28px] border border-[#2A2A2A] bg-[#0C0C0C]/90 p-7 md:p-8 shadow-[0_40px_100px_-40px_rgba(200,255,0,0.22)] backdrop-blur"
                    >
                        <p className="pkg-label text-[#888888]">{offer.priceLabel}</p>
                        <p dir="ltr" className="pkg-display mt-3 text-[64px] md:text-[72px] text-[#C8FF00] rtl:text-right">
                            {PRICE}
                        </p>
                        <ul className="my-7 space-y-3 border-t border-[#1F1F1F] pt-7">
                            {offer.items.map((item) => (
                                <li key={item.title} className="flex items-center gap-3 text-[15px] font-medium text-[#F5F5F5]">
                                    <Check size={16} strokeWidth={3} className="shrink-0 text-[#C8FF00]" />
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                        <a
                            href={BOOKING_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary h-14 w-full gap-2 text-[15px] font-semibold no-underline"
                        >
                            {offer.cta}
                            <CalendarDays className="h-4 w-4" />
                        </a>
                    </motion.aside>
                </div>
            </section>

            <section className="border-t border-[#1F1F1F] py-20 md:py-32">
                <div className="container mx-auto max-w-[1240px] px-6 md:px-8">
                    <h2 className="pkg-display mb-10 text-4xl md:mb-16 md:text-[56px] text-[#F5F5F5]">{offer.includedTitle}</h2>
                    <div className="grid gap-4 md:grid-cols-6 md:gap-5">
                        {offer.items.map((item, idx) => (
                            <motion.article
                                key={item.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.6, delay: (idx % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                                className={`group flex flex-col overflow-hidden rounded-[24px] border border-[#1F1F1F] bg-[#0C0C0C] transition-colors duration-500 hover:border-[#C8FF00]/40 ${SPANS[idx]}`}
                            >
                                <div className={`flex items-center justify-center border-b border-[#1F1F1F] bg-[#090909] px-8 ${idx < 2 ? 'h-64 md:h-72' : 'h-52'}`}>
                                    {VISUALS[idx]}
                                </div>
                                <div className="flex-1 p-6 md:p-8">
                                    <p dir="ltr" className="pkg-label mb-4 text-[#666666] rtl:text-right">0{idx + 1}</p>
                                    <h3 className="pkg-display text-2xl md:text-[28px] text-[#F5F5F5]">{item.title}</h3>
                                    <p className="mt-3 text-[15.5px] leading-relaxed text-[#A0A0A0]">{item.description}</p>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 pb-20 md:px-8 md:pb-32">
                <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-8 rounded-[28px] bg-[#C8FF00] p-8 md:flex-row md:items-end md:p-14">
                    <div>
                        <h2 className="pkg-display text-4xl md:text-[60px] !text-[#080808]">{offer.closingTitle}</h2>
                        <p className="mt-4 max-w-lg text-[17px] leading-relaxed text-[#080808]/75">{offer.closingBody}</p>
                    </div>
                    <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-14 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#080808] px-8 text-[15px] font-semibold text-[#F5F5F5] no-underline transition-transform duration-200 hover:scale-[1.02] md:w-fit"
                    >
                        {offer.cta}
                        <CalendarDays className="h-4 w-4" />
                    </a>
                </div>
            </section>

            <Footer />
            <BookingButton />
        </main>
    );
}
