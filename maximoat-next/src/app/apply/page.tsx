/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ShieldCheck, ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
    fullName: z.string().min(2, "Name is too short"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Invalid phone number"),
    portfolioUrl: z.string().url("Invalid URL"),
    linkedinUrl: z.string().optional(),
    totalExp: z.string(),
    relevantExp: z.string(),
    location: z.string().min(2, "Location is required"),
    jobRole: z.string(),
    goals: z.array(z.string()).min(1, "Select at least one goal"),
});

export default function ApplyPage() {
    const [step, setStep] = useState(1);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            portfolioUrl: "",
            linkedinUrl: "",
            totalExp: "",
            relevantExp: "",
            location: "",
            jobRole: "UX Designer",
            goals: [],
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        alert("Application submitted successfully!");
    }

    const nextStep = async () => {
        const fields = step === 1
            ? ["fullName", "email", "phone", "portfolioUrl"]
            : [];

        // @ts-expect-error - trigger types
        const isValid = await form.trigger(fields);
        if (isValid) setStep(2);
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-[#1A1A1A]">
            <header className="absolute top-0 left-0 right-0 p-8 z-50">
                <Link href="/">
                    <Image src="/assets/logo.svg" alt="Maximoat" width={120} height={30} className="brightness-0 invert" />
                </Link>
            </header>

            <section className="w-full md:w-1/2 p-8 md:p-24 flex flex-col justify-center relative overflow-hidden bg-slate-950">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(16,185,129,0.1),transparent_50%)]" />
                </div>

                <div className="relative z-10 max-w-lg">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 text-white/60 font-semibold text-xs tracking-wider"
                    >
                        <ShieldCheck className="w-3 h-3 text-emerald-400" />
                        UX PRO BOOTCAMP
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-serif font-black text-white mb-6 leading-[1.1] tracking-tight"
                    >
                        Step into your <br />
                        <span className="text-emerald-400 italic">next level</span> as a designer.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/50 font-medium mb-12 max-w-sm"
                    >
                        Signature 4-week program for experienced designers to close skill gaps and master agency-grade workflows.
                    </motion.p>

                    <div className="space-y-8">
                        <div className="flex gap-4 items-start">
                            <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-1">
                                <Check className="w-4 h-4" strokeWidth={3} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">AI-Powered Fit Analysis</h4>
                                <p className="text-sm text-white/40">Benchmark against industry standards.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-1">
                                <Check className="w-4 h-4" strokeWidth={3} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">1:1 Mentorship</h4>
                                <p className="text-sm text-white/40">Direct feedback from FAANG leaders.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full md:w-1/2 bg-[#FDFCFB] p-8 md:p-24 flex items-center">
                <div className="w-full max-w-md mx-auto">
                    <div className="mb-10 text-center md:text-left">
                        <h2 className="text-3xl font-black text-slate-900 mb-2 font-serif">Check Eligibility</h2>
                        <p className="text-slate-400 font-medium">Complete the fields below to start your transformation.</p>
                    </div>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <AnimatePresence mode="wait">
                                {step === 1 ? (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-5"
                                    >
                                        <FormField
                                            control={form.control}
                                            name="fullName"
                                            render={({ field }: { field: any }) => (
                                                <FormItem>
                                                    <FormLabel className="text-slate-900 font-bold uppercase tracking-widest text-[10px]">Full Name *</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="John Doe" className="h-14 bg-slate-100/50 border-slate-200 rounded-xl font-medium" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }: { field: any }) => (
                                                <FormItem>
                                                    <FormLabel className="text-slate-900 font-bold uppercase tracking-widest text-[10px]">Email *</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="john@example.com" className="h-14 bg-slate-100/50 border-slate-200 rounded-xl font-medium" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }: { field: any }) => (
                                                <FormItem>
                                                    <FormLabel className="text-slate-900 font-bold uppercase tracking-widest text-[10px]">Mobile Number *</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="+91 00000 00000" className="h-14 bg-slate-100/50 border-slate-200 rounded-xl font-medium" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="portfolioUrl"
                                            render={({ field }: { field: any }) => (
                                                <FormItem>
                                                    <FormLabel className="text-slate-900 font-bold uppercase tracking-widest text-[10px]">Portfolio Link *</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="https://..." className="h-14 bg-slate-100/50 border-slate-200 rounded-xl font-medium" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <Button
                                            type="button"
                                            onClick={nextStep}
                                            className="w-full h-14 bg-slate-950 text-white rounded-2xl font-black text-lg hover:bg-slate-800 transition-all flex gap-3 group mt-4"
                                        >
                                            Continue
                                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="space-y-5"
                                    >
                                        <div className="grid grid-cols-2 gap-4">
                                            <FormField
                                                control={form.control}
                                                name="totalExp"
                                                render={({ field }: { field: any }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-slate-900 font-bold uppercase tracking-widest text-[10px]">Total Exp *</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger className="h-14 bg-slate-100/50 border-slate-200 rounded-xl font-medium">
                                                                    <SelectValue placeholder="Select..." />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                <SelectItem value="0-1">0-1 Year</SelectItem>
                                                                <SelectItem value="1-3">1-3 Years</SelectItem>
                                                                <SelectItem value="3-5">3-5 Years</SelectItem>
                                                                <SelectItem value="5+">5+ Years</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="relevantExp"
                                                render={({ field }: { field: any }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-slate-900 font-bold uppercase tracking-widest text-[10px]">Relevant Exp *</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger className="h-14 bg-slate-100/50 border-slate-200 rounded-xl font-medium">
                                                                    <SelectValue placeholder="Select..." />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                <SelectItem value="0-1">0-1 Year</SelectItem>
                                                                <SelectItem value="1-3">1-3 Years</SelectItem>
                                                                <SelectItem value="3-5">3-5 Years</SelectItem>
                                                                <SelectItem value="5+">5+ Years</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <FormField
                                            control={form.control}
                                            name="location"
                                            render={({ field }: { field: any }) => (
                                                <FormItem>
                                                    <FormLabel className="text-slate-900 font-bold uppercase tracking-widest text-[10px]">Current Location *</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="City, Country" className="h-14 bg-slate-100/50 border-slate-200 rounded-xl font-medium" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormItem className="pt-2">
                                            <FormLabel className="text-slate-900 font-bold uppercase tracking-widest text-[10px] block mb-4">Primary Goals *</FormLabel>
                                            <div className="grid gap-3">
                                                {["Improving my portfolio", "Improve design skills", "Master interviews"].map((goal) => (
                                                    <FormField
                                                        key={goal}
                                                        control={form.control}
                                                        name="goals"
                                                        render={({ field }: { field: any }) => (
                                                            <FormItem className="flex items-center space-x-3 space-y-0 bg-white border border-slate-200 p-4 rounded-xl cursor-pointer hover:border-emerald-500/50 transition-colors">
                                                                <FormControl>
                                                                    <Checkbox
                                                                        checked={field.value?.includes(goal)}
                                                                        onCheckedChange={(checked: any) => {
                                                                            return checked
                                                                                ? field.onChange([...field.value, goal])
                                                                                : field.onChange(field.value?.filter((value: string) => value !== goal));
                                                                        }}
                                                                    />
                                                                </FormControl>
                                                                <FormLabel className="font-semibold text-slate-700 cursor-pointer">{goal}</FormLabel>
                                                            </FormItem>
                                                        )}
                                                    />
                                                ))}
                                            </div>
                                        </FormItem>

                                        <Button
                                            type="submit"
                                            className="w-full h-14 bg-emerald-500 text-white rounded-2xl font-black text-lg hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20 mt-4"
                                        >
                                            Submit Application
                                        </Button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </Form>

                    <footer className="mt-12 text-center opacity-30 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        &copy; 2026 Maximoat &bull; Secure Application Funnel
                    </footer>
                </div>
            </section>
        </div>
    );
}
