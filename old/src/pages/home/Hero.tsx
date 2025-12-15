
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Play, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Youtube from "react-youtube";
import heroVideo from "@/assets/videos/hero-video.webm";
import heroImage from "@/assets/images/home/hero-image.webp";

export const Hero: React.FC = () => {
    const textRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
            textRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 2, ease: "power3.out", delay: 0.5 },
        );
    }, []);

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-8"
                    onClick={() => setIsOpen(false)}
                    role="dialog"
                    aria-modal="true"
                >
                    <div
                        className="relative w-full max-w-3xl rounded-lg border-white/10 bg-black shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute -top-4 -right-4 z-10 rounded-full bg-white p-2 text-black transition-transform hover:scale-110"
                            aria-label="Close video player"
                        >
                            <X className="h-5 w-5" />
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
                                className="h-full w-full"
                            />
                        </div>
                    </div>
                </div>
            )}
            <div className="relative flex min-h-[max(100vh,50rem)] w-full flex-col justify-center overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0 z-0">
                    <div className="bg-studio-black/60 absolute inset-0 z-10" />
                    <div className="from-studio-black to-studio-black/40 absolute inset-0 z-10 bg-gradient-to-t via-transparent" />
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-full w-full object-cover opacity-60"
                        poster={heroImage}
                    >
                        <source src={heroVideo} type="video/mp4" />
                    </video>
                </div>

                <div className="relative z-20 mx-auto max-w-5xl px-6 pt-20 pb-24 text-center">
                    <div ref={textRef} className="space-y-8">
                        <span className="font-display text-studio-accent mb-4 inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-bold tracking-widest uppercase backdrop-blur-sm">
                            Award Winning Studio
                        </span>

                        <h1 className="font-display text-6xl leading-none font-bold tracking-tight text-white uppercase md:text-8xl">
                            We Build <br />
                            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
                                Universes
                            </span>
                        </h1>

                        <p className="text-studio-light mx-auto max-w-2xl font-sans text-lg leading-relaxed md:text-xl">
                            Nebula Studios is a collective of artists, engineers, and
                            storytellers dedicated to pushing the boundaries of interactive
                            entertainment.
                        </p>

                        <div className="flex flex-col items-center justify-center gap-6 pt-8 sm:flex-row">
                            <button
                                onClick={() => navigate("/games")}
                                className="bg-studio-accent font-display rounded px-10 py-4 text-lg font-bold tracking-wider text-white uppercase transition-all hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(255,87,34,0.4)]"
                            >
                                View Our Games
                            </button>

                            <button
                                onClick={() => setIsOpen(true)}
                                className="hover:text-studio-accent group flex items-center gap-3 text-white transition-colors"
                            >
                                <div className="group-hover:border-studio-accent flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-colors">
                                    <Play className="ml-0.5 h-4 w-4 fill-current" />
                                </div>
                                <div className="font-display text-sm font-bold tracking-wide uppercase">
                                    Watch Showreel
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
