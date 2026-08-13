'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useDictionary } from '@/context/LocaleContext';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { WhatsAppIcon } from '@/components/ui/WhatsAppButton';
import { ensureYoyoFormBound, YOYO_CAPTURE_ACTION, YOYO_CAPTURE_TOKEN } from '@/lib/yoyo';

const fieldClass =
  'w-full rounded-xl border border-[#252525] bg-[#111111] px-4 py-3.5 text-[15px] text-[#F5F5F5] placeholder:text-[#666666] outline-none transition focus:border-[#C8FF00]/50 focus:ring-1 focus:ring-[#C8FF00]/30';

export default function Booking() {
  const dict = useDictionary();
  const whatsappUrl = getWhatsAppUrl(dict.whatsapp.message);
  const form = dict.booking.form;
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const el = formRef.current;
    if (!el) return;
    const t = window.setTimeout(() => ensureYoyoFormBound(el), 400);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section
      id="booking"
      className="section-padding bg-[#080808] border-t border-[#1F1F1F] scroll-mt-32 md:scroll-mt-36"
    >
      <div className="container-px mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] tracking-[-0.03em] leading-tight">
              {dict.booking.title}
            </h2>
            <p className="text-[#888888] text-lg md:text-xl font-medium leading-relaxed">
              {dict.booking.subtitle}
            </p>
          </div>

          <form
            ref={formRef}
            id="yoyo-lead-form"
            data-yoyo-capture={YOYO_CAPTURE_TOKEN}
            data-yoyo-action={YOYO_CAPTURE_ACTION}
            data-yoyo-success={form.success}
            className="space-y-4 rounded-[1.5rem] border border-[#1F1F1F] bg-[#0C0C0C] p-5 sm:p-7"
          >
            <div>
              <label htmlFor="yoyo-full-name" className="mb-2 block text-[12px] font-bold uppercase tracking-[0.14em] text-[#888888]">
                {form.name}
              </label>
              <input
                id="yoyo-full-name"
                type="text"
                name="full_name"
                required
                autoComplete="name"
                placeholder={form.namePlaceholder}
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="yoyo-email" className="mb-2 block text-[12px] font-bold uppercase tracking-[0.14em] text-[#888888]">
                {form.email}
              </label>
              <input
                id="yoyo-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder={form.emailPlaceholder}
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="yoyo-phone" className="mb-2 block text-[12px] font-bold uppercase tracking-[0.14em] text-[#888888]">
                {form.phone}
              </label>
              <input
                id="yoyo-phone"
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder={form.phonePlaceholder}
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="yoyo-message" className="mb-2 block text-[12px] font-bold uppercase tracking-[0.14em] text-[#888888]">
                {form.message}
              </label>
              <textarea
                id="yoyo-message"
                name="message"
                rows={4}
                placeholder={form.messagePlaceholder}
                className={`${fieldClass} resize-y min-h-[120px]`}
              />
            </div>
            <button type="submit" className="btn-primary h-14 w-full text-[15px]">
              {form.submit}
            </button>
          </form>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost h-14 w-full text-[15px] inline-flex items-center justify-center gap-2"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {dict.booking.schedule}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
