import { PRIVATE_API_URL } from '$env/static/private';
import { marked } from 'marked';

marked.use({ silent: true });

import type { RequestHandler } from './$types';

export const POST = (async ({ request }) => {
	const { messages } = await request.json();

	const response = await fetch(`${PRIVATE_API_URL}/conversation`, {
		method: 'POST',
		body: JSON.stringify({
			conversation_id: '1',
			messages: messages
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	});

	let responseAPI: App.ResponseMessage | null = null;
	if (response.ok) {
		responseAPI = await response.json();
	}

	return new Response(marked.parse(responseAPI?.answer ?? ''));
}) satisfies RequestHandler;
