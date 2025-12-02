import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Helper to get a fresh instance with the current key
const getAIClient = (): GoogleGenAI => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

/**
 * Enhances a simple prompt into a detailed, professional prompt using Gemini Flash.
 * Handles Chinese input by translating it to English context first.
 */
export const enhancePrompt = async (simplePrompt: string, styleName: string): Promise<string> => {
  const ai = getAIClient();

  // Instruction explicitly tells the model to translate input if needed and output English
  const systemInstruction = `You are an expert prompt engineer for generative AI (Midjourney, Gemini, Stable Diffusion). 
  
  Your task:
  1. Receive a Character Subject (which may be in Chinese or English) and a Visual Style.
  2. If the subject is in Chinese, translate the concept to English.
  3. Expand it into a rich, detailed prompt in ENGLISH.
  
  Focus on:
  - Detailed physical appearance.
  - Outfit and accessories matching the style.
  - Lighting, camera angle, and background.
  - Specific art medium keywords (e.g. 'oil painting', 'octane render', 'f/1.8').
  
  Keep the prompt clear and comma-separated where appropriate. Output ONLY the English prompt text. No explanations.`;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Subject: ${simplePrompt}\nTarget Style: ${styleName}\n\nWrite the detailed prompt in English:`,
      config: {
        systemInstruction: systemInstruction,
      },
    });

    return response.text?.trim() || simplePrompt;
  } catch (error) {
    console.error("Prompt enhancement error:", error);
    // Fallback to original if enhancement fails
    return simplePrompt;
  }
};