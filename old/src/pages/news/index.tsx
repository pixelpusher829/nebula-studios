
import type React from "react";
import { useState } from "react";
import type { NewsItem } from "@/shared/types/types";
import { ArticleCard } from "./ArticleCard";
import { ArticleReader } from "./ArticleReader";
import { news } from "./news-data";

export const News: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  const openArticle = (item: NewsItem) => {
    setSelectedArticle(item);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedArticle(null);
  }

  return (
    <section className="bg-studio-black relative min-h-screen">
      {/* List View */}
      {!selectedArticle && (
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-24">
          <div className="mb-16 text-center">
            <h2 className="font-display mb-4 text-4xl font-bold text-white md:text-5xl">
              LATEST NEWS
            </h2>
            <div className="bg-studio-accent mx-auto h-1 w-24"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {news.map((item) => (
              <ArticleCard key={item.id} item={item} onOpenArticle={openArticle} />
            ))}
          </div>
        </div>
      )}

      {/* Article Reader View */}
      {selectedArticle && (
        <ArticleReader
            article={selectedArticle}
            news={news}
            onBack={handleBack}
            onOpenArticle={openArticle}
        />
      )}
    </section>
  );
};
