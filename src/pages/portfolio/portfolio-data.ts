import cyberStrike from "@/assets/images/games/cyber-strike.webp";
import echoesOfEternity from "@/assets/images/games/echos-of-eternity.webp";
import starlightDrift from "@/assets/images/games/starlight-drift.webp";
import starlightDrift2 from "@/assets/images/games/starlight-drift-2.webp";
import starlightDrift3 from "@/assets/images/games/starlight-drift-3.webp";
import starlightDrift4 from "@/assets/images/games/starlight-drift-4.webp";
import starlightDrift5 from "@/assets/images/games/starlight-drift-5.webp";
import voidWalker from "@/assets/images/games/void-walker.webp";
import echoesFeatured from "@/assets/images/home/echos-featured.webp";
import type { Game } from "@/shared/types/types";

export const games: Game[] = [
	{
		slug: "echoes-of-eternity",
		title: "Echoes of Eternity",
		genre: "Action RPG",
		tagline: "Master the Chrono-Blade. Rewrite history.",
		image: echoesOfEternity,
		gallery: [echoesFeatured, "/images/press/media-kit.webp", echoesOfEternity],
		status: "released",
		score: 92,
		platforms: ["PC", "PS5", "Xbox"],
		year: "2025",
		description:
			"Dive into a shattered world where time is fractured. Master the Chrono-Blade and rewrite history in our most ambitious action RPG yet.",
		longDescription: [
			"The Kingdom of Aurel was erased in a single heartbeat. As Kael, the last Warden of the Hourglass, you wake inside the moment of its destruction with a blade that can bend time itself.",
			"Rewind enemy attacks, freeze projectiles mid-flight and replay a battle from a different angle. Every choice you make echoes across three eras of the same city, and the people you save in one may become your enemies in another.",
			"Explore alone or bring up to three friends into Rift Raids, endgame encounters designed around co-operative time manipulation.",
		],
		features: [
			"40+ hour branching campaign across three eras",
			"Real-time Chrono-Blade combat system",
			"Four-player co-op Rift Raids",
			"Built in Unreal Engine 5 with full ray tracing",
			"Free 'Shattered Crown' expansion arriving early 2027",
		],
		accolades: [
			"Best Art Direction, 2025",
			"Best Action RPG, 2025",
			"92 Metascore",
		],
		trailerId: "DLzxrzFCyOs",
		stores: [
			{ label: "Steam", href: "https://store.steampowered.com/" },
			{ label: "PlayStation Store", href: "https://store.playstation.com/" },
			{ label: "Xbox Store", href: "https://www.xbox.com/games/store" },
		],
	},
	{
		slug: "cyber-strike",
		title: "Cyber Strike",
		genre: "Tactical FPS",
		tagline: "Five operatives. One round. No respawns.",
		image: cyberStrike,
		gallery: [
			cyberStrike,
			"/images/articles/cyberstrike-s4/cyberstrike-s4-1.webp",
			"/images/press/screenshots.webp",
		],
		status: "released",
		score: 88,
		platforms: ["PC", "PS5", "Xbox"],
		year: "2023",
		description:
			"The free-to-play 5v5 tactical shooter set in a neon-drenched megacity. Choose your operative, master their abilities and climb the ranked ladder.",
		longDescription: [
			"Neo-Kowloon never sleeps, and neither does the war between its corporations. Cyber Strike drops two teams of five operatives into tight, vertical maps where gunplay, gadgets and communication decide every round.",
			"With 18 operatives, a 128-tick server infrastructure and full cross-play, Cyber Strike has grown into one of the most-watched competitive shooters in the world, with a pro circuit spanning three continents.",
			"Season 6, 'Blackout', is live now with a new map, a new operative and the return of the Uplink competitive mode.",
		],
		features: [
			"Free-to-play with no pay-to-win items",
			"18 unique operatives with signature abilities",
			"128-tick dedicated servers",
			"Cross-play and cross-progression on every platform",
			"Seasonal content drops every 12 weeks",
		],
		accolades: [
			"Best Ongoing Game nominee, 2024",
			"Esports Game of the Year, 2025",
		],
		stores: [
			{ label: "Steam", href: "https://store.steampowered.com/" },
			{ label: "PlayStation Store", href: "https://store.playstation.com/" },
			{ label: "Xbox Store", href: "https://www.xbox.com/games/store" },
		],
	},
	{
		slug: "void-walker",
		title: "Void Walker",
		genre: "Survival Horror",
		tagline: "You are alone on Station Theta. Something is listening.",
		image: voidWalker,
		gallery: [
			voidWalker,
			"/images/articles/bts-voidwalker/bts-voidwalker-featured.webp",
		],
		status: "released",
		score: 90,
		platforms: ["PC", "PS5"],
		year: "2021",
		description:
			"Resource management meets psychological horror aboard a derelict research station. Survive the thing that hunts you by sound alone.",
		longDescription: [
			"Station Theta went dark eleven days ago. You are the engineer sent to find out why. You are not the first.",
			"Void Walker's adaptive AI learns how you play. Hide in the same vent twice and it will be waiting. Its custom 'Presence' audio engine means every footstep, door and breath can give you away, and the best weapon on the station is silence.",
		],
		features: [
			"Adaptive AI that learns your habits",
			"Presence audio engine with full 3D spatial sound",
			"Seven endings shaped by who you save",
			"DualSense haptics and adaptive trigger support",
		],
		accolades: ["Best Audio Design, 2021", "90 Metascore"],
		stores: [
			{ label: "Steam", href: "https://store.steampowered.com/" },
			{ label: "PlayStation Store", href: "https://store.playstation.com/" },
		],
	},
	{
		slug: "starlight-drift",
		title: "Starlight Drift",
		genre: "Sci-Fi Racing",
		tagline: "Gravity is a suggestion.",
		image: starlightDrift,
		gallery: [
			starlightDrift,
			starlightDrift2,
			starlightDrift3,
			starlightDrift4,
			starlightDrift5,
		],
		status: "released",
		score: 86,
		platforms: ["PC", "Mobile", "VR"],
		year: "2014",
		description:
			"The game that started it all. Defy gravity in the galaxy's most dangerous racing league, now remastered for VR.",
		longDescription: [
			"Starlight Drift sold two million copies in its first week and put Nebula on the map. Pilots race anti-gravity ships through asteroid fields, collapsing stations and tracks that loop back on themselves in impossible ways.",
			"The 2022 Remaster rebuilt every track for virtual reality, added online leagues and brought the full game to mobile with cross-platform progression.",
		],
		features: [
			"30+ physics-defying tracks",
			"Full VR support (2022 Remaster)",
			"Deep ship customization",
			"Cross-platform online leagues",
		],
		accolades: ["Over 9 million players", "Best Racing Game, 2014"],
		stores: [
			{ label: "Steam", href: "https://store.steampowered.com/" },
			{ label: "Meta Quest", href: "https://www.meta.com/experiences/" },
			{ label: "App Store", href: "https://www.apple.com/app-store/" },
		],
	},
	{
		slug: "project-aether",
		title: "Project Aether",
		genre: "Unannounced",
		tagline: "A city that defies gravity. More soon.",
		image: "/images/articles/nebulacon/nebulacon-2.webp",
		gallery: ["/images/articles/nebulacon/nebulacon-2.webp"],
		status: "in-development",
		platforms: ["PC", "PS5", "Xbox"],
		year: "TBA",
		description:
			"Our next original universe is in development across all three of our studios. First teased at NebulaCon 2026.",
		longDescription: [
			"Project Aether is the largest production in Nebula's history, built by teams in San Francisco, London and Tokyo.",
			"We're not ready to say much yet, but those at the NebulaCon 2026 keynote got a glimpse of a floating city, and we're hiring across engineering, art and design to help build it.",
		],
		features: [
			"New original IP",
			"In development across three studios",
			"Hiring now. See open roles on our Careers page",
		],
	},
];

export const getGame = (slug: string) => games.find((g) => g.slug === slug);
