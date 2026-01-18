import type { Ai } from '@cloudflare/workers-types';
import { CF_MODEL_ID } from './prompt';
import { type AIMessageType } from '$lib/types';

//https://developers.cloudflare.com/workers-ai/
//https://developers.cloudflare.com/workers-ai/platform/limits/

export const sendAIRequest = async (
	ai: Ai,
	prompt: string,
	system: string,
	messages: AIMessageType[],
): Promise<string> => {
	const messagesData = [{ role: 'system', content: system }, ...messages];
	const response = await ai.run(CF_MODEL_ID, {
		messages: messagesData,
		prompt: prompt,
		stream: false,
		max_tokens: 2000,
	});

	return response.toString();
};
