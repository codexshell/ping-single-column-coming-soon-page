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
		<span class="error">Please Provide a valid email address</span>
	</div>

	<Button />
</form>

<style>
	form {
		padding-inline: theme('padding.6');
		--flow-space: 2rem;
	}

	input {
		border: solid theme('colors.s-pale-blue') 0.0625rem;
		border-radius: theme('borderRadius.full');
		padding-block: theme('padding[2.5]');
		padding-left: theme('padding.6');
		width: 100%;
		font-size: theme('fontSize.xs');
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
		position: relative;
		font-weight: 600;
	}

	.error {
		display: none;
	}
</style>
