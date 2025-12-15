
import type React from "react";
import { Users, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import teamImage from "@/assets/images/home/nebula-team.webp";

export const StudioTeaser: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-studio-dark relative border-t border-white/5 py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid items-center gap-16 md:grid-cols-2">
                    <div className="relative order-2 md:order-1">
                        <div className="border-studio-accent/20 absolute -top-4 -left-4 z-0 h-full w-full rounded-xl border-2"></div>
                        <img
                            src={teamImage}
                            alt="The Team"
                            className="relative z-10 w-full rounded-xl shadow-2xl"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="mb-4 flex items-center gap-2">
                            <Users className="text-studio-accent h-6 w-6" />
                            <h4 className="text-studio-accent font-display font-bold tracking-widest uppercase">
                                The Collective
                            </h4>
                        </div>
                        <h2 className="font-display mb-6 text-4xl font-bold text-white md:text-5xl">
                            CRAFTING WORLDS <br /> SINCE 2010
                        </h2>
                        <p className="text-studio-light mb-8 text-lg leading-relaxed">
                            We are a team of 200+ dreamers, engineers, and artists. From our
                            HQ in San Francisco to our remote teams globally, we are united
                            by a single mission: to create experiences that matter.
                        </p>
                        <button
                            onClick={() => navigate("/studio")}
                            className="hover:text-studio-accent inline-flex items-center gap-2 font-bold tracking-wide text-white uppercase transition-colors"
                        >
                            Meet The Team <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
