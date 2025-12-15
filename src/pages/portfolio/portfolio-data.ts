
import type { Game } from "@/shared/types/types";
import echosOfEternity from "@/assets/images/games/echos-of-eternity.webp";
import cyberStrike from "@/assets/images/games/cyber-strike.webp";
import starlightDrift from "@/assets/images/games/starlight-drift.webp";
import voidWalker from "@/assets/images/games/void-walker.webp";

export const games: Game[] = [
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
