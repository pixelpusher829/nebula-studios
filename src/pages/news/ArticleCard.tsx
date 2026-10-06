import { ArrowUpRight, Calendar } from "lucide-react";
import type React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "@/shared/lib/format";
import type { NewsItem } from "@/shared/types/types";

interface ArticleCardProps {
	item: NewsItem;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ item }) => {
	return (
		<Link to={`/news/${item.slug}`} className="group flex h-full flex-col">
			<div className="relative mb-6 aspect-video overflow-hidden rounded-lg">
				<img
					src={item.image}
					alt=""
					loading="lazy"
					className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
				/>
				<span className="bg-studio-accent absolute top-4 left-4 rounded-sm px-3 py-1 text-xs font-bold tracking-wider text-white uppercase">
					{item.category}
				</span>
			</div>

			<div className="text-studio-light mb-3 flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
				<Calendar className="h-3 w-3" />
				<time dateTime={item.date}>{formatDate(item.date)}</time>
			</div>

			<h3 className="font-display group-hover:text-studio-accent mb-3 text-2xl leading-tight font-bold text-white transition-colors">
				{item.title}
			</h3>

			<p className="text-studio-light mb-6 line-clamp-3 grow font-sans text-sm leading-relaxed">
				{item.excerpt}
			</p>

			<span className="decoration-studio-accent mt-auto flex items-center gap-2 text-sm font-bold tracking-wide text-white uppercase underline-offset-4 group-hover:underline">
				Read Article <ArrowUpRight className="h-4 w-4" />
			</span>
		</Link>
	);
};
