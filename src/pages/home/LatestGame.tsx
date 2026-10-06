import { ArrowRight, Award } from "lucide-react";
import type React from "react";
import { Link } from "react-router-dom";
import echoesFeatured from "@/assets/images/home/echos-featured.webp";
import { getGame } from "@/pages/portfolio/portfolio-data";

export const LatestGame: React.FC = () => {
	// biome-ignore lint/style/noNonNullAssertion: static data, guaranteed to exist
	const game = getGame("echoes-of-eternity")!;

	return (
		<section className="bg-studio-black relative z-20 py-24">
			<div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
				<div>
					<p className="text-studio-accent font-display mb-2 font-bold tracking-widest uppercase">
						Latest Release
					</p>
					<h2 className="font-display mb-6 text-4xl leading-none font-bold text-white uppercase md:text-6xl">
						{game.title}
					</h2>
					<p className="text-studio-light mb-6 text-lg leading-relaxed">
						{game.description}
					</p>
					{game.accolades && (
						<ul className="mb-8 flex flex-wrap gap-2">
							{game.accolades.map((a) => (
								<li
									key={a}
									className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold tracking-wide text-white uppercase"
								>
									<Award className="text-studio-accent h-3.5 w-3.5" /> {a}
								</li>
							))}
						</ul>
					)}
					<Link
						to={`/games/${game.slug}`}
						className="hover:text-studio-accent border-studio-accent inline-flex items-center gap-2 border-b pb-1 font-bold tracking-wide text-white uppercase transition-colors"
					>
						Explore The Game <ArrowRight className="h-4 w-4" />
					</Link>
				</div>
				<Link
					to={`/games/${game.slug}`}
					className="group shadow-studio-accent/10 relative block overflow-hidden rounded-xl border border-white/5 shadow-2xl"
					aria-label={`${game.title} details`}
				>
					<img
						src={echoesFeatured}
						loading="lazy"
						className="w-full transition-transform duration-700 group-hover:scale-110"
						alt=""
					/>
					<div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-transparent" />
					{game.score && (
						<div className="bg-studio-accent font-display absolute right-6 bottom-6 rounded px-4 py-2 text-xl font-bold text-white">
							{game.score} <span className="text-sm opacity-80">Metascore</span>
						</div>
					)}
				</Link>
			</div>
		</section>
	);
};
