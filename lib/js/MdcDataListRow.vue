<template lang="pug">
	tr(:class="classes")
		slot
</template>
<script>
export default {
  props: {
    header: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        "mdc-data-table__row": !this.header,
        "mdc-data-table__header-row": this.header
      };
    }
  }
};
</script>