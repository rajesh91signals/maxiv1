"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
    {
        question: "Is this program for absolute beginners?",
        answer: "No. This program is designed for experienced designers who have potential but are struggling with portfolio craft, storytelling, and landing interviews. We'll be launching a beginner program shortly, stay tuned.",
        cta: "Audit My Skills Now",
    },
    {
        question: "I’ve finished a bootcamp but I'm not getting hired. Can Maximoat help?",
        answer: "This is a very common challenge. Most bootcamp portfolios end up looking 'cookie-cutter'. Maximoat’s expert-led audit and transformation program helps you bridge these specific gaps, moving beyond generic templates to build a 'Decision-Ready' profile.",
        cta: "Audit My Portfolio Now",
    },
    {
        question: "What do I get as part of the Audit and is the fee deductible?",
        answer: "Unlike generic automated scans, our audit provides a deep-dive evaluation. You get an AI-powered Portfolio Review, Expert Design Audit, Gap Analysis, Mock Interview, and a 1:1 Consultation. The ₹2,500 fee is fully deductible from the transformation program fee.",
    },
    {
        question: "How do I qualify for the Verified Pro badge?",
        answer: "In the audit, if you score 80 and above, you automatically qualify for the Verified Pro badge program. Else, you will need to complete the transformation program and pass a final assessment to earn your badge.",
    },
];

export function FAQ() {
    return (
        <section className="py-24 px-6 bg-white dotted-bg">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white border-2 border-slate-900 rounded-[2rem] shadow-[10px_10px_0px_0px_#0f172a] overflow-hidden">
                    <div className="p-8 md:p-12 border-b-2 border-slate-900 bg-slate-50/50">
                        <h2 className="text-3xl font-serif font-black text-slate-900 tracking-tight">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="p-6 md:p-10">
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, i) => (
                                <AccordionItem key={i} value={`item-${i}`} className="border-b border-slate-100 last:border-0 py-2">
                                    <AccordionTrigger className="text-left font-bold text-slate-900 text-lg hover:no-underline hover:text-emerald-700 transition-colors">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-500 text-base leading-relaxed pt-2">
                                        <p>{faq.answer}</p>
                                        {faq.cta && (
                                            <div className="mt-4">
                                                <Link href="#pricing">
                                                    <Button variant="link" className="p-0 h-auto text-emerald-600 font-bold hover:text-emerald-800 flex items-center gap-1">
                                                        {faq.cta} →
                                                    </Button>
                                                </Link>
                                            </div>
                                        )}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
}
