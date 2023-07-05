<script lang="ts">
	const questionOptions = [
		{
			title:
				'Get me the top 5 CVE Securities in markdown table format. Use columns like title, severity and summary.'
		},
		{
			title: 'Summarize the CVE-2023-20119.'
		},
		{
			title: 'How to fix Cisco Webex Meetings Web UI Vulnerabilities?	'
		}
	];

	export let questionSelected = '';
</script>

<div class="border-gray-200sm:mx-0 mx-5 mt-20 max-w-screen-md rounded-md border sm:w-full">
	<div class="flex flex-col space-y-4 p-7 sm:p-10">
		<h1 class="text-lg font-semibold text-black">Welcome to Cisco Chat Security Advisories!</h1>
		<p class="text-gray-500">
			This is an
			<!-- -->AI chatbot that uses<!-- -->
			<a
				href="https://platform.openai.com/docs/guides/gpt/chat-completions-api"
				target="_blank"
				rel="noopener noreferrer"
				class="font-medium underline underline-offset-4 transition-colors hover:text-black"
				>OpenAI</a
			>
			<!-- -->and<!-- -->
			<a
				href="https://sec.cloudapps.cisco.com/security/center/publicationListing.x"
				target="_blank"
				rel="noopener noreferrer"
				class="font-medium underline underline-offset-4 transition-colors hover:text-black"
				>Security Advisories data</a
			>
			to interact with the natural language.
		</p>
	</div>
	<div class="flex flex-col space-y-4 border-t border-gray-200 bg-gray-50 p-7 sm:p-10">
		{#each questionOptions as q}
			<button
				class="rounded-md border border-gray-200 bg-white px-5 py-3 text-left text-sm text-gray-500 transition-all duration-75 hover:border-black hover:text-gray-700 active:bg-gray-50"
				on:click={() => questionSelected = q.title}
				>{q.title}</button
			>
		{/each}
	</div>
</div>
