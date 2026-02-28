"use client";

import { motion } from "framer-motion";
import { Search, Rocket, Trophy } from "lucide-react";

const nodes = [
    {
        icon: <Search className="w-5 h-5 text-slate-950" />,
        label: "Step 01",
        subcopy: "Expert Portfolio Audit",
    },
    {
        icon: <Rocket className="w-5 h-5 text-slate-950" />,
        label: "Step 02",
        subcopy: "30-Day Transformation",
    },
    {
        icon: <Trophy className="w-5 h-5 text-slate-950" />,
        label: "Result",
        subcopy: "Verified Pro Status",
    },
];

export function PhasedRoadmap() {
    return (
        <div className="py-12 px-6">
            <div className="max-w-4xl mx-auto flex items-start justify-center relative">
                {nodes.map((node, i) => (
                    <div key={i} className="flex items-start flex-1 last:flex-none">
                        {/* Node */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center gap-4 w-32 md:w-40 text-center relative z-10"
                        >
                            {/* Badge for Current Step (Optional/Visual) */}
                            {i === 0 && (
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-950 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md shadow-xl flex flex-col gap-0.5 min-w-[120px]">
                                    <span className="relative z-10">AUDIT IN PROGRESS</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent w-full h-full animate-[scan_2s_linear_infinite]" />
                                </div>
                            )}

                            <div className="w-12 h-12 md:w-14 md:h-14 bg-white border-2 border-slate-950 rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_#0f172a] transform transition-transform hover:scale-110">
                                {node.icon}
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] font-black text-slate-950 uppercase tracking-widest leading-none">
                                    {node.label}
                                </span>
                                <span className="text-xs font-semibold text-slate-400 leading-tight">
                                    {node.subcopy}
                                </span>
                            </div>
                        </motion.div>

                        {/* Connecting Line */}
                        {i < nodes.length - 1 && (
                            <div className="flex-1 h-[2px] mt-6 md:mt-7 border-t-2 border-dashed border-slate-200 relative">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 1, delay: i * 0.3 }}
                                    viewport={{ once: true }}
                                    className="absolute top-[-2px] left-0 h-[2px] border-t-2 border-slate-950"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <style jsx global>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
        </div>
    );
}
