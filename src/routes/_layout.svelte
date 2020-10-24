<script context="module">
	import { isLoading, waitLocale } from 'svelte-i18n';

  	export async function preload(page) {
    	return waitLocale();
  	}
</script>

<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

{#if $isLoading}
  	<div class="loading">Loading...</div>
{:else}
<div id="app">
	<Header />

	<div class="container">
		<slot></slot>
	</div>

	<Footer />
</div>
{/if}