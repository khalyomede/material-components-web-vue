<template lang="pug">
	pre
		code(ref="code" :class="`language-html`")
			slot
</template>
<script>
import Prism from "prismjs";

export default {
  mounted() {
    Prism.highlightElement(this.$refs.code);
  }
};
</script>
