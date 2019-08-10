<template lang="pug">
	div(:class="{ 'mdc-tab': true, 'mdc-tab--active': active }" role="tab" aria-selected="true" tabindex="0")
		span.mdc-tab__content
			span.mdc-tab__icon.material-icons(v-if="icon" aria-hidden="true") {{ icon }}
			span.mdc-tab__text-label {{ text }}
		span(:class="{ 'mdc-tab-indicator': true, 'mdc-tab-indicator--active': active }")
			span.mdc-tab-indicator__content.mdc-tab-indicator__content--underline
		span.mdc-tab__ripple
</template>
<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      required: true,
      validator: value => value.trim().length > 0
    }
  }
};
</script>
