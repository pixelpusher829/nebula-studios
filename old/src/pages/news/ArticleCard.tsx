
import type React from "react";
import { Calendar, ArrowUpRight } from "lucide-react";
import type { NewsItem } from "@/shared/types/types";

interface ArticleCardProps {
    item: NewsItem;
    onOpenArticle: (item: NewsItem) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ item, onOpenArticle }) => {
    return (
        <article
            key={item.id}
            onClick={() => onOpenArticle(item)}
            className="group flex h-full cursor-pointer flex-col"
        >
            <div className="relative mb-6 aspect-video overflow-hidden rounded-lg">
                <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-studio-accent rounded-sm px-3 py-1 text-xs font-bold tracking-wider text-white uppercase">
                        {item.category}
                    </span>
                </div>
            </div>

            <div className="text-studio-light mb-3 flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
                <Calendar className="h-3 w-3" />
                {item.date}
            </div>

            <h3 className="font-display group-hover:text-studio-accent mb-3 text-2xl leading-tight font-bold text-white transition-colors">
                {item.title}
            </h3>

            <p className="text-studio-light mb-6 line-clamp-3 flex-grow font-sans text-sm leading-relaxed">
                {item.excerpt}
            </p>

            <div className="decoration-studio-accent mt-auto flex items-center gap-2 text-sm font-bold tracking-wide text-white uppercase underline-offset-4 group-hover:underline">
                Read Article <ArrowUpRight className="h-4 w-4" />
            </div>
        </article>
    );
};
