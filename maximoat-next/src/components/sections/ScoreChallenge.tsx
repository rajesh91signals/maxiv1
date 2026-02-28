"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Check, ShieldCheck, Users, Play } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const skills = [
    "Portfolio",
    "Design Skills",
    "AI Skills",
    "Soft Skills",
    "Confidence",
];



export function ScoreChallenge() {
    const [activeSkills, setActiveSkills] = useState<number[]>([]);
    const [score, setScore] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
        const sequence = async () => {
            // Start Scrubber animation
            controls.start({
                left: "80%",
                transition: { duration: 3, ease: "easeInOut" }
            });

            // Gradually increase score counter
            let currentScore = 0;
            const interval = setInterval(() => {
                if (currentScore < 80) {
                    currentScore += 1;
                    setScore(currentScore);
                } else {
                    clearInterval(interval);
                }
            }, 35);

            // Light up skills sequentially
            for (let i = 0; i < skills.length; i++) {
                await new Promise((resolve) => setTimeout(resolve, 500));
                setActiveSkills((prev) => [...prev, i]);
            }
        };

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    sequence();
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        const element = document.getElementById("score-challenge-interactive");
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, [controls]);

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
    const finalText = "Paste portfolio link...";

    useEffect(() => {
        const iconTimeout = setInterval(() => {
            setPlatformIdx((prev) => (prev + 1) % platforms.length);
        }, 2500);

        const typeSpeed = isDeleting ? 70 : 120;
        const typeTimeout = setTimeout(() => {
            if (!isDeleting && charIdx < finalText.length) {
                setPlaceholder(finalText.substring(0, charIdx + 1));
                setCharIdx(prev => prev + 1);
            } else if (isDeleting && charIdx > 0) {
                setPlaceholder(finalText.substring(0, charIdx - 1));
                setCharIdx(prev => prev - 1);
            }

            if (!isDeleting && charIdx === finalText.length) {
                setTimeout(() => setIsDeleting(true), 3000);
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
        <section className="py-32 px-6 relative overflow-hidden dotted-bg" id="score-challenge-interactive">
            <div className="max-w-6xl mx-auto relative text-center">



                <h3 className="text-4xl md:text-5xl font-serif font-black text-slate-900 mb-16 tracking-tight leading-tight">
                    Design hiring now has <br className="hidden md:block" /> a very high bar
                </h3>

                {/* Skill Tags */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={skill}
                            animate={{
                                backgroundColor: activeSkills.includes(i) ? "#10B981" : "#ffffff",
                                borderColor: activeSkills.includes(i) ? "#10B981" : "#e2e8f0",
                                color: activeSkills.includes(i) ? "#ffffff" : "#64748b",
                            }}
                            className="px-6 py-2.5 rounded-full border border-slate-200 font-bold text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-2 shadow-sm"
                        >
                            <Check className={cn("w-3.5 h-3.5 stroke-[3px]", activeSkills.includes(i) ? "text-white" : "opacity-0")} />
                            {skill}
                        </motion.div>
                    ))}
                </div>

                {/* Interactive Bar */}
                <div className="relative w-full max-w-4xl mx-auto mb-20 px-4 md:px-0">
                    <div className="relative h-14 bg-gradient-to-r from-[#F87171] via-[#FDE047] to-[#10B981] rounded-full border border-slate-100 overflow-hidden shadow-inner">
                        {/* Markers */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-slate-950/10" />
                        <div className="absolute left-[80%] top-0 bottom-0 w-[1px] bg-slate-950/10" />

                        {/* Scrubber */}
                        <motion.div
                            animate={controls}
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 bg-white border border-slate-100 rounded-full z-20 shadow-xl flex items-center justify-center text-3xl"
                        >
                            {score >= 80 ? "🤩" : "😐"}
                        </motion.div>

                        {/* Labels Inside */}
                        <div className="absolute inset-0 flex items-center px-16 z-10 pointer-events-none opacity-40 font-black text-[10px] uppercase tracking-tighter text-slate-900">
                            <div className="flex-1" />
                            <div className="flex-1 text-right pr-20">Need Work</div>
                            <div className="text-center">Verified Pro</div>
                        </div>
                    </div>

                    {/* Numeric Labels */}
                    <div className="mt-4 relative font-black text-[10px] text-slate-300 tracking-widest uppercase">
                        <span className="absolute left-0 -translate-x-1/2">0</span>
                        <span className="absolute left-1/2 -translate-x-1/2">50</span>
                        <span className="absolute left-[80%] -translate-x-1/2 text-emerald-500">80</span>
                        <span className="absolute left-full -translate-x-1/2 text-emerald-600">100</span>
                    </div>
                </div>

                {/* Scorer Input - Cleaner Style from Image */}
                <div className="relative max-w-2xl mx-auto bg-white border border-slate-100 rounded-xl p-2 shadow-[0_15px_50px_rgba(0,0,0,0.05)] flex flex-col md:flex-row items-center gap-2 mb-24 transition-all">
                    <div className="flex-1 w-full px-5 flex items-center gap-4">
                        <div className="w-10 h-10 flex items-center justify-center">
                            <motion.img
                                key={platformIdx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                src={platforms[platformIdx].icon}
                                alt={platforms[platformIdx].name}
                                className="w-6 h-6 grayscale opacity-30"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder={placeholder + (charIdx === finalText.length && !isDeleting ? "" : "|")}
                            className="flex-1 bg-transparent border-none outline-none text-slate-700 placeholder:text-slate-300 font-medium text-lg h-14"
                        />
                    </div>
                    <Button
                        className="w-full md:w-auto rounded-xl bg-slate-950 px-10 h-14 text-white font-bold text-base hover:bg-slate-800 transition-all active:scale-95 shadow-xl shadow-black/10"
                    >
                        Know your score
                    </Button>
                </div>

                {/* Why Verified Pro Heading */}
                <div className="w-full">
                    <h4 className="text-slate-400 font-serif italic text-sm mb-12 tracking-widest uppercase">Why Verified Pro?</h4>
                    <div className="grid md:grid-cols-3 gap-16 text-left max-w-5xl mx-auto">
                        <div className="flex gap-5">
                            <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center shrink-0 border border-emerald-100/50">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <h5 className="font-black text-slate-900 text-sm mb-2 uppercase tracking-tight">Expert Credibility</h5>
                                <p className="text-sm text-slate-500 leading-relaxed font-medium">Audit report validated by agency-grade designers from top tech companies.</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="w-12 h-12 bg-indigo-50 text-indigo-500 rounded-2xl flex items-center justify-center shrink-0 border border-indigo-100/50">
                                <Users className="w-6 h-6" />
                            </div>
                            <div>
                                <h5 className="font-black text-slate-900 text-sm mb-2 uppercase tracking-tight">Priority Hiring</h5>
                                <p className="text-sm text-slate-500 leading-relaxed font-medium">Direct access to private hiring networks and premium &apos;hidden&apos; job roles.</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center shrink-0 border border-orange-100/50">
                                <Play className="w-6 h-6" />
                            </div>
                            <div>
                                <h5 className="font-black text-slate-900 text-sm mb-2 uppercase tracking-tight">Video-First Edge</h5>
                                <p className="text-sm text-slate-500 leading-relaxed font-medium">A decision-ready profile with video walkthroughs that land interviews 3x faster.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
