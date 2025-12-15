import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for NEBULA STUDIOS, a premier AAA game development studio.
Your tone is professional, enthusiastic, and welcoming.
The studio is known for games like "Echoes of Eternity" (RPG), "Cyber-Strike" (FPS), and "Starlight Drift" (Racing).
Information to know:
- Careers: We are hiring Senior Engineers and Concept Artists.
- Support: Support tickets can be filed at support@nebulastudios.com.
- Location: Headquarters in San Francisco, with remote teams globally.

If asked about game release dates, say "TBA 2025" for upcoming titles.
Keep responses under 80 words.
`;

export const getStudioAssistance = async (query: string): Promise<string> => {
  if (!apiKey) {
    return "System Offline: API Key Missing.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: query,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I apologize, I didn't catch that.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Connection error. Please try again later.";
  }
};