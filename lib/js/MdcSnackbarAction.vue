<template lang="pug">
	.mdc-snackbar__actions
		slot
</template>
<script>
export default {
  mounted() {
    this.$slots.default[0].elm.classList.add("mdc-snackbar__action");
  }
};
</script>
