import type React from "react";
import type { NewsItem } from "@/shared/types/types";
import { ArticleCard } from "./ArticleCard";

interface RelatedArticlesProps {
	news: NewsItem[];
	current: NewsItem;
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({
	news,
	current,
}) => {
	// Prefer the same category, then fill with the most recent posts.
	const others = news.filter((n) => n.slug !== current.slug);
	const related = [
		...others.filter((n) => n.category === current.category),
		...others.filter((n) => n.category !== current.category),
	].slice(0, 3);

	return (
		<section className="bg-studio-dark border-t border-white/5 py-20">
			<div className="mx-auto max-w-7xl px-6">
				<h2 className="font-display border-studio-accent mb-10 border-l-4 pl-4 text-2xl font-bold text-white">
					Keep Reading
				</h2>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					{related.map((item) => (
						<ArticleCard key={item.slug} item={item} />
					))}
				</div>
			</div>
		</section>
	);
};
