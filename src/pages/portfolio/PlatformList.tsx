import { Gamepad2, Glasses, Monitor, Smartphone } from "lucide-react";
import type React from "react";
import type { Platform } from "@/shared/types/types";

const platformLabels: Record<Platform, string> = {
	PC: "PC",
	PS5: "PlayStation 5",
	Xbox: "Xbox Series X|S",
	Switch: "Nintendo Switch",
	Mobile: "iOS & Android",
	VR: "VR",
};

const iconFor = (p: Platform) => {
	if (p === "PC") return Monitor;
	if (p === "Mobile") return Smartphone;
	if (p === "VR") return Glasses;
	return Gamepad2;
};

/** Compact icon row; set `labels` to show full platform names. */
export const PlatformList: React.FC<{
	platforms: Platform[];
	labels?: boolean;
}> = ({ platforms, labels }) => (
	<ul
		className={`text-studio-light flex flex-wrap ${labels ? "gap-x-5 gap-y-2" : "gap-3"}`}
	>
		{platforms.map((p) => {
			const Icon = iconFor(p);
			return (
				<li
					key={p}
					className="flex items-center gap-1.5 text-sm"
					title={platformLabels[p]}
				>
					<Icon className="h-4 w-4" aria-hidden="true" />
					<span className={labels ? "" : "sr-only"}>{platformLabels[p]}</span>
				</li>
			);
		})}
	</ul>
);
