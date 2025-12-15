
import type React from "react";

export const Timeline: React.FC = () => {
    return (
        <section className="bg-studio-card relative overflow-hidden py-24">
            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <h2 className="font-display mb-16 text-center text-4xl font-bold text-white uppercase">
                    Our Journey
                </h2>

                <div className="relative">
                    {/* Center Line (Desktop) / Left Line (Mobile) */}
                    <div className="absolute top-0 bottom-0 left-4 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {/* Item 1 (Left) */}
                        <div className="relative flex flex-col items-center justify-between md:flex-row">
                            <div className="pl-12 md:w-[calc(50%-3rem)] md:pl-0 md:text-right">
                                <span className="text-studio-accent mb-1 block text-sm font-bold tracking-widest uppercase">
                                    2010
                                </span>
                                <h3 className="mb-2 text-2xl font-bold text-white">
                                    The Beginning
                                </h3>
                                <p className="text-studio-light">
                                    Nebula Studios is founded in a small garage in Seattle by
                                    three industry veterans.
                                </p>
                            </div>
                            <div className="bg-studio-accent border-studio-card absolute top-1 left-[11px] h-2.5 w-2.5 rounded-full border-4 md:left-1/2 md:-translate-x-1/2"></div>
                            <div className="hidden md:block md:w-[calc(50%-3rem)]"></div>
                        </div>

                        {/* Item 2 (Right) */}
                        <div className="relative flex flex-col items-center justify-between md:flex-row">
                            <div className="hidden md:block md:w-[calc(50%-3rem)]"></div>
                            <div className="border-studio-card absolute top-1 left-[11px] h-2.5 w-2.5 rounded-full border-4 bg-white md:left-1/2 md:-translate-x-1/2"></div>
                            <div className="pl-12 md:w-[calc(50%-3rem)] md:pl-0">
                                <span className="mb-1 block text-sm font-bold tracking-widest text-white uppercase">
                                    2014
                                </span>
                                <h3 className="mb-2 text-2xl font-bold text-white">
                                    First Major Hit
                                </h3>
                                <p className="text-studio-light">
                                    Released "Starlight Drift", which sold 2 million copies in
                                    its first week.
                                </p>
                            </div>
                        </div>

                        {/* Item 3 (Left) */}
                        <div className="relative flex flex-col items-center justify-between md:flex-row">
                            <div className="pl-12 md:w-[calc(50%-3rem)] md:pl-0 md:text-right">
                                <span className="mb-1 block text-sm font-bold tracking-widest text-white uppercase">
                                    2020
                                </span>
                                <h3 className="mb-2 text-2xl font-bold text-white">
                                    Global Expansion
                                </h3>
                                <p className="text-studio-light">
                                    Opened offices in London and Tokyo to support 24/7 live
                                    service operations.
                                </p>
                            </div>
                            <div className="border-studio-card absolute top-1 left-[11px] h-2.5 w-2.5 rounded-full border-4 bg-white md:left-1/2 md:-translate-x-1/2"></div>
                            <div className="hidden md:block md:w-[calc(50%-3rem)]"></div>
                        </div>

                        {/* Item 4 (Right) */}
                        <div className="relative flex flex-col items-center justify-between md:flex-row">
                            <div className="hidden md:block md:w-[calc(50%-3rem)]"></div>
                            <div className="bg-studio-accent border-studio-card absolute top-1 left-[11px] h-2.5 w-2.5 animate-pulse rounded-full border-4 md:left-1/2 md:-translate-x-1/2"></div>
                            <div className="pl-12 md:w-[calc(50%-3rem)] md:pl-0">
                                <span className="text-studio-accent mb-1 block text-sm font-bold tracking-widest uppercase">
                                    2024
                                </span>
                                <h3 className="mb-2 text-2xl font-bold text-white">
                                    Echoes of Eternity
                                </h3>
                                <p className="text-studio-light">
                                    Our most ambitious title to date wins "Best Art Direction"
                                    at The Game Awards.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
