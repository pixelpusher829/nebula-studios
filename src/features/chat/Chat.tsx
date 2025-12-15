
import { useState, useEffect } from "react";
import { sendMessage } from "@/shared/services/geminiService";

export function Chat() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isChatOpening, setIsChatOpening] = useState(false);
    const [isChatClosing, setIsChatClosing] = useState(false);
    const [message, setMessage] = useState("");
    const [chatHistory, setChatHistory] = useState<{ user: string; bot: string }[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const toggleChat = () => {
        if (isChatOpen) {
            setIsChatClosing(true);
            setTimeout(() => {
                setIsChatOpen(false);
                setIsChatClosing(false);
            }, 300);
        } else {
            setIsChatOpening(true);
            setIsChatOpen(true);
            setTimeout(() => {
                setIsChatOpening(false);
            }, 300);
        }
    };

    const handleSendMessage = async () => {
        if (message.trim() === "") return;

        setIsLoading(true);
        const userMessage = message;
        setMessage("");

        try {
            const botMessage = await sendMessage(userMessage);
            setChatHistory([...chatHistory, { user: userMessage, bot: botMessage }]);
        } catch (error) {
            console.error("Error sending message:", error);
            // Optionally handle the error in the UI
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Floating chat button */}
            <div className="floating-chat-button" onClick={toggleChat}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            </div>

            {/* Chat window */}
            {isChatOpen && (
                <div className={`chat-window ${isChatOpening ? "opening" : ""} ${isChatClosing ? "closing" : ""}`}>
                    <div className="chat-header">
                        <h3>Nebula Assistant</h3>
                        <button onClick={toggleChat} className="close-chat-button">&times;</button>
                    </div>
                    <div className="chat-body">
                        {chatHistory.map((chat, index) => (
                            <div key={index}>
                                <p><strong>You:</strong> {chat.user}</p>
                                <p><strong>Bot:</strong> {chat.bot}</p>
                            </div>
                        ))}
                        {isLoading && <p>Loading...</p>}
                    </div>
                    <div className="chat-footer">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                        />
                        <button onClick={handleSendMessage}>Send</button>
                    </div>
                </div>
            )}
        </>
    );
}
