<template>
	<mdc-top-app-bar>
		<mdc-top-app-bar-button slot="start">menu</mdc-top-app-bar-button>
		<mdc-top-app-bar-title slot="start">MDC Vue</mdc-top-app-bar-title>
	</mdc-top-app-bar>
</template>
<script>
	import {
		MdcTopAppBar,
		MdcTopAppBarButton,
		MdcTopAppBarTitle,
	} from "../../../../../lib/js";

	export default {
		components: {
			MdcTopAppBar,
			MdcTopAppBarButton,
			MdcTopAppBarTitle,
		},
	};
</script>
<style lang="scss">
	@import "../../../../../lib/css/top-app-bar";
</style>
