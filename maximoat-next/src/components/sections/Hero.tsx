import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero() {
    const [platformIdx, setPlatformIdx] = useState(0);
    const [placeholder, setPlaceholder] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIdx, setCharIdx] = useState(0);

    const platforms = [
        { icon: "https://cdn.simpleicons.org/behance/64748b", name: "Behance" },
        { icon: "https://cdn.simpleicons.org/dribbble/64748b", name: "Dribbble" },
        { icon: "https://cdn.simpleicons.org/figma/64748b", name: "Figma" },
        { icon: "https://cdn.simpleicons.org/framer/64748b", name: "Framer" }
    ];
    const finalText = "Paste portfolio or LinkedIn link...";

    useEffect(() => {
        const iconTimeout = setInterval(() => {
            setPlatformIdx((prev) => (prev + 1) % platforms.length);
        }, 3000);

        const typeSpeed = isDeleting ? 50 : 100;
        const typeTimeout = setTimeout(() => {
            if (!isDeleting && charIdx < finalText.length) {
                setPlaceholder(finalText.substring(0, charIdx + 1));
                setCharIdx(prev => prev + 1);
            } else if (isDeleting && charIdx > 0) {
                setPlaceholder(finalText.substring(0, charIdx - 1));
                setCharIdx(prev => prev - 1);
            }

            if (!isDeleting && charIdx === finalText.length) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && charIdx === 0) {
                setIsDeleting(false);
            }
        }, typeSpeed);

        return () => {
            clearInterval(iconTimeout);
            clearTimeout(typeTimeout);
        };
    }, [charIdx, isDeleting]);

    return (
        <section className="relative pt-32 pb-20 overflow-hidden dotted-bg">
            <div className="mesh-bg" />
            <div className="container mx-auto px-6 text-center">
                {/* Trust Stats Moved */}

                {/* Verified Pro Badge */}
                <div className="inline-flex items-center gap-2 bg-[#f0fdf4] border-2 border-[#86efac] rounded-full px-5 py-2 mb-8 text-[#14532d] font-extrabold text-[0.85rem] md:text-[0.9rem] uppercase tracking-[0.1em] shadow-[0_4px_15px_rgba(16,185,129,0.1)] mx-auto transition-transform hover:scale-105">
                    <svg width="19" height="21" viewBox="0 0 24 24" fill="#10B981" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                    </svg>
                    Verified Pro Designer
                </div>

                {/* Hero Title */}
                <h1 className="text-[clamp(2.2rem,8vw,4rem)] text-[#0F172A] font-serif font-bold leading-[1.1] tracking-[-0.03em] max-w-4xl mx-auto mb-4">
                    <span className="animated-underline">Maximize</span> your Design Career
                </h1>

                {/* Subcopy */}
                <p className="text-[clamp(1rem,4vw,1.25rem)] text-[#64748b] font-medium mb-8 max-w-[600px] mx-auto leading-relaxed">
                    Join the elite club top brands hire from
                </p>

                {/* Brand Logos */}
                <div className="flex justify-center items-center gap-4 mb-16">
                    {[
                        { src: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg", alt: "Amazon", bg: "bg-white" },
                        { label: "EY", bg: "bg-[#ffe600]", text: "EY" },
                        { src: "https://upload.wikimedia.org/wikipedia/commons/1/18/Swiggy_logo.svg", alt: "Swiggy", bg: "bg-[#fc8019]", isSvg: true },
                        { label: "PORTER", bg: "bg-[#2F65CB]", text: "PORTER", isText: true }
                    ].map((brand, i) => (
                        <div key={i} className={cn(
                            "w-11 h-11 rounded-full border-[3px] border-slate-50 flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer overflow-hidden",
                            brand.bg
                        )}>
                            {brand.src && (
                                <Image src={brand.src} alt={brand.alt || ""} width={20} height={20} className={cn("object-contain", brand.isSvg && "invert brightness-0")} />
                            )}
                            {brand.text && (
                                <span className={cn(
                                    "font-black tracking-tighter",
                                    brand.isText ? "text-[8px] text-white" : "text-xl text-slate-900"
                                )}>
                                    {brand.text}
                                </span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Scorer Interactive Preview - Matching index.html */}
                <div className="relative max-w-2xl mx-auto bg-white border border-[#e2e8f0] rounded-[100px] p-2 shadow-[0_20px_40px_rgba(0,0,0,0.05)] flex flex-col md:flex-row items-center gap-2 mt-12 transition-all">
                    <div className="flex-1 w-full flex items-center gap-3 pl-2">
                        <div className="w-12 h-12 rounded-full border border-[#f1f5f9] bg-[#f8fafc] flex items-center justify-center shrink-0">
                            <motion.img
                                key={platformIdx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                src={platforms[platformIdx].icon}
                                alt={platforms[platformIdx].name}
                                className="w-6 h-6 grayscale opacity-60"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder={placeholder + (charIdx === finalText.length && !isDeleting ? "" : "|")}
                            className="flex-1 bg-transparent border-none outline-none text-slate-700 placeholder-[#94a3b8] font-semibold text-base min-w-0"
                        />
                    </div>
                    <Button
                        onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full md:w-auto rounded-full bg-[#0F172A] px-8 h-14 text-white font-bold text-[1rem] hover:bg-[#1e293b] transition-all active:scale-95 shadow-[4px_4px_0px_#1e293b]"
                    >
                        Check Eligibility
                    </Button>
                </div>

                <div className="mt-4">
                    <Link href="#features" className="text-[#64748b] font-medium text-[0.9rem] underline decoration-1 underline-offset-4 hover:text-[#0f172a] transition-colors">
                        Learn about OTP transformation program
                    </Link>
                </div>
            </div>
        </section>
    );
}
