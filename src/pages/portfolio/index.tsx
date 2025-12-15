
import type React from "react";
import { useState } from "react";
import type { Game } from "@/shared/types/types";
import { games } from "./portfolio-data";
import { GameCard } from "./GameCard";
import { GameDetailModal } from "./GameDetailModal";

export const GamePortfolio: React.FC = () => {
    const [selectedGame, setSelectedGame] = useState<Game | null>(null);

    return (
        <section className="bg-studio-dark relative min-h-screen pt-32 pb-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 flex items-end justify-between">
                    <div>
                        <h4 className="text-studio-accent font-display mb-2 font-bold tracking-widest uppercase">
                            Our Portfolio
                        </h4>
                        <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
                            LATEST RELEASES
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {games.map((game) => (
                        <GameCard key={game.id} game={game} onSelectGame={setSelectedGame} />
                    ))}
                </div>
            </div>

            {selectedGame && (
                <GameDetailModal game={selectedGame} onClose={() => setSelectedGame(null)} />
            )}
        </section>
    );
};
