import Image from "next/image";

export function Footer() {
    return (
        <footer className="py-20 bg-slate-950 text-white text-center border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="mb-8 flex justify-center">
                    <div className="bg-white p-2 rounded-xl">
                        <Image src="/assets/logo.svg" alt="Maximoat" width={120} height={32} className="h-8 w-auto" />
                    </div>
                </div>
                <p className="text-slate-500 font-medium max-w-md mx-auto leading-relaxed">
                    Crafted for the elite 1% of designers. Maximoat is a property of 91signals Agency.
                </p>
                <div className="mt-12 pt-12 border-t border-white/5 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em]">
                    © 2026 Maximoat. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
