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
		padding-inline: theme('padding.6');
	}

	@media (min-width: theme('screens.sm')) {
		section {
			padding-inline: theme('padding.24');
		}
	}

	@media (min-width: theme('screens.md')) {
		section {
			padding-inline: theme('padding.32');
		}
	}

	@media (min-width: theme('screens.lg')) {
		section {
			padding-inline: theme('padding.52');
		}
	}

	h1 {
		color: theme('colors.n-gray');
	}

	@media (min-width: theme('screens.md')) {
		h1 {
			font-size: theme('fontSize.2xl');
		}
	}

	@media (min-width: theme('screens.xl')) {
		h1 {
			font-size: theme('fontSize.5xl');
		}
	}

	h1 span {
		color: theme('colors.n-very-dark-blue');
		font-weight: 700;
	}

	p {
		font-size: theme('fontSize.xs');
	}

	@media (min-width: theme('screens.md')) {
		p {
			font-size: theme('fontSize.sm');
		}
	}

	@media (min-width: theme('screens.xl')) {
		p {
			font-size: theme('fontSize.xl');
		}
	}

	img {
		--flow-space: 4rem;
	}

	@media (min-width: theme('screens.xl'))  {
		img {
			--flow-space: 5rem;
		}
	}
</style>
