import type React from "react";
import { useLocation } from "react-router-dom";
import { site } from "@/config/site";

interface SeoProps {
	/** Page title, without the site name. Omit on the homepage. */
	title?: string;
	description?: string;
	/** Absolute or root-relative image URL for social cards. */
	image?: string;
	type?: "website" | "article";
	noIndex?: boolean;
}

/**
 * Per-page document metadata. React 19 hoists these tags into <head> automatically.
 */
export const Seo: React.FC<SeoProps> = ({
	title,
	description = site.description,
	image = "/og-image.jpg",
	type = "website",
	noIndex = false,
}) => {
	const { pathname } = useLocation();
	const fullTitle = title
		? `${title} | ${site.name}`
		: `${site.name} | ${site.tagline}`;
	const url = new URL(pathname, site.url).toString();
	const imageUrl = new URL(image, site.url).toString();

	return (
		<>
			<title>{fullTitle}</title>
			<meta name="description" content={description} />
			<link rel="canonical" href={url} />
			{noIndex && <meta name="robots" content="noindex" />}

			<meta property="og:site_name" content={site.name} />
			<meta property="og:type" content={type} />
			<meta property="og:title" content={fullTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={url} />
			<meta property="og:image" content={imageUrl} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={fullTitle} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={imageUrl} />
		</>
	);
};
