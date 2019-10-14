<template lang="pug">
	.mdc-dialog(v-bind="$attrs" role="alertdialog" aria-modal="true")
		.mdc-dialog__container
			.mdc-dialog__surface
				slot
		.mdc-dialog__scrim
</template>
<script>
import { MDCDialog } from "@material/dialog";

export default {
  mounted() {
    this.element = new MDCDialog(this.$el);
  },
  methods: {
    open() {
      this.element.open();
    }
  }
};
</script>
