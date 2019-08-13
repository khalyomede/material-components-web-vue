<template lang="pug">
	.mdc-tab-bar(role="tablist")
		.mdc-tab-scroller
			.mdc-tab-scroller__scroll-area
				.mdc-tab-scroller__scroll-content
					slot
		slot(name="content")
</template>
<script>
import { MDCTabBar } from "@material/tab-bar";

export default {
  mounted() {
    const tab = new MDCTabBar(this.$el);

    var contents = this.$el.querySelectorAll(".content");

    tab.listen("MDCTabBar:activated", event => {
      this.$el
        .querySelector(".content--active")
        .classList.remove("content--active");
      contents[event.detail.index].classList.add("content--active");
    });
  }
};
</script>
