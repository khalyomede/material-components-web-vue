<template>
  <mdc-list>
    <mdc-list-item>Item 1 - Division 1</mdc-list-item>
    <mdc-list-item>Item 2 - Division 1</mdc-list-item>
    <mdc-list-divider />
    <mdc-list-item>Item 1 - Division 2</mdc-list-item>
    <mdc-list-item>Item 2 - Division 2</mdc-list-item>
  </mdc-list>
</template>

<script>
import { MdcList, MdcListItem, MdcListDivider } from "../../../../../lib/js";

export default {
  components: {
    MdcList,
    MdcListItem,
    MdcListDivider
  }
};
</script>

<style lang="scss">
@import "../../../../../lib/css/list";
</style>
