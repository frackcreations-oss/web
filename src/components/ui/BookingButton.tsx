"use client";

import { CalendarDays } from "lucide-react";
import { useDictionary } from "@/context/LocaleContext";
import { BOOKING_URL } from "@/lib/booking";

export default function BookingButton() {
  const dict = useDictionary();

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={dict.meeting.label}
      className="group fixed bottom-6 right-6 z-[70] flex h-14 w-14 items-center justify-center rounded-full border border-[#1F1F1F] bg-[#111111]/90 text-[#C8FF00] shadow-[0_4px_24px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-[#C8FF00]/60 hover:shadow-[0_0_24px_rgba(200,255,0,0.2)] md:bottom-8 md:right-8"
    >
      <CalendarDays className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
    </a>
  );
}
