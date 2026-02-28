"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Lock, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const avatars = [
    "https://i.pravatar.cc/100?img=11",
    "https://i.pravatar.cc/100?img=12",
    "https://i.pravatar.cc/100?img=33",
    "https://i.pravatar.cc/100?img=47",
    "https://i.pravatar.cc/100?img=15",
    "https://i.pravatar.cc/100?img=68",
    "https://i.pravatar.cc/100?img=17",
];

export function PricingSteps() {
    const [avatarOffset, setAvatarOffset] = useState(0);

    useEffect(() => {
        const avatarTimeout = setInterval(() => {
            setAvatarOffset((prev) => (prev + 1) % avatars.length);
        }, 2000);
        return () => clearInterval(avatarTimeout);
    }, []);

    return (
        <section id="pricing" className="py-24 px-6 bg-slate-50/50 relative dotted-bg">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    {/* Trust Stats - 306 Designers */}
                    <div className="inline-flex flex-row items-center gap-4 bg-white border border-[#e2e8f0] rounded-full py-2 px-5 mb-10 shadow-[0_4px_15px_rgba(0,0,0,0.05)] mx-auto h-14 w-fit">
                        <div className="flex -space-x-3 overflow-hidden px-2 h-8 items-center">
                            <AnimatePresence mode="popLayout">
                                {[0, 1, 2, 3, 4].map((i) => {
                                    const avatarIndex = (avatarOffset + i) % avatars.length;
                                    return (
                                        <motion.div
                                            key={avatars[avatarIndex]}
                                            layout
                                            initial={{ opacity: 0, x: -20, scale: 0.8 }}
                                            animate={{ opacity: 1, x: 0, scale: 1 }}
                                            exit={{ opacity: 0, x: 20, scale: 0.8 }}
                                            transition={{ duration: 0.4 }}
                                            style={{ zIndex: 10 - i }}
                                            className="relative"
                                        >
                                            <Image
                                                src={avatars[avatarIndex]}
                                                alt="Designer Profile"
                                                width={32}
                                                height={32}
                                                className="rounded-full border-2 border-white relative bg-slate-100"
                                            />
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </div>
                        <div className="h-6 w-px bg-slate-200 mx-1 block" />
                        <div className="flex items-center gap-2 pr-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
                            <span className="text-[15px] font-extrabold text-slate-700 tracking-tight">306 Designers</span>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-serif font-black text-slate-900 mb-6 tracking-tight">
                        Know Your Score & <br className="hidden md:block" />
                        <span className="relative inline-block mt-2">
                            Start the Transformation
                            <div className="absolute -bottom-2 left-0 w-full h-3 bg-emerald-400/20 -z-10 rounded-full" />
                        </span>
                    </h2>
                    <p className="text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed text-lg">
                        Expert-led audits for high-signal career moves. To maintain agency-grade quality, we limit intake to 50 candidates monthly, ensuring deep, manual feedback.
                    </p>
                </div>

                {/* High Level Roadmap Nodes */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-0 mb-16 max-w-4xl mx-auto overflow-x-auto no-scrollbar pb-4">
                    <div className="flex flex-col items-center text-center w-32 shrink-0">
                        <div className="w-12 h-12 bg-white border-2 border-slate-900 rounded-full flex items-center justify-center text-xl shadow-[4px_4px_0px_#0f172a] mb-3">📋</div>
                        <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">1. Audit</span>
                        <span className="text-[10px] text-slate-400 font-bold leading-tight">Consult &<br />Portfolio Audit</span>
                    </div>

                    <div className="flex-1 h-0.5 border-t-2 border-dashed border-slate-200 mt-6 min-w-[60px] relative hidden md:block">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[8px] font-black px-3 py-1 rounded-full whitespace-nowrap overflow-hidden">
                            <motion.div
                                animate={{ x: ['100%', '-100%'] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"
                            />
                            AI + EXPERT ANALYSIS
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center w-32 shrink-0">
                        <div className="w-12 h-12 bg-white border-2 border-slate-900 rounded-full flex items-center justify-center text-xl shadow-[4px_4px_0px_#0f172a] mb-3">🚀</div>
                        <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">2. Transformation</span>
                        <span className="text-[10px] text-slate-400 font-bold leading-tight">Execute Your<br />Fast-Track</span>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                    {/* Step 01 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border-2 border-slate-900 rounded-[2.5rem] p-10 shadow-[12px_12px_0px_0px_#0f172a] flex flex-col relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-6">
                            <div className="bg-yellow-400 text-slate-950 text-[10px] font-black px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                                <Gift className="w-3 h-3" />
                                LIMITED OFFER
                            </div>
                        </div>

                        <span className="text-slate-400 font-black text-sm uppercase tracking-widest mb-4">Step 01</span>
                        <h3 className="text-2xl font-black text-slate-900 mb-2">Career Audit & <br /> Profile Reset</h3>

                        <div className="flex items-baseline gap-2 mb-8">
                            <span className="text-4xl font-black text-slate-950">₹2,500</span>
                            <span className="text-xl text-slate-400 line-through font-bold">₹5,000</span>
                            <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">50% OFF</span>
                        </div>

                        <ul className="space-y-4 mb-10 flex-1">
                            {[
                                "AI-powered Portfolio Signal Audit",
                                "1:1 Expert Gap Analysis Session",
                                "Personalized 30-Day Growth Roadmap",
                                "Full Mock Interview & Soft Skills report",
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-slate-600 font-medium text-sm">
                                    <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Link href="/apply" className="mt-auto">
                            <Button className="w-full h-14 bg-slate-950 text-white rounded-2xl font-black text-lg hover:bg-slate-800 transition-all flex gap-3 group">
                                Apply for Audit
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <p className="text-center mt-4 text-xs font-black text-slate-400 uppercase tracking-tighter">Pay via UPI / Cards / NetBanking</p>
                    </motion.div>

                    {/* Step 02 Overlay / Locked State */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="bg-slate-100/50 border-2 border-dashed border-slate-300 rounded-[2.5rem] p-10 flex flex-col relative"
                    >
                        <span className="text-slate-400 font-black text-sm uppercase tracking-widest mb-4">Step 02</span>
                        <h3 className="text-2xl font-black text-slate-400 mb-8 opacity-60 italic">The Transformation Program</h3>

                        <div className="flex-1 space-y-6 opacity-40 grayscale pointer-events-none">
                            {/* Pre-Qualify Blocks */}
                            <div className="bg-white border-2 border-emerald-500/30 rounded-2xl p-6 shadow-xl shadow-emerald-500/5">
                                <div className="bg-emerald-100 text-emerald-700 text-[10px] font-black px-2 py-0.5 rounded-sm inline-block mb-3">SCORE 80+</div>
                                <div className="font-black text-slate-900">👑 Unlock Premium Hiring Path</div>
                            </div>

                            <div className="bg-white border-2 border-slate-900/10 rounded-2xl p-6">
                                <div className="bg-indigo-100 text-indigo-700 text-[10px] font-black px-2 py-0.5 rounded-sm inline-block mb-3">SCORE 50-80</div>
                                <div className="font-black text-slate-900">Join 30-Day OTP Reset</div>
                            </div>
                        </div>

                        {/* Lock Indicator */}
                        <div className="absolute inset-x-10 bottom-10 top-24 bg-transparent backdrop-blur-[2px] z-10 flex flex-col items-center justify-center text-center">
                            <div className="w-16 h-16 bg-white shadow-xl rounded-full flex items-center justify-center mb-4 border border-slate-200">
                                <Lock className="w-6 h-6 text-slate-400" />
                            </div>
                            <p className="font-black text-slate-900 text-lg uppercase tracking-tight">Career Path Locked</p>
                            <p className="text-slate-500 font-medium text-sm max-w-[200px]">Complete Step 01 Career Audit to discover your path</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
