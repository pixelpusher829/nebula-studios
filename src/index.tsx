import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/app/App";
import "@/app/global.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
	throw new Error("Could not find root element to mount to");
}

// Static fallback tags in index.html are for non-JS crawlers; per-page <Seo> tags replace them.
for (const el of document.head.querySelectorAll("[data-default-seo]"))
	el.remove();

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
