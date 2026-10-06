import { Loader2, MessageSquare, Send, X } from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { site } from "@/config/site";
import type { ChatMessage } from "@/shared/types/types";

const suggestions = [
	"What games have you made?",
	"Are you hiring?",
	"How do I contact support?",
];

async function askAssistant(history: ChatMessage[]): Promise<string> {
	const res = await fetch("/api/chat", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			messages: history.map(({ role, text }) => ({ role, text })),
		}),
	});
	const data = (await res.json().catch(() => ({}))) as {
		text?: string;
		error?: string;
	};
	if (!res.ok || !data.text)
		throw new Error(data.error ?? `Request failed (${res.status})`);
	return data.text;
}

const SupportWidget: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState<ChatMessage[]>([]);
	const [input, setInput] = useState("");
	const [loading, setLoading] = useState(false);
	const scrollRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	// biome-ignore lint/correctness/useExhaustiveDependencies: scroll whenever the message list or loading state changes
	useEffect(() => {
		scrollRef.current?.scrollTo({
			top: scrollRef.current.scrollHeight,
			behavior: "smooth",
		});
	}, [messages, loading]);

	useEffect(() => {
		if (!isOpen) return;
		inputRef.current?.focus();
		const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [isOpen]);

	const send = async (text: string) => {
		const trimmed = text.trim();
		if (!trimmed || loading) return;

		const history: ChatMessage[] = [
			...messages,
			{ id: crypto.randomUUID(), role: "user", text: trimmed },
		];
		setMessages(history);
		setInput("");
		setLoading(true);

		let reply: string;
		try {
			reply = await askAssistant(history);
		} catch (error) {
			console.error(error);
			reply = `Sorry, I'm having trouble connecting right now. You can reach us at ${site.email.general}.`;
		}
		setMessages((prev) => [
			...prev,
			{ id: crypto.randomUUID(), role: "model", text: reply },
		]);
		setLoading(false);
	};

	return (
		<div className="fixed right-4 bottom-4 z-40 sm:right-6 sm:bottom-6">
			{!isOpen && (
				<button
					type="button"
					onClick={() => setIsOpen(true)}
					aria-label="Open studio assistant"
					className="bg-studio-accent rounded-full p-4 text-white shadow-lg transition-transform hover:scale-110"
				>
					<MessageSquare className="h-6 w-6" />
				</button>
			)}

			{isOpen && (
				<section
					aria-label="Studio assistant"
					className="bg-studio-dark flex h-[min(32rem,calc(100dvh-2rem))] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-xl border border-white/10 shadow-2xl"
				>
					<header className="bg-studio-black flex items-center justify-between border-b border-white/10 p-4 text-white">
						<div>
							<h2 className="text-sm font-bold uppercase">Studio Assistant</h2>
							<p className="text-studio-light text-xs">
								AI-powered · answers may be imperfect
							</p>
						</div>
						<button
							type="button"
							onClick={() => setIsOpen(false)}
							aria-label="Close assistant"
							className="rounded p-1 hover:bg-white/10"
						>
							<X className="h-4 w-4" />
						</button>
					</header>

					<div
						ref={scrollRef}
						className="flex-1 space-y-3 overflow-y-auto p-4"
						aria-live="polite"
					>
						{messages.length === 0 && (
							<div className="mt-2 space-y-3">
								<p className="text-studio-light text-sm">
									Hi! Ask me about our games, careers or how to reach the team.
								</p>
								<div className="flex flex-col items-start gap-2">
									{suggestions.map((s) => (
										<button
											key={s}
											type="button"
											onClick={() => send(s)}
											className="hover:border-studio-accent rounded-full border border-white/15 px-3 py-1.5 text-left text-xs text-white transition-colors"
										>
											{s}
										</button>
									))}
								</div>
							</div>
						)}
						{messages.map((m) => (
							<p
								key={m.id}
								className={`max-w-[85%] rounded-lg px-3 py-2 text-sm whitespace-pre-wrap ${m.role === "user" ? "bg-studio-accent ml-auto text-white" : "bg-studio-card text-white"}`}
							>
								<span className="sr-only">
									{m.role === "user" ? "You: " : "Assistant: "}
								</span>
								{m.text}
							</p>
						))}
						{loading && (
							<p className="text-studio-light flex items-center gap-2 text-xs">
								<Loader2 className="h-3 w-3 animate-spin" /> Thinking…
							</p>
						)}
					</div>

					<form
						onSubmit={(e) => {
							e.preventDefault();
							send(input);
						}}
						className="flex gap-2 border-t border-white/10 p-3"
					>
						<label htmlFor="assistant-input" className="sr-only">
							Message
						</label>
						<input
							ref={inputRef}
							id="assistant-input"
							maxLength={1000}
							autoComplete="off"
							className="bg-studio-black focus:border-studio-accent min-w-0 flex-1 rounded border border-white/10 p-2 text-sm text-white focus:outline-none"
							placeholder="Type a message…"
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
						<button
							type="submit"
							disabled={loading || !input.trim()}
							aria-label="Send message"
							className="bg-studio-accent rounded px-3 text-white transition-opacity disabled:opacity-40"
						>
							<Send className="h-4 w-4" />
						</button>
					</form>
				</section>
			)}
		</div>
	);
};

export default SupportWidget;
