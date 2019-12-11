<template>
	<mdc-card outlined>
		<mdc-card-content
			v-typography="'body1'"
		>Chocolate is a usually sweet, brown food preparation of roasted and ground cacao seeds that is made in the form of a liquid, paste, or in a block, or used as a flavoring ingredient in other foods.</mdc-card-content>
	</mdc-card>
</template>

<script>
import {MdcCard, MdcCardContent, typography} from "../../../../../lib/js";

export default {
	components: {
		MdcCard,
		MdcCardContent,
	},
	directives: {
		typography,
	},
};
</script>

<style lang="scss">
@import "../../../../../lib/css/card";
@import "../../../../../lib/css/typography";
</style>
