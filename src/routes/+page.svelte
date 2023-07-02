<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Hero from '$lib/Hero.svelte';
	import Cisco from '$lib/icons/Cisco.svelte';
	import Github from '$lib/icons/Github.svelte';
	import LoadingCircle from '$lib/icons/LoadingCircle.svelte';
	import Send from '$lib/icons/Send.svelte';

	import { useChat } from 'ai/svelte';

	const { input, handleSubmit, messages, isLoading } = useChat();

	let disabled = false;

	$: {
		disabled = $isLoading || $input.length === 0;

		console.log('messages', $messages);
	}
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
			on:submit={handleSubmit}
		>
			<textarea
				tabindex="0"
				required
				rows="1"
				placeholder="Send a message"
				spellcheck="false"
				class="w-full pr-10 focus:outline-none"
				style="height: 24px !important;"
				bind:value={$input}
			/><button
				class={`absolute inset-y-0 right-3 my-auto flex h-8 w-8 items-center justify-center rounded-md transition-all cursor-not-allowed ${
					disabled ? 'cursor-not-allowed bg-white' : 'bg-green-500 hover:bg-green-600'
				}`}
				{disabled}
				type="submit"
			>
				{#if $isLoading}
					<LoadingCircle />
				{:else}
					<Send class={`h-4 w-4 ${$input.length === 0 ? 'text-gray-300' : 'text-white'}`} />{/if}
			</button>
		</form>
		<Footer />
	</div>
</main>
