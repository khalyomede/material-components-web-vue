<template>
	<mdc-grid>
		<mdc-grid-row>
			<mdc-grid-cell desktop="4" tablet="4" phone="4">
				Scone
			</mdc-grid-cell>
			<mdc-grid-cell desktop="4" tablet="4" phone="4">
				Shortbread
			</mdc-grid-cell>
			<mdc-grid-cell desktop="4" tablet="4" phone="4">
				Sticky Toffee Pudding
			</mdc-grid-cell>
		</mdc-grid-row>
	</mdc-grid>
</template>
<script>
	import { MdcGrid, MdcGridCell, MdcGridRow } from "../../../../../lib/js";

	export default {
		components: {
			MdcGrid,
			MdcGridCell,
			MdcGridRow,
		},
	};
</script>
<style lang="scss">
	@import "../../../../../lib/css/grid";
</style>
