/**
 * Central site configuration.
 *
 * Everything a client would need to rebrand or re-point the site lives here:
 * company details, contact addresses, social profiles and integrations.
 */
export const site = {
	name: "Nebula Studios",
	shortName: "Nebula",
	legalName: "Nebula Studios, Inc.",
	tagline: "We Build Universes",
	description:
		"Nebula Studios is an independent game developer crafting award-winning action RPGs, competitive shooters and genre-defining worlds for PC and console.",
	url: import.meta.env.VITE_SITE_URL || "https://nebulastudios.com",
	founded: 2010,
	headcount: "200+",

	email: {
		general: "hello@nebulastudios.com",
		press: "press@nebulastudios.com",
		careers: "careers@nebulastudios.com",
		support: "support@nebulastudios.com",
		privacy: "privacy@nebulastudios.com",
	},
	phone: "+1 (415) 555-0142",

	headquarters: {
		street: "500 Howard Street, Floor 4",
		city: "San Francisco",
		region: "CA",
		postalCode: "94105",
		country: "USA",
	},

	offices: [
		{
			city: "San Francisco",
			country: "USA",
			role: "Headquarters · Engineering · Publishing",
			timezone: "America/Los_Angeles",
		},
		{
			city: "London",
			country: "UK",
			role: "Narrative · QA · Live Operations",
			timezone: "Europe/London",
		},
		{
			city: "Tokyo",
			country: "Japan",
			role: "Art · Animation · APAC Partnerships",
			timezone: "Asia/Tokyo",
		},
	],

	social: {
		x: "https://x.com/nebulastudios",
		youtube: "https://www.youtube.com/@nebulastudios",
		linkedin: "https://www.linkedin.com/company/nebulastudios",
		discord: "https://discord.gg/nebulastudios",
	},

	/** YouTube video ID for the homepage showreel. */
	showreelVideoId: "DLzxrzFCyOs",

	/**
	 * Endpoint that receives contact, newsletter and job-application form posts.
	 * Any service that accepts multipart form posts and returns 2xx works
	 * (Formspree, Basin, Getform, or your own API).
	 */
	formsEndpoint: import.meta.env.VITE_FORMS_ENDPOINT as string | undefined,

	/** Shows the AI assistant widget. Requires the /api/chat function to be deployed. */
	chatEnabled: import.meta.env.VITE_CHAT_ENABLED === "true",
} as const;

export const fullAddress = `${site.headquarters.street}, ${site.headquarters.city}, ${site.headquarters.region} ${site.headquarters.postalCode}`;
