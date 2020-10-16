<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<svelte:head>
    <title>La Cuenta</title>
    <meta name="description" content="Dividi la cuenta y todos a mano" />
</svelte:head>

<div id="app">
	<Header />

	<div class="container">
		<slot></slot>
	</div>

	<Footer />
</div>