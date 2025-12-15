
import type React from "react";
import { useNavigate } from "react-router-dom";
import { teamMembers } from "@/pages/studio/studio-data";

export const Leadership: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-studio-black py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-12 flex items-end justify-between">
                    <div>
                        <h4 className="text-studio-accent font-display mb-2 font-bold tracking-widest uppercase">
                            Leadership
                        </h4>
                        <h2 className="font-display text-4xl font-bold text-white">
                            MEET THE TEAM
                        </h2>
                    </div>
                    <button
                        onClick={() => navigate("/careers")}
                        className="hover:text-studio-black hidden rounded border border-white/20 px-6 py-2 text-sm font-bold text-white uppercase transition-all hover:bg-white md:block"
                    >
                        Join Us
                    </button>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {teamMembers.map((member, i) => (
                        <div key={i} className="group">
                            <div className="bg-studio-card relative mb-4 overflow-hidden rounded-xl">
                                <img
                                    src={member.img}
                                    className="aspect-[3/4] w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                                    alt={member.name}
                                />
                                <div className="from-studio-black/80 absolute inset-0 flex items-end bg-gradient-to-t to-transparent p-6 opacity-0 transition-opacity group-hover:opacity-100">
                                    <div className="text-white">
                                        <div className="text-lg font-bold">{member.name}</div>
                                        <div className="text-studio-accent text-sm font-bold uppercase">
                                            {member.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:hidden">
                                <h3 className="text-lg font-bold text-white">
                                    {member.name}
                                </h3>
                                <p className="text-studio-light text-sm">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
