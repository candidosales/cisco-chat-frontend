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
			answer: string;
			source_documents: SourceDocument[];
			generated_question: string;
			chat_history: HistoryMessage[];
		}

		interface SourceDocument {
			page_content: string;
			metadata: any;
		}

		interface HistoryMessage {
			content: string;
			additional_kwargs: any;
			example: boolean;
		}
	}
}

export {};
