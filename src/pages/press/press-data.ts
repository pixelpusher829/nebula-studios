import cyberStrike from "@/assets/images/games/cyber-strike.webp";
import starlightDrift from "@/assets/images/games/starlight-drift.webp";
import voidWalker from "@/assets/images/games/void-walker.webp";
import echoesFeatured from "@/assets/images/home/echos-featured.webp";
import nebulaTeam from "@/assets/images/home/nebula-team.webp";
import { site } from "@/config/site";
import type { PressAsset } from "@/shared/types/types";

export const logoAssets: PressAsset[] = [
	{
		title: "Logo Mark, Orange",
		description: "Primary mark for use on dark backgrounds.",
		format: "SVG",
		thumbnail: "/press/nebula-logo-orange.svg",
		href: "/press/nebula-logo-orange.svg",
	},
	{
		title: "Logo Mark, White",
		description: "Single-color mark for photography and video.",
		format: "SVG",
		thumbnail: "/press/nebula-logo-white.svg",
		href: "/press/nebula-logo-white.svg",
	},
	{
		title: "Logo Mark, Black",
		description: "Single-color mark for light backgrounds and print.",
		format: "SVG",
		thumbnail: "/press/nebula-logo-black.svg",
		href: "/press/nebula-logo-black.svg",
		light: true,
	},
];

export const mediaAssets: PressAsset[] = [
	{
		title: "Echoes of Eternity Key Art",
		description: "Official key art for Echoes of Eternity.",
		format: "WEBP",
		thumbnail: echoesFeatured,
		href: echoesFeatured,
	},
	{
		title: "Cyber Strike Key Art",
		description: "Official key art for Cyber Strike.",
		format: "WEBP",
		thumbnail: cyberStrike,
		href: cyberStrike,
	},
	{
		title: "Void Walker Key Art",
		description: "Official key art for Void Walker.",
		format: "WEBP",
		thumbnail: voidWalker,
		href: voidWalker,
	},
	{
		title: "Starlight Drift Key Art",
		description: "Official key art for Starlight Drift.",
		format: "WEBP",
		thumbnail: starlightDrift,
		href: starlightDrift,
	},
	{
		title: "Studio Photo",
		description: "The Nebula team at our San Francisco headquarters.",
		format: "WEBP",
		thumbnail: nebulaTeam,
		href: nebulaTeam,
	},
];

export const factSheet = [
	{ label: "Founded", value: `${site.founded}, San Francisco` },
	{ label: "Founders", value: "Sarah Kessler, David Chen, Tom Baker" },
	{ label: "Studios", value: "San Francisco · London · Tokyo" },
	{ label: "Team", value: `${site.headcount} people` },
	{ label: "Ownership", value: "Independent, privately held" },
	{
		label: "Games",
		value: "Echoes of Eternity, Cyber Strike, Void Walker, Starlight Drift",
	},
	{ label: "Players", value: "18 million+ across all titles" },
	{ label: "Press contact", value: site.email.press },
];

export const boilerplate = `${site.name} is an independent game developer founded in ${site.founded} and headquartered in San Francisco, with studios in London and Tokyo. The ${site.headcount}-person team is behind the award-winning action RPG Echoes of Eternity, the free-to-play tactical shooter Cyber Strike, the survival horror hit Void Walker and the Starlight Drift racing series. Nebula's games have reached more than 18 million players worldwide.`;
