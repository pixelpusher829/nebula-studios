import type React from "react";
import { milestones } from "./studio-data";

export const Timeline: React.FC = () => {
	return (
		<section className="bg-studio-card relative overflow-hidden py-24">
			<div className="relative z-10 mx-auto max-w-7xl px-6">
				<h2 className="font-display mb-16 text-center text-4xl font-bold text-white uppercase">
					Our Journey
				</h2>

				<div className="relative">
					{/* Center line (desktop) / left line (mobile) */}
					<div className="absolute top-0 bottom-0 left-4 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />

					<ol className="space-y-12">
						{milestones.map((m, i) => {
							const left = i % 2 === 0;
							const highlight = i === 0 || i === milestones.length - 1;
							return (
								<li
									key={m.year}
									className="relative flex flex-col justify-between md:flex-row"
								>
									<div
										className={`pl-12 md:w-[calc(50%-3rem)] md:pl-0 ${left ? "md:text-right" : "md:order-2"}`}
									>
										<span
											className={`mb-1 block text-sm font-bold tracking-widest uppercase ${highlight ? "text-studio-accent" : "text-white"}`}
										>
											{m.year}
										</span>
										<h3 className="mb-2 text-2xl font-bold text-white">
											{m.title}
										</h3>
										<p className="text-studio-light">{m.desc}</p>
									</div>
									<div
										className={`border-studio-card absolute top-1 left-[11px] h-2.5 w-2.5 rounded-full border-4 md:left-1/2 md:-translate-x-1/2 ${highlight ? "bg-studio-accent" : "bg-white"} ${i === milestones.length - 1 ? "animate-pulse" : ""}`}
									/>
									<div
										className={`hidden md:block md:w-[calc(50%-3rem)] ${left ? "" : "md:order-1"}`}
									/>
								</li>
							);
						})}
					</ol>
				</div>
			</div>
		</section>
	);
};
