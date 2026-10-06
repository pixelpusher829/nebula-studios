import { ArrowRight, ArrowUpRight, Newspaper } from "lucide-react";
import type React from "react";
import { Link } from "react-router-dom";
import { news } from "@/pages/news/news-data";
import { formatDate } from "@/shared/lib/format";

export const NewsTeaser: React.FC = () => {
	return (
		<section className="bg-studio-black py-24">
			<div className="mx-auto max-w-7xl px-6">
				<div className="mb-12 flex items-end justify-between">
					<div>
						<div className="mb-2 flex items-center gap-2">
							<Newspaper className="text-studio-accent h-5 w-5" />
							<p className="text-studio-accent font-display font-bold tracking-widest uppercase">
								Recent Transmissions
							</p>
						</div>
						<h2 className="font-display text-4xl font-bold text-white">
							LATEST NEWS
						</h2>
					</div>
					<Link
						to="/news"
						className="text-studio-light hidden items-center gap-2 text-sm font-bold tracking-wide uppercase transition-colors hover:text-white md:flex"
					>
						View All <ArrowRight className="h-4 w-4" />
					</Link>
				</div>

				<div className="grid gap-8 md:grid-cols-3">
					{news.slice(0, 3).map((item) => (
						<Link
							key={item.slug}
							to={`/news/${item.slug}`}
							className="group bg-studio-card hover:border-studio-accent/50 flex flex-col rounded-xl border border-white/5 p-6 transition-all hover:-translate-y-1"
						>
							<div className="mb-4 flex items-start justify-between">
								<span className="text-studio-accent bg-studio-accent/10 rounded px-2 py-1 text-xs font-bold uppercase">
									{item.category}
								</span>
								<time
									dateTime={item.date}
									className="text-studio-light font-mono text-xs"
								>
									{formatDate(item.date)}
								</time>
							</div>
							<h3 className="font-display group-hover:text-studio-accent mb-4 text-xl font-bold text-white transition-colors">
								{item.title}
							</h3>
							<span className="text-studio-light mt-auto flex items-center gap-2 text-sm font-bold uppercase">
								Read More <ArrowUpRight className="h-4 w-4" />
							</span>
						</Link>
					))}
				</div>

				<Link
					to="/news"
					className="text-studio-light mt-8 flex items-center justify-center gap-2 text-sm font-bold tracking-wide uppercase md:hidden"
				>
					View All News <ArrowRight className="h-4 w-4" />
				</Link>
			</div>
		</section>
	);
};
