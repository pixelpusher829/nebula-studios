import type React from "react";
import { useState, useRef } from "react";
import {
	ArrowRight,
	MapPin,
	Briefcase,
	X,
	Upload,
	Check,
} from "lucide-react";
import type { Job } from "@/types/types";
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
		<section className="pt-32 pb-24 bg-studio-dark relative min-h-screen">
			<div className="max-w-7xl mx-auto px-6">
				<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
					<div className="max-w-2xl">
						<h4 className="text-studio-accent font-display font-bold tracking-widest uppercase mb-2">
							Join The Nebula
						</h4>
						<h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
							BUILD THE IMPOSSIBLE
						</h2>
						<p className="text-studio-light font-sans text-lg leading-relaxed">
							We're looking for visionaries, rebels, and masters
							of their craft. If you want to create games that
							define a generation, you belong here.
						</p>
					</div>
				</div>

				<div ref={listRef} className="grid gap-4 scroll-mt-32">
					{jobs.map((job) => (
						<div
							key={job.id}
							onClick={() => setSelectedJob(job)}
							className="group relative bg-studio-card/50 hover:bg-studio-card border border-white/5 rounded-lg p-6 md:p-8 transition-all duration-300 cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
						>
							<div className="flex-1">
								<div className="flex items-center gap-3 mb-2">
									<span className="text-xs font-bold text-studio-accent uppercase tracking-wider bg-studio-accent/10 px-2 py-1 rounded">
										{job.department}
									</span>
								</div>
								<h3 className="text-2xl font-display font-bold text-white group-hover:text-studio-accent transition-colors">
									{job.title}
								</h3>
								<div className="flex flex-wrap gap-4 mt-3 text-sm text-studio-light font-sans">
									<div className="flex items-center gap-1">
										<MapPin className="w-4 h-4" />{" "}
										{job.location}
									</div>
									<div className="flex items-center gap-1">
										<Briefcase className="w-4 h-4" />{" "}
										{job.type}
									</div>
								</div>
							</div>

							<div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 group-hover:bg-studio-accent group-hover:border-studio-accent group-hover:text-white transition-all">
								<ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
							</div>
						</div>
					))}
				</div>
			</div>

			{/* JOB DETAILS MODAL */}
			{selectedJob && (
				<div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
					<div
						className="absolute inset-0 bg-studio-black/90 backdrop-blur-md"
						onClick={closeJob}
					/>
					<div className="relative w-full max-w-4xl bg-studio-card rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[90vh]">
						{/* Header */}
						<div className="p-8 border-b border-white/10 flex justify-between items-start bg-studio-dark">
							<div>
								<span className="text-studio-accent font-bold uppercase tracking-widest text-xs mb-2 block">
									{selectedJob.department}
								</span>
								<h2 className="text-3xl font-display font-bold text-white mb-2">
									{selectedJob.title}
								</h2>
								<div className="flex gap-4 text-studio-light text-sm">
									<span className="flex items-center gap-1">
										<MapPin className="w-4 h-4" />{" "}
										{selectedJob.location}
									</span>
									<span className="flex items-center gap-1">
										<Briefcase className="w-4 h-4" />{" "}
										{selectedJob.type}
									</span>
								</div>
							</div>
							<button
								onClick={closeJob}
								className="p-2 hover:bg-white/10 rounded-full text-white transition-colors"
							>
								<X className="w-6 h-6" />
							</button>
						</div>

						{/* Body */}
						<div className="flex-1 overflow-y-auto p-8 grid md:grid-cols-3 gap-8">
							{/* Job Description */}
							<div className="md:col-span-2 markdown-content">
								<ReactMarkdown>
									{selectedJob.description}
								</ReactMarkdown>
							</div>

							{/* Application Form */}
							<div className="bg-studio-black/50 p-6 rounded-xl h-fit border border-white/5">
								{!applicationSent ? (
									<form
										onSubmit={handleApply}
										className="space-y-4"
									>
										<h3 className="text-white font-bold uppercase mb-4">
											Apply for this Role
										</h3>
										<div>
											<label className="text-xs text-studio-light uppercase font-bold block mb-1">
												Full Name
											</label>
											<input
												required
												type="text"
												className="w-full bg-studio-card border border-white/10 rounded p-2 text-white focus:border-studio-accent outline-none"
												placeholder="Jane Doe"
											/>
										</div>
										<div>
											<label className="text-xs text-studio-light uppercase font-bold block mb-1">
												Email
											</label>
											<input
												required
												type="email"
												className="w-full bg-studio-card border border-white/10 rounded p-2 text-white focus:border-studio-accent outline-none"
												placeholder="jane@example.com"
											/>
										</div>
										<div>
											<label className="text-xs text-studio-light uppercase font-bold block mb-1">
												Portfolio / LinkedIn
											</label>
											<input
												type="url"
												className="w-full bg-studio-card border border-white/10 rounded p-2 text-white focus:border-studio-accent outline-none"
												placeholder="https://..."
											/>
										</div>
										<div>
											<label className="text-xs text-studio-light uppercase font-bold block mb-1">
												Resume / CV
											</label>
											<div className="border border-dashed border-white/20 rounded p-4 text-center cursor-pointer hover:border-studio-accent hover:bg-studio-accent/5 transition-colors">
												<Upload className="w-6 h-6 text-studio-light mx-auto mb-2" />
												<span className="text-xs text-studio-light">
													Click to upload (PDF)
												</span>
											</div>
										</div>
										<button
											type="submit"
											className="w-full bg-studio-accent text-white py-3 rounded font-bold uppercase hover:bg-orange-600 transition-colors"
										>
											Submit Application
										</button>
									</form>
								) : (
									<div className="text-center py-12">
										<div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
											<Check className="w-8 h-8" />
										</div>
										<h3 className="text-white font-bold text-xl mb-2">
											Application Sent!
										</h3>
										<p className="text-studio-light text-sm">
											Thanks for applying. We will be in
											touch shortly.
										</p>
										<button
											onClick={closeJob}
											className="mt-6 text-studio-accent text-sm font-bold uppercase hover:text-white"
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
