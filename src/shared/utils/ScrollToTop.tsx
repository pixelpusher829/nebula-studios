import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls to the top (or to the #hash target) on every route change. */
const ScrollToTop = () => {
	const { pathname, hash } = useLocation();

	// biome-ignore lint/correctness/useExhaustiveDependencies: pathname is the trigger, not a value read inside
	useEffect(() => {
		if (hash) {
			// Wait a frame so lazily-loaded pages have rendered their anchors.
			requestAnimationFrame(() =>
				document.getElementById(hash.slice(1))?.scrollIntoView(),
			);
			return;
		}
		window.scrollTo(0, 0);
	}, [pathname, hash]);

	return null;
};

export default ScrollToTop;
