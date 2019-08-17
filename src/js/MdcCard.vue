<template lang="pug">
	div(:class="classes")
		slot
</template>
<script>
export default {
  props: {
    outlined: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        "mdc-card": true,
        "mdc-card--outlined": this.outlined
      };
    }
  }
};
</script>
