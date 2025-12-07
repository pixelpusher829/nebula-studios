import type React from "react";
import { useState } from "react";
import {
  Star,
  Monitor,
  Gamepad,
  Smartphone,
  X,
  Play,
  ShoppingCart,
} from "lucide-react";
import type { Game } from "@/types/types";
import echosOfEternity from "@/images/games/echos-of-eternity.webp";
import cyberStrike from "@/images/games/cyber-strike.webp";
import starlightDrift from "@/images/games/starlight-drift.webp";
import voidWalker from "@/images/games/void-walker.webp";

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
    image: `${cyberStrike}`,
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
    image: `${starlightDrift}`,
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
    image: `${voidWalker}`,
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
                    onClick={() => setSelectedGame(game)}
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
          ))}
        </div>
      </div>

      {/* Game Detail Modal */}
      {selectedGame && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            className="bg-studio-black/90 absolute inset-0 backdrop-blur-md"
            onClick={() => setSelectedGame(null)}
          />
          <div className="bg-studio-card relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 shadow-2xl md:flex-row">
            {/* Modal Image Section */}
            <div className="relative h-64 md:h-auto md:w-1/2">
              <img
                src={selectedGame.image}
                className="h-full w-full object-cover"
                alt={selectedGame.title}
              />
              <div className="from-studio-card absolute inset-0 bg-gradient-to-t via-transparent to-transparent md:bg-gradient-to-r" />
              <button
                onClick={() => setSelectedGame(null)}
                className="absolute top-4 left-4 rounded-full bg-black/50 p-2 text-white md:hidden"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Content Section */}
            <div className="bg-studio-card overflow-y-auto p-8 md:w-1/2 md:p-12">
              <div className="mb-6 flex hidden justify-end md:flex">
                <button
                  onClick={() => setSelectedGame(null)}
                  className="text-studio-light transition-colors hover:text-white"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="bg-studio-accent rounded-sm px-3 py-1 text-xs font-bold tracking-wider text-white uppercase">
                      {selectedGame.genre}
                    </span>
                    <span className="text-studio-light font-sans text-sm">
                      {selectedGame.year}
                    </span>
                  </div>
                  <h2 className="font-display mb-2 text-4xl leading-none font-bold text-white md:text-5xl">
                    {selectedGame.title}
                  </h2>
                  <div className="flex items-center gap-2 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(selectedGame.rating) ? "fill-current" : "text-gray-600"}`}
                      />
                    ))}
                    <span className="ml-2 text-sm font-bold text-white">
                      {selectedGame.rating}/5.0
                    </span>
                  </div>
                </div>

                <p className="text-studio-light font-sans text-lg leading-relaxed">
                  {selectedGame.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-bold tracking-widest text-white uppercase">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedGame.features?.map((feature, idx) => (
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
      )}
    </section>
  );
};
