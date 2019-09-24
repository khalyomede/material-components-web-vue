<template lang="pug">
	.mdc-form-field
		.mdc-radio(ref="component")
			input.mdc-radio__native-control(type="radio" v-bind="$attrs" v-on="$listeners")
			.mdc-radio__background
				.mdc-radio__outer-circle
				.mdc-radio__inner-circle
		label(v-if="text" :for="$attrs.id") {{ text }}
</template>
<script>
import { MDCFormField } from "@material/form-field";
import { MDCRadio } from "@material/radio";
import nonEmpty from "../js/validator/non-empty";

export default {
  inheritAttrs: false,
  props: {
    text: {
      type: String,
      default: ""
    }
  },
  computed: {
    checked() {
      return "checked" in this.$attrs && this.$attrs.checked !== false;
    },
    disabled() {
      return "disabled" in this.$attrs && this.$attrs.disabled !== false;
    }
  },
  mounted() {
    const radio = new MDCRadio(this.$refs.component);
    const formField = new MDCFormField(this.$el);
    formField.input = radio;

    radio.checked = this.checked;
    radio.disabled = this.disabled;
  }
};
</script>
