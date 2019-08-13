<template lang="pug">
	header.mdc-top-app-bar
		.mdc-top-app-bar__row
			section.mdc-top-app-bar__section.mdc-top-app-bar__section--align-start
				slot
</template>
<script>
import { MDCTopAppBar } from "@material/top-app-bar";

export default {
  mounted() {
    new MDCTopAppBar(this.$el);
  }
};
</script>
