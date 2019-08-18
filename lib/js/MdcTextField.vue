<template lang="pug">
	div
		div(:class="classes" ref="component")
			input.mdc-text-field__input(v-if="!this.textarea" type="text" v-bind="$attrs" v-on="$listeners")
			textarea.mdc-text-field__input(v-else rows="8" cols="40")
			label.mdc-floating-label(v-if="!this.fullWidth && !this.textarea && !this.outlined" :for="$attrs.id") {{ label }}
			.mdc-notched-outline(v-if="this.textarea || this.outlined")
				.mdc-notched-outline__leading
				.mdc-notched-outline__notch(v-if="this.label")
					label.mdc-floating-label(:for="$attrs.id") {{ label }}
				.mdc-notched-outline__trailing
			.mdc-line-ripple
		slot
</template>
<script>
import { MDCTextField } from "@material/textfield";

export default {
  inheritAttrs: false,
  props: {
    fullWidth: {
      type: Boolean,
      default: false
    },
    textarea: {
      type: Boolean,
      default: false
    },
    label: {
      type: String
    },
    outlined: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        "mdc-text-field": true,
        "mdc-text-field--fullwidth": this.fullWidth,
        "mdc-text-field--textarea": this.textarea,
        "mdc-text-field--outlined": this.outlined,
        "mdc-text-field--no-label": !this.label
      };
    }
  },
  mounted() {
    new MDCTextField(this.$refs.component);
  }
};
</script>
