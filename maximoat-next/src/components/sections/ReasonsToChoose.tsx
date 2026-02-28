"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const reasons = [
    {
        id: 1,
        title: "WE'RE UX AGENCY FIRST",
        color: "bg-yellow-300",
        shadow: "shadow-[0_4px_20px_rgba(253,224,71,0.3)]",
        content: "With two decades of hands-on agency leadership, we don’t just teach design—we live it. Our team at Maximoat are also practicing designers working at top agencies and global brands, ensuring you learn from the best in the business. We have also tied up with leading soft skill trainers to deliver a program that balances technical excellence with professional mastery."
    },
    {
        id: 2,
        title: "GLOBAL HIRING NETWORK",
        color: "bg-emerald-300",
        shadow: "shadow-[0_4px_20px_rgba(134,239,172,0.3)]",
        content: "Leverage our deep connections with GCCs, global brands operating in India, leading startups, and top-tier agencies. From high-impact roles to exclusive remote and freelance opportunities, we open up doors that traditional bootcamps simply can't."
    },
    {
        id: 3,
        title: "FOCUS ON SOFT + TECHNICAL SKILLS",
        color: "bg-orange-300",
        shadow: "shadow-[0_4px_20px_rgba(253,186,116,0.3)]",
        content: "Technical skills are easily learned, but mastering storytelling, clear thinking, and high-stakes presentation is what truly sets you apart. We build these core soft skills alongside agency-grade workflows to give you the unstoppable confidence to handle any professional challenge."
    }
];

const testimonials = [
    {
        name: "Kyra P.",
        role: "Design Lead @ Google",
        image: "https://i.pravatar.cc/150?img=11",
        borderColor: "border-yellow-400",
        text: "The mentorship didn't just teach me UI; it taught me the 'Agency-Grade' rigor that eventually got me into Google's core team. Truly transformative."
    },
    {
        name: "Kavya M.",
        role: "Sr. Designer @ Netflix",
        image: "https://i.pravatar.cc/150?img=47",
        borderColor: "border-emerald-400",
        text: "Maximoat's focus on technical and life confidence gave me the edge to compete with global talent at the highest level. I walk into rooms knowing I belong."
    },
    {
        name: "Siddharth V.",
        role: "Product Designer @ Meta",
        image: "https://i.pravatar.cc/150?img=12",
        borderColor: "border-orange-400",
        text: "I went from struggling with my portfolio to landing my dream role at Meta within 3 months. They know exactly what Big Tech looks for."
    }
];

export function ReasonsToChoose() {
    const [activeReason, setActiveReason] = useState<number | null>(1);

    return (
        <section className="bg-slate-950 py-24 px-6 relative overflow-hidden">
            {/* Dark Dot Grid */}
            <div className="absolute inset-0 dotted-bg-dark" />

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif font-black text-white tracking-tight">
                        Reasons to Choose <span className="relative inline-block">
                            Maximoat
                            <div className="absolute -bottom-2 left-0 w-full h-2 bg-emerald-500 rounded-full" />
                        </span>
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto mb-32">
                    {reasons.map((reason) => (
                        <div
                            key={reason.id}
                            className={`border-b border-white/10 py-8 cursor-pointer transition-all ${activeReason === reason.id ? "opacity-100" : "opacity-60"}`}
                            onClick={() => setActiveReason(activeReason === reason.id ? null : reason.id)}
                        >
                            <div className="flex items-center gap-8">
                                <div className={`${reason.color} w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl text-slate-900 shrink-0 ${reason.shadow}`}>
                                    {reason.id}
                                </div>
                                <h3 className={`text-xl md:text-2xl font-black tracking-tight transition-colors ${activeReason === reason.id ? "text-white" : "text-slate-400"}`}>
                                    {reason.title}
                                </h3>
                                <ChevronDown className={`ml-auto text-slate-500 transition-transform duration-300 ${activeReason === reason.id ? "rotate-180 text-white" : ""}`} />
                            </div>

                            <AnimatePresence>
                                {activeReason === reason.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pl-[88px] pt-6 pr-4">
                                            <p className="text-slate-400 text-lg leading-relaxed font-medium">
                                                {reason.content}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Testimonials */}
                <div>
                    <div className="text-center mb-12">
                        <h3 className="text-slate-500 font-black text-xs uppercase tracking-[0.2em]">What our fellows are saying</h3>
                    </div>

                    <div className="flex overflow-x-auto gap-6 pb-12 no-scrollbar snap-x">
                        {testimonials.map((testi, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="min-w-[320px] md:min-w-[400px] bg-slate-900/40 border border-white/5 backdrop-blur-md p-8 rounded-[2rem] snap-center hover:bg-slate-900/60 transition-all group"
                            >
                                <div className="flex gap-4 items-center mb-6">
                                    <div className={`relative w-14 h-14 rounded-full border-2 ${testi.borderColor} overflow-hidden shrink-0`}>
                                        <Image src={testi.image} alt={testi.name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">{testi.name}</h4>
                                        <p className="text-emerald-400 text-xs font-black uppercase tracking-widest">{testi.role}</p>
                                    </div>
                                </div>
                                <p className="text-slate-400 italic text-lg leading-relaxed font-serif">
                                    &quot;{testi.text}&quot;
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
