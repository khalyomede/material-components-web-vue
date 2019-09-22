<template lang="pug">
	div
		div(ref="component" :class="classes")
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
  inheritAttrs: false,
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
  computed: {
    classes() {
      return {
        "mdc-switch": true,
        "mdc-switch--checked": this.checked,
        "mdc-switch--disabled": this.disabled
      };
    },
    disabled() {
      return "disabled" in this.$attrs && this.$attrs.disabled !== false;
    },
    checked() {
      return "checked" in this.$attrs && this.$attrs.checked !== false;
    }
  },
  mounted() {
    const component = new MDCSwitch(this.$refs.component);

    component.disabled = this.disabled;
    component.checked = this.checked;
  }
};
</script>
