<script>
	import { onKeyDown, onKeyUp } from '$lib/form.js';
</script>

<footer class="flow">
	<div class="social-icons">
		<div on:keydown={onKeyDown} on:keyup={onKeyUp} tabindex="0" class="social-icon">
			<i class="fa-brands fa-facebook-f" />
		</div>
		<div on:keydown={onKeyDown} on:keyup={onKeyUp} tabindex="0" class="social-icon">
			<i class="fa-brands fa-twitter" />
		</div>
		<div on:keydown={onKeyDown} on:keyup={onKeyUp} tabindex="0" class="social-icon">
			<i class="fa-brands fa-instagram" />
		</div>
	</div>
	<p>&copy; Copyright Ping. All rights reserved.</p>
</footer>

<style>
	footer {
		margin-top: 7rem;
		text-align: center;
	}

	.social-icons {
		--flow-space: ;
		display: flex;
		justify-content: center;
		gap: theme('gap.4');
	}

	.social-icon {
		border: solid 0.0625rem theme('colors.s-pale-blue');
		min-width: theme('width.10');
		aspect-ratio: 1 / 1;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	.social-icon:hover {
		background-color: theme('colors.p-blue');
	}

	.social-icon:active {
		background-color: white;
	}

	.social-icon i {
		color: theme('colors.p-blue');
		font-style: normal;
	}

	.social-icon:hover i {
		color: theme('colors.white');
	}

	.social-icon:active i {
		color: theme('colors.p-blue');
	}

	p {
		font-size: theme('fontSize.xs');
		color: theme('colors.n-gray');
	}
</style>
