
import type React from "react";
import { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { getStudioAssistance } from "@/shared/services/geminiService";
import type { ChatMessage } from "@/shared/types/types";

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
        <div className="fixed right-6 bottom-6 z-50">
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-studio-accent rounded-full p-4 text-white shadow-lg transition-transform hover:scale-110"
                >
                    <MessageSquare className="h-6 w-6" />
                </button>
            )}

            {isOpen && (
                <div className="flex h-96 w-80 flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-2xl">
                    <div className="bg-studio-black flex items-center justify-between p-4 text-white">
                        <span className="text-sm font-bold uppercase">
                            Studio Assistant
                        </span>
                        <button onClick={() => setIsOpen(false)}>
                            <X className="h-4 w-4" />
                        </button>
                    </div>

                    <div className="flex-1 space-y-3 overflow-y-auto bg-gray-50 p-4">
                        {messages.length === 0 && (
                            <p className="mt-4 text-center text-xs text-gray-500">
                                Ask about our games, careers, or support.
                            </p>
                        )}
                        {messages.map((m) => (
                            <div
                                key={m.id}
                                className={`max-w-[85%] rounded p-2 text-sm ${m.role === "user" ? "bg-studio-accent ml-auto text-white" : "bg-gray-200 text-gray-800"}`}
                            >
                                {m.text}
                            </div>
                        ))}
                        {loading && (
                            <div className="text-xs text-gray-400 italic">Typing...</div>
                        )}
                    </div>

                    <form onSubmit={handleSend} className="border-t p-3">
                        <input
                            className="text-studio-black focus:border-studio-accent w-full rounded border p-2 text-sm focus:outline-none"
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

export default SupportWidget;
