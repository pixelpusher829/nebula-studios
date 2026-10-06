import type React from "react";

interface PageHeaderProps {
	eyebrow: string;
	title: React.ReactNode;
	intro?: React.ReactNode;
	align?: "left" | "center";
	/** Render the title as the page's <h1> (default) or a section <h2>. */
	as?: "h1" | "h2";
	children?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
	eyebrow,
	title,
	intro,
	align = "left",
	as: Heading = "h1",
	children,
}) => {
	const centered = align === "center";
	return (
		<header
			className={`mb-16 ${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}
		>
			<p className="text-studio-accent font-display mb-3 font-bold tracking-widest uppercase">
				{eyebrow}
			</p>
			<Heading className="font-display text-4xl font-bold text-white uppercase md:text-5xl">
				{title}
			</Heading>
			{intro && (
				<p className="text-studio-light mt-6 font-sans text-lg leading-relaxed">
					{intro}
				</p>
			)}
			{children}
		</header>
	);
};
