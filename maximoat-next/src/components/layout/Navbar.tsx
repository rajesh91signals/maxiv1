"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const { scrollY } = useScroll();
    const lastScrollY = useRef(0);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const direction = latest - lastScrollY.current;

        // Background / Minimize toggle
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        // Smart hide/show on scroll
        if (latest > 400 && direction > 10) {
            setIsHidden(true);
        } else if (direction < -10 || latest <= 50) {
            setIsHidden(false);
        }

        lastScrollY.current = latest;
    });

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{
                y: isHidden ? -120 : 0,
                opacity: 1,
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
        >
            <nav
                className={cn(
                    "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-auto flex items-center justify-between",
                    isScrolled
                        ? "mt-4 w-[95%] max-w-5xl bg-white/90 backdrop-blur-xl border border-slate-200/50 rounded-full px-6 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
                        : "mt-0 w-full bg-transparent px-8 py-8"
                )}
            >
                {/* Logo Section */}
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src="/assets/logo.svg"
                        alt="Maximoat"
                        width={isScrolled ? 100 : 120}
                        height={isScrolled ? 25 : 30}
                        className="transition-all duration-500 w-auto h-[25px] sm:h-[30px]"
                        priority
                    />
                </Link>

                {/* Center Content - CTA Hint (Hidden on small mobile) */}
                <div className={cn(
                    "hidden sm:flex items-center gap-2 text-slate-400 font-bold transition-all duration-500 cursor-pointer group hover:text-slate-900",
                    isScrolled ? "scale-90 opacity-100" : "scale-100"
                )}>
                    <span className="text-[10px] uppercase tracking-[0.1em]">Start your transformation today</span>
                    <svg className="w-6 h-3 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8 H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M18 2 L25 8 L18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                {/* Right Side - Actions */}
                <div className="flex items-center gap-4">
                    <Link href="/apply">
                        <Button
                            className={cn(
                                "rounded-full font-black text-[10px] uppercase tracking-widest transition-all duration-500",
                                isScrolled
                                    ? "bg-slate-950 text-white px-8 h-10 shadow-lg shadow-black/5"
                                    : "bg-slate-950 text-white px-10 h-14 shadow-xl shadow-black/10 hover:bg-emerald-600 hover:shadow-emerald-500/20"
                            )}
                        >
                            Enroll
                        </Button>
                    </Link>
                </div>
            </nav>
        </motion.div>
    );
}
