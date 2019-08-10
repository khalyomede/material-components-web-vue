<template lang="pug">
	div
		div(:class="{ 'mdc-switch': true, 'mdc-switch--checked': checked }")
			.mdc-switch__track
			.mdc-switch__thumb-underlay
				.mdc-switch__thumb
					input.mdc-switch__native-control(type="checkbox" role="switch" :id="id" v-bind="$attrs" v-on="$listeners")
		label(:for="id") {{ off }} / {{ on }}
</template>
<script>
import { MDCSwitch } from "@material/switch";
import nonEmpty from "../js/validator/non-empty";

export default {
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    off: {
      type: String,
      default: "off",
      validator: nonEmpty
    },
    on: {
      type: String,
      default: "on",
      validator: nonEmpty
    },
    id: {
      type: String,
      default: "12343434",
      validator: nonEmpty
    }
  },
  mounted() {
    new MDCSwitch(document.querySelector(".mdc-switch"));
  }
};
</script>
