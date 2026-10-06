import { ArrowLeft, Award, Check, ExternalLink, Play } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { NotFound } from "@/pages/404";
import { Seo } from "@/shared/components/Seo";
import { VideoDialog } from "@/shared/components/VideoDialog";
import type { Game } from "@/shared/types/types";
import { GameCard } from "./GameCard";
import { PlatformList } from "./PlatformList";
import { games, getGame } from "./portfolio-data";

export const GameDetail: React.FC = () => {
	const { slug = "" } = useParams();
	const game = getGame(slug);
	if (!game) return <NotFound />;
	// Keyed so gallery/trailer state resets when navigating between games.
	return <GameDetailView key={game.slug} game={game} />;
};

const GameDetailView: React.FC<{ game: Game }> = ({ game }) => {
	const [trailerOpen, setTrailerOpen] = useState(false);
	const [activeImage, setActiveImage] = useState(0);

	const otherGames = games
		.filter((g) => g.slug !== game.slug && g.status === "released")
		.slice(0, 3);
	const shownImage = game.gallery[activeImage] ?? game.image;

	return (
		<article className="bg-studio-black">
			<Seo
				title={game.title}
				description={game.description}
				image={game.image}
			/>
			{game.trailerId && (
				<VideoDialog
					videoId={trailerOpen ? game.trailerId : null}
					title={`${game.title} trailer`}
					onClose={() => setTrailerOpen(false)}
				/>
			)}

			{/* Hero */}
			<header className="relative flex min-h-[75vh] items-end overflow-hidden">
				<img
					src={game.image}
					alt=""
					className="absolute inset-0 h-full w-full object-cover object-top"
				/>
				<div className="from-studio-black via-studio-black/60 absolute inset-0 bg-linear-to-t to-black/30" />

				<div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-16">
					<Link
						to="/games"
						className="hover:bg-studio-accent mb-8 inline-flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-xs font-bold tracking-wide text-white/80 uppercase backdrop-blur-md transition-all hover:text-white"
					>
						<ArrowLeft className="h-4 w-4" /> All Games
					</Link>
					<div className="mb-4 flex flex-wrap items-center gap-3">
						<span className="bg-studio-accent rounded-sm px-3 py-1 text-xs font-bold tracking-wider text-white uppercase">
							{game.genre}
						</span>
						<span className="text-sm font-bold tracking-widest text-white/80 uppercase">
							{game.status === "in-development"
								? "In Development"
								: `Released ${game.year}`}
						</span>
					</div>
					<h1 className="font-display mb-4 text-5xl leading-none font-bold text-white uppercase md:text-7xl lg:text-8xl">
						{game.title}
					</h1>
					<p className="mb-10 max-w-2xl text-xl text-white/90">
						{game.tagline}
					</p>

					<div className="flex flex-col gap-4 sm:flex-row">
						{game.trailerId && (
							<button
								type="button"
								onClick={() => setTrailerOpen(true)}
								className="bg-studio-accent font-display flex items-center justify-center gap-2 rounded px-8 py-4 font-bold tracking-wider text-white uppercase transition-colors hover:bg-orange-600"
							>
								<Play className="h-4 w-4 fill-current" /> Watch Trailer
							</button>
						)}
						{game.status === "in-development" ? (
							<Link
								to="/careers"
								className="font-display flex items-center justify-center gap-2 rounded border border-white/20 bg-white/5 px-8 py-4 font-bold tracking-wider text-white uppercase backdrop-blur-sm transition-colors hover:bg-white/15"
							>
								Help Us Build It
							</Link>
						) : (
							<a
								href="#buy"
								className="font-display flex items-center justify-center gap-2 rounded border border-white/20 bg-white/5 px-8 py-4 font-bold tracking-wider text-white uppercase backdrop-blur-sm transition-colors hover:bg-white/15"
							>
								Where To Buy
							</a>
						)}
					</div>
				</div>
			</header>

			{/* Body */}
			<div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-3">
				<div className="space-y-12 lg:col-span-2">
					<section className="space-y-6">
						<h2 className="font-display text-3xl font-bold text-white uppercase">
							About The Game
						</h2>
						{game.longDescription.map((p) => (
							<p
								key={p.slice(0, 32)}
								className="text-studio-light text-lg leading-relaxed"
							>
								{p}
							</p>
						))}
					</section>

					{game.gallery.length > 1 && (
						<section aria-labelledby="gallery-heading">
							<h2
								id="gallery-heading"
								className="font-display mb-6 text-3xl font-bold text-white uppercase"
							>
								Gallery
							</h2>
							<div className="mb-4 aspect-video overflow-hidden rounded-xl border border-white/10">
								<img
									src={shownImage}
									alt={`${game.title} screenshot ${activeImage + 1}`}
									className="h-full w-full object-cover object-top"
								/>
							</div>
							<ul className="grid grid-cols-4 gap-3 sm:grid-cols-5">
								{game.gallery.map((src, i) => (
									<li key={src}>
										<button
											type="button"
											onClick={() => setActiveImage(i)}
											aria-label={`Show screenshot ${i + 1}`}
											aria-pressed={i === activeImage}
											className={`aspect-video w-full overflow-hidden rounded-lg border-2 transition-all ${i === activeImage ? "border-studio-accent" : "border-transparent opacity-60 hover:opacity-100"}`}
										>
											<img
												src={src}
												alt=""
												loading="lazy"
												className="h-full w-full object-cover object-top"
											/>
										</button>
									</li>
								))}
							</ul>
						</section>
					)}

					<section>
						<h2 className="font-display mb-6 text-3xl font-bold text-white uppercase">
							Key Features
						</h2>
						<ul className="grid gap-4 sm:grid-cols-2">
							{game.features.map((feature) => (
								<li
									key={feature}
									className="bg-studio-card flex items-start gap-3 rounded-lg border border-white/5 p-4 text-white"
								>
									<Check className="text-studio-accent mt-0.5 h-5 w-5 shrink-0" />
									{feature}
								</li>
							))}
						</ul>
					</section>
				</div>

				{/* Sidebar */}
				<aside className="space-y-6">
					{game.score && (
						<div className="bg-studio-card rounded-xl border border-white/5 p-6 text-center">
							<div className="font-display text-studio-accent text-6xl font-bold">
								{game.score}
							</div>
							<div className="text-studio-light mt-1 text-xs font-bold tracking-widest uppercase">
								Metascore
							</div>
						</div>
					)}

					<div className="bg-studio-card rounded-xl border border-white/5 p-6">
						<h2 className="mb-4 text-sm font-bold tracking-widest text-white uppercase">
							Platforms
						</h2>
						<PlatformList platforms={game.platforms} labels />
					</div>

					{game.accolades && (
						<div className="bg-studio-card rounded-xl border border-white/5 p-6">
							<h2 className="mb-4 text-sm font-bold tracking-widest text-white uppercase">
								Accolades
							</h2>
							<ul className="space-y-3">
								{game.accolades.map((a) => (
									<li
										key={a}
										className="text-studio-light flex items-center gap-2 text-sm"
									>
										<Award className="text-studio-accent h-4 w-4 shrink-0" />{" "}
										{a}
									</li>
								))}
							</ul>
						</div>
					)}

					{game.stores && (
						<div
							id="buy"
							className="bg-studio-card scroll-mt-28 rounded-xl border border-white/5 p-6"
						>
							<h2 className="mb-4 text-sm font-bold tracking-widest text-white uppercase">
								Get It Now
							</h2>
							<ul className="space-y-3">
								{game.stores.map((store) => (
									<li key={store.label}>
										<a
											href={store.href}
											target="_blank"
											rel="noopener noreferrer"
											className="hover:border-studio-accent hover:bg-studio-accent/10 flex items-center justify-between rounded border border-white/10 px-4 py-3 font-bold text-white transition-colors"
										>
											{store.label} <ExternalLink className="h-4 w-4" />
										</a>
									</li>
								))}
							</ul>
						</div>
					)}
				</aside>
			</div>

			{otherGames.length > 0 && (
				<section className="bg-studio-dark border-t border-white/5 py-20">
					<div className="mx-auto max-w-7xl px-6">
						<h2 className="font-display border-studio-accent mb-10 border-l-4 pl-4 text-2xl font-bold text-white uppercase">
							More From Nebula
						</h2>
						<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
							{otherGames.map((g) => (
								<GameCard key={g.slug} game={g} />
							))}
						</div>
					</div>
				</section>
			)}
		</article>
	);
};
