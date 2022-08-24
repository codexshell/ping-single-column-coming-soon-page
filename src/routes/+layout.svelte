<script>
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	:global(body) {
		max-width: 90rem;
		font-family: theme('fontFamily.libre-franklin');
		color: theme('colors.n-very-dark-blue');
		font-size: theme('fontSize.body-copy');
		padding-top: theme('padding.20');
		padding-bottom: theme("padding.10");
	}
</style>
