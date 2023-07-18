<script>
	import Analytics from '$lib/Analytics.svelte';
	import '../app.scss';
</script>

<Analytics />

<div class="app">
	<main>
		<slot />
	</main>
</div>
