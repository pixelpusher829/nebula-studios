import React, { useState, useEffect, useContext, createContext } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { GamePortfolio } from "@/pages/GamePortfolio";
import { News } from "@/pages/News";
import { StudioLife } from "@/pages/StudioLife";
import { Careers } from "@/pages/Careers";
import { Press } from "@/pages/Press";
import { Contact } from "@/pages/Contact";
import { Home } from "@/pages/Home";
import { MessageSquare, X } from "lucide-react";
import { getStudioAssistance } from "@/services/geminiService";
import { ChatMessage } from "@/types/types";


// --- Navigation Context & Hook ---
type Page =
	| "/"
	| "/games"
	| "/studio"
	| "/news"
	| "/careers"
	| "/press"
	| "/contact";

interface NavContextType {
	currentPath: string;
	navigate: (path: string) => void;
}

export const NavigationContext = createContext<NavContextType>({
	currentPath: "/",
	navigate: () => {},
});

export const useNavigation = () => useContext(NavigationContext);

// Chat Widget
const SupportWidget: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState<ChatMessage[]>([]);
	const [input, setInput] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSend = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!input.trim()) return;

		const userMsg: ChatMessage = {
			id: Date.now().toString(),
			role: "user",
			text: input,
			timestamp: Date.now(),
		};
		setMessages((prev) => [...prev, userMsg]);
		setInput("");
		setLoading(true);

		const response = await getStudioAssistance(userMsg.text);
		const aiMsg: ChatMessage = {
			id: (Date.now() + 1).toString(),
			role: "model",
			text: response,
			timestamp: Date.now(),
		};

		setMessages((prev) => [...prev, aiMsg]);
		setLoading(false);
	};

	return (
		<div className="fixed bottom-6 right-6 z-50">
			{!isOpen && (
				<button
					onClick={() => setIsOpen(true)}
					className="bg-studio-accent text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
				>
					<MessageSquare className="w-6 h-6" />
				</button>
			)}

			{isOpen && (
				<div className="bg-white rounded-lg shadow-2xl w-80 overflow-hidden flex flex-col h-96 border border-gray-200">
					<div className="bg-studio-black p-4 flex justify-between items-center text-white">
						<span className="font-bold text-sm uppercase">
							Studio Assistant
						</span>
						<button onClick={() => setIsOpen(false)}>
							<X className="w-4 h-4" />
						</button>
					</div>

					<div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
						{messages.length === 0 && (
							<p className="text-xs text-gray-500 text-center mt-4">
								Ask about our games, careers, or support.
							</p>
						)}
						{messages.map((m) => (
							<div
								key={m.id}
								className={`p-2 rounded text-sm max-w-[85%] ${m.role === "user" ? "bg-studio-accent text-white ml-auto" : "bg-gray-200 text-gray-800"}`}
							>
								{m.text}
							</div>
						))}
						{loading && (
							<div className="text-xs text-gray-400 italic">
								Typing...
							</div>
						)}
					</div>

					<form onSubmit={handleSend} className="p-3 border-t">
						<input
							className="w-full text-sm p-2 border rounded text-studio-black focus:outline-none focus:border-studio-accent"
							placeholder="Type a message..."
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
					</form>
				</div>
			)}
		</div>
	);
};

// Main App
function App() {
	const [currentPath, setCurrentPath] = useState<string>("/");

	const navigate = (path: string) => {
		setCurrentPath(path);
		window.scrollTo(0, 0);
	};

	const renderPage = () => {
		switch (currentPath) {
			case "/":
				return <Home />;
			case "/games":
				return <GamePortfolio />;
			case "/studio":
				return <StudioLife />;
			case "/news":
				return <News />;
			case "/careers":
				return <Careers />;
			case "/press":
				return <Press />;
			case "/contact":
				return <Contact />;
			default:
				return <Home />;
		}
	};

	return (
		<NavigationContext.Provider value={{ currentPath, navigate }}>
			<div className="min-h-screen bg-studio-black text-white selection:bg-studio-accent selection:text-white font-sans flex flex-col">
				<Navigation />
				<main className="flex-grow">{renderPage()}</main>
				<Footer />
				<SupportWidget />
			</div>
		</NavigationContext.Provider>
	);
}

export default App;
