import type React from "react";
import { site } from "@/config/site";
import { Seo } from "@/shared/components/Seo";
import { CoreValues } from "./CoreValues";
import { Leadership } from "./Leadership";
import { Locations } from "./Locations";
import { StudioHero } from "./StudioHero";
import { Timeline } from "./Timeline";

export const StudioLife: React.FC = () => {
	return (
		<div className="bg-studio-black">
			<Seo
				title="Studio"
				description={`Meet the ${site.headcount} people behind ${site.name}: our story, our values, our leadership team and our studios in San Francisco, London and Tokyo.`}
			/>
			<StudioHero />
			<CoreValues />
			<Leadership />
			<Timeline />
			<Locations />
		</div>
	);
};
