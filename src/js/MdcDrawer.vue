<template lang="pug">
	aside(:class="classes")
		.mdc-drawer__content
			slot
</template>
<script>
import { MDCDrawer } from "@material/drawer";

export default {
  props: {
    modal: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        "mdc-drawer": true,
        "mdc-drawer--modal": this.modal
      };
    }
  },
  data() {
    return {
      element: null
    };
  },
  mounted() {
    this.element = MDCDrawer.attachTo(this.$el);
  }
};
</script>