<template>
  <mdc-text-field id="dessert" label="Dessert" />
</template>

<script>
import { MdcTextField } from "../../../../../lib/js";

export default {
  components: {
    MdcTextField
  }
};
</script>

<style lang="scss">
@import "../../../../../lib/css/text-field";
@import "../../../../../lib/css/helper-text";
</style>
