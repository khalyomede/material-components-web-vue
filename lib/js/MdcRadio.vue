<template lang="pug">
	.mdc-form-field
		.mdc-radio
			input.mdc-radio__native-control(type="radio" :id="id" :name="name" :checked="checked" :value="value")
			.mdc-radio__background
				.mdc-radio__outer-circle
				.mdc-radio__inner-circle
		label(v-if="text" :for="idWithoutHash") {{ text }}
</template>
<script>
import { MDCFormField } from "@material/form-field";
import { MDCRadio } from "@material/radio";
import nonEmpty from "../js/validator/non-empty";

export default {
  props: {
    id: {
      type: String,
      required: true,
      validator: nonEmpty
    },
    name: {
      type: String,
      required: true,
      validator: nonEmpty
    },
    checked: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      required: true,
      validator: nonEmpty
    },
    text: {
      type: String,
      default: ""
    }
  },
  computed: {
    idWithoutHash() {
      return this.id.replace(/^#/, "");
    }
  },
  mounted() {
    const radio = new MDCRadio(document.querySelector(".mdc-radio"));

    const formField = new MDCFormField(this.$el);

    formField.input = radio;
  }
};
</script>
