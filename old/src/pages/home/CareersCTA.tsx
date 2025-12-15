
import type React from "react";
import { Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";
import careersImage from "@/assets/images/home/careers-bg.webp";

export const CareersCTA: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-studio-card relative overflow-hidden py-32">
            <div className="absolute inset-0">
                <img
                    src={careersImage}
                    className="h-full w-full object-cover opacity-20"
                    alt="Office"
                />
                <div className="from-studio-black via-studio-black/90 absolute inset-0 bg-gradient-to-r to-transparent" />
            </div>

            <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 md:flex-row">
                <div className="max-w-2xl">
                    <div className="mb-4 flex items-center gap-2">
                        <Briefcase className="text-studio-accent h-6 w-6" />
                        <h4 className="text-studio-accent font-display font-bold tracking-widest uppercase">
                            Careers
                        </h4>
                    </div>
                    <h2 className="font-display mb-6 text-5xl font-bold text-white">
                        YOUR LEGACY <br /> STARTS HERE
                    </h2>
                    <p className="text-studio-light mb-8 text-xl leading-relaxed">
                        We're looking for visionaries, rebels, and masters of their craft.
                        Open positions in Engineering, Art, Design, and QA.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => navigate("/careers")}
                            className="text-studio-black font-display hover:bg-studio-accent rounded bg-white px-8 py-3 font-bold tracking-wider uppercase transition-all hover:text-white"
                        >
                            View Open Positions
                        </button>
                    </div>
                </div>

                <div className="hidden md:block">
                    <div className="bg-studio-black/50 w-80 rounded-xl border border-white/10 p-8 backdrop-blur-md">
                        <h4 className="mb-4 text-left font-bold text-white uppercase">
                            We Are Hiring
                        </h4>
                        <ul className="space-y-3">
                            <li className="text-studio-light border-b border-white/10 pb-2 text-sm">
                                Senior Gameplay Engineer
                            </li>
                            <li className="text-studio-light border-b border-white/10 pb-2 text-sm">
                                Lead Concept Artist
                            </li>
                            <li className="text-studio-light border-b border-white/10 pb-2 text-sm">
                                Narrative Designer
                            </li>
                            <li className="text-studio-light pb-2 text-sm">
                                UI/UX Designer
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
