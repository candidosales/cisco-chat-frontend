import { OpenAIStream, StreamingTextResponse } from 'ai';

import type { RequestHandler } from './$types';

export const POST = (async ({ request }) => {
	// Extract the `prompt` from the body of the request
	const result = await request.json();

	console.log('request', result);

	const response = new Response();

	// Convert the response into a friendly text-stream
	const stream = OpenAIStream(response);
	// Respond with the stream
	return new StreamingTextResponse(stream);
}) satisfies RequestHandler;
