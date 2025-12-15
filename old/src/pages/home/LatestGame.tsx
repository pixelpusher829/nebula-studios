
import type React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import echosOfEternity from "@/assets/images/home/echos-featured.webp";

export const LatestGame: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-studio-black relative z-20 py-24">
            <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
                <div>
                    <h4 className="text-studio-accent font-display mb-2 font-bold tracking-widest uppercase">
                        Latest Release
                    </h4>
                    <h2 className="font-display mb-6 text-4xl leading-none font-bold text-white md:text-6xl">
                        ECHOES OF ETERNITY
                    </h2>
                    <p className="text-studio-light mb-8 text-lg leading-relaxed">
                        Dive into a shattered world where time is fractured. Master the
                        Chrono-Blade and rewrite history in our most ambitious Action RPG
                        yet. Winner of "Best Art Direction" at the 2024 Game Awards.
                    </p>
                    <button
                        onClick={() => navigate("/games")}
                        className="hover:text-studio-accent border-studio-accent inline-flex items-center gap-2 border-b pb-1 font-bold tracking-wide text-white uppercase transition-colors"
                    >
                        Explore The Game <ArrowRight className="h-4 w-4" />
                    </button>
                </div>
                <div className="group shadow-studio-accent/10 relative cursor-pointer overflow-hidden rounded-xl border border-white/5 shadow-2xl">
                    <img
                        src={echosOfEternity}
                        className="w-full transition-transform duration-700 group-hover:scale-110"
                        alt="Game Preview"
                    />
                    <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-transparent" />
                    <div className="bg-studio-accent font-display absolute right-6 bottom-6 rounded px-4 py-2 text-xl font-bold text-white">
                        9.8 / 10
                    </div>
                </div>
            </div>
        </div>
    );
};
