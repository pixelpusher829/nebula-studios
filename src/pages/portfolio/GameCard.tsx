import type React from "react";
import { Link } from "react-router-dom";
import type { Game } from "@/shared/types/types";
import { PlatformList } from "./PlatformList";

interface GameCardProps {
	game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
	const inDevelopment = game.status === "in-development";

	return (
		<Link
			to={`/games/${game.slug}`}
			className="group bg-studio-card hover:shadow-studio-accent/10 relative flex flex-col overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
		>
			<div className="relative h-80 overflow-hidden">
				<img
					src={game.image}
					alt=""
					loading="lazy"
					className="h-full w-full origin-top object-cover object-top transition-transform duration-700 group-hover:scale-110"
				/>
				<div className="from-studio-card absolute inset-0 bg-linear-to-t via-transparent to-transparent opacity-80" />
				{inDevelopment && (
					<span className="bg-studio-secondary absolute top-4 left-4 rounded-sm px-3 py-1 text-xs font-bold tracking-wider text-white uppercase">
						In Development
					</span>
				)}
				<div className="bg-studio-black/40 absolute inset-0 flex items-center justify-center opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
					<span className="bg-studio-accent font-display translate-y-4 rounded px-6 py-2 text-sm font-bold tracking-wider text-white uppercase transition-transform duration-300 group-hover:translate-y-0">
						View Details
					</span>
				</div>
			</div>

			<div className="relative flex flex-1 flex-col p-6">
				<div className="mb-2 flex items-start justify-between">
					<span className="text-studio-accent border-studio-accent/30 bg-studio-accent/10 rounded border px-2 py-1 text-xs font-bold tracking-wider uppercase">
						{game.genre}
					</span>
					{game.score && (
						<span className="text-xs font-bold text-white" title="Metascore">
							<span className="text-studio-accent">{game.score}</span> / 100
						</span>
					)}
				</div>

				<h3 className="font-display group-hover:text-studio-accent mb-4 text-xl font-bold text-white uppercase transition-colors">
					{game.title}
				</h3>

				<div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
					<PlatformList platforms={game.platforms} />
					<span className="text-studio-light font-sans text-sm">
						{game.year}
					</span>
				</div>
			</div>
		</Link>
	);
};
