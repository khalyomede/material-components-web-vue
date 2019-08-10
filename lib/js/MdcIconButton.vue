<template lang="pug">
	button.mdc-icon-button.material-icons(v-if="!toggle") {{ icon }}
	button.mdc-icon-button.material-icons(v-else :aria-label="label" aria-hidden="true" aria-pressed="false")
		i.material-icons.mdc-icon-button__icon.mdc-icon-button__icon--on favorite
		i.material-icons.mdc-icon-button__icon favorite_border
</template>
<script>
import { MDCRipple } from "@material/ripple";
import { MDCIconButtonToggle } from "@material/icon-button";

const nonEmpty = value => value.trim().length > 0;

export default {
  props: {
    icon: {
      type: String,
      required: true,
      validator: nonEmpty
    },
    ripple: {
      type: Boolean,
      default: true
    },
    toggle: {
      type: Boolean,
      default: false
    },
    iconOn: {
      type: String,
      required: true,
      validator: nonEmpty
    },
    iconOff: {
      type: String,
      required: true,
      validator: nonEmpty
    },
    label: {
      type: String,
      required: () => this.toggle,
      validator: nonEmpty
    }
  },
  mounted() {
    console.log(this.$el);
    if (this.ripple) {
      const ripple = new MDCRipple(this.$el);

      ripple.unbounded = true;
    }

    if (this.toggle) {
      const iconToggle = new MDCIconButtonToggle(
        document.querySelector(this.$el)
      );
      iconToggle.unbounded = true;
    }
  }
};
</script>
