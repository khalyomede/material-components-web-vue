<template lang="pug">
	button(:class="classes")
		.mdc-button__ripple
		i.material-icons.mdc-button__icon.mdc-button__icon-left(v-if="icon && iconDirection === 'left'" aria-hidden="true") {{ icon }}
		span.mdc-button__label
			slot
		i.material-icons.mdc-button__icon.mdc-button__icon-right(v-if="icon && iconDirection === 'right'" aria-hidden="true") {{ icon }}
</template>
<script>
import { MDCRipple } from "@material/ripple";

export default {
	props: {
		ripple: {
			type: Boolean,
			default: true,
		},
		raised: {
			type: Boolean,
			default: false,
		},
		unelevated: {
			type: Boolean,
			default: false,
		},
		outlined: {
			type: Boolean,
			default: false,
		},
		dense: {
			type: Boolean,
			default: false,
		},
		icon: {
			type: String,
			default: "",
		},
		iconDirection: {
			type: String,
			default: "left",
			validator: value => ["left", "right"].includes(value),
		},
	},
	computed: {
		classes() {
			return {
				"mdc-button": true,
				"mdc-typography": true,
				"mdc-typography--button": true,
				"mdc-button--raised": this.raised,
				"mdc-button--unelevated": this.unelevated,
				"mdc-button--outlined": this.outlined,
				"mdc-button--dense": this.dense,
			};
		},
	},
	mounted() {
		if (this.ripple) {
			new MDCRipple(this.$el);
		}
	},
};
</script>
