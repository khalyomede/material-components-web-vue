<template lang="pug">
	.mdc-text-field-helper-line
			.mdc-text-field-helper-text(:aria-hidden="ariaHidden" ref="component")
				slot
</template>
<script>
// import { MDCTextFieldHelperText } from "@material/textfield/helper-text";

export default {
  computed: {
    ariaHidden() {
      return this.permanent ? "false" : "true";
    }
  },
  mounted() {
    // new MDCTextFieldHelperText(this.$refs.component);
  }
};
</script>
