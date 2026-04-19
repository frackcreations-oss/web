'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const DEFAULT_BOOKING =
  'https://calendly.com/frackcreations/30min';

const bookingUrl =
  process.env.NEXT_PUBLIC_BOOKING_URL?.trim() || DEFAULT_BOOKING;

export default function Booking() {
  return (
    <section
      id="booking"
      className="section-padding bg-[#080808] border-t border-[#1F1F1F] scroll-mt-32 md:scroll-mt-36"
    >
      <div className="container-px mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl border border-[#1F1F1F] bg-[#111111] text-[#C8FF00] mx-auto">
            <Calendar size={26} strokeWidth={1.5} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] tracking-[-0.03em] leading-tight">
            Book an intro call
          </h2>
          <p className="text-[#888888] text-lg md:text-xl font-medium leading-relaxed">
            Pick a time that works for you. You&apos;ll get a calendar invite and a short
            prep note so we make the most of 30 minutes.
          </p>
          <div className="flex justify-center pt-2">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary h-14 px-10 text-[15px] inline-flex items-center justify-center"
            >
              Schedule a call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
