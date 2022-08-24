<button type="submit">Notify Me</button>

<style>
	button {
		background-color: theme('colors.p-blue');
		width: 100%;
		border-radius: theme('borderRadius.full');
		color: white;
		font-size: theme('fontSize.xs');
		padding-block: theme('padding.2');
		font-weight: 600;
    border: solid theme("colors.p-blue");
	}

	button:hover, button:focus-visible {
		filter: brightness(125%);
	}

  button:active {
    background-color: white;
    color: theme("colors.p-blue");
    border: solid;
  }
</style>
