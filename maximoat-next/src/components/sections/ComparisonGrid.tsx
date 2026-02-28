"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const hardWay = [
    "Applying to 100+ posts, getting 0 callbacks",
    "Sending out generic portfolios and getting ghosted",
    "Lacking direction, feedback, and hiring visibility",
    "Struggling to showcase your real business impact",
];

const smartWay = [
    "Building a recruiter-ready, high-converting portfolio",
    "Gaining direct access to private hiring networks",
    "Developing strong UX storytelling & product thinking",
    "Getting interview-ready and landing offers fast",
];

export function ComparisonGrid() {
    return (
        <section className="py-20 px-0 md:px-6">
            <div className="w-full max-w-6xl mx-auto md:rounded-[2.5rem] overflow-hidden relative shadow-2xl border-y md:border border-white/10">
                {/* Background Visual */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[#0F172A]" />
                    <div className="absolute inset-0 dotted-bg-dark opacity-30" />
                </div>

                <div className="relative z-10 py-16 px-6 md:px-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-black text-slate-100 text-center mb-16 tracking-tight leading-tight">
                        Got experience, still <br className="md:hidden" /> struggling with job interviews?
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10 md:gap-12 max-w-5xl mx-auto">
                        {/* The Hard Way */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-red-500/[0.03] border border-red-500/20 rounded-[2rem] p-8 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-b-xl shadow-lg shadow-red-500/20">
                                The Hard Way
                            </div>
                            <ul className="space-y-6 mt-4">
                                {hardWay.map((text, i) => (
                                    <li key={i} className="flex gap-4 text-slate-400 leading-relaxed">
                                        <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <X className="w-3.5 h-3.5 text-red-500" strokeWidth={3} />
                                        </div>
                                        <span className="text-sm md:text-base font-medium" dangerouslySetInnerHTML={{ __html: text.replace(/<b>(.*?)<\/b>/g, '<strong class="text-slate-200 font-bold">$1</strong>') }} />
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* The Smart Way */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white border-2 border-emerald-500 rounded-[2rem] p-8 relative shadow-2xl shadow-emerald-500/10 group md:scale-105 z-20"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-mint border border-emerald-200 text-pro-green text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-emerald-500/10">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                                </svg>
                                Verified Pro Way
                            </div>
                            <ul className="space-y-6 text-slate-700">
                                {smartWay.map((text, i) => (
                                    <li key={i} className="flex gap-4 leading-relaxed tracking-tight">
                                        <div className="w-5 h-5 bg-emerald-500 rounded flex items-center justify-center shrink-0 mt-1">
                                            <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                                        </div>
                                        <span className="text-sm md:text-base font-medium" dangerouslySetInnerHTML={{ __html: text.replace(/<b>(.*?)<\/b>/g, '<strong class="text-slate-900 font-bold">$1</strong>') }} />
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
