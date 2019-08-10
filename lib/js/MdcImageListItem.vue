<template lang="pug">
	li.mdc-image-list__item
		slot
		.mdc-image-list__supporting(v-if="text")
			span.mdc-image-list__label {{ text }}
</template>
<script>
const nonEmpty = value => value.trim().length > 0;

export default {
  props: {
    text: {
      type: String,
      default: ""
    }
  }
};
</script>
