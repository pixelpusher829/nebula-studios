
import type React from "react";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";
import type { Job } from "@/shared/types/types";

interface JobListItemProps {
    job: Job;
    onSelectJob: (job: Job) => void;
}

export const JobListItem: React.FC<JobListItemProps> = ({ job, onSelectJob }) => {
    return (
        <div
            key={job.id}
            onClick={() => onSelectJob(job)}
            className="group bg-studio-card/50 hover:bg-studio-card relative flex cursor-pointer flex-col items-start justify-between gap-6 rounded-lg border border-white/5 p-6 transition-all duration-300 md:flex-row md:items-center md:p-8"
        >
            <div className="flex-1">
                <div className="mb-2 flex items-center gap-3">
                    <span className="text-studio-accent bg-studio-accent/10 rounded px-2 py-1 text-xs font-bold tracking-wider uppercase">
                        {job.department}
                    </span>
                </div>
                <h3 className="font-display group-hover:text-studio-accent text-2xl font-bold text-white transition-colors">
                    {job.title}
                </h3>
                <div className="text-studio-light mt-3 flex flex-wrap gap-4 font-sans text-sm">
                    <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" /> {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" /> {job.type}
                    </div>
                </div>
            </div>

            <div className="group-hover:bg-studio-accent group-hover:border-studio-accent flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all group-hover:text-white">
                <ArrowRight className="h-5 w-5 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
            </div>
        </div>
    );
};
