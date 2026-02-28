"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Brain, Zap, Target, Users, Layout, Play, ShieldCheck } from "lucide-react";
import Image from "next/image";

interface SpanningCard {
    type: "spanning";
    title: string;
    description: string;
    features: string[];
}

interface FeatureCard {
    type?: never;
    title: string;
    tags?: string[];
    image?: string;
    gridItems?: { icon: string; label: string; }[];
    gigs?: { title: string; icon: string; reward?: string; description?: string; }[];
}

type PhaseCard = SpanningCard | FeatureCard;

interface Phase {
    id: string;
    label: string;
    color: string;
    subtext: string;
    cards: PhaseCard[];
}

const phases: Phase[] = [
    {
        id: "01",
        label: "Optimize",
        color: "bg-yellow-400",
        subtext: "Profile Reset • High Signal Portfolio • Industry Readiness",
        cards: [
            {
                type: "spanning",
                title: "We don't just fix your portfolio. We build your Decision-Ready Profile.",
                description: "Traditional portfolios get 5 seconds of attention. Upgrade to an enhanced portfolio with a video-first profile built for fast approvals.",
                features: [
                    "Optimize your portfolio",
                    "Record video interviews",
                    "Validated competency rating",
                    "Fix your personal SEO and LinkedIn",
                    "Mock interview test"
                ]
            }
        ]
    },
    {
        id: "02",
        label: "Transform",
        color: "bg-emerald-400",
        subtext: "Execution Reset • Storytelling • Confidence • 1:1 Coaching",
        cards: [
            {
                title: "Unlearn old knowledge and start to think from first principles",
                tags: ["First Principles Thinking", "Systems Thinking", "5 Whys"],
                image: "/assets/Brain-Exercise-nobg.png"
            },
            {
                title: "Develop AI product design mindset and domain knowledge",
                image: "/assets/mentor_feed.png"
            },
            {
                title: "1:1 mentoring to transform storytelling and confidence",
                image: "/assets/mentorship.png"
            }
        ]
    },
    {
        id: "03",
        label: "Push",
        color: "bg-orange-400",
        subtext: "Network Reset • Private Hiring • High-Ticket Gig access",
        cards: [
            {
                title: "Weekly high-signal profile drops to premium design recruiters",
                gridItems: [
                    { icon: "🏢", label: "MNCs" },
                    { icon: "🚀", label: "Startups" },
                    { icon: "🎨", label: "Agencies" },
                    { icon: "🏠", label: "Remote" }
                ]
            },
            {
                title: "Access exclusive hiring links and boards not shared on public platforms",
                image: "/assets/jb.png"
            },
            {
                title: "Unlock vetted high-ticket freelance gigs and premium side-hustles",
                gigs: [
                    { title: "Project: Fintech Audit", reward: "+ Rs. XX Earned", icon: "$" },
                    { title: "New Gig Invitation", description: "Designer for 2-week B2B SaaS...", icon: "✨" }
                ]
            }
        ]
    }
];

export function OTPChallenge() {
    return (
        <section id="otp-challenge" className="py-24 px-6 relative overflow-hidden dotted-bg">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-serif font-black text-slate-900 mb-6 tracking-tight"
                    >
                        <span className="animated-underline">
                            Start your OTP Challenge
                        </span>
                    </motion.h2>
                    <p className="text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed text-lg">
                        A <b>30-day intensive career reset</b> designed to bridge the gap between your current profile and career-defining <b>job opportunities at big brands</b>.
                    </p>
                </div>

                {phases.map((phase, pIdx) => (
                    <div key={phase.id} className="mb-24 last:mb-0">
                        {/* Phase Header */}
                        <div className="flex flex-wrap items-center gap-4 mb-10">
                            <div className={`${phase.color} text-slate-900 px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-lg flex items-center gap-2`}>
                                <span className="opacity-40">{phase.id}.</span> {phase.label}
                            </div>
                            <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">{phase.subtext}</span>
                        </div>

                        {/* Phase Grid */}
                        <div className="grid lg:grid-cols-3 gap-8">
                            {phase.cards.map((card, cIdx) => (
                                <motion.div
                                    key={cIdx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: cIdx * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`bg-white border-2 border-slate-900 rounded-[2rem] overflow-hidden shadow-[8px_8px_0px_0px_#0f172a] hover:shadow-[12px_12px_0px_0px_#0f172a] transition-all flex flex-col ${card.type === "spanning" ? "lg:col-span-3 lg:flex-row p-8 lg:p-12 gap-12" : "p-8"
                                        }`}
                                >
                                    {/* Spanning Card Logic */}
                                    {card.type === "spanning" ? (
                                        <>
                                            <div className="flex-1">
                                                <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                                    We don&apos;t just fix your portfolio. <br className="hidden lg:block" /> We build your <span className="text-emerald-500 underline decoration-4 underline-offset-4">Decision-Ready Profile.</span>
                                                </h3>
                                                <p className="text-lg text-slate-500 font-medium mb-8 leading-relaxed">
                                                    {card.description}
                                                </p>
                                                <ul className="grid sm:grid-cols-2 gap-4">
                                                    {card.features.map((feature, fIdx) => (
                                                        <li key={fIdx} className="flex gap-3 text-slate-700 font-bold text-sm">
                                                            <div className="w-8 h-8 bg-indigo-50 text-indigo-500 rounded-full flex items-center justify-center shrink-0">
                                                                {fIdx === 0 && <Layout className="w-4 h-4" />}
                                                                {fIdx === 1 && <Play className="w-4 h-4" />}
                                                                {fIdx === 2 && <Target className="w-4 h-4" />}
                                                                {fIdx === 3 && <Brain className="w-4 h-4" />}
                                                                {fIdx === 4 && <Users className="w-4 h-4" />}
                                                            </div>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Profile Mockup Wrapper */}
                                            <div className="flex-1 max-w-sm mx-auto lg:max-w-none w-full">
                                                <div className="bg-[#11131a] rounded-[2rem] p-8 border border-white/5 shadow-2xl relative overflow-hidden">
                                                    <div className="flex items-center gap-4 mb-8">
                                                        <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                                                            <ShieldCheck className="w-8 h-8" />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-xl font-bold text-white">Pallavi Singh</h4>
                                                            <p className="text-xs text-white/40 font-medium">4 Years Exp • Product Designer</p>
                                                        </div>
                                                    </div>

                                                    {/* Video Output */}
                                                    <div className="aspect-video bg-white/5 rounded-2xl mb-8 flex items-center justify-center relative group cursor-pointer overflow-hidden border border-white/5 shadow-inner">
                                                        <video
                                                            src="/assets/girl_talk.mp4"
                                                            autoPlay
                                                            loop
                                                            muted
                                                            playsInline
                                                            className="absolute inset-0 w-full h-full object-cover opacity-90 transition-opacity duration-700 group-hover:opacity-100"
                                                        />
                                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center relative z-10 shadow-xl opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all pointer-events-none">
                                                            <Play className="w-5 h-5 text-white fill-white" />
                                                        </div>
                                                    </div>

                                                    {/* Skills Chart Mock */}
                                                    <div className="space-y-4">
                                                        {[
                                                            { label: "Storytelling", val: "90%", color: "bg-emerald-500" },
                                                            { label: "Product Thinking", val: "80%", color: "bg-emerald-500" },
                                                            { label: "Visual Craft", val: "75%", color: "bg-emerald-500" },
                                                        ].map((skill, si) => (
                                                            <div key={si}>
                                                                <div className="flex justify-between text-[10px] font-black uppercase tracking-tighter text-white/50 mb-1.5">
                                                                    <span>{skill.label}</span>
                                                                    <span className="text-emerald-400">{skill.val}</span>
                                                                </div>
                                                                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                                    <motion.div
                                                                        initial={{ width: 0 }}
                                                                        whileInView={{ width: skill.val }}
                                                                        transition={{ delay: 0.5 + (si * 0.1), duration: 1 }}
                                                                        className={`h-full ${skill.color}`}
                                                                    />
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <h3 className="text-xl font-black text-slate-900 mb-6 leading-tight">
                                                {card.title}
                                            </h3>

                                            {card.tags && (
                                                <div className="flex flex-wrap gap-2 mb-8">
                                                    {card.tags.map((tag, tIdx) => (
                                                        <span key={tIdx} className="bg-slate-50 text-slate-400 font-bold text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-lg border border-slate-100">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            {card.gridItems && (
                                                <div className="grid grid-cols-2 gap-4 mt-auto">
                                                    {card.gridItems.map((item, gi) => (
                                                        <div key={gi} className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-center">
                                                            <div className="text-2xl mb-2">{item.icon}</div>
                                                            <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{item.label}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {card.gigs && (
                                                <div className="space-y-4 mt-auto">
                                                    {card.gigs.map((gig, gi) => (
                                                        <div key={gi} className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex gap-4 items-start">
                                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${gi === 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-indigo-50 text-indigo-600'}`}>
                                                                {gig.icon}
                                                            </div>
                                                            <div>
                                                                <div className="text-xs font-black text-slate-900">{gig.title}</div>
                                                                <div className={`text-[10px] font-bold ${gi === 0 ? 'text-emerald-500' : 'text-slate-400'}`}>{gig.reward || gig.description}</div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {card.image && (
                                                <div className="mt-auto relative h-56 -mx-8 -mb-8 overflow-hidden px-4">
                                                    <Image
                                                        src={card.image}
                                                        alt={card.title}
                                                        fill
                                                        className="object-contain object-bottom transition-transform group-hover:scale-105"
                                                    />
                                                </div>
                                            )}
                                        </>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
