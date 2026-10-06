import {
	ArrowRight,
	Check,
	Linkedin,
	Loader2,
	MessageCircle,
	Twitter,
	Youtube,
} from "lucide-react";
import type React from "react";
import { Link } from "react-router-dom";
import { site } from "@/config/site";
import { games } from "@/pages/portfolio/portfolio-data";
import { useFormSubmit } from "@/shared/lib/forms";
import { Logo } from "./Logo";

const socials = [
	{ label: "X (Twitter)", href: site.social.x, icon: Twitter },
	{ label: "YouTube", href: site.social.youtube, icon: Youtube },
	{ label: "LinkedIn", href: site.social.linkedin, icon: Linkedin },
	{ label: "Discord", href: site.social.discord, icon: MessageCircle },
];

const companyLinks = [
	{ label: "About Us", to: "/studio" },
	{ label: "Careers", to: "/careers" },
	{ label: "News", to: "/news" },
	{ label: "Press Kit", to: "/press" },
	{ label: "Contact", to: "/contact" },
];

const linkClass = "hover:text-studio-accent transition-colors";

const Newsletter: React.FC = () => {
	const { status, onSubmit } = useFormSubmit("Newsletter signup");

	if (status === "success") {
		return (
			<p
				className="flex items-center gap-2 text-sm text-green-400"
				aria-live="polite"
			>
				<Check className="h-4 w-4" /> You're on the list. Watch your inbox.
			</p>
		);
	}

	return (
		<form onSubmit={onSubmit}>
			<label htmlFor="newsletter-email" className="sr-only">
				Email address
			</label>
			<input
				type="text"
				name="_gotcha"
				tabIndex={-1}
				autoComplete="off"
				className="hidden"
				aria-hidden="true"
			/>
			<div className="flex">
				<input
					id="newsletter-email"
					type="email"
					name="email"
					required
					autoComplete="email"
					placeholder="Email address"
					className="focus:border-studio-accent w-full min-w-0 rounded-l border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus:outline-none"
				/>
				<button
					type="submit"
					disabled={status === "submitting"}
					className="bg-studio-accent rounded-r px-4 py-2 text-white transition-colors hover:bg-orange-600 disabled:opacity-60"
					aria-label="Subscribe"
				>
					{status === "submitting" ? (
						<Loader2 className="h-4 w-4 animate-spin" />
					) : (
						<ArrowRight className="h-4 w-4" />
					)}
				</button>
			</div>
			{status === "error" && (
				<p className="mt-2 text-xs text-red-400" role="alert">
					Something went wrong. Please try again.
				</p>
			)}
			<p className="text-studio-light/70 mt-3 text-xs">
				Unsubscribe anytime. See our{" "}
				<Link to="/privacy" className="underline hover:text-white">
					privacy policy
				</Link>
				.
			</p>
		</form>
	);
};

export const Footer: React.FC = () => {
	return (
		<footer className="bg-studio-black border-t border-white/5 pt-20 pb-10">
			<div className="mx-auto max-w-7xl px-6">
				<div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
					<div>
						<Link
							to="/"
							className="mb-6 flex items-center gap-3"
							aria-label={`${site.name} home`}
						>
							<Logo />
							<span className="font-display text-3xl font-bold tracking-widest text-white uppercase">
								{site.shortName}
							</span>
						</Link>
						<p className="text-studio-light mb-6 text-sm leading-relaxed">
							Pushing the boundaries of interactive entertainment since{" "}
							{site.founded}. We create worlds you'll never want to leave.
						</p>
						<ul className="flex gap-3">
							{socials.map(({ label, href, icon: Icon }) => (
								<li key={label}>
									<a
										href={href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={label}
										className="hover:bg-studio-accent flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors"
									>
										<Icon className="h-4 w-4" />
									</a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h2 className="font-display mb-6 text-lg font-bold tracking-wider text-white uppercase">
							Games
						</h2>
						<ul className="text-studio-light space-y-3 font-sans text-sm">
							{games
								.filter((g) => g.status === "released")
								.map((g) => (
									<li key={g.slug}>
										<Link to={`/games/${g.slug}`} className={linkClass}>
											{g.title}
										</Link>
									</li>
								))}
						</ul>
					</div>

					<div>
						<h2 className="font-display mb-6 text-lg font-bold tracking-wider text-white uppercase">
							Company
						</h2>
						<ul className="text-studio-light space-y-3 font-sans text-sm">
							{companyLinks.map((l) => (
								<li key={l.to}>
									<Link to={l.to} className={linkClass}>
										{l.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h2 className="font-display mb-6 text-lg font-bold tracking-wider text-white uppercase">
							Newsletter
						</h2>
						<p className="text-studio-light mb-4 text-sm">
							Beta invites, dev diaries and studio news. About once a month.
						</p>
						<Newsletter />
					</div>
				</div>

				<div className="text-studio-light flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 font-sans text-xs md:flex-row">
					<p>
						&copy; {new Date().getFullYear()} {site.legalName} All rights
						reserved.
					</p>
					<ul className="flex gap-6 uppercase">
						<li>
							<Link
								to="/privacy"
								className="transition-colors hover:text-white"
							>
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link to="/terms" className="transition-colors hover:text-white">
								Terms of Service
							</Link>
						</li>
						<li>
							<a
								href={`mailto:${site.email.support}`}
								className="transition-colors hover:text-white"
							>
								Player Support
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};
