'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, stagger, useAnimate } from 'framer-motion';

// Frack "F" mark traced from /assets/icon.png (viewBox 880 x 760)
const F_PATH = 'M22 19 L858 19 L766 179 L305 179 L352 262 L718 262 L626 423 L446 423 L535 579 L441 743 Z';

const SEEN_KEY = 'frack-intro-seen';
const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];
const NAV_LOGO = 'img[alt="Frack Logo"]';

export default function IntroLoader() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        let seen = false;
        try {
            seen = sessionStorage.getItem(SEEN_KEY) === '1';
        } catch { }
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (seen || reduced) return;
        setShow(true);
        try {
            sessionStorage.setItem(SEEN_KEY, '1');
        } catch { }
    }, []);

    useEffect(() => {
        document.documentElement.style.overflow = show ? 'hidden' : '';
    }, [show]);

    return <AnimatePresence>{show && <Intro key="intro" onDone={() => setShow(false)} />}</AnimatePresence>;
}

function Intro({ onDone }: { onDone: () => void }) {
    const [scope, animate] = useAnimate();
    const lockupRef = useRef<HTMLDivElement>(null);
    const doneRef = useRef(false);

    useEffect(() => {
        const navLogo = document.querySelector<HTMLElement>(NAV_LOGO);
        if (navLogo) navLogo.style.opacity = '0';

        const finish = () => {
            if (doneRef.current) return;
            doneRef.current = true;
            if (navLogo) {
                navLogo.style.opacity = '';
                navLogo.style.transition = '';
            }
            onDone();
        };

        const run = async () => {
            // 1. Camera pulls back from deep inside the outline
            animate('.mark', { scale: [18, 1], rotate: [-8, 0] }, { duration: 1.6, ease: EASE });
            await animate('.mark path', { pathLength: [0, 1] }, { duration: 1.2, ease: 'easeInOut' });
            await new Promise((r) => setTimeout(r, 400));

            // 2. Fill with a lime flash that settles to white
            await animate('.mark path', { fill: ['rgba(200,255,0,0)', 'rgba(200,255,0,1)'] }, { duration: 0.18 });
            animate('.mark path', { fill: 'rgba(245,245,245,1)' }, { duration: 0.35 });
            animate('.flash', { opacity: [0, 0.5, 0], scale: [0.6, 1.6] }, { duration: 0.7, ease: 'easeOut' });

            // 3. Wordmark slides out
            await animate('.word', { clipPath: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'], x: [-30, 0] }, { duration: 0.6, ease: [0.16, 1, 0.3, 1] });
            await animate('.dot', { scale: [0, 1] }, { type: 'spring', stiffness: 400, damping: 14 });
            await new Promise((r) => setTimeout(r, 450));

            // 4. "CREATIONS" types in letter by letter
            await animate('.cr', { opacity: [0, 1], y: [12, 0], filter: ['blur(6px)', 'blur(0px)'] }, { duration: 0.4, delay: stagger(0.045) });
            await new Promise((r) => setTimeout(r, 700));

            // 5. ...then drifts away as smoke
            animate('.smoke', { opacity: [0, 0.55, 0], y: [10, -70], scale: [0.7, 1.6] }, { duration: 1.4, ease: 'easeOut', delay: stagger(0.08) });
            await animate(
                '.cr',
                { opacity: 0, y: -36, x: 14, scale: 1.25, filter: 'blur(14px)' },
                { duration: 0.9, ease: 'easeOut', delay: stagger(0.05) }
            );
            animate('.dot', { opacity: 0 }, { duration: 0.2 });

            // 6. Dock: "FRACK" flies into the navbar logo while the backdrop dissolves
            const lockup = lockupRef.current?.getBoundingClientRect();
            const mark = scope.current.querySelector('.mark')?.getBoundingClientRect();
            const word = scope.current.querySelector('.word')?.getBoundingClientRect();
            const to = navLogo?.getBoundingClientRect();
            const SMOOTH: [number, number, number, number] = [0.65, 0, 0.35, 1];
            animate('.backdrop', { opacity: 0 }, { duration: 1.1, ease: SMOOTH });
            if (lockup && mark && word && to && to.width > 0) {
                // Fit the FRACK part to the nav logo's width, scaling about the lockup centre
                const s = to.width / (word.right - mark.left);
                const cx = lockup.left + lockup.width / 2;
                const cy = lockup.top + lockup.height / 2;
                const px = (mark.left + word.right) / 2;
                const py = mark.top + mark.height / 2;
                const flight = 1.1;
                // Crossfade into the real logo over the last part of the flight, so there's no pop
                if (navLogo) {
                    navLogo.style.transition = `opacity 0.45s ease ${flight - 0.5}s`;
                    navLogo.style.opacity = '1';
                }
                animate(lockupRef.current!, { opacity: 0 }, { duration: 0.45, delay: flight - 0.4, ease: 'easeOut' });
                await animate(
                    lockupRef.current!,
                    {
                        x: to.left + to.width / 2 - cx - s * (px - cx),
                        y: to.top + to.height / 2 - cy - s * (py - cy),
                        scale: s,
                    },
                    { duration: flight, ease: SMOOTH }
                );
            } else {
                await animate(lockupRef.current!, { opacity: 0 }, { duration: 0.5 });
            }
            finish();
        };

        run();
        return () => {
            if (navLogo) navLogo.style.opacity = '';
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const skip = () => {
        const navLogo = document.querySelector<HTMLElement>(NAV_LOGO);
        if (navLogo) navLogo.style.opacity = '';
        doneRef.current = true;
        onDone();
    };

    return (
        <motion.div
            ref={scope}
            onClick={skip}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden cursor-pointer"
            aria-hidden
        >
            <div className="backdrop absolute inset-0 bg-black" />

            <div ref={lockupRef} className="relative flex flex-wrap items-center justify-center md:flex-nowrap">
                <div className="flash pointer-events-none absolute left-0 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[#C8FF00] opacity-0 blur-3xl" />
                <svg viewBox="0 0 880 760" className="mark relative h-12 w-auto sm:h-16 md:h-20 overflow-visible" style={{ transform: 'scale(18) rotate(-8deg)' }}>
                    <path
                        d={F_PATH}
                        stroke="#F5F5F5"
                        strokeWidth={1.2}
                        vectorEffect="non-scaling-stroke"
                        strokeLinejoin="round"
                        fill="rgba(245,245,245,0)"
                        pathLength={1}
                        strokeDasharray="1 1"
                        strokeDashoffset={1}
                    />
                </svg>
                <span
                    className="word relative block pl-1 text-[40px] sm:text-[52px] md:text-[68px] font-black leading-none tracking-[-0.02em] text-[#F5F5F5] whitespace-nowrap"
                    style={{ clipPath: 'inset(0 100% 0 0)' }}
                >
                    RACK
                </span>
                <span className="dot relative ml-1 mb-2 self-end h-2.5 w-2.5 rounded-full bg-[#C8FF00] shadow-[0_0_14px_rgba(200,255,0,0.8)]" style={{ transform: 'scale(0)' }} />

                {/* "CREATIONS" — one span per letter so it can dissolve into smoke */}
                <span className="relative mt-4 w-full justify-center md:mt-0 md:w-auto md:ml-5 md:mb-1 md:self-end flex text-[15px] sm:text-[22px] md:text-[30px] font-light uppercase leading-none tracking-[0.28em] text-[#F5F5F5]/80 whitespace-nowrap">
                    {[0, 1, 2].map((i) => (
                        <span
                            key={i}
                            className="smoke pointer-events-none absolute top-1/2 h-20 w-28 -translate-y-1/2 rounded-full bg-white/25 opacity-0 blur-2xl"
                            style={{ left: `${10 + i * 30}%` }}
                        />
                    ))}
                    {'CREATIONS'.split('').map((ch, i) => (
                        <span key={i} className="cr inline-block opacity-0">
                            {ch}
                        </span>
                    ))}
                </span>
            </div>
        </motion.div>
    );
}
