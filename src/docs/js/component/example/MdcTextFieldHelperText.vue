<template>
  <div>
    <mdc-text-field id="dessert" label="Dessert" />
    <mdc-helper-text>Choose a cake or an ice cream.</mdc-helper-text>
  </div>
</template>

<script>
import { MdcTextField, MdcHelperText } from "../../../../../lib/js";

export default {
  components: {
    MdcTextField,
    MdcHelperText
  }
};
</script>

<style lang="scss">
@import "../../../../../lib/css/text-field";
</style>
