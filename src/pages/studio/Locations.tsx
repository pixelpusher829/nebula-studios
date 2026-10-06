import { Clock } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { site } from "@/config/site";

const localTime = (timeZone: string) =>
	new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		minute: "2-digit",
		timeZone,
	}).format(new Date());

export const Locations: React.FC = () => {
	// Re-render once a minute so the local clocks stay current.
	const [, setTick] = useState(0);
	useEffect(() => {
		const id = setInterval(() => setTick((t) => t + 1), 60_000);
		return () => clearInterval(id);
	}, []);

	return (
		<section className="bg-studio-black border-t border-white/5 py-24">
			<div className="mx-auto max-w-7xl px-6">
				<div className="mb-12 max-w-2xl">
					<p className="text-studio-accent font-display mb-2 font-bold tracking-widest uppercase">
						Where We Work
					</p>
					<h2 className="font-display mb-4 text-4xl font-bold text-white uppercase">
						Three Studios, One Team
					</h2>
					<p className="text-studio-light text-lg leading-relaxed">
						Our studios hand work across time zones, so somewhere in the world a
						Nebula team is always building. Plenty of roles are fully remote
						too.
					</p>
				</div>
				<ul className="grid gap-6 md:grid-cols-3">
					{site.offices.map((office) => (
						<li
							key={office.city}
							className="bg-studio-card rounded-xl border border-white/5 p-8"
						>
							<div className="mb-6 flex items-center justify-between">
								<span className="text-studio-accent text-xs font-bold tracking-widest uppercase">
									{office.country}
								</span>
								<span className="text-studio-light flex items-center gap-1.5 font-mono text-sm">
									<Clock className="h-3.5 w-3.5" />
									{localTime(office.timezone)}
								</span>
							</div>
							<h3 className="font-display mb-2 text-3xl font-bold text-white">
								{office.city}
							</h3>
							<p className="text-studio-light mb-6 text-sm">{office.role}</p>
							<Link
								to="/careers"
								className="text-sm font-bold tracking-wide text-white uppercase underline-offset-4 hover:underline"
							>
								View Roles →
							</Link>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
