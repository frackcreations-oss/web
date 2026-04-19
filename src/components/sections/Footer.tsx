'use client';

import { motion } from 'framer-motion';
import NextLink from 'next/link';
import { Mail, Instagram, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        navigation: [
            { name: "Services", href: "#services" },
            { name: "Our Work", href: "#portfolio" },
            { name: "Process", href: "#process" },
            { name: "Testimonials", href: "#testimonials" }
        ],
        socials: [
            { name: "Instagram", href: "#", icon: <Instagram size={16} /> },
            { name: "X / Twitter", href: "#", icon: <Twitter size={16} /> },
            { name: "LinkedIn", href: "#", icon: <Linkedin size={16} /> }
        ],
        legal: [
            { name: "Privacy Policy", href: "#" },
            { name: "Terms of Service", href: "#" },
        ]
    };

    return (
        <footer className="bg-[#080808] pt-24 pb-8 border-t border-[#1F1F1F]">
            <div className="container mx-auto px-6 md:px-8 max-w-[1400px]">
                <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 mb-24">

                    {/* Brand Info */}
                    <div className="lg:w-2/5 space-y-8 pr-4">
                        <NextLink href="/" className="inline-block">
                            <img
                                src="/assets/logow.png"
                                alt="Frack Logo"
                                className="h-[44px] w-auto object-contain brightness-0 invert"
                            />
                        </NextLink>
                        <p className="text-[#888888] text-[17px] leading-relaxed font-medium max-w-sm">
                            The dedicated design and development team for startups who need results, not just pretty pictures.
                        </p>
                        <div className="flex gap-3">
                            <a href="mailto:hello@frack.studio" className="flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[#111111] border border-[#1F1F1F] text-[#F5F5F5] hover:border-[#C8FF00] hover:text-[#C8FF00] transition-all duration-300 font-medium text-sm">
                                <Mail size={16} />
                                Start a project
                            </a>
                        </div>
                    </div>

                    {/* Columns Container */}
                    <div className="flex flex-col sm:flex-row justify-between gap-12 sm:gap-16 w-full lg:w-auto lg:min-w-[500px] lg:ml-auto">

                        {/* Navigation Links */}
                        <div className="space-y-6">
                            <h4 className="text-[#F5F5F5] font-bold uppercase tracking-[0.15em] text-[11px]">Frack</h4>
                            <ul className="space-y-4">
                                {footerLinks.navigation.map((link) => (
                                    <li key={link.name}>
                                        <NextLink href={link.href} className="text-[#888888] font-medium text-[15px] hover:text-[#C8FF00] transition-colors flex items-center justify-between group">
                                            {link.name}
                                        </NextLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div className="space-y-6">
                            <h4 className="text-[#F5F5F5] font-bold uppercase tracking-[0.15em] text-[11px]">Socials</h4>
                            <ul className="space-y-4">
                                {footerLinks.socials.map((link) => (
                                    <li key={link.name}>
                                        <NextLink href={link.href} className="text-[#888888] font-medium text-[15px] hover:text-[#C8FF00] transition-colors flex items-center gap-3 group">
                                            {link.icon}
                                            <span>{link.name}</span>
                                            <ArrowUpRight strokeWidth={2} size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all ml-auto text-[#C8FF00]" />
                                        </NextLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal Links */}
                        <div className="space-y-6">
                            <h4 className="text-[#F5F5F5] font-bold uppercase tracking-[0.15em] text-[11px]">Legal</h4>
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

                {/* Arabic copy — indexable for Saudi / GCC search (تطوير مواقع، متاجر إلكترونية، إلخ) */}
                <div
                    dir="rtl"
                    lang="ar"
                    className="arabic-text mb-16 rounded-[2rem] border border-[#1F1F1F] bg-[#0C0C0C] p-8 md:p-10"
                >
                    <h2 className="text-[#F5F5F5] text-lg md:text-xl font-bold mb-4 tracking-tight">
                        فراك — تطوير مواقع ومتاجر إلكترونية في السعودية والخليج
                    </h2>
                    <p className="text-[#A8A8A8] text-[15px] md:text-[17px] leading-[1.85] font-medium">
                        نصمّم ونبرمج مواقع احترافية، متاجر إلكترونية، وتطبيقات ويب وسحابية بسرعة الإطلاق
                        وجودة عالية. إذا كنت تبحث عن{" "}
                        <span className="text-[#C8C8C8]">تطوير مواقع</span>،{" "}
                        <span className="text-[#C8C8C8]">تطوير متاجر إلكترونية</span>،{" "}
                        <span className="text-[#C8C8C8]">تصميم مواقع</span>، أو{" "}
                        <span className="text-[#C8C8C8]">برمجة مواقع</span> للشركات الناشئة والفرق
                        المنتجة — نساعدك من الفكرة حتى الإطلاق مع تجربة مستخدم واضحة وأداء قوي.
                    </p>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[#1F1F1F] flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[#666666] text-sm font-medium tracking-wide">
                        © {currentYear} Frack. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-[#666666] text-sm font-medium tracking-wide">
                        <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-pulse shadow-[0_0_8px_rgba(200,255,0,0.6)]" />
                        Accepting new clients
                    </div>
                </div>
            </div>
        </footer>
    );
}
