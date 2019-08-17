<template lang="pug">
	header(:class="classes")
		.mdc-top-app-bar__row
			section.mdc-top-app-bar__section.mdc-top-app-bar__section--align-start
				slot(name="start")
			section.mdc-top-app-bar__section.mdc-top-app-bar__section--align-end(role="toolbar")
				slot(name="end")
</template>
<script>
import { MDCTopAppBar } from "@material/top-app-bar";

export default {
  props: {
    short: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    prominent: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        "mdc-top-app-bar": true,
        "mdc-top-app-bar--short": this.short,
        "mdc-top-app-bar--dense": this.dense,
        "mdc-top-app-bar--prominent": this.prominent,
        "mdc-top-app-bar--fixed": this.fixed
      };
    }
  },
  mounted() {
    new MDCTopAppBar(this.$el);
  }
};
</script>
