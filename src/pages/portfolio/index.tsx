import type React from "react";
import { PageHeader } from "@/shared/components/PageHeader";
import { Seo } from "@/shared/components/Seo";
import { GameCard } from "./GameCard";
import { games } from "./portfolio-data";

export const GamePortfolio: React.FC = () => {
	return (
		<section className="bg-studio-dark relative min-h-screen pt-32 pb-24">
			<Seo
				title="Games"
				description="Echoes of Eternity, Cyber Strike, Void Walker, Starlight Drift and what comes next. Explore every Nebula Studios game."
			/>
			<div className="mx-auto max-w-7xl px-6">
				<PageHeader
					eyebrow="Our Portfolio"
					title="Worlds We've Built"
					intro="From the racer that started it all to the RPG that defined a generation, every Nebula game is built to be played for years, not hours."
				/>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{games.map((game) => (
						<GameCard key={game.slug} game={game} />
					))}
				</div>
			</div>
		</section>
	);
};
