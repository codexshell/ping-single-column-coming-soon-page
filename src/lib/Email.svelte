<script>
	import Button from '$lib/Button.svelte';
	import { handleClick, checkError } from '$lib/form.js';

	let form;
</script>

<form bind:this={form} on:submit={handleClick} novalidate class="flow">
	<div class="email">
		<input
			on:input={checkError}
			type="email"
			name="email"
			required
			placeholder="Your email address..."
		/>
		<span class="error">Please provide a valid email address</span>
	</div>

	<Button />
</form>

<style>
	form {
		padding-inline: theme('padding.6');
		--flow-space: 2rem;
	}

	@media (min-width: theme('screens.xl')) {
		form {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: theme('gap.8');
		}
	}

	.email {
		position: relative;
	}

	@media (min-width: theme('screens.xl')) {
		.email {
			flex-basis: 70%;
		}
	}

	input {
		border: solid theme('colors.s-pale-blue') 0.0625rem;
		border-radius: theme('borderRadius.full');
		padding-block: theme('padding[2.5]');
		padding-left: theme('padding.6');
		width: 100%;
		font-size: theme('fontSize.xs');
	}

	@media (min-width: theme('screens.xl')) {
		input {
			padding-block: theme('padding[3.5]');
			font-size: theme('fontSize.base');
			padding-left: theme('padding.7');
		}
	}

	input::placeholder {
		color: rgba(79, 125, 243, 0.5);
	}

	span {
		--flow-space: ;
		display: block;
		font-size: theme('fontSize.xs');
		font-style: italic;
		color: theme('colors.s-light-red');
		font-weight: 600;
	}

	.error {
		display: none;
	}

	@media (min-width: theme('screens.xl')) {
		span {
			position: absolute;
			left: 1rem;
		}
	}
</style>
