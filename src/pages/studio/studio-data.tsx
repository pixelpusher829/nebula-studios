import { Heart, Lightbulb, Target, Zap } from "lucide-react";
import aisha from "@/assets/images/studio/profiles/aisha.webp";
import david from "@/assets/images/studio/profiles/david.webp";
import elena from "@/assets/images/studio/profiles/elena.webp";
import emily from "@/assets/images/studio/profiles/emily.webp";
import james from "@/assets/images/studio/profiles/james.webp";
import marcus from "@/assets/images/studio/profiles/marcus.webp";
import sarah from "@/assets/images/studio/profiles/sarah.webp";
import tom from "@/assets/images/studio/profiles/tom.webp";

export const teamMembers = [
	{ name: "Sarah Kessler", role: "CEO & Co-Founder", img: sarah },
	{ name: "David Chen", role: "Creative Director & Co-Founder", img: david },
	{ name: "Elena Rodriguez", role: "Lead Engineer", img: elena },
	{ name: "Marcus Johnson", role: "Art Director", img: marcus },
	{ name: "Emily Zhao", role: "Head of Marketing", img: emily },
	{ name: "James Wilson", role: "Audio Director", img: james },
	{ name: "Aisha Patel", role: "Executive Producer", img: aisha },
	{ name: "Tom Baker", role: "CTO & Co-Founder", img: tom },
];

export const values = [
	{
		icon: <Zap className="h-6 w-6" />,
		title: "Player First",
		desc: "Every decision starts with the player. If it doesn't make the game better to play, it doesn't ship.",
	},
	{
		icon: <Heart className="h-6 w-6" />,
		title: "Inclusive Worlds",
		desc: "Games are for everyone. Our teams, our characters and our accessibility options reflect that.",
	},
	{
		icon: <Target className="h-6 w-6" />,
		title: "Craft Over Crunch",
		desc: "We don't ship until it's ready, and we don't burn people out to get there.",
	},
	{
		icon: <Lightbulb className="h-6 w-6" />,
		title: "Fearless Ideas",
		desc: "We take creative risks that push the medium forward, and we learn loudly when they don't land.",
	},
];

export const milestones = [
	{
		year: "2010",
		title: "The Beginning",
		desc: "Sarah Kessler, David Chen and Tom Baker found Nebula Studios in a converted garage in San Francisco's Mission District.",
	},
	{
		year: "2014",
		title: "First Major Hit",
		desc: "Starlight Drift sells two million copies in its first week and puts Nebula on the map.",
	},
	{
		year: "2018",
		title: "London Studio Opens",
		desc: "Our second studio opens in Shoreditch to lead narrative design and live operations.",
	},
	{
		year: "2021",
		title: "Void Walker",
		desc: "Our first horror title wins Best Audio Design and introduces the Presence audio engine.",
	},
	{
		year: "2022",
		title: "Tokyo Studio Opens",
		desc: "Nebula Tokyo opens in Shibuya, bringing world-class art and animation talent to the team.",
	},
	{
		year: "2023",
		title: "Cyber Strike Launches",
		desc: "Our free-to-play tactical shooter reaches 10 million players in its first year.",
	},
	{
		year: "2025",
		title: "Echoes of Eternity",
		desc: "Our most ambitious title to date launches to a 92 Metascore and takes Best Art Direction.",
	},
	{
		year: "Next",
		title: "Project Aether",
		desc: "Our next original universe is in development across all three studios. We're hiring.",
	},
];
