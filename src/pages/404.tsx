import type React from "react";
import { Link } from "react-router-dom";
import { Seo } from "@/shared/components/Seo";

export const NotFound: React.FC = () => {
	return (
		<div className="flex min-h-[80vh] flex-col items-center justify-center px-6 pt-32 pb-24 text-center">
			<Seo title="Page Not Found" noIndex />
			<p className="font-display text-studio-accent text-8xl font-bold">404</p>
			<h1 className="font-display mt-4 text-3xl font-bold text-white uppercase">
				Lost in the Void
			</h1>
			<p className="text-studio-light mt-3 max-w-md">
				The page you're looking for has drifted out of range. It may have moved,
				or never existed.
			</p>
			<div className="mt-8 flex flex-wrap justify-center gap-4">
				<Link
					to="/"
					className="text-studio-black font-display hover:bg-studio-accent rounded bg-white px-6 py-3 text-sm font-bold tracking-wide uppercase transition-all duration-300 hover:text-white"
				>
					Return Home
				</Link>
				<Link
					to="/games"
					className="font-display rounded border border-white/20 px-6 py-3 text-sm font-bold tracking-wide text-white uppercase transition-colors hover:bg-white/10"
				>
					Browse Games
				</Link>
			</div>
		</div>
	);
};
