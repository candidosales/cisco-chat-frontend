<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import Hero from '$lib/Hero.svelte';
	import Typing from '$lib/Typing.svelte';
	import CiscoBridge from '$lib/icons/CiscoBridge.svelte';
	import LoadingCircle from '$lib/icons/LoadingCircle.svelte';
	import Send from '$lib/icons/Send.svelte';
	import User from '$lib/icons/User.svelte';

	import { useChat } from 'ai/svelte';

	const { input, handleSubmit, messages, isLoading } = useChat();

	let disabled = false;
	let questionSelected = '';
	let submitButtonElement: HTMLButtonElement;

	$: {
		disabled = $isLoading;

		if (questionSelected !== '') {
			$input = questionSelected;
		}
	}

	const submitForm = (e: SubmitEvent):void => {
		handleSubmit(e);
		$input = '';
		questionSelected = '';
	}

	const handleKeydown = (e: KeyboardEvent) => {
		 if (e.key === 'Enter' && submitButtonElement) {
			submitButtonElement.click();
		 }
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
	<Header/>

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
							<CiscoBridge class="w-16 text-white" />
						{/if}
					</div>
					<div class="prose prose-indigo prose-p:leading-relaxed mt-1 w-full break-words">						
						{@html message.content}
					</div>
				</div>
			</div>
		{/each}
		{#if $isLoading}
			<div
				class={`flex w-full items-center justify-center border-b border-gray-200 py-8 bg-gray-100`}
			>
				<div class="flex w-full max-w-screen-md items-start space-x-4 px-5 sm:px-0">
					<div
						class={`p-1.5 text-white rounded-full w-10 h-10 flex justify-center bg-sky-500`}
					>
					<CiscoBridge class="w-16 text-white" />
				</div>
					<div class="prose prose-indigo prose-p:leading-relaxed mt-1 w-full break-words">
						<Typing/>
					</div>
				</div>
			</div>
		{/if}
	{:else}
		<Hero bind:questionSelected={questionSelected}/>
	{/if}
	<div
		class="fixed bottom-0 flex w-full flex-col items-center space-y-3 bg-gradient-to-b from-transparent via-gray-100 to-gray-100 p-5 pb-3 sm:px-0"
	>
		<form
			class="relative flex flex-row w-full max-w-screen-md rounded-xl border border-gray-200 bg-white px-4 pb-2 pt-3 shadow-lg sm:pb-3 sm:pt-4"
			on:submit={submitForm}
		>
			<textarea
				tabindex="0"
				required
				rows="1"
				placeholder="Send a message"
				spellcheck="false"
				class="resize-y w-full pr-12 mr-4 focus:outline-none"
				bind:value={$input}
				on:keydown={handleKeydown}
			/>
			<button
				class={`my-auto flex h-8 w-8 items-center justify-center rounded-md transition-all ${
					disabled ? 'cursor-not-allowed bg-gray-300' : 'cursor bg-green-500 hover:bg-green-600'
				}`}
				{disabled}
				type="submit"
				title="Send message"
				bind:this={submitButtonElement}
			>
				{#if $isLoading}
					<LoadingCircle />
				{:else}
					<Send class={`h-4 w-4 ${$input.length === 0 ? 'text-gray-100' : 'text-white'}`} />{/if}
			</button>
		</form>
		<Footer />
	</div>
</main>
