
import type React from "react";
import { Star, Monitor, Gamepad, Smartphone } from "lucide-react";
import type { Game } from "@/shared/types/types";

interface GameCardProps {
    game: Game;
    onSelectGame: (game: Game) => void;
}

export const GameCard: React.FC<GameCardProps> = ({ game, onSelectGame }) => {
    return (
        <div
            key={game.id}
            className="group bg-studio-card hover:shadow-studio-accent/10 relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
            {/* Image Container */}
            <div className="relative h-80 overflow-hidden">
                <img
                    src={game.image}
                    alt={game.title}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110 md:object-center"
                />
                <div className="from-studio-card absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-80" />

                {/* Overlay Button */}
                <div className="bg-studio-black/40 absolute inset-0 flex items-center justify-center opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <button
                        onClick={() => onSelectGame(game)}
                        className="bg-studio-accent font-display translate-y-4 transform rounded px-6 py-2 text-sm font-bold tracking-wider text-white uppercase transition-transform duration-300 group-hover:translate-y-0 hover:bg-orange-600"
                    >
                        View Details
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="relative p-6">
                <div className="mb-2 flex items-start justify-between">
                    <span className="text-studio-accent border-studio-accent/30 bg-studio-accent/10 rounded border px-2 py-1 text-xs font-bold tracking-wider uppercase">
                        {game.genre}
                    </span>
                    <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="h-3 w-3 fill-current" />
                        <span className="text-xs font-bold text-white">
                            {game.rating}
                        </span>
                    </div>
                </div>

                <h3 className="font-display group-hover:text-studio-accent mb-4 line-clamp-1 text-xl font-bold text-white transition-colors">
                    {game.title}
                </h3>

                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <div className="text-studio-light flex gap-3">
                        {game.platforms.includes("PC") && (
                            <Monitor className="h-4 w-4" />
                        )}
                        {(game.platforms.includes("PS5") ||
                            game.platforms.includes("XSX")) && (
                                <Gamepad className="h-4 w-4" />
                            )}
                        {game.platforms.includes("Mobile") && (
                            <Smartphone className="h-4 w-4" />
                        )}
                    </div>
                    <span className="text-studio-light font-sans text-sm">
                        {game.year}
                    </span>
                </div>
            </div>
        </div>
    );
};
