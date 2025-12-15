import type React from "react";
import { useState } from "react";
import { X, MapPin, Briefcase, Upload, Check } from "lucide-react";
import type { Job } from "@/shared/types/types";
import ReactMarkdown from "react-markdown";

interface JobDetailModalProps {
  job: Job;
  onClose: () => void;
}

export const JobDetailModal: React.FC<JobDetailModalProps> = ({
  job,
  onClose,
}) => {
  const [applicationSent, setApplicationSent] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setApplicationSent(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        className="bg-studio-black/90 absolute inset-0 backdrop-blur-md"
        onClick={onClose}
      />
      <div className="bg-studio-card relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
        {/* Header */}
        <div className="bg-studio-dark flex items-start justify-between border-b border-white/10 p-8">
          <div>
            <span className="text-studio-accent mb-2 block text-xs font-bold tracking-widest uppercase">
              {job.department}
            </span>
            <h2 className="font-display mb-2 text-3xl font-bold text-white">
              {job.title}
            </h2>
            <div className="text-studio-light flex gap-4 text-sm">
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" /> {job.location}
              </span>
              <span className="flex items-center gap-1">
                <Briefcase className="h-4 w-4" /> {job.type}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-white transition-colors hover:bg-white/10"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Body */}
        <div
          className="grid flex-1 gap-8 overflow-y-auto p-8 md:grid-cols-3"
        >
          {/* Job Description */}
          <div className="markdown-content careers md:col-span-2">
            <ReactMarkdown>{job.description}</ReactMarkdown>
          </div>

          {/* Application Form */}
          <div className="bg-studio-black/50 h-fit rounded-xl border border-white/5 p-6">
            {!applicationSent ? (
              <form onSubmit={handleApply} className="space-y-4">
                <h3 className="mb-4 font-bold text-white uppercase">
                  Apply for this Role
                </h3>
                <div>
                  <label className="text-studio-light mb-1 block text-xs font-bold uppercase">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    className="bg-studio-card focus:border-studio-accent w-full rounded border border-white/10 p-2 text-white outline-none"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="text-studio-light mb-1 block text-xs font-bold uppercase">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    className="bg-studio-card focus:border-studio-accent w-full rounded border border-white/10 p-2 text-white outline-none"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label className="text-studio-light mb-1 block text-xs font-bold uppercase">
                    Portfolio / LinkedIn
                  </label>
                  <input
                    type="url"
                    className="bg-studio-card focus:border-studio-accent w-full rounded border border-white/10 p-2 text-white outline-none"
                    placeholder="https://..."
                  />
                </div>
                <div>
                  <label className="text-studio-light mb-1 block text-xs font-bold uppercase">
                    Resume / CV
                  </label>
                  <div className="hover:border-studio-accent hover:bg-studio-accent/5 cursor-pointer rounded border border-dashed border-white/20 p-4 text-center transition-colors">
                    <Upload className="text-studio-light mx-auto mb-2 h-6 w-6" />
                    <span className="text-studio-light text-xs">
                      Click to upload (PDF)
                    </span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-studio-accent w-full rounded py-3 font-bold text-white uppercase transition-colors hover:bg-orange-600"
                >
                  Submit Application
                </button>
              </form>
            ) : (
              <div className="py-12 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  Application Sent!
                </h3>
                <p className="text-studio-light text-sm">
                  Thanks for applying. We will be in touch shortly.
                </p>
                <button
                  onClick={onClose}
                  className="text-studio-accent mt-6 text-sm font-bold uppercase hover:text-white"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
