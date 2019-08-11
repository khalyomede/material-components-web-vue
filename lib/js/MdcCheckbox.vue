<template lang="pug">
.mdc-form-field
	div(:class="classes" ref="component")
		input.mdc-checkbox__native-control(ref="input" type="checkbox" v-bind="$attrs" v-on="$listeners")
		.mdc-checkbox__background
			svg.mdc-checkbox__checkmark(viewBox="0 0 24 24")
				path.mdc-checkbox__checkmark-path(fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59")
			.mdc-checkbox__mixedmark
	label(:for="$attrs.id") {{ text }}
</template>
<script>
import { MDCFormField } from "@material/form-field";
import { MDCCheckbox } from "@material/checkbox";
import nonEmpty from "../js/validator/non-empty";

export default {
  inheritAttrs: false,
  props: {
    text: {
      type: String,
      required: true,
      validator: nonEmpty
    }
  },
  computed: {
    classes() {
      return {
        "mdc-checkbox": true,
        "mdc-checkbox--disabled": this.$attrs.disabled
      };
    }
  },
  mounted() {
    const checkbox = new MDCCheckbox(this.$refs.component);
    const formField = new MDCFormField(this.$refs.input);

    formField.input = checkbox;
  }
};
</script>
