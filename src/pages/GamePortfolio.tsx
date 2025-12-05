import React, { useState } from "react";
import {
	Star,
	Monitor,
	Gamepad,
	Smartphone,
	X,
	Play,
	ShoppingCart,
} from "lucide-react";
import { Game } from "@/types/types";
import echosOfEternity from "@/images/games/echos-of-eternity.jpg";
import cyberStrike from "@/images/games/cyber-strike.jpg";
import starlightDrift from "@/images/games/starlight-drift.jpg";
import voidWalker from "@/images/games/void-walker.jpg";

const games: Game[] = [
	{
		id: "1",
		title: "ECHOES OF ETERNITY",
		genre: "Action RPG",
		image: `${echosOfEternity}`,
		rating: 4.9,
		platforms: ["PC", "PS5"],
		year: "2024",
		description:
			"Dive into a shattered world where time is fractured. Master the Chrono-Blade and rewrite history in this award-winning Action RPG.",
		features: ["40+ Hour Campaign", "Co-op Raids", "Unreal Engine 5 Graphics"],
	},
	{
		id: "2",
		title: "CYBER STRIKE",
		genre: "Competitive FPS",
		image:
			`${cyberStrike}`,
		rating: 4.7,
		platforms: ["PC", "XSX", "PS5"],
		year: "2023",
		description:
			"The ultimate 5v5 tactical shooter set in a neon-drenched metropolis. Choose your operative, master your abilities, and dominate the leaderboard.",
		features: [
			"120Hz Server Tick Rate",
			"Cross-Platform Play",
			"Seasonal Battle Pass",
		],
	},
	{
		id: "3",
		title: "STARLIGHT DRIFT",
		genre: "Sci-Fi Racing",
		image:
			`${starlightDrift}`,
		rating: 4.5,
		platforms: ["PC", "Mobile"],
		year: "2022",
		description:
			"Defy gravity in the galaxy’s most dangerous racing league. Customize your ship and drift through asteroid fields at mach speeds.",
		features: ["VR Support", "30+ Tracks", "Ship Customization"],
	},
	{
		id: "4",
		title: "VOID WALKER",
		genre: "Horror Survival",
		image:
			`${voidWalker}`,
		rating: 4.8,
		platforms: ["PC", "PS5"],
		year: "2023",
		description:
			"You are alone on Station Theta. Something is hunting you. Resource management meets psychological horror in this terrifying experience.",
		features: ["Dynamic AI Enemy", "Immersive Audio", "Multiple Endings"],
	},
];

export const GamePortfolio: React.FC = () => {
	const [selectedGame, setSelectedGame] = useState<Game | null>(null);

	return (
		<section className="pt-32 pb-24 bg-studio-dark relative min-h-screen">
			<div className="max-w-7xl mx-auto px-6">
				<div className="flex justify-between items-end mb-16">
					<div>
						<h4 className="text-studio-accent font-display font-bold tracking-widest uppercase mb-2">
							Our Portfolio
						</h4>
						<h2 className="text-4xl md:text-5xl font-display font-bold text-white">
							LATEST RELEASES
						</h2>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{games.map((game) => (
						<div
							key={game.id}
							className="group relative bg-studio-card rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-studio-accent/10">
							{/* Image Container */}
							<div className="relative h-80 overflow-hidden">
								<img
									src={game.image}
									alt={game.title}
									className="w-full h-full object-cover object-top  transition-transform duration-700 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-studio-card via-transparent to-transparent opacity-80" />

								{/* Overlay Button */}
								<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-studio-black/40 backdrop-blur-sm">
									<button
										onClick={() => setSelectedGame(game)}
										className="bg-studio-accent text-white px-6 py-2 rounded font-display font-bold uppercase tracking-wider text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-orange-600">
										View Details
									</button>
								</div>
							</div>

							{/* Content */}
							<div className="p-6 relative">
								<div className="flex justify-between items-start mb-2">
									<span className="text-xs font-bold text-studio-accent uppercase tracking-wider border border-studio-accent/30 px-2 py-1 rounded bg-studio-accent/10">
										{game.genre}
									</span>
									<div className="flex items-center gap-1 text-yellow-500">
										<Star className="w-3 h-3 fill-current" />
										<span className="text-xs font-bold text-white">
											{game.rating}
										</span>
									</div>
								</div>

								<h3 className="text-xl font-display font-bold text-white mb-4 line-clamp-1 group-hover:text-studio-accent transition-colors">
									{game.title}
								</h3>

								<div className="pt-4 border-t border-white/5 flex justify-between items-center">
									<div className="flex gap-3 text-studio-light">
										{game.platforms.includes("PC") && (
											<Monitor className="w-4 h-4" />
										)}
										{(game.platforms.includes("PS5") ||
											game.platforms.includes("XSX")) && (
											<Gamepad className="w-4 h-4" />
										)}
										{game.platforms.includes("Mobile") && (
											<Smartphone className="w-4 h-4" />
										)}
									</div>
									<span className="text-sm text-studio-light font-sans">
										{game.year}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Game Detail Modal */}
			{selectedGame && (
				<div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
					<div
						className="absolute inset-0 bg-studio-black/90 backdrop-blur-md"
						onClick={() => setSelectedGame(null)}
					/>
					<div className="relative w-full max-w-5xl bg-studio-card rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row max-h-[90vh]">
						{/* Modal Image Section */}
						<div className="md:w-1/2 relative h-64 md:h-auto">
							<img
								src={selectedGame.image}
								className="w-full h-full object-cover"
								alt={selectedGame.title}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-studio-card via-transparent to-transparent md:bg-gradient-to-r" />
							<button
								onClick={() => setSelectedGame(null)}
								className="absolute top-4 left-4 md:hidden bg-black/50 p-2 rounded-full text-white">
								<X className="w-5 h-5" />
							</button>
						</div>

						{/* Modal Content Section */}
						<div className="md:w-1/2 p-8 md:p-12 overflow-y-auto bg-studio-card">
							<div className="flex justify-end mb-6 hidden md:flex">
								<button
									onClick={() => setSelectedGame(null)}
									className="text-studio-light hover:text-white transition-colors">
									<X className="w-6 h-6" />
								</button>
							</div>

							<div className="space-y-6">
								<div>
									<div className="flex items-center gap-3 mb-3">
										<span className="bg-studio-accent text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
											{selectedGame.genre}
										</span>
										<span className="text-studio-light text-sm font-sans">
											{selectedGame.year}
										</span>
									</div>
									<h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2 leading-none">
										{selectedGame.title}
									</h2>
									<div className="flex items-center gap-2 text-yellow-500">
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className={`w-4 h-4 ${i < Math.floor(selectedGame.rating) ? "fill-current" : "text-gray-600"}`}
											/>
										))}
										<span className="text-white ml-2 text-sm font-bold">
											{selectedGame.rating}/5.0
										</span>
									</div>
								</div>

								<p className="text-studio-light font-sans leading-relaxed text-lg">
									{selectedGame.description}
								</p>

								<div className="space-y-3">
									<h4 className="text-white font-bold uppercase tracking-widest text-sm">
										Key Features
									</h4>
									<ul className="space-y-2">
										{selectedGame.features?.map((feature, idx) => (
											<li
												key={idx}
												className="flex items-center gap-2 text-studio-light text-sm">
												<div className="w-1.5 h-1.5 bg-studio-accent rounded-full" />
												{feature}
											</li>
										))}
									</ul>
								</div>

								<div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/5">
									<button className="flex-1 bg-studio-accent text-white py-4 rounded font-display font-bold uppercase tracking-wider hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
										<ShoppingCart className="w-4 h-4" /> Buy Now
									</button>
									<button className="flex-1 bg-white/5 text-white py-4 rounded font-display font-bold uppercase tracking-wider hover:bg-white/10 transition-colors flex items-center justify-center gap-2 border border-white/10">
										<Play className="w-4 h-4 fill-current" /> Trailer
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};
