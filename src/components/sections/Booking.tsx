'use client';

import { motion } from 'framer-motion';
import { useDictionary } from '@/context/LocaleContext';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { WhatsAppIcon } from '@/components/ui/WhatsAppButton';

export default function Booking() {
  const dict = useDictionary();
  const whatsappUrl = getWhatsAppUrl(dict.whatsapp.message);

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
            <WhatsAppIcon className="h-7 w-7" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] tracking-[-0.03em] leading-tight">
            {dict.booking.title}
          </h2>
          <p className="text-[#888888] text-lg md:text-xl font-medium leading-relaxed">
            {dict.booking.subtitle}
          </p>
          <div className="flex justify-center pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary h-14 px-10 text-[15px] inline-flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {dict.booking.schedule}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
