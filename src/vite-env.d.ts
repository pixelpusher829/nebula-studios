/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_SITE_URL?: string;
	readonly VITE_FORMS_ENDPOINT?: string;
	readonly VITE_CHAT_ENABLED?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
