import { GoogleGenAI } from "@google/genai";

// Initialize the API client
// The API key must be obtained exclusively from the environment variable process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const MODEL_NAME = "gemini-3-flash-preview";

export const fetchChatResponse = async (history: {role: 'user' | 'model', text: string}[], userMessage: string): Promise<string> => {
  try {
    // Construct a simple chat history context
    // In a real app with 'ai.chats.create', we would maintain a session. 
    // Here we will use a single turn generation with history context injected into the prompt for simplicity 
    // or use the Chat API if we want to persist state properly. Let's use Chat API for better context.
    
    // However, since we are calling this function stateless from the component usually, 
    // let's use generateContent with system instruction.
    
    const contextPrompt = `You are a knowledgeable, empathetic, and orthodox Seventh-day Adventist theological assistant.
    You base your answers on the Bible (NKJV or KJV), the 28 Fundamental Beliefs, and the writings of Ellen G. White where applicable, 
    while remaining balanced and pastoral.
    
    History:
    ${history.map(m => `${m.role.toUpperCase()}: ${m.text}`).join('\n')}
    
    USER: ${userMessage}
    MODEL:`;

    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: contextPrompt,
      config: {
        systemInstruction: "You are an Adventist Information assistant. If user asks your name, tell the user that you are Pastor Jelmar Orapa's Artificial Intelligence."
      }
    });

    return response.text || "I apologize, I could not generate an answer at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am having trouble connecting to the knowledge base right now. Please try again later.";
  }
};