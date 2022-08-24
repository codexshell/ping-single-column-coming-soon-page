export function handleClick(event) {
	const element = event.target;
	const email = element.children[0].children[0];

	// check if the email validates
	if (!email.checkValidity()) {
		// if validation fails
		// prevent form from submitting
		event.preventDefault();

		// apply styles appropriately
		showErrors(email);
	} else {
		// allow form to submit
	}
}

export function showErrors(element) {
	// show red outline
	element.style.outline = 'solid 0.0625rem hsl(354, 100%, 66%)';
	// display error message
	element.nextElementSibling.classList.remove('error');
}

export function removeErrrors(element) {
	// remove red outline
	element.style.outline = 'unset';
	// hide error message
	element.nextElementSibling.classList.add('error');
}

export function checkError(event) {
	const element = event.target;

	if (!element.checkValidity()) {
		// if validation fails
		// show errors
		showErrors(element);
	} else {
		// validation is successful
		// remove errors
		removeErrrors(element);
	}
}
