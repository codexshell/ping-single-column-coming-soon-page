<button type="submit">Notify Me</button>

<style>
	button {
		--flow-space: 1.25rem;
		background-color: theme('colors.p-blue');
		width: 100%;
		border-radius: theme('borderRadius.full');
		color: white;
		font-size: theme('fontSize.xs');
		padding-block: theme('padding.2');
		font-weight: 600;
		border: solid theme('colors.p-blue');
		box-shadow: 0 .5rem .5rem 0 rgba(0, 0, 0, .2);
	}

	@media (min-width: theme('screens.xl')) {
		button {
			--flow-space: ;
			padding-block: theme('padding[3.5]');
			font-size: theme('fontSize.base');
			flex-basis: 20%;
		}
	}

	button:hover,
	button:focus-visible {
		filter: brightness(125%);
	}

	button:active {
		background-color: white;
		color: theme('colors.p-blue');
		border: solid;
	}
</style>
