// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}

		interface Message {
			role: 'user' | 'assistant';
			content: string;
		}

		interface ResponseMessage {
			query: string;
			result: string;
			source_documents: SourceDocument[];
		}

		interface SourceDocument {
			page_content: string;
			metadata: any;
		}
	}
}

export {};
