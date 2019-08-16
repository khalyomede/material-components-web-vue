<template lang="pug">
	li.mdc-list-item(role="checkbox" :aria-checked="ariaChecked")
		span.mdc-list-item__graphic
			.mdc-checkbox
				input.mdc-checkbox__native-control(type="checkbox" v-bind="$attrs" v-on="$listeners")
				.mdc-checkbox__background
					svg.mdc-checkbox__checkmark(viewBox="0 0 24 24")
						path.mdc-checkbox__checkmark-path(fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59")
			.mdc-checkbox__mixedmark
		label.mdc-list-item__text(:for="$attrs.id")
			slot
</template>
<script>
export default {
  inheritAttrs: false,
  computed: {
    ariaChecked() {
      return this.$attrs.checked ? "true" : "false";
    }
  }
};
</script>
