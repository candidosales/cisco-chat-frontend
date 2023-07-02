<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Hero from '$lib/Hero.svelte';
	import Bot from '$lib/icons/Bot.svelte';
	import Cisco from '$lib/icons/Cisco.svelte';
	import Github from '$lib/icons/Github.svelte';
	import LoadingCircle from '$lib/icons/LoadingCircle.svelte';
	import Send from '$lib/icons/Send.svelte';
	import User from '$lib/icons/User.svelte';

	import { useChat } from 'ai/svelte';

	const { input, handleSubmit, messages, isLoading } = useChat();

	let disabled = false;

	$: {
		disabled = $isLoading || $input.length === 0;
	}
</script>

<svelte:head>
	<title>Cisco ChatGPT - Security Advisories</title>
	<meta name="description" content="Cisco ChatGPT - Security Advisories" />
	<meta name="robots" content="index,follow" />
	<meta name="googlebot" content="index,follow" />

	<meta property="og:type" content="website" />
	<meta property="og:title" content="Cisco ChatGPT - Security Advisories" />
	<meta
		property="og:description"
		content="If you have any doubts regarding security advisories, I am here to help you clarify them"
	/>
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

	{#if $messages.length > 0}
		{#each $messages as message}
			<div
				class={`flex w-full items-center justify-center border-b border-gray-200 py-8 ${
					message.role === 'user' ? 'bg-white' : 'bg-gray-100'
				}`}
			>
				<div class="flex w-full max-w-screen-md items-start space-x-4 px-5 sm:px-0">
					<div
						class={`p-1.5 text-white rounded-full w-10 h-10 flex justify-center ${
							message.role === 'assistant' ? 'bg-sky-500' : 'bg-black'
						}`}
					>
						{#if message.role === 'user'}
							<User />
						{:else}
							<Bot />
						{/if}
					</div>
					<div class="prose mt-1 w-full break-words prose-p:leading-relaxed">
						{message.content}
					</div>
				</div>
			</div>
		{/each}
	{:else}
		<Hero />
	{/if}
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
				class={`cursor absolute inset-y-0 right-3 my-auto flex h-8 w-8 items-center justify-center rounded-md transition-all cursor-not-allowed ${
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
