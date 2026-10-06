import { gsap } from "gsap";
import { Play } from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/images/home/hero-image.webp";
import heroVideo from "@/assets/videos/hero-video.mp4";
import { site } from "@/config/site";
import { VideoDialog } from "@/shared/components/VideoDialog";

/** Only autoplay the background video when it won't hurt the visitor's experience or data plan. */
const shouldPlayVideo = () => {
	if (typeof window === "undefined") return false;
	const reducedMotion = window.matchMedia(
		"(prefers-reduced-motion: reduce)",
	).matches;
	const smallScreen = window.matchMedia("(max-width: 768px)").matches;
	const saveData = (
		navigator as Navigator & { connection?: { saveData?: boolean } }
	).connection?.saveData;
	return !reducedMotion && !smallScreen && !saveData;
};

export const Hero: React.FC = () => {
	const textRef = useRef<HTMLDivElement>(null);
	const [showreelOpen, setShowreelOpen] = useState(false);
	const [playVideo] = useState(shouldPlayVideo);

	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const tween = gsap.fromTo(
			textRef.current,
			{ opacity: 0, y: 30 },
			{ opacity: 1, y: 0, duration: 1.6, ease: "power3.out", delay: 0.3 },
		);
		return () => {
			tween.kill();
		};
	}, []);

	return (
		<>
			<VideoDialog
				videoId={showreelOpen ? site.showreelVideoId : null}
				title={`${site.name} showreel`}
				onClose={() => setShowreelOpen(false)}
			/>
			<section className="relative flex min-h-[max(100vh,50rem)] w-full flex-col justify-center overflow-hidden">
				{/* Background */}
				<div className="absolute inset-0 z-0">
					<div className="bg-studio-black/60 absolute inset-0 z-10" />
					<div className="from-studio-black to-studio-black/40 absolute inset-0 z-10 bg-linear-to-t via-transparent" />
					{playVideo ? (
						<video
							autoPlay
							muted
							loop
							playsInline
							preload="none"
							className="h-full w-full object-cover opacity-60"
							poster={heroImage}
						>
							<source src={heroVideo} type="video/mp4" />
						</video>
					) : (
						<img
							src={heroImage}
							alt=""
							fetchPriority="high"
							className="h-full w-full object-cover opacity-60"
						/>
					)}
				</div>

				<div className="relative z-20 mx-auto max-w-5xl px-6 pt-20 pb-24 text-center">
					<div ref={textRef} className="space-y-8">
						<p className="font-display text-studio-accent mb-4 inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-bold tracking-widest uppercase backdrop-blur-sm">
							Independent Studio · Est. {site.founded}
						</p>

						<h1 className="font-display text-6xl leading-none font-bold tracking-tight text-white uppercase md:text-8xl">
							We Build <br />
							<span className="bg-linear-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
								Universes
							</span>
						</h1>

						<p className="text-studio-light mx-auto max-w-2xl font-sans text-lg leading-relaxed md:text-xl">
							{site.name} is a collective of artists, engineers and storytellers
							in San Francisco, London and Tokyo, dedicated to pushing the
							boundaries of interactive entertainment.
						</p>

						<div className="flex flex-col items-center justify-center gap-6 pt-8 sm:flex-row">
							<Link
								to="/games"
								className="bg-studio-accent font-display rounded px-10 py-4 text-lg font-bold tracking-wider text-white uppercase transition-all hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(255,87,34,0.4)]"
							>
								View Our Games
							</Link>

							<button
								type="button"
								onClick={() => setShowreelOpen(true)}
								className="hover:text-studio-accent group flex items-center gap-3 text-white transition-colors"
							>
								<span className="group-hover:border-studio-accent flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-colors">
									<Play className="ml-0.5 h-4 w-4 fill-current" />
								</span>
								<span className="font-display text-sm font-bold tracking-wide uppercase">
									Watch Showreel
								</span>
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
