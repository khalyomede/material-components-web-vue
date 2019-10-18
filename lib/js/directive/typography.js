export default {
	bind: (element, binding) => {
		element.classList.add("mdc-typography");
		element.classList.add(`mdc-typography--${binding.value}`);
	}
};
