import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv, type Plugin } from "vite";

const DEFAULT_SITE_URL = "https://nebulastudios.com";

/** Reads `slug: "..."` entries from a data file without importing it (data files import images). */
const slugsFrom = (file: string) =>
	[
		...readFileSync(path.resolve(__dirname, file), "utf-8").matchAll(
			/slug:\s*"([^"]+)"/g,
		),
	].map((m) => m[1]);

/** Writes sitemap.xml and robots.txt into the build output. */
const seoFiles = (siteUrl: string): Plugin => ({
	name: "seo-files",
	apply: "build",
	closeBundle() {
		const staticRoutes = [
			"/",
			"/games",
			"/studio",
			"/news",
			"/careers",
			"/press",
			"/contact",
			"/privacy",
			"/terms",
		];
		const routes = [
			...staticRoutes,
			...slugsFrom("src/pages/portfolio/portfolio-data.ts").map(
				(s) => `/games/${s}`,
			),
			...slugsFrom("src/pages/news/news-data.ts").map((s) => `/news/${s}`),
			...slugsFrom("src/pages/careers/careers-data.ts").map(
				(s) => `/careers/${s}`,
			),
		];
		const urls = routes
			.map((r) => `  <url><loc>${new URL(r, siteUrl)}</loc></url>`)
			.join("\n");
		const out = path.resolve(__dirname, "dist");
		writeFileSync(
			path.join(out, "sitemap.xml"),
			`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
		);
		writeFileSync(
			path.join(out, "robots.txt"),
			`User-agent: *\nAllow: /\n\nSitemap: ${new URL("/sitemap.xml", siteUrl)}\n`,
		);
	},
});

export default defineConfig(({ mode }) => {
	process.env.VITE_SITE_URL ||=
		loadEnv(mode, ".", "VITE_").VITE_SITE_URL || DEFAULT_SITE_URL;
	const siteUrl = process.env.VITE_SITE_URL;

	return {
		server: {
			port: 3000,
			host: "0.0.0.0",
		},
		plugins: [react(), tailwindcss(), seoFiles(siteUrl)],
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
			},
		},
		build: {
			rollupOptions: {
				output: {
					// Long-lived vendor chunks that don't change when site content does.
					manualChunks: {
						react: ["react", "react-dom", "react-router-dom"],
						markdown: ["react-markdown"],
						gsap: ["gsap"],
					},
				},
			},
		},
	};
});
