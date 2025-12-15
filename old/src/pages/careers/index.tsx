
import type React from "react";
import { useState, useRef } from "react";
import type { Job } from "@/shared/types/types";
import { jobs } from "./careers-data";
import { JobListItem } from "./JobListItem";
import { JobDetailModal } from "./JobDetailModal";

export const Careers: React.FC = () => {
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const listRef = useRef<HTMLDivElement>(null);

    const closeJob = () => {
        setSelectedJob(null);
    };

    return (
        <section className="bg-studio-dark relative min-h-screen pt-32 pb-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                    <div className="max-w-2xl">
                        <h4 className="text-studio-accent font-display mb-2 font-bold tracking-widest uppercase">
                            Join The Nebula
                        </h4>
                        <h2 className="font-display mb-6 text-4xl font-bold text-white md:text-5xl">
                            BUILD THE IMPOSSIBLE
                        </h2>
                        <p className="text-studio-light font-sans text-lg leading-relaxed">
                            We're looking for visionaries, rebels, and masters of their craft.
                            If you want to create games that define a generation, you belong
                            here.
                        </p>
                    </div>
                </div>

                <div ref={listRef} className="grid scroll-mt-32 gap-4">
                    {jobs.map((job) => (
                        <JobListItem key={job.id} job={job} onSelectJob={setSelectedJob} />
                    ))}
                </div>
            </div>

            {selectedJob && (
                <JobDetailModal job={selectedJob} onClose={closeJob} />
            )}
        </section>
    );
};
