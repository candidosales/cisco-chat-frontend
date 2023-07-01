<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Hero from '$lib/Hero.svelte';
	import Cisco from '$lib/icons/Cisco.svelte';
	import Github from '$lib/icons/Github.svelte';

	const questionOptions = [
		{
			title:
				'Get me the top 5 stories on Hacker News in markdown table format. Use columns like title, link, score, and comments.'
		},
		{
			title: 'Summarize the comments in the top hacker news story.'
		},
		{
			title: 'What is the top story on Hacker News right now?'
		}
	];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main class="flex flex-col items-center justify-between pb-40">
	<div class="absolute top-5 hidden w-full justify-between px-5 sm:flex">
		<a
			href="/deploy"
			target="_blank"
			class="rounded-lg p-2 transition-colors duration-200 hover:bg-stone-100 sm:bottom-auto w-4"
			><Cisco class="w-16 text-sky-400" /></a
		><a
			href="/github"
			target="_blank"
			class="rounded-lg p-2 transition-colors duration-200 hover:bg-stone-100 sm:bottom-auto"
			><Github /></a
		>
	</div>
	<Hero />
	<div
		class="fixed bottom-0 flex w-full flex-col items-center space-y-3 bg-gradient-to-b from-transparent via-gray-100 to-gray-100 p-5 pb-3 sm:px-0"
	>
		<form
			class="relative w-full max-w-screen-md rounded-xl border border-gray-200 bg-white px-4 pb-2 pt-3 shadow-lg sm:pb-3 sm:pt-4"
		>
			<textarea
				tabindex="0"
				required=""
				rows="1"
				autofocus=""
				placeholder="Send a message"
				spellcheck="false"
				class="w-full pr-10 focus:outline-none"
				style="height: 24px !important;"
			/><button
				class="absolute inset-y-0 right-3 my-auto flex h-8 w-8 items-center justify-center rounded-md transition-all cursor-not-allowed bg-white"
				disabled=""
				><svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					fill="none"
					class="h-4 w-4 text-gray-300"
					stroke-width="2"
					><path
						d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z"
						fill="currentColor"
					/></svg
				></button
			>
		</form>
		<Footer />
	</div>
</main>
