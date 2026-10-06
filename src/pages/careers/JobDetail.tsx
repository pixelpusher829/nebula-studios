import {
	ArrowLeft,
	Briefcase,
	Check,
	Loader2,
	MapPin,
	Upload,
	Wallet,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import { site } from "@/config/site";
import { NotFound } from "@/pages/404";
import { Seo } from "@/shared/components/Seo";
import { useFormSubmit } from "@/shared/lib/forms";
import type { Job } from "@/shared/types/types";
import { getJob } from "./careers-data";

const MAX_CV_BYTES = 10 * 1024 * 1024;

const inputClass =
	"bg-studio-card focus:border-studio-accent w-full rounded border border-white/10 p-3 text-white outline-none transition-colors";
const labelClass =
	"text-studio-light mb-1 block text-xs font-bold uppercase tracking-wider";

const ApplicationForm: React.FC<{ job: Job }> = ({ job }) => {
	const { status, onSubmit } = useFormSubmit(`Application: ${job.title}`);
	const [fileName, setFileName] = useState<string | null>(null);
	const [fileError, setFileError] = useState<string | null>(null);

	const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		setFileError(null);
		setFileName(file?.name ?? null);
		if (file && file.size > MAX_CV_BYTES) {
			setFileError("Please upload a file under 10 MB.");
			e.target.value = "";
			setFileName(null);
		}
	};

	if (status === "success") {
		return (
			<div className="py-12 text-center" aria-live="polite">
				<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-green-500">
					<Check className="h-8 w-8" />
				</div>
				<h2 className="mb-2 text-xl font-bold text-white">Application Sent</h2>
				<p className="text-studio-light text-sm">
					Thanks for applying. A real person will read your application, and
					you'll hear from us within two weeks.
				</p>
				<Link
					to="/careers"
					className="text-studio-accent mt-6 inline-block text-sm font-bold uppercase hover:text-white"
				>
					See Other Roles
				</Link>
			</div>
		);
	}

	return (
		<form
			onSubmit={onSubmit}
			className="space-y-4"
			encType="multipart/form-data"
		>
			<h2 className="mb-4 font-bold text-white uppercase">
				Apply for this Role
			</h2>
			<input type="hidden" name="role" value={job.title} />
			<input
				type="text"
				name="_gotcha"
				tabIndex={-1}
				autoComplete="off"
				className="hidden"
				aria-hidden="true"
			/>
			<div>
				<label htmlFor="apply-name" className={labelClass}>
					Full Name
				</label>
				<input
					id="apply-name"
					name="name"
					required
					autoComplete="name"
					className={inputClass}
				/>
			</div>
			<div>
				<label htmlFor="apply-email" className={labelClass}>
					Email
				</label>
				<input
					id="apply-email"
					name="email"
					type="email"
					required
					autoComplete="email"
					className={inputClass}
				/>
			</div>
			<div>
				<label htmlFor="apply-portfolio" className={labelClass}>
					Portfolio / LinkedIn
				</label>
				<input
					id="apply-portfolio"
					name="portfolio"
					type="url"
					placeholder="https://"
					className={inputClass}
				/>
			</div>
			<div>
				<label htmlFor="apply-cv" className={labelClass}>
					CV / Resume
				</label>
				<label
					htmlFor="apply-cv"
					className="hover:border-studio-accent hover:bg-studio-accent/5 focus-within:border-studio-accent block cursor-pointer rounded border border-dashed border-white/20 p-4 text-center transition-colors"
				>
					<Upload className="text-studio-light mx-auto mb-2 h-6 w-6" />
					<span className="text-studio-light block truncate text-xs">
						{fileName ?? "PDF or DOCX, up to 10 MB"}
					</span>
					<input
						id="apply-cv"
						name="cv"
						type="file"
						required
						accept=".pdf,.doc,.docx,application/pdf"
						onChange={onFileChange}
						className="sr-only"
					/>
				</label>
				{fileError && (
					<p className="mt-1 text-xs text-red-400" role="alert">
						{fileError}
					</p>
				)}
			</div>
			<div>
				<label htmlFor="apply-note" className={labelClass}>
					Anything else?{" "}
					<span className="font-normal normal-case">(optional)</span>
				</label>
				<textarea
					id="apply-note"
					name="message"
					rows={3}
					className={inputClass}
				/>
			</div>
			<button
				type="submit"
				disabled={status === "submitting"}
				className="bg-studio-accent flex w-full items-center justify-center gap-2 rounded py-3 font-bold text-white uppercase transition-colors hover:bg-orange-600 disabled:opacity-60"
			>
				{status === "submitting" && (
					<Loader2 className="h-4 w-4 animate-spin" />
				)}
				{status === "submitting" ? "Sending…" : "Submit Application"}
			</button>
			{status === "error" && (
				<p className="text-sm text-red-400" role="alert">
					We couldn't send your application. Please try again, or email it to{" "}
					<a
						href={`mailto:${site.email.careers}?subject=${encodeURIComponent(job.title)}`}
						className="underline"
					>
						{site.email.careers}
					</a>
					.
				</p>
			)}
			<p className="text-studio-light/70 text-xs">
				We'll only use your details to assess your application. See our{" "}
				<Link to="/privacy" className="underline hover:text-white">
					privacy policy
				</Link>
				.
			</p>
		</form>
	);
};

export const JobDetail: React.FC = () => {
	const { slug = "" } = useParams();
	const job = getJob(slug);

	if (!job) return <NotFound />;

	return (
		<article className="bg-studio-dark min-h-screen pt-32 pb-24">
			<Seo title={`${job.title} · Careers`} description={job.summary} />
			<div className="mx-auto max-w-7xl px-6">
				<Link
					to="/careers#openings"
					className="text-studio-light mb-8 inline-flex items-center gap-2 text-xs font-bold tracking-wide uppercase transition-colors hover:text-white"
				>
					<ArrowLeft className="h-4 w-4" /> All Open Roles
				</Link>

				<header className="mb-12 border-b border-white/10 pb-10">
					<span className="text-studio-accent mb-3 block text-xs font-bold tracking-widest uppercase">
						{job.department}
					</span>
					<h1 className="font-display mb-6 text-4xl font-bold text-white md:text-6xl">
						{job.title}
					</h1>
					<div className="text-studio-light flex flex-wrap gap-x-6 gap-y-2">
						<span className="flex items-center gap-2">
							<MapPin className="h-4 w-4" /> {job.location}
						</span>
						<span className="flex items-center gap-2">
							<Briefcase className="h-4 w-4" /> {job.type}
						</span>
						{job.salary && (
							<span className="flex items-center gap-2">
								<Wallet className="h-4 w-4" /> {job.salary}
							</span>
						)}
					</div>
				</header>

				<div className="grid gap-12 lg:grid-cols-3">
					<div className="markdown-content careers lg:col-span-2">
						<ReactMarkdown>{job.description}</ReactMarkdown>
					</div>
					<aside className="bg-studio-black/50 h-fit rounded-xl border border-white/5 p-6 lg:sticky lg:top-28">
						<ApplicationForm job={job} />
					</aside>
				</div>
			</div>
		</article>
	);
};
