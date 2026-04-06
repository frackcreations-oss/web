import Link from 'next/link';
import { Twitter, Linkedin, Dribbble, Github, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
    company: [
        { name: 'About', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Blog', href: '#' },
    ],
    services: [
        { name: 'AI SaaS', href: '#' },
        { name: 'UX/UI Design', href: '#' },
        { name: 'Prototyping', href: '#' },
    ],
    legal: [
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
    ]
};

export default function Footer() {
    return (
        <footer className="bg-[#000000] border-t border-[rgba(255,255,255,0.06)] pt-16 pb-8 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <img src="/assets/logow.png" alt="Frack Logo" className="h-8 w-auto object-contain brightness-0 invert" />
                        </div>
                        <p className="text-[#888888] max-w-xs leading-relaxed text-sm">
                            Design that ships. Software that scales.
                        </p>
                    </div>

                    {/* Single-line Nav Links (as suggested by prompt) */}
                    <div className="flex flex-wrap gap-8 text-[#888888] text-sm font-medium">
                        <Link href="#services" className="hover:text-[#F5F5F5] transition-colors">Services</Link>
                        <Link href="#portfolio" className="hover:text-[#F5F5F5] transition-colors">Work</Link>
                        <Link href="#pricing" className="hover:text-[#F5F5F5] transition-colors">Pricing</Link>
                        <Link href="#faq" className="hover:text-[#F5F5F5] transition-colors">FAQ</Link>
                        <Link href="#" className="hover:text-[#F5F5F5] transition-colors">Privacy</Link>
                    </div>

                    {/* Socials - Thin outlines */}
                    <div className="flex gap-6">
                        <Link href="#" className="text-[#888888] hover:text-[#F5F5F5] transition-colors">
                            <Twitter size={20} strokeWidth={1.5} />
                        </Link>
                        <Link href="#" className="text-[#888888] hover:text-[#F5F5F5] transition-colors">
                            <Linkedin size={20} strokeWidth={1.5} />
                        </Link>
                        <Link href="#" className="text-[#888888] hover:text-[#F5F5F5] transition-colors">
                            <Dribbble size={20} strokeWidth={1.5} />
                        </Link>
                    </div>
                </div>

                <div className="border-t border-[rgba(255,255,255,0.04)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[#48484A] text-[13px] tracking-wide">© 2026 Frack. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
