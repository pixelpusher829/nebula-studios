export type Platform = "PC" | "PS5" | "Xbox" | "Switch" | "Mobile" | "VR";

export type GameStatus = "released" | "in-development";

export interface StoreLink {
	label: string;
	href: string;
}

export interface Game {
	slug: string;
	title: string;
	genre: string;
	tagline: string;
	image: string;
	gallery: string[];
	status: GameStatus;
	/** Aggregate critic score out of 100 (released games only). */
	score?: number;
	platforms: Platform[];
	year: string;
	description: string;
	longDescription: string[];
	features: string[];
	accolades?: string[];
	/** YouTube video ID */
	trailerId?: string;
	stores?: StoreLink[];
}

export interface NewsItem {
	slug: string;
	title: string;
	category: string;
	/** ISO date, YYYY-MM-DD */
	date: string;
	author: string;
	image: string;
	excerpt: string;
	content: string; // Markdown content
}

export interface NavItem {
	label: string;
	href: string;
}

export interface ChatMessage {
	id: string;
	role: "user" | "model";
	text: string;
}

export interface Job {
	slug: string;
	title: string;
	department: string;
	location: string;
	type: "Full-time" | "Contract" | "Internship";
	salary?: string;
	summary: string;
	description: string; // Markdown content
}

export interface PressAsset {
	title: string;
	description: string;
	format: string;
	thumbnail: string;
	href: string;
	/** Light thumbnails get a dark overlay treatment on hover */
	light?: boolean;
}
