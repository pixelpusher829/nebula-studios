
import type React from "react";
import { Star, X, ShoppingCart, Play } from "lucide-react";
import type { Game } from "@/shared/types/types";

interface GameDetailModalProps {
    game: Game;
    onClose: () => void;
}

export const GameDetailModal: React.FC<GameDetailModalProps> = ({ game, onClose }) => {
    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div
                className="bg-studio-black/90 absolute inset-0 backdrop-blur-md"
                onClick={onClose}
            />
            <div className="bg-studio-card relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 shadow-2xl md:flex-row">
                {/* Modal Image Section */}
                <div className="relative h-64 md:h-auto md:w-1/2">
                    <img
                        src={game.image}
                        className="h-full w-full object-cover"
                        alt={game.title}
                    />
                    <div className="from-studio-card absolute inset-0 bg-gradient-to-t via-transparent to-transparent md:bg-gradient-to-r" />
                    <button
                        onClick={onClose}
                        className="absolute top-4 left-4 rounded-full bg-black/50 p-2 text-white md:hidden"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Modal Content Section */}
                <div className="bg-studio-card overflow-y-auto p-8 md:w-1/2 md:p-12">
                    <div className="mb-6 flex hidden justify-end md:flex">
                        <button
                            onClick={onClose}
                            className="text-studio-light transition-colors hover:text-white"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <div className="mb-3 flex items-center gap-3">
                                <span className="bg-studio-accent rounded-sm px-3 py-1 text-xs font-bold tracking-wider text-white uppercase">
                                    {game.genre}
                                </span>
                                <span className="text-studio-light font-sans text-sm">
                                    {game.year}
                                </span>
                            </div>
                            <h2 className="font-display mb-2 text-4xl leading-none font-bold text-white md:text-5xl">
                                {game.title}
                            </h2>
                            <div className="flex items-center gap-2 text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-4 w-4 ${i < Math.floor(game.rating) ? "fill-current" : "text-gray-600"
                                            }`}
                                    />
                                ))}
                                <span className="ml-2 text-sm font-bold text-white">
                                    {game.rating}/5.0
                                </span>
                            </div>
                        </div>

                        <p className="text-studio-light font-sans text-lg leading-relaxed">
                            {game.description}
                        </p>

                        <div className="space-y-3">
                            <h4 className="text-sm font-bold tracking-widest text-white uppercase">
                                Key Features
                            </h4>
                            <ul className="space-y-2">
                                {game.features?.map((feature, idx) => (
                                    <li
                                        key={idx}
                                        className="text-studio-light flex items-center gap-2 text-sm"
                                    >
                                        <div className="bg-studio-accent h-1.5 w-1.5 rounded-full" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4 border-t border-white/5 pt-6 sm:flex-row">
                            <button className="bg-studio-accent font-display flex flex-1 items-center justify-center gap-2 rounded py-4 font-bold tracking-wider text-white uppercase transition-colors hover:bg-orange-600">
                                <ShoppingCart className="h-4 w-4" /> Buy Now
                            </button>
                            <button className="font-display flex flex-1 items-center justify-center gap-2 rounded border border-white/10 bg-white/5 py-4 font-bold tracking-wider text-white uppercase transition-colors hover:bg-white/10">
                                <Play className="h-4 w-4 fill-current" /> Trailer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
