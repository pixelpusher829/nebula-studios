import type React from "react";
import { site } from "@/config/site";
import { Seo } from "@/shared/components/Seo";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

export const Contact: React.FC = () => {
	return (
		<section className="bg-studio-dark relative min-h-screen overflow-hidden pt-32 pb-24">
			<Seo
				title="Contact"
				description={`Get in touch with ${site.name} about partnerships, publishing, press or player support.`}
			/>
			{/* Abstract Background */}
			<div className="pointer-events-none absolute top-0 left-0 h-full w-full opacity-5">
				<div className="bg-studio-accent absolute top-0 right-0 h-96 w-96 translate-x-1/2 rounded-full blur-[150px]" />
				<div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-blue-600 blur-[150px]" />
			</div>

			<div className="relative z-10 mx-auto max-w-7xl px-6">
				<div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
					<ContactInfo />
					<ContactForm />
				</div>

				<div className="mt-24 border-t border-white/10 pt-16">
					<h2 className="font-display mb-10 text-3xl font-bold text-white uppercase">
						Our Studios
					</h2>
					<ul className="grid gap-6 md:grid-cols-3">
						{site.offices.map((office) => (
							<li
								key={office.city}
								className="bg-studio-card rounded-xl border border-white/5 p-8"
							>
								<h3 className="font-display text-2xl font-bold text-white">
									{office.city}
								</h3>
								<p className="text-studio-accent mb-3 text-xs font-bold tracking-widest uppercase">
									{office.country}
								</p>
								<p className="text-studio-light text-sm">{office.role}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};
