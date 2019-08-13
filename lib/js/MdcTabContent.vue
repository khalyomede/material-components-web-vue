<template lang="pug">
	div(:class="{ 'content': true, 'content--active': active }")
		slot
</template>
<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
};
</script>