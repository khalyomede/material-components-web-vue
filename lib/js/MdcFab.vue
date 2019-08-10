<template lang="pug">
	button(:aria-label="label" :class="classes")
		span.mdc-fab__icon.material-icons {{ icon }}
</template>
<script>
import { MDCRipple } from "@material/ripple";

const nonEmpty = value => value.trim().length > 0;

export default {
  props: {
    label: {
      type: String,
      required: true,
      validator: nonEmpty
    },
    icon: {
      type: String,
      required: true,
      validator: nonEmpty
    },
    position: {
      type: String,
      default: "right"
    }
  },
  computed: {
    classes() {
      return {
        "mdc-fab": true,
        "app-fab--absolute": true,
        "app-fab---absolute--right": this.position === "right",
        "app-fab---absolute--center": this.position === "center",
        "app-fab---absolute--left": this.position === "left"
      };
    }
  },
  mounted() {
    new MDCRipple(this.$el);
  }
};
</script>
