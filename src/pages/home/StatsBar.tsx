
import type React from "react";

const stats = [
    { label: "Active Players", value: "10M+" },
    { label: "GOTY Awards", value: "24" },
    { label: "Published Titles", value: "12" },
    { label: "Years Experience", value: "15" },
];

export const StatsBar: React.FC = () => {
    return (
        <div className="bg-studio-card/80 relative z-20 -mt-25 mb-12 border-t border-white/10 backdrop-blur-md">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 divide-x divide-white/10 px-6 py-5 md:grid-cols-4 md:gap-y-0">
                {stats.map((stat, i) => (
                    <div key={i} className="px-4 text-center">
                        <div className="font-display mb-1 text-3xl font-bold text-white">
                            {stat.value}
                        </div>
                        <div className="text-studio-light font-sans text-xs tracking-widest uppercase">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
