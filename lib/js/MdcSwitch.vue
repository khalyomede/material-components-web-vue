<template lang="pug">
	div
		div(ref="component" :class="{ 'mdc-switch': true, 'mdc-switch--checked': $attrs.checked }")
			.mdc-switch__track
			.mdc-switch__thumb-underlay
				.mdc-switch__thumb
					input.mdc-switch__native-control(type="checkbox" role="switch" v-bind="$attrs" v-on="$listeners")
		label(:for="$attrs.id") {{ off }} / {{ on }}
</template>
<script>
import { MDCSwitch } from "@material/switch";
import nonEmpty from "../js/validator/non-empty";

export default {
  props: {
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
    const component = new MDCSwitch(this.$refs.component);

    if ("disabled" in this.$attrs) {
      component.disabled = this.$attrs.disabled;
    }
  }
};
</script>
