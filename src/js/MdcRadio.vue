<template lang="pug">
	.mdc-form-field
		.mdc-radio
			input.mdc-radio__native-control(ref="input" type="radio" v-bind="$attrs" v-on="$listeners")
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
  mounted() {
    // const radio = new MDCRadio(this.$refs.input);
    // const formField = new MDCFormField(this.$el);
    // formField.input = radio;
  }
};
</script>
