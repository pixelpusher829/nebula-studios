const dateFormatter = new Intl.DateTimeFormat("en-US", {
	month: "short",
	day: "numeric",
	year: "numeric",
	timeZone: "UTC",
});

/** "2026-09-21" -> "Sep 21, 2026" */
export const formatDate = (isoDate: string) =>
	dateFormatter.format(new Date(isoDate));

/** Estimated reading time in minutes at ~225 words per minute. */
export const readingTime = (markdown: string) =>
	Math.max(1, Math.round(markdown.trim().split(/\s+/).length / 225));
