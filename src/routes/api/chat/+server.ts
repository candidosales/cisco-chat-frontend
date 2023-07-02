import { OpenAIStream, StreamingTextResponse } from 'ai';
import { PRIVATE_API_URL } from '$env/static/private';

import type { RequestHandler } from './$types';

export const POST = (async ({ request }) => {
	const { messages } = await request.json();
	console.log('messages', messages[0]);

	const response = await fetch(`${PRIVATE_API_URL}/conversation`, {
		method: 'POST',
		body: {
			conversation_id: '1',
			messages: [
				{
					content: {
						content_type: 'text',
						message: messages[0].content
					}
				}
			]
		}
	});

	if (response.ok) {
		const responseAPI = await response.json();
		console.log('responseAPI', responseAPI);
	}

	// Convert the response into a friendly text-stream
	const stream = OpenAIStream(response);
	// Respond with the stream
	return new StreamingTextResponse(stream);
}) satisfies RequestHandler;
