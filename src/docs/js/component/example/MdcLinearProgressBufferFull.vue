<template>
  <mdc-linear-progress progress="30" buffer="100" />
</template>
<script>
import { MdcLinearProgress } from "../../../../../lib/js";

export default {
  components: {
    MdcLinearProgress
  }
};
</script>
<style lang="scss">
@import "../../../../../lib/css/linear-progress";
</style>
