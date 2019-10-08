<template>
  <mdc-icon-button icon="favorite" :ripple="false" />
</template>

<script>
import { MdcIconButton } from "../../../../../lib/js";

export default {
  components: {
    MdcIconButton
  }
};
</script>

<style lang="scss">
@import "../../../../../lib/css/icon-button";
</style>
