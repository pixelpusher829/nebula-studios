import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
	Play,
	ArrowRight,
	Users,
	Newspaper,
	Briefcase,
	Mail,
	ArrowUpRight,
	X,
} from "lucide-react";
import { useNavigation } from "@/App";
import Youtube from "react-youtube";

export const Home: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLDivElement>(null);
	const { navigate } = useNavigation();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const tl = gsap.timeline();
		tl.fromTo(
			textRef.current,
			{ opacity: 0, y: 30 },
			{ opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 },
		);
	}, []);

	return (
		<div ref={containerRef} className="w-full bg-studio-black text-white">
			{isOpen && (
				<div
					className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-8"
					onClick={() => setIsOpen(false)}
					role="dialog"
					aria-modal="true">
					<div
						className="bg-black rounded-lg shadow-2xl relative w-full max-w-3xl border-white/10"
						onClick={(e) => e.stopPropagation()}>
						{/* Close Button */}
						<button
							onClick={() => setIsOpen(false)}
							className="absolute -top-4 -right-4 z-10 bg-white text-black p-2 rounded-full hover:scale-110 transition-transform"
							aria-label="Close video player">
							<X className="w-5 h-5" />
						</button>

						{/* YouTube Embed */}
						<div className="aspect-4/3 overflow-hidden rounded-lg">
							<Youtube
								videoId="DLzxrzFCyOs"
								opts={{
									height: "100%",
									width: "100%",
									playerVars: { autoplay: 1 },
								}}
								className="w-full h-full"
							/>
						</div>
					</div>
				</div>
			)}
			<div className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center">
				{/* Video Background */}
				<div className="absolute inset-0 z-0">
					<div className="absolute inset-0 bg-studio-black/60 z-10" />
					<div className="absolute inset-0 bg-gradient-to-t from-studio-black via-transparent to-studio-black/40 z-10" />
					<video
						autoPlay
						muted
						loop
						playsInline
						className="w-full h-full object-cover opacity-60"
						poster="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop">
						<source
							src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-1728-large.mp4"
							type="video/mp4"
						/>
					</video>
				</div>

				<div className="relative z-20 text-center px-6 max-w-5xl mx-auto pt-20 pb-24">
					<div ref={textRef} className="space-y-8">
						<span className="inline-block py-1 px-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-xs font-display font-bold tracking-widest text-studio-accent uppercase mb-4">
							Award Winning Studio
						</span>

						<h1 className="text-6xl md:text-8xl font-display font-bold text-white uppercase tracking-tight leading-none">
							We Build <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
								Universes
							</span>
						</h1>

						<p className="text-lg md:text-xl text-studio-light max-w-2xl mx-auto font-sans leading-relaxed">
							Nebula Studios is a collective of artists, engineers, and
							storytellers dedicated to pushing the boundaries of interactive
							entertainment.
						</p>

						<div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
							<button
								onClick={() => navigate("/games")}
								className="bg-studio-accent text-white px-10 py-4 rounded font-display font-bold text-lg uppercase tracking-wider hover:bg-orange-600 transition-all hover:shadow-[0_0_20px_rgba(255,87,34,0.4)]">
								View Our Games
							</button>

							<button
								onClick={() => setIsOpen(true)}
								className="flex items-center gap-3 text-white hover:text-studio-accent transition-colors group">
								<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-studio-accent transition-colors">
									<Play className="w-4 h-4 fill-current ml-0.5" />
								</div>
								<div className="font-display font-bold uppercase tracking-wide text-sm">
									Watch Showreel
								</div>
							</button>
							{/* Youtube Modal */}
						</div>
					</div>
				</div>
			</div>

			{/* 2. STATS BAR */}
			<div className="relative z-20 bg-studio-card/80 backdrop-blur-md border-t border-white/10 -mt-20 md:-mt-24 mb-12">
				<div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 gap-y-8 md:gap-y-0">
					{[
						{ label: "Active Players", value: "10M+" },
						{ label: "GOTY Awards", value: "24" },
						{ label: "Published Titles", value: "12" },
						{ label: "Years Experience", value: "15" },
					].map((stat, i) => (
						<div key={i} className="text-center px-4">
							<div className="text-3xl font-display font-bold text-white mb-1">
								{stat.value}
							</div>
							<div className="text-xs font-sans text-studio-light uppercase tracking-widest">
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* 3. LATEST GAME TEASER */}
			<div className="bg-studio-black py-24 relative z-20">
				<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
					<div>
						<h4 className="text-studio-accent font-display font-bold tracking-widest uppercase mb-2">
							Latest Release
						</h4>
						<h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-none">
							ECHOES OF ETERNITY
						</h2>
						<p className="text-studio-light text-lg mb-8 leading-relaxed">
							Dive into a shattered world where time is fractured. Master the
							Chrono-Blade and rewrite history in our most ambitious Action RPG
							yet. Winner of "Best Art Direction" at the 2024 Game Awards.
						</p>
						<button
							onClick={() => navigate("/games")}
							className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-wide hover:text-studio-accent transition-colors border-b border-studio-accent pb-1">
							Explore The Game <ArrowRight className="w-4 h-4" />
						</button>
					</div>
					<div className="relative group cursor-pointer overflow-hidden rounded-xl shadow-2xl shadow-studio-accent/10 border border-white/5">
						<img
							src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
							className="w-full transition-transform duration-700 group-hover:scale-110"
							alt="Game Preview"
						/>
						<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
						<div className="absolute bottom-6 right-6 bg-studio-accent text-white px-4 py-2 font-display font-bold text-xl rounded">
							9.8 / 10
						</div>
					</div>
				</div>
			</div>

			{/* 4. STUDIO TEASER */}
			<section className="py-24 bg-studio-dark relative border-t border-white/5">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid md:grid-cols-2 gap-16 items-center">
						<div className="order-2 md:order-1 relative">
							<div className="absolute -top-4 -left-4 w-full h-full border-2 border-studio-accent/20 rounded-xl z-0"></div>
							<img
								src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
								alt="The Team"
								className="relative z-10 rounded-xl shadow-2xl w-full"
							/>
						</div>
						<div className="order-1 md:order-2">
							<div className="flex items-center gap-2 mb-4">
								<Users className="text-studio-accent w-6 h-6" />
								<h4 className="text-studio-accent font-display font-bold tracking-widest uppercase">
									The Collective
								</h4>
							</div>
							<h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
								CRAFTING WORLDS <br /> SINCE 2010
							</h2>
							<p className="text-studio-light text-lg mb-8 leading-relaxed">
								We are a team of 200+ dreamers, engineers, and artists. From our
								HQ in San Francisco to our remote teams globally, we are united
								by a single mission: to create experiences that matter.
							</p>
							<button
								onClick={() => navigate("/studio")}
								className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-wide hover:text-studio-accent transition-colors">
								Meet The Team <ArrowRight className="w-4 h-4" />
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* 5. NEWS TEASER */}
			<section className="py-24 bg-studio-black">
				<div className="max-w-7xl mx-auto px-6">
					<div className="flex justify-between items-end mb-12">
						<div>
							<div className="flex items-center gap-2 mb-2">
								<Newspaper className="text-studio-accent w-5 h-5" />
								<h4 className="text-studio-accent font-display font-bold tracking-widest uppercase">
									Recent Transmissions
								</h4>
							</div>
							<h2 className="text-4xl font-display font-bold text-white">
								LATEST NEWS
							</h2>
						</div>
						<button
							onClick={() => navigate("/news")}
							className="hidden md:flex items-center gap-2 text-studio-light hover:text-white transition-colors uppercase text-sm font-bold tracking-wide">
							View All <ArrowRight className="w-4 h-4" />
						</button>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								title: "Behind the Scenes: Void Walker Sound Design",
								category: "Dev Diary",
								date: "Oct 24",
							},
							{
								title: "NebulaCon 2024 Recap & Highlights",
								category: "Community",
								date: "Sep 15",
							},
							{
								title: "Cyber Strike: Season 4 Roadmap",
								category: "Update",
								date: "Aug 30",
							},
						].map((item, i) => (
							<div
								key={i}
								onClick={() => navigate("/news")}
								className="group cursor-pointer bg-studio-card p-6 rounded-xl border border-white/5 hover:border-studio-accent/50 transition-all hover:-translate-y-1">
								<div className="flex justify-between items-start mb-4">
									<span className="text-xs font-bold text-studio-accent bg-studio-accent/10 px-2 py-1 rounded uppercase">
										{item.category}
									</span>
									<span className="text-xs text-studio-light font-mono">
										{item.date}
									</span>
								</div>
								<h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-studio-accent transition-colors">
									{item.title}
								</h3>
								<div className="flex items-center gap-2 text-sm text-studio-light font-bold uppercase">
									Read More <ArrowUpRight className="w-4 h-4" />
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* 6. CAREERS CTA */}
			<section className="py-32 relative overflow-hidden bg-studio-card">
				<div className="absolute inset-0">
					<img
						src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
						className="w-full h-full object-cover opacity-20"
						alt="Office"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-studio-black via-studio-black/90 to-transparent" />
				</div>

				<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
					<div className="max-w-2xl">
						<div className="flex items-center gap-2 mb-4">
							<Briefcase className="text-studio-accent w-6 h-6" />
							<h4 className="text-studio-accent font-display font-bold tracking-widest uppercase">
								Careers
							</h4>
						</div>
						<h2 className="text-5xl font-display font-bold text-white mb-6">
							YOUR LEGACY <br /> STARTS HERE
						</h2>
						<p className="text-xl text-studio-light leading-relaxed mb-8">
							We're looking for visionaries, rebels, and masters of their craft.
							Open positions in Engineering, Art, Design, and QA.
						</p>
						<div className="flex flex-wrap gap-4">
							<button
								onClick={() => navigate("/careers")}
								className="bg-white text-studio-black px-8 py-3 rounded font-display font-bold uppercase tracking-wider hover:bg-studio-accent hover:text-white transition-all">
								View Open Positions
							</button>
						</div>
					</div>

					<div className="hidden md:block">
						<div className="bg-studio-black/50 backdrop-blur-md p-8 rounded-xl border border-white/10 w-80">
							<h4 className="text-white font-bold uppercase mb-4 text-center">
								We Are Hiring
							</h4>
							<ul className="space-y-3">
								<li className="text-sm text-studio-light border-b border-white/10 pb-2">
									Senior Gameplay Engineer
								</li>
								<li className="text-sm text-studio-light border-b border-white/10 pb-2">
									Lead Concept Artist
								</li>
								<li className="text-sm text-studio-light border-b border-white/10 pb-2">
									Narrative Designer
								</li>
								<li className="text-sm text-studio-light pb-2">
									UI/UX Designer
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* 7. CONTACT PRE-FOOTER */}
			<section className="py-24 bg-studio-black border-t border-white/5">
				<div className="max-w-4xl mx-auto px-6 text-center">
					<Mail className="w-12 h-12 text-studio-accent mx-auto mb-6" />
					<h2 className="text-4xl font-display font-bold text-white mb-6 uppercase">
						Partner With Us
					</h2>
					<p className="text-studio-light text-lg mb-8 leading-relaxed">
						Looking for a publishing partner? Have a media inquiry? Or just want
						to say hello? We are always looking for the next great
						collaboration.
					</p>
					<button
						onClick={() => navigate("/contact")}
						className="border border-white/20 text-white px-10 py-4 rounded font-display font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-studio-black transition-all">
						Get In Touch
					</button>
				</div>
			</section>
		</div>
	);
};
