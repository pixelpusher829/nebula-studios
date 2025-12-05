import React, { RefObject, useState } from "react";
import { Play, X } from "lucide-react";
import Youtube from "react-youtube";

interface HeroProps {
	textRef: RefObject<HTMLDivElement>;
	navigate: Function;
}

export const Hero: React.FC<HeroProps> = ({ textRef, navigate }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
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
						{isOpen && (
							<div
								className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
								onClick={() => setIsOpen(false)}
								role="dialog"
								aria-modal="true">
								<div
									className="bg-black rounded-lg shadow-2xl relative w-full min-w-3xl border border-white/10"
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
					</div>
				</div>
			</div>
		</div>
	);
};
