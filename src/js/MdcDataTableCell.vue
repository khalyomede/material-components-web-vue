<template lang="pug">
	th(v-if="header" :class="headerClasses" role="columnheader" scope="col")
		slot
	td(v-else :class="bodyClasses")
		slot
</template>
<script>
export default {
  props: {
    numeric: {
      type: Boolean,
      default: false
    },
    header: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    headerClasses() {
      return {
        "mdc-data-table__header-cell": true,
        "mdc-data-table__cell--numeric": this.numeric
      };
    },
    bodyClasses() {
      return {
        "mdc-data-table__cell": true,
        "mdc-data-table__cell--numeric": this.numeric
      };
    }
  }
};
</script>
