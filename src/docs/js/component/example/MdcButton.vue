<template>
	<mdc-button>default</mdc-button>
</template>

<script>
	import {MdcButton} from "../../../../../lib/js";

	console.log("mdc button", MdcButton);

	export default {
		components: {
			MdcButton,
		},
	};
</script>

<style lang="scss">
	@import "../../../../../lib/css/button";
</style>
