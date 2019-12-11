<template>
	<mdc-card>
		<mdc-card-content
			v-typography="'body1'"
		>A croissant is a buttery, flaky, viennoiserie pastry of Austrian and French origin, named for its historical crescent shape.</mdc-card-content>
		<mdc-card-action>
			<mdc-button v-card-action-button>read more</mdc-button>
		</mdc-card-action>
	</mdc-card>
</template>

<script>
import {
	MdcButton,
	MdcCard,
	MdcCardContent,
	MdcCardAction,
	typography,
	cardActionButton,
} from "../../../../../lib/js";

export default {
	components: {
		MdcButton,
		MdcCard,
		MdcCardContent,
		MdcCardAction,
	},
	directives: {
		typography,
		cardActionButton,
	},
};
</script>

<style lang="scss">
@import "../../../../../lib/css/button";
@import "../../../../../lib/css/card";
@import "../../../../../lib/css/typography";
</style>
