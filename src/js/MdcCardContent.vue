<template lang="pug">
	div(:class="classes")
		slot
</template>
<script>
export default {
  props: {
    padding: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classes() {
      return {
        "card-content": this.padding
      };
    }
  }
};
</script>