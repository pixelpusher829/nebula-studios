
import type React from "react";
import type { NewsItem } from "@/shared/types/types";

interface RelatedArticlesProps {
    news: NewsItem[];
    currentArticleId: string;
    onOpenArticle: (item: NewsItem) => void;
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({ news, currentArticleId, onOpenArticle }) => {
    return (
        <div className="bg-studio-dark border-t border-white/5 py-20">
            <div className="mx-auto max-w-7xl px-6">
                <h3 className="font-display border-studio-accent mb-10 border-l-4 pl-4 text-2xl font-bold text-white">
                    Related Articles
                </h3>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {news
                        .filter((n) => n.id !== currentArticleId)
                        .slice(0, 3)
                        .map((item) => (
                            <div
                                key={item.id}
                                onClick={() => onOpenArticle(item)}
                                className="group cursor-pointer"
                            >
                                <div className="relative mb-4 h-48 overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={item.image}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        alt={item.title}
                                    />
                                    <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-transparent"></div>
                                    <span className="bg-studio-black/80 absolute top-2 left-2 rounded px-2 py-1 text-[10px] font-bold tracking-wider text-white uppercase backdrop-blur">
                                        {item.category}
                                    </span>
                                </div>
                                <h4 className="font-display group-hover:text-studio-accent mb-2 text-xl leading-tight font-bold text-white transition-colors">
                                    {item.title}
                                </h4>
                                <span className="text-studio-light text-xs font-bold tracking-wide uppercase">
                                    {item.date}
                                </span>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};
