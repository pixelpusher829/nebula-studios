import type React from "react";
import { Link } from "react-router-dom";
import { teamMembers } from "./studio-data";

export const Leadership: React.FC = () => {
	return (
		<section className="bg-studio-black py-24">
			<div className="mx-auto max-w-7xl px-6">
				<div className="mb-12 flex items-end justify-between">
					<div>
						<p className="text-studio-accent font-display mb-2 font-bold tracking-widest uppercase">
							Leadership
						</p>
						<h2 className="font-display text-4xl font-bold text-white">
							MEET THE TEAM
						</h2>
					</div>
					<Link
						to="/careers"
						className="hover:text-studio-black hidden rounded border border-white/20 px-6 py-2 text-sm font-bold text-white uppercase transition-all hover:bg-white md:block"
					>
						Join Us
					</Link>
				</div>

				<ul className="grid grid-cols-2 gap-6 md:gap-8 lg:grid-cols-4">
					{teamMembers.map((member) => (
						<li key={member.name} className="group">
							<div className="bg-studio-card relative mb-4 overflow-hidden rounded-xl">
								<img
									src={member.img}
									loading="lazy"
									className="aspect-[3/4] w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
									alt={member.name}
								/>
							</div>
							<h3 className="text-lg font-bold text-white">{member.name}</h3>
							<p className="text-studio-accent text-sm font-bold uppercase">
								{member.role}
							</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
