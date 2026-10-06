import { ArrowRight, Briefcase } from "lucide-react";
import type React from "react";
import { Link } from "react-router-dom";
import careersImage from "@/assets/images/home/careers-bg.webp";
import { jobs } from "@/pages/careers/careers-data";

export const CareersCTA: React.FC = () => {
	return (
		<section className="bg-studio-card relative overflow-hidden py-32">
			<div className="absolute inset-0">
				<img
					src={careersImage}
					loading="lazy"
					className="h-full w-full object-cover opacity-20"
					alt=""
				/>
				<div className="from-studio-black via-studio-black/90 absolute inset-0 bg-linear-to-r to-transparent" />
			</div>

			<div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 md:flex-row">
				<div className="max-w-2xl">
					<div className="mb-4 flex items-center gap-2">
						<Briefcase className="text-studio-accent h-6 w-6" />
						<p className="text-studio-accent font-display font-bold tracking-widest uppercase">
							Careers
						</p>
					</div>
					<h2 className="font-display mb-6 text-5xl font-bold text-white">
						YOUR LEGACY <br /> STARTS HERE
					</h2>
					<p className="text-studio-light mb-8 text-xl leading-relaxed">
						We're looking for visionaries, rebels and masters of their craft.{" "}
						{jobs.length} open roles across engineering, art, design and
						production, with no crunch, ever.
					</p>
					<Link
						to="/careers"
						className="text-studio-black font-display hover:bg-studio-accent inline-block rounded bg-white px-8 py-3 font-bold tracking-wider uppercase transition-all hover:text-white"
					>
						View Open Positions
					</Link>
				</div>

				<div className="hidden md:block">
					<div className="bg-studio-black/50 w-80 rounded-xl border border-white/10 p-8 backdrop-blur-md">
						<h3 className="mb-4 text-left font-bold text-white uppercase">
							We Are Hiring
						</h3>
						<ul className="divide-y divide-white/10">
							{jobs.slice(0, 4).map((job) => (
								<li key={job.slug}>
									<Link
										to={`/careers/${job.slug}`}
										className="text-studio-light group flex items-center justify-between py-2.5 text-sm transition-colors hover:text-white"
									>
										{job.title}
										<ArrowRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};
