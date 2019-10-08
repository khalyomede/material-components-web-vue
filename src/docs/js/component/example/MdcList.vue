<template>
  <mdc-list>
    <mdc-list-item v-ripple>Single-line item</mdc-list-item>
    <mdc-list-item v-ripple>Single-line item</mdc-list-item>
    <mdc-list-item v-ripple>Single-line item</mdc-list-item>
  </mdc-list>
</template>

<script>
import { MdcList, MdcListItem } from "../../../../../lib/js";

export default {
  components: {
    MdcList,
    MdcListItem
  }
};
</script>

<style lang="scss">
@import "../../../../../lib/css/list";
</style>
