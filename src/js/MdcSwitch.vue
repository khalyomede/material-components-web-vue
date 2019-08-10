<template lang="pug">
	div
		div(:class="{ 'mdc-switch': true, 'mdc-switch--checked': checked }")
			.mdc-switch__track
			.mdc-switch__thumb-underlay
				.mdc-switch__thumb
					input#basic-switch.mdc-switch__native-control(type="checkbox" role="switch")
		label(for="basic-switch") {{ off }} / {{ on }}
</template>
<script>
import { MDCSwitch } from "@material/switch";

const nonEmpty = value => value.trim().length > 0;

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
    }
  },
  mounted() {
    new MDCSwitch(document.querySelector(".mdc-switch"));
  }
};
</script>
