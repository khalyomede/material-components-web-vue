<template lang="pug">
	ul(:class="classes")
		slot
</template>
<script>
export default {
  props: {
    textOverlay: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        "mdc-image-list": true,
        "mdc-image-list--masonry": true,
        "mdc-image-list--with-text-protection": this.textOverlay
      };
    }
  }
};
</script>
