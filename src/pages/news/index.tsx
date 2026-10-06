import { ArrowUpRight } from "lucide-react";
import type React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { PageHeader } from "@/shared/components/PageHeader";
import { Seo } from "@/shared/components/Seo";
import { formatDate } from "@/shared/lib/format";
import { ArticleCard } from "./ArticleCard";
import { news } from "./news-data";

const ALL = "All";
const categories = [ALL, ...new Set(news.map((n) => n.category))];

export const News: React.FC = () => {
	// Category lives in the URL so filtered views are shareable and survive back/forward.
	const [params, setParams] = useSearchParams();
	const active = params.get("category") ?? ALL;
	const filtered =
		active === ALL ? news : news.filter((n) => n.category === active);
	const [featured, ...rest] = filtered;

	const select = (category: string) =>
		setParams(category === ALL ? {} : { category }, {
			replace: true,
			preventScrollReset: true,
		});

	return (
		<section className="bg-studio-black relative min-h-screen">
			<Seo
				title="News"
				description="Dev diaries, patch notes, tech deep-dives and studio culture from the teams at Nebula Studios."
			/>
			<div className="mx-auto max-w-7xl px-6 pt-32 pb-24">
				<PageHeader
					eyebrow="Recent Transmissions"
					title="News & Dev Diaries"
					intro="Patch notes, behind-the-scenes stories and updates straight from the teams making our games."
				/>

				<nav
					className="mb-12 flex flex-wrap gap-2"
					aria-label="Filter by category"
				>
					{categories.map((c) => (
						<button
							key={c}
							type="button"
							onClick={() => select(c)}
							aria-pressed={active === c}
							className={`rounded-full border px-4 py-2 text-xs font-bold tracking-wider uppercase transition-colors ${active === c ? "bg-studio-accent border-studio-accent text-white" : "text-studio-light border-white/10 hover:border-white/40 hover:text-white"}`}
						>
							{c}
						</button>
					))}
				</nav>

				{featured && (
					<Link
						to={`/news/${featured.slug}`}
						className="group bg-studio-card mb-16 grid overflow-hidden rounded-2xl border border-white/5 lg:grid-cols-2"
					>
						<div className="aspect-video overflow-hidden lg:aspect-auto">
							<img
								src={featured.image}
								alt=""
								className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
							/>
						</div>
						<div className="flex flex-col justify-center p-8 md:p-12">
							<div className="mb-4 flex items-center gap-3">
								<span className="bg-studio-accent rounded-sm px-3 py-1 text-xs font-bold tracking-wider text-white uppercase">
									{featured.category}
								</span>
								<time
									dateTime={featured.date}
									className="text-studio-light text-xs font-bold tracking-widest uppercase"
								>
									{formatDate(featured.date)}
								</time>
							</div>
							<h2 className="font-display group-hover:text-studio-accent mb-4 text-3xl leading-tight font-bold text-white transition-colors md:text-4xl">
								{featured.title}
							</h2>
							<p className="text-studio-light mb-8 text-lg leading-relaxed">
								{featured.excerpt}
							</p>
							<span className="flex items-center gap-2 text-sm font-bold tracking-wide text-white uppercase">
								Read Article <ArrowUpRight className="h-4 w-4" />
							</span>
						</div>
					</Link>
				)}

				<div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3">
					{rest.map((item) => (
						<ArticleCard key={item.slug} item={item} />
					))}
				</div>
			</div>
		</section>
	);
};
