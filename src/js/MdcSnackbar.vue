<template lang="pug">
	div(:class="classes")
		.mdc-snackbar__surface
			slot
</template>
<script>
import { MDCSnackbar } from "@material/snackbar";

export default {
  props: {
    stacked: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    }
  },
  data: {
    element: null
  },
  computed: {
    classes() {
      return {
        "mdc-snackbar": true,
        "mdc-snackbar--stacked": this.stacked,
        "mdc-snackbar--leading": this.leading
      };
    }
  },
  mounted() {
    this.element = new MDCSnackbar(this.$el);
  }
};
</script>
