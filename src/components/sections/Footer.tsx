'use client';

import NextLink from 'next/link';
import { Mail, Instagram, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';
import { useDictionary, useLocale } from '@/context/LocaleContext';

export default function Footer() {
    const dict = useDictionary();
    const locale = useLocale();
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        navigation: [
            { name: dict.footer.navServices, href: "#services" },
            { name: dict.footer.navWork, href: "#portfolio" },
            { name: dict.footer.navProcess, href: "#process" },
            { name: dict.footer.navTestimonials, href: "#testimonials" },
        ],
        socials: [
            { name: "Instagram", href: "https://www.instagram.com/frackcreations/", icon: <Instagram size={16} /> },
            { name: "X / Twitter", href: "https://x.com/CreationsF91542", icon: <Twitter size={16} /> },
            { name: "LinkedIn", href: "https://www.linkedin.com/company/frack-creations", icon: <Linkedin size={16} /> },
        ],
        legal: [
            { name: dict.footer.privacy, href: "#" },
            { name: dict.footer.terms, href: "#" },
        ],
    };

    return (
        <footer className="bg-[#080808] pt-24 pb-8 border-t border-[#1F1F1F]">
            <div className="container mx-auto px-6 md:px-8 max-w-[1400px]">
                <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 mb-24">
                    <div className="lg:w-2/5 space-y-8 pr-4">
                        <NextLink href={`/${locale}`} className="inline-block">
                            <img
                                src="/assets/logow.png"
                                alt="Frack Logo"
                                className="h-[44px] w-auto object-contain brightness-0 invert"
                            />
                        </NextLink>
                        <p className="text-[#888888] text-[17px] leading-relaxed font-medium max-w-sm">
                            {dict.footer.tagline}
                        </p>
                        <div className="flex gap-3">
                            <a href="mailto:frackcreations@gmail.com?subject=Project%20inquiry%20from%20Frack%20website" className="flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[#111111] border border-[#1F1F1F] text-[#F5F5F5] hover:border-[#C8FF00] hover:text-[#C8FF00] transition-all duration-300 font-medium text-sm">
                                <Mail size={16} />
                                {dict.footer.startProject}
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between gap-12 sm:gap-16 w-full lg:w-auto lg:min-w-[500px] lg:ml-auto">
                        <div className="space-y-6">
                            <h4 className="text-[#F5F5F5] font-bold uppercase tracking-[0.15em] text-[11px]">{dict.footer.frack}</h4>
                            <ul className="space-y-4">
                                {footerLinks.navigation.map((link) => (
                                    <li key={link.href}>
                                        <NextLink href={link.href} className="text-[#888888] font-medium text-[15px] hover:text-[#C8FF00] transition-colors flex items-center justify-between group">
                                            {link.name}
                                        </NextLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-[#F5F5F5] font-bold uppercase tracking-[0.15em] text-[11px]">{dict.footer.socials}</h4>
                            <ul className="space-y-4">
                                {footerLinks.socials.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#888888] font-medium text-[15px] hover:text-[#C8FF00] transition-colors flex items-center gap-3 group"
                                        >
                                            {link.icon}
                                            <span>{link.name}</span>
                                            <ArrowUpRight strokeWidth={2} size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all ml-auto text-[#C8FF00]" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-[#F5F5F5] font-bold uppercase tracking-[0.15em] text-[11px]">{dict.footer.legal}</h4>
                            <ul className="space-y-4">
                                {footerLinks.legal.map((link) => (
                                    <li key={link.name}>
                                        <NextLink href={link.href} className="text-[#888888] font-medium text-[15px] hover:text-[#F5F5F5] transition-colors">
                                            {link.name}
                                        </NextLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div
                    dir={locale === "ar" ? "rtl" : "ltr"}
                    lang={locale}
                    className={`mb-16 rounded-[2rem] border border-[#1F1F1F] bg-[#0C0C0C] p-8 md:p-10 ${locale === "ar" ? "arabic-text" : ""}`}
                >
                    <h2 className="text-[#F5F5F5] text-lg md:text-xl font-bold mb-4 tracking-tight">
                        {dict.footer.seoTitle}
                    </h2>
                    <p className="text-[#A8A8A8] text-[15px] md:text-[17px] leading-[1.85] font-medium">
                        {dict.footer.seoBody}
                    </p>
                </div>

                <div className="pt-8 border-t border-[#1F1F1F] flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[#666666] text-sm font-medium tracking-wide">
                        © {currentYear} Frack. {dict.footer.rights}
                    </p>
                    <div className="flex items-center gap-2 text-[#666666] text-sm font-medium tracking-wide">
                        <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-pulse shadow-[0_0_8px_rgba(200,255,0,0.6)]" />
                        {dict.footer.accepting}
                    </div>
                </div>
            </div>
        </footer>
    );
}
