import type React from "react";
import { Seo } from "@/shared/components/Seo";
import { CareersCTA } from "./CareersCTA";
import { ContactCTA } from "./ContactCTA";
import { Hero } from "./Hero";
import { LatestGame } from "./LatestGame";
import { NewsTeaser } from "./NewsTeaser";
import { StatsBar } from "./StatsBar";
import { StudioTeaser } from "./StudioTeaser";

export const Home: React.FC = () => {
	return (
		<div className="bg-studio-black w-full text-white">
			<Seo />
			<Hero />
			<StatsBar />
			<LatestGame />
			<StudioTeaser />
			<NewsTeaser />
			<CareersCTA />
			<ContactCTA />
		</div>
	);
};
