<template lang="pug">
	<div>
		<div class="mdc-switch" ref="component">
			<div class="mdc-switch__track"></div>
			<div class="mdc-switch__thumb-underlay">
				<div class="mdc-switch__thumb">
					<input type="checkbox" id="basic-switch" class="mdc-switch__native-control" role="switch">
				</div>
			</div>
		</div>
		<label for="basic-switch">off/on</label>
	</div>
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
