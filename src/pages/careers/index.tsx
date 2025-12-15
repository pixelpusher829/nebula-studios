import type React from "react";
import { useState, useRef } from "react";
import { ArrowRight, MapPin, Briefcase, X, Upload, Check } from "lucide-react";
import type { Job } from "@/shared/types/types";
import ReactMarkdown from "react-markdown";

const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Gameplay Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description: `
### About the Role
We are looking for a Senior Gameplay Engineer to help us build the core combat systems for our unannounced sci-fi RPG. You will work closely with designers to iterate on the 3Cs (Camera, Control, Character) and deliver a visceral combat experience.

### Responsibilities
- Implement and maintain core gameplay systems in C++ and Unreal Engine 5.
- Optimize game code for performance on PC and Consoles.
- Mentor junior engineers and conduct code reviews.
- Collaborate with the design team to prototype new mechanics.

### Requirements
- 5+ years of professional game development experience.
- Shipped at least one AAA title in a similar role.
- Strong proficiency in C++.
- Experience with Unreal Engine 4 or 5.
    `,
  },
  {
    id: "2",
    title: "Lead Concept Artist",
    department: "Art",
    location: "Remote",
    type: "Contract",
    description: `
### About the Role
Nebula Studios is seeking a Lead Concept Artist to define the visual identity of a new IP. You will lead a team of artists to create environments, characters, and props that tell a story.

### Responsibilities
- Create high-quality environment and character concepts.
- Define style guides and mood boards.
- Provide feedback and direction to external vendors.

### Requirements
- Portfolio demonstrating a strong understanding of composition, lighting, and color.
- Experience leading an art team.
- Proficiency in Photoshop, Blender, or similar tools.
    `,
  },
  {
    id: "3",
    title: "Narrative Designer",
    department: "Design",
    location: "London, UK",
    type: "Full-time",
    description: `
### About the Role
We weave stories into everything we do. As a Narrative Designer, you will ensure that gameplay and story work in harmony.

### Responsibilities
- Write dialogue, item descriptions, and lore.
- Implement narrative scripts using our internal tools.
- Collaborate with Level Designers to embed storytelling in the environment.
    `,
  },
  {
    id: "4",
    title: "Community Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: `
### About the Role
You are the voice of Nebula Studios. You will manage our social channels, engage with players, and gather feedback to help improve our games.

### Responsibilities
- Manage social media accounts (Twitter, Discord, TikTok).
- Create engaging content and campaigns.
- Compile community feedback reports for the dev team.
    `,
  },
  {
    id: "5",
    title: "Backend Engineer (Services)",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: `
### About the Role
Help us scale our live service infrastructure to support millions of concurrent players. You will work on matchmaking, leaderboards, and player data persistence.

### Requirements
- Experience with Golang or Rust.
- Knowledge of Kubernetes and AWS/GCP.
- Experience with high-traffic distributed systems.
    `,
  },
  {
    id: "6",
    title: "Technical Animator",
    department: "Art",
    location: "San Francisco, CA",
    type: "Full-time",
    description: `
### About the Role
Bridge the gap between art and code. You will build animation state machines, rigging pipelines, and tools to help our animators work faster.

### Requirements
- Strong Python scripting skills.
- Deep knowledge of Maya and Unreal Engine animation blueprints.
    `,
  },
  {
    id: "7",
    title: "QA Lead",
    department: "Production",
    location: "London, UK",
    type: "Full-time",
    description: `
### About the Role
Quality is our north star. As QA Lead, you will define testing strategies, manage the QA team, and ensure our releases are bug-free.

### Requirements
- 4+ years in QA leadership.
- Experience with JIRA and test management software.
    `,
  },
  {
    id: "8",
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Contract",
    description: `
### About the Role
Design intuitive and stylish interfaces for our next-gen titles. From HUDs to main menus, you will shape how players interact with the game.

### Requirements
- Strong portfolio of game UI or web design.
- Proficiency in Figma and Adobe Suite.
    `,
  },
];

export const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [applicationSent, setApplicationSent] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setApplicationSent(true);
    }, 1000);
  };

  const closeJob = () => {
    setSelectedJob(null);
    setApplicationSent(false);
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
            <div
              key={job.id}
              onClick={() => setSelectedJob(job)}
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
          ))}
        </div>
      </div>

      {/* JOB DETAILS MODAL */}
      {selectedJob && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            className="bg-studio-black/90 absolute inset-0 backdrop-blur-md"
            onClick={closeJob}
          />
          <div className="bg-studio-card relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            {/* Header */}
            <div className="bg-studio-dark flex items-start justify-between border-b border-white/10 p-8">
              <div>
                <span className="text-studio-accent mb-2 block text-xs font-bold tracking-widest uppercase">
                  {selectedJob.department}
                </span>
                <h2 className="font-display mb-2 text-3xl font-bold text-white">
                  {selectedJob.title}
                </h2>
                <div className="text-studio-light flex gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" /> {selectedJob.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" /> {selectedJob.type}
                  </span>
                </div>
              </div>
              <button
                onClick={closeJob}
                className="rounded-full p-2 text-white transition-colors hover:bg-white/10"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Body */}
            <div className="grid flex-1 gap-8 overflow-y-auto p-8 md:grid-cols-3">
              {/* Job Description */}
              <div className="markdown-content md:col-span-2">
                <ReactMarkdown>{selectedJob.description}</ReactMarkdown>
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
                      onClick={closeJob}
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
      )}
    </section>
  );
};
