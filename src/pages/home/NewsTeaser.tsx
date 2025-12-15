
import type React from "react";
import { Newspaper, ArrowRight, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const newsItems = [
    {
        title: "Behind the Scenes: Void Walker Sound Design",
        category: "Dev Diary",
        date: "Oct 24",
    },
    {
        title: "NebulaCon 2024 Recap & Highlights",
        category: "Community",
        date: "Sep 15",
    },
    {
        title: "Cyber Strike: Season 4 Roadmap",
        category: "Update",
        date: "Aug 30",
    },
];

export const NewsTeaser: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-studio-black py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-12 flex items-end justify-between">
                    <div>
                        <div className="mb-2 flex items-center gap-2">
                            <Newspaper className="text-studio-accent h-5 w-5" />
                            <h4 className="text-studio-accent font-display font-bold tracking-widest uppercase">
                                Recent Transmissions
                            </h4>
                        </div>
                        <h2 className="font-display text-4xl font-bold text-white">
                            LATEST NEWS
                        </h2>
                    </div>
                    <button
                        onClick={() => navigate("/news")}
                        className="text-studio-light hidden items-center gap-2 text-sm font-bold tracking-wide uppercase transition-colors hover:text-white md:flex"
                    >
                        View All <ArrowRight className="h-4 w-4" />
                    </button>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {newsItems.map((item, i) => (
                        <div
                            key={i}
                            onClick={() => navigate("/news")}
                            className="group bg-studio-card hover:border-studio-accent/50 cursor-pointer rounded-xl border border-white/5 p-6 transition-all hover:-translate-y-1"
                        >
                            <div className="mb-4 flex items-start justify-between">
                                <span className="text-studio-accent bg-studio-accent/10 rounded px-2 py-1 text-xs font-bold uppercase">
                                    {item.category}
                                </span>
                                <span className="text-studio-light font-mono text-xs">
                                    {item.date}
                                </span>
                            </div>
                            <h3 className="font-display group-hover:text-studio-accent mb-4 text-xl font-bold text-white transition-colors">
                                {item.title}
                            </h3>
                            <div className="text-studio-light flex items-center gap-2 text-sm font-bold uppercase">
                                Read More <ArrowUpRight className="h-4 w-4" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
