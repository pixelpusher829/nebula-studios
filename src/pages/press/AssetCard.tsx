import { Download } from "lucide-react";
import type React from "react";
import type { PressAsset } from "@/shared/types/types";

interface AssetCardProps {
	asset: PressAsset;
	/** "contain" for logos on a plain background, "cover" for photography. */
	fit?: "contain" | "cover";
}

const fileName = (asset: PressAsset) =>
	`${asset.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.${asset.format.toLowerCase()}`;

export const AssetCard: React.FC<AssetCardProps> = ({
	asset,
	fit = "cover",
}) => {
	return (
		<a
			href={asset.href}
			download={fileName(asset)}
			className="group bg-studio-card hover:border-studio-accent/50 relative block overflow-hidden rounded-xl border border-white/5 transition-all duration-300"
		>
			<div
				className={`relative flex h-44 w-full items-center justify-center overflow-hidden ${fit === "contain" ? (asset.light ? "bg-white p-10" : "bg-studio-black p-10") : ""}`}
			>
				<img
					src={asset.thumbnail}
					alt=""
					loading="lazy"
					className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${fit === "contain" ? "object-contain" : "object-cover"}`}
				/>
				<div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/60">
					<span className="text-studio-black scale-90 rounded-full bg-white p-3 opacity-0 shadow-lg transition-all group-hover:scale-100 group-hover:opacity-100">
						<Download className="h-6 w-6" />
					</span>
				</div>
			</div>

			<div className="p-6">
				<span className="text-studio-accent text-xs font-bold tracking-wider uppercase">
					{asset.format}
				</span>
				<h3 className="font-display group-hover:text-studio-accent mt-1 text-lg font-bold text-white transition-colors">
					{asset.title}
				</h3>
				<p className="text-studio-light mt-1 text-sm">{asset.description}</p>
			</div>
		</a>
	);
};
