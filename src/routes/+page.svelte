<script>
	import Email from '$lib/Email.svelte';
</script>

<svelte:head>
	<title>Ping</title>
	<meta name="description" content="coming soon page demo app" />
</svelte:head>

<section class="flow">
	<h1>We are launching <span>soon!</span></h1>
	<p>Subscribe and get notified</p>
	<Email />
	<img src="/illustration-dashboard.png" alt="illustration dashboard" />
</section>

<style>
	section {
		margin-top: 2.5rem;
		text-align: center;
	}

	h1 {
		color: theme('colors.n-gray');
	}

	h1 span {
		color: theme('colors.n-very-dark-blue');
		font-weight: 700;
	}

	p {
		font-size: theme('fontSize.xs');
	}
</style>
