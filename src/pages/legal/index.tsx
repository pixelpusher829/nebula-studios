import type React from "react";
import ReactMarkdown from "react-markdown";
import { Seo } from "@/shared/components/Seo";
import { formatDate } from "@/shared/lib/format";
import { LAST_UPDATED, privacyPolicy, termsOfService } from "./legal-content";

const LegalPage: React.FC<{
	title: string;
	description: string;
	content: string;
}> = ({ title, description, content }) => (
	<article className="bg-studio-black min-h-screen pt-32 pb-24">
		<Seo title={title} description={description} />
		<div className="mx-auto max-w-3xl px-6">
			<h1 className="font-display mb-3 text-4xl font-bold text-white uppercase md:text-5xl">
				{title}
			</h1>
			<p className="text-studio-light mb-12 text-sm tracking-wider uppercase">
				Last updated{" "}
				<time dateTime={LAST_UPDATED}>{formatDate(LAST_UPDATED)}</time>
			</p>
			<div className="markdown-content legal">
				<ReactMarkdown>{content}</ReactMarkdown>
			</div>
		</div>
	</article>
);

export const Privacy: React.FC = () => (
	<LegalPage
		title="Privacy Policy"
		description="How Nebula Studios collects, uses and protects your personal information."
		content={privacyPolicy}
	/>
);

export const Terms: React.FC = () => (
	<LegalPage
		title="Terms of Service"
		description="The terms that govern your use of the Nebula Studios website."
		content={termsOfService}
	/>
);
