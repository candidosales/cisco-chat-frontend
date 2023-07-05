import { PRIVATE_API_URL } from '$env/static/private';
import { marked } from 'marked'; // import the marked lib

import type { RequestHandler } from './$types';

export const POST = (async ({ request }) => {
	const { messages } = await request.json();

	const response = await fetch(`${PRIVATE_API_URL}/conversation`, {
		method: 'POST',
		body: JSON.stringify({
			conversation_id: '1',
			messages: [
				{
					content: {
						content_type: 'text',
						message: messages[0].content
					}
				}
			]
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	});

	let responseAPI = null;
	if (response.ok) {
		responseAPI = await response.json();
	}

	return new Response(marked.parse(responseAPI.content));
}) satisfies RequestHandler;
