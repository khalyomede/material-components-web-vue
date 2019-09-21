<template lang="pug">
	a(:class="classes" tabindex="0" :role="role" :aria-selected="ariaSelected")
		span.mdc-list-item__text
			slot
</template>
<script>
export default {
  props: {
    selectable: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        "mdc-list-item": true,
        "mdc-list-item--selected": this.active
      };
    },
    role() {
      return this.selectable ? "option" : false;
    },
    ariaSelected() {
      return this.active ? "true" : "false";
    }
  }
};
</script>
