<template>
  <mdc-list checkbox>
    <mdc-list-item-checkbox name="topping">Oreo topping</mdc-list-item-checkbox>
    <mdc-list-item-checkbox name="topping">Kit kat topping</mdc-list-item-checkbox>
    <mdc-list-item-checkbox name="topping">With chocolatey sauce</mdc-list-item-checkbox>
  </mdc-list>
</template>

<script>
import { MdcList, MdcListItemCheckbox } from "../../../../../lib/js";

export default {
  components: {
    MdcList,
    MdcListItemCheckbox
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../../lib/css/list";
</style>
