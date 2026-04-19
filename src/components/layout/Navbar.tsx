'use client';

import { useState, useEffect } from "react";
import NextLink from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Process", href: "#process" },
    { name: "Our Work", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
];

function scrollToBookingSection(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    document.getElementById("booking")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 20, opacity: 1 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
        >
            <div className={`flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-full border border-[#1F1F1F] bg-[#111111]/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] pointer-events-auto transition-all duration-500 ${scrolled ? "py-2 bg-[#111111]/80" : ""}`}>
                <NextLink href="/" className="group flex items-center gap-2">
                    <img src="/assets/logow.png" alt="Frack Logo" className="h-8 md:h-[40px] w-auto object-contain brightness-0 invert" />
                </NextLink>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-1">
                    {navLinks.map((link) => (
                        <NextLink
                            key={link.name}
                            href={link.href}
                            className="px-4 py-2 text-[14px] font-medium tracking-tight text-[#888888] hover:text-[#F5F5F5] transition-colors rounded-full hover:bg-white/5"
                        >
                            {link.name}
                        </NextLink>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <motion.div whileTap={{ scale: 0.98 }} className="hidden md:block">
                        <a
                            href="#booking"
                            onClick={scrollToBookingSection}
                            className="btn-primary h-11 px-6 text-sm no-underline inline-flex items-center justify-center"
                        >
                            Book Call
                        </a>
                    </motion.div>

                    {/* Mobile Button */}
                    <button
                        className="md:hidden p-2 text-[#888888] hover:text-[#F5F5F5]"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        className="fixed inset-x-4 top-[80px] z-[60] bg-[#111111] border border-[#1F1F1F] rounded-[2rem] p-6 flex flex-col items-center space-y-4 md:hidden shadow-2xl pointer-events-auto"
                    >
                        {navLinks.map((link) => (
                            <NextLink
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="w-full text-center py-3 text-lg font-medium text-[#888888] hover:text-[#F5F5F5] transition-colors border-b border-[#1F1F1F] last:border-0"
                            >
                                {link.name}
                            </NextLink>
                        ))}
                        <a
                            href="#booking"
                            onClick={(e) => {
                                setIsOpen(false);
                                scrollToBookingSection(e);
                            }}
                            className="btn-primary w-full h-14 no-underline inline-flex items-center justify-center text-center"
                        >
                            Book Call
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
