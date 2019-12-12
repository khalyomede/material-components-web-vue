<template>
	<mdc-tab>
		<mdc-tab-item active>French desserts</mdc-tab-item>
		<mdc-tab-item>British desserts</mdc-tab-item>
		<mdc-tab-content active>
			In France, a chef that prepares desserts and pastries is called a
			pâtissier, who is part of a kitchen hierarchy termed brigade de
			cuisine (kitchen staff).
		</mdc-tab-content>
		<mdc-tab-content>
			The British kitchen has a long tradition of noted sweet-making,
			particularly with puddings, custards, and creams; custard sauce is
			called crème anglaise (English cream) in French cuisine.
		</mdc-tab-content>
	</mdc-tab>
</template>
<script>
	import { MdcTab, MdcTabContent, MdcTabItem } from "../../../../../lib/js";

	export default {
		components: {
			MdcTab,
			MdcTabItem,
			MdcTabContent,
		},
	};
</script>
<style lang="scss">
	@import "../../../../../lib/css/tab";
</style>
