<template lang="pug">
	.mdc-tab-bar(role="tablist")
		.mdc-tab-scroller
			.mdc-tab-scroller__scroll-area
				.mdc-tab-scroller__scroll-content
					slot
</template>
<script>
import { MDCTabBar } from "@material/tab-bar";

export default {
  mounted() {
    new MDCTabBar(this.$el);
  }
};
</script>
