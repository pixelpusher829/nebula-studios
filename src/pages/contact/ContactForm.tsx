import { ArrowRight, Check, Loader2 } from "lucide-react";
import type React from "react";
import { Link } from "react-router-dom";
import { site } from "@/config/site";
import { useFormSubmit } from "@/shared/lib/forms";

const inputClass =
	"bg-studio-black/50 focus:border-studio-accent w-full rounded border border-white/10 p-3 text-white transition-colors focus:outline-none";
const labelClass =
	"text-studio-light text-xs font-bold tracking-wider uppercase";

const subjects = [
	"Business & Partnerships",
	"Publishing",
	"Press & Media",
	"Careers",
	"Something Else",
];

export const ContactForm: React.FC = () => {
	const { status, setStatus, onSubmit } = useFormSubmit("Contact");

	if (status === "success") {
		return (
			<div
				className="bg-studio-card flex flex-col items-center justify-center rounded-2xl border border-white/5 p-12 text-center shadow-xl"
				aria-live="polite"
			>
				<div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-green-500">
					<Check className="h-8 w-8" />
				</div>
				<h2 className="font-display mb-2 text-2xl font-bold text-white">
					Message Received
				</h2>
				<p className="text-studio-light mb-6">
					Thanks for reaching out. We reply to every message within two business
					days.
				</p>
				<button
					type="button"
					onClick={() => setStatus("idle")}
					className="text-studio-accent text-sm font-bold uppercase hover:text-white"
				>
					Send Another Message
				</button>
			</div>
		);
	}

	return (
		<div className="bg-studio-card rounded-2xl border border-white/5 p-8 shadow-xl md:p-10">
			<form onSubmit={onSubmit} className="space-y-6">
				<input
					type="text"
					name="_gotcha"
					tabIndex={-1}
					autoComplete="off"
					className="hidden"
					aria-hidden="true"
				/>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					<div className="space-y-2">
						<label htmlFor="contact-name" className={labelClass}>
							Name
						</label>
						<input
							id="contact-name"
							name="name"
							required
							autoComplete="name"
							className={inputClass}
						/>
					</div>
					<div className="space-y-2">
						<label htmlFor="contact-email" className={labelClass}>
							Email
						</label>
						<input
							id="contact-email"
							name="email"
							type="email"
							required
							autoComplete="email"
							className={inputClass}
						/>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					<div className="space-y-2">
						<label htmlFor="contact-company" className={labelClass}>
							Company{" "}
							<span className="font-normal normal-case">(optional)</span>
						</label>
						<input
							id="contact-company"
							name="company"
							autoComplete="organization"
							className={inputClass}
						/>
					</div>
					<div className="space-y-2">
						<label htmlFor="contact-subject" className={labelClass}>
							Subject
						</label>
						<select id="contact-subject" name="subject" className={inputClass}>
							{subjects.map((s) => (
								<option key={s}>{s}</option>
							))}
						</select>
					</div>
				</div>

				<div className="space-y-2">
					<label htmlFor="contact-message" className={labelClass}>
						Message
					</label>
					<textarea
						id="contact-message"
						name="message"
						required
						minLength={10}
						rows={5}
						className={inputClass}
						placeholder="How can we help?"
					/>
				</div>

				<p className="text-studio-light text-sm">
					Need help with a game? Player support is fastest at{" "}
					<a
						href={`mailto:${site.email.support}`}
						className="text-studio-accent underline underline-offset-4"
					>
						{site.email.support}
					</a>
					.
				</p>

				<button
					type="submit"
					disabled={status === "submitting"}
					className="text-studio-black font-display hover:bg-studio-accent group flex w-full items-center justify-center gap-2 rounded bg-white py-4 font-bold tracking-wider uppercase transition-all hover:text-white disabled:opacity-60"
				>
					{status === "submitting" ? (
						<>
							<Loader2 className="h-5 w-5 animate-spin" /> Sending…
						</>
					) : (
						<>
							Send Message{" "}
							<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
						</>
					)}
				</button>

				{status === "error" && (
					<p className="text-sm text-red-400" role="alert">
						We couldn't send your message. Please try again, or email us
						directly at{" "}
						<a href={`mailto:${site.email.general}`} className="underline">
							{site.email.general}
						</a>
						.
					</p>
				)}

				<p className="text-studio-light/70 text-xs">
					By sending this form you agree to our{" "}
					<Link to="/privacy" className="underline hover:text-white">
						privacy policy
					</Link>
					.
				</p>
			</form>
		</div>
	);
};
