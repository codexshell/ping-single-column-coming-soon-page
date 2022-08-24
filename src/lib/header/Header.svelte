<script>
	import logo from './logo.svg';
</script>

<header>
	<div class="logo">
		<a href="/">
			<img src={logo} alt="Ping" />
		</a>
	</div>
</header>

<style>
	.logo {
		height: theme('height.4');
	}

	@media (min-width: theme('screens.sm')) {
		.logo {
			height: theme('height.5');
		}
	}

	@media (min-width: theme('screens.md')) {
		.logo {
			height: theme('height.6');
		}
	}

	@media (min-width: theme('screens.lg')) {
		.logo {
			height: theme('height.7');
		}
	}

	.logo img {
		margin-inline: auto;
		height: 100%;
		width: auto;
	}
</style>
