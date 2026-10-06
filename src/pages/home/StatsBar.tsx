import type React from "react";
import { site } from "@/config/site";

const stats = [
	{ label: "Players Worldwide", value: "18M+" },
	{ label: "Industry Awards", value: "24" },
	{ label: "Studios", value: String(site.offices.length) },
	{
		label: "Years Making Games",
		value: String(new Date().getFullYear() - site.founded),
	},
];

export const StatsBar: React.FC = () => {
	return (
		<div className="bg-studio-card/80 relative z-20 -mt-25 mb-12 border-t border-white/10 backdrop-blur-md">
			<dl className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 divide-x divide-white/10 px-6 py-5 md:grid-cols-4 md:gap-y-0">
				{stats.map((stat) => (
					<div
						key={stat.label}
						className="flex flex-col-reverse px-4 text-center"
					>
						<dt className="text-studio-light font-sans text-xs tracking-widest uppercase">
							{stat.label}
						</dt>
						<dd className="font-display mb-1 text-3xl font-bold text-white">
							{stat.value}
						</dd>
					</div>
				))}
			</dl>
		</div>
	);
};
