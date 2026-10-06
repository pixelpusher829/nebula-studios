/**
 * Serverless chat endpoint (Vercel Functions, Web-standard handler).
 *
 * Keeps the Gemini API key on the server. The browser only ever talks to /api/chat.
 * Set GEMINI_API_KEY in your hosting provider's environment variables.
 */
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the website assistant for Nebula Studios, an independent game studio founded in 2010
and headquartered in San Francisco, with studios in London and Tokyo (200+ people).
Tone: friendly, concise, professional. Keep answers under 80 words.

Games:
- Echoes of Eternity (November 2025, Action RPG, PC/PS5/Xbox Series X|S; free "Shattered Crown" expansion due early 2027)
- Cyber Strike (2023, competitive 5v5 tactical FPS, PC/PS5/Xbox Series X|S, free-to-play, Season 6 live)
- Void Walker (2021, survival horror, PC/PS5)
- Starlight Drift (2014, sci-fi racing, PC/Mobile; VR remaster 2022)
- Project Aether is an unannounced project. Do not speculate about it.

Contacts:
- Player support: support@nebulastudios.com
- Press: press@nebulastudios.com
- Business and partnerships: hello@nebulastudios.com
- Careers: see the Careers page on this site for open roles.

Rules:
- Never invent release dates, prices, roadmap details, or unannounced games. If unsure, point to the relevant email.
- Never request personal or payment information.
- Politely decline requests unrelated to Nebula Studios or its games.
`;

const MAX_MESSAGES = 12;
const MAX_CHARS = 1000;

type IncomingMessage = { role: "user" | "model"; text: string };

export async function POST(request: Request): Promise<Response> {
	const apiKey = process.env.GEMINI_API_KEY;
	if (!apiKey) {
		return Response.json(
			{ error: "Assistant is not configured." },
			{ status: 503 },
		);
	}

	let messages: IncomingMessage[];
	try {
		const body = (await request.json()) as { messages?: IncomingMessage[] };
		messages = (body.messages ?? [])
			.filter(
				(m) =>
					(m.role === "user" || m.role === "model") &&
					typeof m.text === "string" &&
					m.text.trim().length > 0,
			)
			.slice(-MAX_MESSAGES)
			.map((m) => ({ role: m.role, text: m.text.slice(0, MAX_CHARS) }));
	} catch {
		return Response.json({ error: "Invalid request." }, { status: 400 });
	}

	if (messages.length === 0 || messages[messages.length - 1].role !== "user") {
		return Response.json({ error: "Invalid request." }, { status: 400 });
	}

	try {
		const ai = new GoogleGenAI({ apiKey });
		const response = await ai.models.generateContent({
			model: "gemini-2.5-flash",
			contents: messages.map((m) => ({
				role: m.role,
				parts: [{ text: m.text }],
			})),
			config: {
				systemInstruction: SYSTEM_INSTRUCTION,
				temperature: 0.5,
				maxOutputTokens: 300,
			},
		});

		return Response.json({
			text: response.text ?? "Sorry, I didn't catch that. Could you rephrase?",
		});
	} catch (error) {
		console.error("Gemini error:", error);
		return Response.json(
			{ error: "The assistant is temporarily unavailable." },
			{ status: 502 },
		);
	}
}
