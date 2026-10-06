import { Gamepad2, Mail, MapPin, Newspaper, Phone, Users } from "lucide-react";
import type React from "react";
import { fullAddress, site } from "@/config/site";

const channels = [
	{
		icon: Mail,
		title: "Business & Partnerships",
		value: site.email.general,
		href: `mailto:${site.email.general}`,
	},
	{
		icon: Newspaper,
		title: "Press & Media",
		value: site.email.press,
		href: `mailto:${site.email.press}`,
	},
	{
		icon: Gamepad2,
		title: "Player Support",
		value: site.email.support,
		href: `mailto:${site.email.support}`,
	},
	{
		icon: Users,
		title: "Careers",
		value: site.email.careers,
		href: `mailto:${site.email.careers}`,
	},
	{
		icon: Phone,
		title: "Phone",
		value: site.phone,
		href: `tel:${site.phone.replace(/[^+\d]/g, "")}`,
	},
	{
		icon: MapPin,
		title: "Headquarters",
		value: fullAddress,
		href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`,
	},
];

export const ContactInfo: React.FC = () => {
	return (
		<div>
			<p className="text-studio-accent font-display mb-2 font-bold tracking-widest uppercase">
				Get In Touch
			</p>
			<h1 className="font-display mb-8 text-5xl font-bold text-white">
				PARTNER WITH US
			</h1>

			<p className="text-studio-light mb-12 text-lg leading-relaxed">
				Whether you're a publisher, platform holder, investor or creator, we're
				always open to the next big idea. Use the form, or reach the right team
				directly.
			</p>

			<ul className="grid gap-6 sm:grid-cols-2">
				{channels.map(({ icon: Icon, title, value, href }) => (
					<li key={title} className="flex items-start gap-4">
						<span className="text-studio-accent flex h-12 w-12 shrink-0 items-center justify-center rounded bg-white/5">
							<Icon className="h-6 w-6" />
						</span>
						<span className="min-w-0">
							<span className="mb-1 block font-bold tracking-wide text-white uppercase">
								{title}
							</span>
							<a
								href={href}
								target={href.startsWith("http") ? "_blank" : undefined}
								rel={
									href.startsWith("http") ? "noopener noreferrer" : undefined
								}
								className="text-studio-light hover:text-studio-accent break-words transition-colors"
							>
								{value}
							</a>
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};
