<template lang="pug">
	.mdc-linear-progress(role="progressbar")
		.mdc-linear-progress__buffering-dots
		.mdc-linear-progress__buffer
		.mdc-linear-progress__bar.mdc-linear-progress__primary-bar
			span.mdc-linear-progress__bar-inner
		.mdc-linear-progress__bar.mdc-linear-progress__secondary-bar
			span.mdc-linear-progress__bar-inner
</template>
<script>
import { MDCLinearProgress } from "@material/linear-progress";

export default {
  props: {
    indeterminate: {
      type: Boolean,
      default: false
    },
    reverse: {
      type: Boolean,
      default: false
    },
    buffer: {
      type: Number,
      default: 0
    },
    progress: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    const progress = new MDCLinearProgress(this.$el);

    progress.determinate = !this.indeterminate;
    progress.reverse = this.reverse;
    progress.buffer = parseInt(this.buffer) / 100;
    progress.progress = parseInt(this.progress) / 100;
  }
};
</script>
