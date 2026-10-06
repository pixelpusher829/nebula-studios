import type React from "react";
import { useSearchParams } from "react-router-dom";
import { site } from "@/config/site";
import { PageHeader } from "@/shared/components/PageHeader";
import { Seo } from "@/shared/components/Seo";
import { hiringSteps, jobs, perks } from "./careers-data";
import { JobListItem } from "./JobListItem";

const ALL = "All";
const departments = [ALL, ...new Set(jobs.map((j) => j.department))];

export const Careers: React.FC = () => {
	const [params, setParams] = useSearchParams();
	const active = params.get("department") ?? ALL;
	const filtered =
		active === ALL ? jobs : jobs.filter((j) => j.department === active);

	const select = (department: string) =>
		setParams(department === ALL ? {} : { department }, {
			replace: true,
			preventScrollReset: true,
		});

	return (
		<div className="bg-studio-dark">
			<Seo
				title="Careers"
				description={`Join ${site.headcount} artists, engineers and storytellers in San Francisco, London, Tokyo and remote. No crunch, 20 weeks parental leave, and games that matter.`}
			/>

			<section className="mx-auto max-w-7xl px-6 pt-32 pb-24">
				<PageHeader
					eyebrow="Join The Nebula"
					title="Build The Impossible"
					intro="We're looking for visionaries, rebels and masters of their craft. If you want to make games that define a generation, without sacrificing your life to do it, you belong here."
				/>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{perks.map((perk) => (
						<div
							key={perk.title}
							className="bg-studio-card rounded-xl border border-white/5 p-8"
						>
							<h2 className="font-display mb-3 text-xl font-bold text-white">
								{perk.title}
							</h2>
							<p className="text-studio-light text-sm leading-relaxed">
								{perk.desc}
							</p>
						</div>
					))}
				</div>
			</section>

			<section
				id="openings"
				className="bg-studio-black scroll-mt-24 border-y border-white/5 py-24"
			>
				<div className="mx-auto max-w-7xl px-6">
					<div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
						<h2 className="font-display text-4xl font-bold text-white uppercase">
							Open Roles{" "}
							<span className="text-studio-accent">({jobs.length})</span>
						</h2>
						<nav
							className="flex flex-wrap gap-2"
							aria-label="Filter by department"
						>
							{departments.map((d) => (
								<button
									key={d}
									type="button"
									onClick={() => select(d)}
									aria-pressed={active === d}
									className={`rounded-full border px-4 py-2 text-xs font-bold tracking-wider uppercase transition-colors ${active === d ? "bg-studio-accent border-studio-accent text-white" : "text-studio-light border-white/10 hover:border-white/40 hover:text-white"}`}
								>
									{d}
								</button>
							))}
						</nav>
					</div>

					<div className="grid gap-4">
						{filtered.map((job) => (
							<JobListItem key={job.slug} job={job} />
						))}
					</div>

					<p className="text-studio-light mt-10 text-center">
						Don't see your role? We're always meeting great people. Send your
						portfolio to{" "}
						<a
							href={`mailto:${site.email.careers}`}
							className="text-studio-accent underline underline-offset-4 hover:text-white"
						>
							{site.email.careers}
						</a>
						.
					</p>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-6 py-24">
				<PageHeader
					as="h2"
					eyebrow="How We Hire"
					title="A Process That Respects Your Time"
				/>
				<ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{hiringSteps.map((step, i) => (
						<li
							key={step.title}
							className="border-studio-accent border-t-2 pt-6"
						>
							<span className="font-display text-studio-accent text-sm font-bold">
								0{i + 1}
							</span>
							<h3 className="font-display mt-2 mb-3 text-xl font-bold text-white">
								{step.title}
							</h3>
							<p className="text-studio-light text-sm leading-relaxed">
								{step.desc}
							</p>
						</li>
					))}
				</ol>
				<p className="text-studio-light/80 mt-16 max-w-3xl text-sm leading-relaxed">
					{site.name} is an equal opportunity employer. We welcome applicants of
					every background, identity and ability, and we'll gladly provide
					reasonable accommodations at any stage of the process. Just let your
					recruiter know.
				</p>
			</section>
		</div>
	);
};
