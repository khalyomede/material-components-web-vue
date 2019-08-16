<template lang="pug">
	li.mdc-list-item(role="radio" :aria-checked="ariaChecked")
		span.mdc-list-item__graphic
			.mdc-radio
				input.mdc-radio__native-control(type="radio" v-bind="$attrs" v-on="$listeners")
				.mdc-radio__background
					.mdc-radio__outer-circle
					.mdc-radio__inner-circle
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
