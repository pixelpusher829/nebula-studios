import { Check, Copy } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { site } from "@/config/site";
import { PageHeader } from "@/shared/components/PageHeader";
import { Seo } from "@/shared/components/Seo";
import { AssetCard } from "./AssetCard";
import { boilerplate, factSheet, logoAssets, mediaAssets } from "./press-data";

const CopyButton: React.FC<{ text: string }> = ({ text }) => {
	const [copied, setCopied] = useState(false);
	return (
		<button
			type="button"
			onClick={async () => {
				try {
					await navigator.clipboard.writeText(text);
					setCopied(true);
					setTimeout(() => setCopied(false), 2000);
				} catch {
					// Clipboard unavailable; the text is still selectable on the page.
				}
			}}
			className="text-studio-light flex items-center gap-2 text-xs font-bold tracking-wider uppercase transition-colors hover:text-white"
		>
			{copied ? (
				<Check className="h-4 w-4 text-green-400" />
			) : (
				<Copy className="h-4 w-4" />
			)}
			{copied ? "Copied" : "Copy"}
		</button>
	);
};

export const Press: React.FC = () => {
	return (
		<div className="bg-studio-black relative min-h-screen pt-32 pb-24">
			<Seo
				title="Press Kit"
				description={`Logos, key art, studio facts and press contacts for ${site.name}.`}
			/>
			<div className="mx-auto max-w-7xl px-6">
				<PageHeader
					eyebrow="Media Center"
					title="Press & Assets"
					intro={
						<>
							Official brand assets, key art and studio information for press
							and content creators. For interviews, review codes or anything
							else, contact{" "}
							<a
								href={`mailto:${site.email.press}`}
								className="border-studio-accent hover:text-studio-accent border-b text-white transition-colors"
							>
								{site.email.press}
							</a>
							.
						</>
					}
				/>

				<div className="mb-20 grid gap-8 lg:grid-cols-5">
					<section className="bg-studio-card rounded-xl border border-white/5 p-8 lg:col-span-3">
						<h2 className="font-display mb-6 text-2xl font-bold text-white uppercase">
							Fact Sheet
						</h2>
						<dl className="divide-y divide-white/5">
							{factSheet.map((row) => (
								<div key={row.label} className="grid gap-1 py-3 sm:grid-cols-3 sm:gap-4">
									<dt className="text-studio-light text-sm font-bold tracking-wide uppercase">
										{row.label}
									</dt>
									<dd className="wrap-break-word text-white sm:col-span-2">{row.value}</dd>
								</div>
							))}
						</dl>
					</section>
					<section className="bg-studio-card rounded-xl border border-white/5 p-8 lg:col-span-2">
						<div className="mb-6 flex items-center justify-between">
							<h2 className="font-display text-2xl font-bold text-white uppercase">
								Boilerplate
							</h2>
							<CopyButton text={boilerplate} />
						</div>
						<p className="text-studio-light leading-relaxed">{boilerplate}</p>
					</section>
				</div>

				<section className="mb-20">
					<h2 className="font-display mb-2 text-3xl font-bold text-white uppercase">
						Logos
					</h2>
					<p className="text-studio-light mb-8 text-sm">
						Please keep clear space around the mark equal to its height, and
						don't recolor, stretch or add effects.
					</p>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
						{logoAssets.map((asset) => (
							<AssetCard key={asset.title} asset={asset} fit="contain" />
						))}
					</div>
				</section>

				<section>
					<h2 className="font-display mb-2 text-3xl font-bold text-white uppercase">
						Key Art & Photography
					</h2>
					<p className="text-studio-light mb-8 text-sm">
						Free to use in editorial coverage of {site.name} and its games. Need
						higher resolution or specific screenshots? Just ask.
					</p>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						{mediaAssets.map((asset) => (
							<AssetCard key={asset.title} asset={asset} />
						))}
					</div>
				</section>
			</div>
		</div>
	);
};
