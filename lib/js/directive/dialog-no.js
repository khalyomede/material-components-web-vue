export default {
	build: element => {
		element.classList.add("mdc-dialog__button");
		element.dataset.mdcDialogAction = "yes";
	}
};
