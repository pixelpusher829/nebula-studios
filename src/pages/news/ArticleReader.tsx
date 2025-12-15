
import type React from "react";
import { Calendar, ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import type { NewsItem } from "@/shared/types/types";
import { RelatedArticles } from "./RelatedArticles";

interface ArticleReaderProps {
    article: NewsItem;
    news: NewsItem[];
    onBack: () => void;
    onOpenArticle: (item: NewsItem) => void;
}

export const ArticleReader: React.FC<ArticleReaderProps> = ({ article, news, onBack, onOpenArticle }) => {
    return (
        <div className="animate-in fade-in bg-studio-black duration-500">
            {/* FULL WIDTH HERO HEADER */}
            <div className="relative flex h-[65vh] min-h-[500px] w-full items-end">
                {/* Background Image Parallax-ish */}
                <div className="absolute inset-0">
                    <img
                        src={article.image}
                        className="h-full w-full object-cover"
                        alt={article.title}
                    />
                    <div className="from-studio-black via-studio-black/40 absolute inset-0 bg-gradient-to-t to-black/30" />
                </div>

                {/* Back Button (Absolute Top) */}
                <div className="absolute top-24 left-0 z-20 w-full px-6">
                    <div className="mx-auto max-w-4xl">
                        <button
                            onClick={onBack}
                            className="hover:bg-studio-accent inline-flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-xs font-bold tracking-wide text-white/80 uppercase backdrop-blur-md transition-all hover:text-white"
                        >
                            <ArrowLeft className="h-4 w-4" /> Back to News
                        </button>
                    </div>
                </div>

                {/* Hero Text Content */}
                <div className="relative z-10 w-full px-6 pb-16">
                    <div className="mx-auto max-w-4xl">
                        <span className="bg-studio-accent mb-6 inline-block rounded-sm px-3 py-1 text-xs font-bold tracking-wider text-white uppercase shadow-lg">
                            {article.category}
                        </span>
                        <h1 className="font-display mb-8 text-4xl leading-tight font-bold text-white drop-shadow-2xl md:text-6xl lg:text-7xl">
                            {article.title}
                        </h1>
                        <div className="flex items-center gap-6 border-t border-white/20 pt-6 text-sm font-bold tracking-widest text-white uppercase">
                            <div className="flex items-center gap-2">
                                <Calendar className="text-studio-accent h-4 w-4" />{" "}
                                {article.date}
                            </div>
                            <div className="h-1 w-1 rounded-full bg-white/40"></div>
                            <div>4 min read</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="bg-studio-black relative z-20 -mt-6 rounded-t-3xl pt-16">
                <div className="mx-auto max-w-3xl px-6 pb-24">
                    <div className="markdown-content">
                        <ReactMarkdown>{article.content}</ReactMarkdown>
                    </div>
                </div>
            </div>

            <RelatedArticles news={news} currentArticleId={article.id} onOpenArticle={onOpenArticle} />
        </div>
    );
};
