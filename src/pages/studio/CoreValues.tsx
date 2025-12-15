
import type React from "react";
import { values } from "@/pages/studio/studio-data";

export const CoreValues: React.FC = () => {
    return (
        <section className="bg-studio-dark border-y border-white/5 py-24">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="font-display mb-12 text-center text-4xl font-bold text-white uppercase">
                    Our DNA
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {values.map((val, i) => (
                        <div
                            key={i}
                            className="bg-studio-card hover:border-studio-accent group rounded-xl border border-white/5 p-8 transition-colors"
                        >
                            <div className="bg-studio-accent/10 text-studio-accent group-hover:bg-studio-accent mb-6 flex h-12 w-12 items-center justify-center rounded-lg transition-colors group-hover:text-white">
                                {val.icon}
                            </div>
                            <h3 className="font-display mb-3 text-xl font-bold text-white">
                                {val.title}
                            </h3>
                            <p className="text-studio-light text-sm leading-relaxed">
                                {val.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
