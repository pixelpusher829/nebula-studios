import { Mail } from "lucide-react";
import type React from "react";
import { Link } from "react-router-dom";

export const ContactCTA: React.FC = () => {
	return (
		<section className="bg-studio-black border-t border-white/5 py-24">
			<div className="mx-auto max-w-4xl px-6 text-center">
				<Mail className="text-studio-accent mx-auto mb-6 h-12 w-12" />
				<h2 className="font-display mb-6 text-4xl font-bold text-white uppercase">
					Partner With Us
				</h2>
				<p className="text-studio-light mb-8 text-lg leading-relaxed">
					Looking for a development or publishing partner? Have a media inquiry?
					Or just want to say hello? We're always looking for the next great
					collaboration.
				</p>
				<Link
					to="/contact"
					className="font-display hover:text-studio-black inline-block rounded border border-white/20 px-10 py-4 text-lg font-bold tracking-wider text-white uppercase transition-all hover:bg-white"
				>
					Get In Touch
				</Link>
			</div>
		</section>
	);
};
