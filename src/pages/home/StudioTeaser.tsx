import { ArrowRight, Users } from "lucide-react";
import type React from "react";
import { Link } from "react-router-dom";
import teamImage from "@/assets/images/home/nebula-team.webp";
import { site } from "@/config/site";

export const StudioTeaser: React.FC = () => {
	return (
		<section className="bg-studio-dark relative border-t border-white/5 py-24">
			<div className="mx-auto max-w-7xl px-6">
				<div className="grid items-center gap-16 md:grid-cols-2">
					<div className="relative order-2 md:order-1">
						<div className="border-studio-accent/20 absolute -top-4 -left-4 z-0 h-full w-full rounded-xl border-2" />
						<img
							src={teamImage}
							loading="lazy"
							alt="The Nebula Studios team at our San Francisco headquarters"
							className="relative z-10 w-full rounded-xl shadow-2xl"
						/>
					</div>
					<div className="order-1 md:order-2">
						<div className="mb-4 flex items-center gap-2">
							<Users className="text-studio-accent h-6 w-6" />
							<p className="text-studio-accent font-display font-bold tracking-widest uppercase">
								The Collective
							</p>
						</div>
						<h2 className="font-display mb-6 text-4xl font-bold text-white md:text-5xl">
							CRAFTING WORLDS <br /> SINCE {site.founded}
						</h2>
						<p className="text-studio-light mb-8 text-lg leading-relaxed">
							We are {site.headcount} dreamers, engineers and artists. From our
							headquarters in San Francisco to our studios in London and Tokyo,
							we are united by a single mission: to create experiences that
							matter, without burning out the people who make them.
						</p>
						<Link
							to="/studio"
							className="hover:text-studio-accent inline-flex items-center gap-2 font-bold tracking-wide text-white uppercase transition-colors"
						>
							Meet The Team <ArrowRight className="h-4 w-4" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
