import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { site } from "@/config/site";
import { Home } from "@/pages/home";
import { ErrorBoundary } from "@/shared/components/ErrorBoundary";
import { Footer } from "@/shared/layout/Footer";
import { Navigation } from "@/shared/layout/Navigation";
import ScrollToTop from "@/shared/utils/ScrollToTop";

// Home is bundled eagerly for the fastest first paint; everything else is split per route.
const GamePortfolio = lazy(() =>
	import("@/pages/portfolio").then((m) => ({ default: m.GamePortfolio })),
);
const GameDetail = lazy(() =>
	import("@/pages/portfolio/GameDetail").then((m) => ({
		default: m.GameDetail,
	})),
);
const StudioLife = lazy(() =>
	import("@/pages/studio").then((m) => ({ default: m.StudioLife })),
);
const News = lazy(() =>
	import("@/pages/news").then((m) => ({ default: m.News })),
);
const Article = lazy(() =>
	import("@/pages/news/Article").then((m) => ({ default: m.Article })),
);
const Careers = lazy(() =>
	import("@/pages/careers").then((m) => ({ default: m.Careers })),
);
const JobDetail = lazy(() =>
	import("@/pages/careers/JobDetail").then((m) => ({ default: m.JobDetail })),
);
const Press = lazy(() =>
	import("@/pages/press").then((m) => ({ default: m.Press })),
);
const Contact = lazy(() =>
	import("@/pages/contact").then((m) => ({ default: m.Contact })),
);
const Privacy = lazy(() =>
	import("@/pages/legal").then((m) => ({ default: m.Privacy })),
);
const Terms = lazy(() =>
	import("@/pages/legal").then((m) => ({ default: m.Terms })),
);
const NotFound = lazy(() =>
	import("@/pages/404").then((m) => ({ default: m.NotFound })),
);
const SupportWidget = lazy(() => import("@/features/chat/SupportWidget"));

const PageFallback = () => <div className="min-h-screen" aria-busy="true" />;

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<div className="bg-studio-black selection:bg-studio-accent flex min-h-screen flex-col font-sans text-white selection:text-white">
				<a
					href="#main"
					className="bg-studio-accent sr-only z-100 rounded px-4 py-2 font-bold text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
				>
					Skip to content
				</a>
				<Navigation />
				<main id="main" className="grow" tabIndex={-1}>
					<ErrorBoundary>
						<Suspense fallback={<PageFallback />}>
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/games" element={<GamePortfolio />} />
								<Route path="/games/:slug" element={<GameDetail />} />
								<Route path="/studio" element={<StudioLife />} />
								<Route path="/news" element={<News />} />
								<Route path="/news/:slug" element={<Article />} />
								<Route path="/careers" element={<Careers />} />
								<Route path="/careers/:slug" element={<JobDetail />} />
								<Route path="/press" element={<Press />} />
								<Route path="/contact" element={<Contact />} />
								<Route path="/privacy" element={<Privacy />} />
								<Route path="/terms" element={<Terms />} />
								<Route path="*" element={<NotFound />} />
							</Routes>
						</Suspense>
					</ErrorBoundary>
				</main>
				<Footer />
				{site.chatEnabled && (
					<Suspense fallback={null}>
						<SupportWidget />
					</Suspense>
				)}
			</div>
		</BrowserRouter>
	);
}

export default App;
