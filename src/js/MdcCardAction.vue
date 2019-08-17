<template lang="pug">
	div(:class="classes")
		slot
		.mdc-card__action-buttons
			slot(name="button")
		.mdc-card__action-icons
			slot(name="icon")
</template>
<script>
export default {
  props: {
    fullBleed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        "mdc-card__actions": true,
        "mdc-card__actions--full-bleed": this.fullBleed
      };
    }
  }
};
</script>
