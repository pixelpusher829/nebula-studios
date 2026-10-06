import { ArrowLeft, Calendar, Link2, Linkedin, Twitter } from "lucide-react";
import type React from "react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import { site } from "@/config/site";
import { NotFound } from "@/pages/404";
import { Seo } from "@/shared/components/Seo";
import { formatDate, readingTime } from "@/shared/lib/format";
import { getArticle, news } from "./news-data";
import { RelatedArticles } from "./RelatedArticles";

const ShareLinks: React.FC<{ title: string; url: string }> = ({
	title,
	url,
}) => {
	const [copied, setCopied] = useState(false);
	const text = encodeURIComponent(title);
	const link = encodeURIComponent(url);
	const btn =
		"hover:bg-studio-accent flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors";

	const copy = async () => {
		try {
			await navigator.clipboard.writeText(url);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch {
			// Clipboard unavailable (e.g. insecure context); nothing useful to do.
		}
	};

	return (
		<div className="flex items-center gap-3">
			<span className="text-studio-light mr-2 text-xs font-bold tracking-widest uppercase">
				Share
			</span>
			<a
				className={btn}
				href={`https://x.com/intent/post?text=${text}&url=${link}`}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Share on X"
			>
				<Twitter className="h-4 w-4" />
			</a>
			<a
				className={btn}
				href={`https://www.linkedin.com/sharing/share-offsite/?url=${link}`}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Share on LinkedIn"
			>
				<Linkedin className="h-4 w-4" />
			</a>
			<button
				type="button"
				className={btn}
				onClick={copy}
				aria-label="Copy link"
			>
				<Link2 className="h-4 w-4" />
			</button>
			<span aria-live="polite" className="text-xs text-green-400">
				{copied ? "Link copied" : ""}
			</span>
		</div>
	);
};

export const Article: React.FC = () => {
	const { slug = "" } = useParams();
	const article = getArticle(slug);

	if (!article) return <NotFound />;

	const url = new URL(`/news/${article.slug}`, site.url).toString();

	return (
		<article className="bg-studio-black">
			<Seo
				title={article.title}
				description={article.excerpt}
				image={article.image}
				type="article"
			/>

			<header className="relative flex h-[65vh] min-h-[500px] w-full items-end">
				<img
					src={article.image}
					className="absolute inset-0 h-full w-full object-cover"
					alt=""
				/>
				<div className="from-studio-black via-studio-black/40 absolute inset-0 bg-linear-to-t to-black/30" />

				<div className="relative z-10 w-full px-6 pb-16">
					<div className="mx-auto max-w-4xl">
						<Link
							to="/news"
							className="hover:bg-studio-accent mb-8 inline-flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-xs font-bold tracking-wide text-white/80 uppercase backdrop-blur-md transition-all hover:text-white"
						>
							<ArrowLeft className="h-4 w-4" /> Back to News
						</Link>
						<div>
							<span className="bg-studio-accent mb-6 inline-block rounded-sm px-3 py-1 text-xs font-bold tracking-wider text-white uppercase shadow-lg">
								{article.category}
							</span>
						</div>
						<h1 className="font-display mb-8 text-4xl leading-tight font-bold text-white drop-shadow-2xl md:text-6xl">
							{article.title}
						</h1>
						<div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/20 pt-6 text-sm font-bold tracking-widest text-white uppercase">
							<span className="flex items-center gap-2">
								<Calendar className="text-studio-accent h-4 w-4" />
								<time dateTime={article.date}>{formatDate(article.date)}</time>
							</span>
							<span className="h-1 w-1 rounded-full bg-white/40" />
							<span>{readingTime(article.content)} min read</span>
							<span className="h-1 w-1 rounded-full bg-white/40" />
							<span className="text-white/80">{article.author}</span>
						</div>
					</div>
				</div>
			</header>

			<div className="bg-studio-black relative z-20 -mt-6 rounded-t-3xl pt-16">
				<div className="mx-auto max-w-3xl px-6 pb-24">
					<div className="markdown-content">
						<ReactMarkdown>{article.content}</ReactMarkdown>
					</div>
					<div className="mt-16 border-t border-white/10 pt-8">
						<ShareLinks title={article.title} url={url} />
					</div>
				</div>
			</div>

			<RelatedArticles news={news} current={article} />
		</article>
	);
};
