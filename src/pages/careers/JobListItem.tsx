import { ArrowRight, Briefcase, MapPin } from "lucide-react";
import type React from "react";
import { Link } from "react-router-dom";
import type { Job } from "@/shared/types/types";

interface JobListItemProps {
	job: Job;
}

export const JobListItem: React.FC<JobListItemProps> = ({ job }) => {
	return (
		<Link
			to={`/careers/${job.slug}`}
			className="group bg-studio-card/50 hover:bg-studio-card relative flex flex-col items-start justify-between gap-6 rounded-lg border border-white/5 p-6 transition-all duration-300 md:flex-row md:items-center md:p-8"
		>
			<div className="flex-1">
				<span className="text-studio-accent bg-studio-accent/10 mb-2 inline-block rounded px-2 py-1 text-xs font-bold tracking-wider uppercase">
					{job.department}
				</span>
				<h3 className="font-display group-hover:text-studio-accent text-2xl font-bold text-white transition-colors">
					{job.title}
				</h3>
				<p className="text-studio-light mt-2 max-w-2xl text-sm">
					{job.summary}
				</p>
				<div className="text-studio-light mt-3 flex flex-wrap gap-x-4 gap-y-1 font-sans text-sm">
					<span className="flex items-center gap-1">
						<MapPin className="h-4 w-4" /> {job.location}
					</span>
					<span className="flex items-center gap-1">
						<Briefcase className="h-4 w-4" /> {job.type}
					</span>
					{job.salary && <span className="text-white/80">{job.salary}</span>}
				</div>
			</div>

			<span className="group-hover:bg-studio-accent group-hover:border-studio-accent flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 transition-all group-hover:text-white">
				<ArrowRight className="h-5 w-5 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
			</span>
		</Link>
	);
};
