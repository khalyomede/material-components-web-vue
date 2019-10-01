<template>
  <mdc-list-group>
    <mdc-list-group-title>List 1</mdc-list-group-title>
    <mdc-list>
      <mdc-list-item>Line item</mdc-list-item>
      <mdc-list-item>Line item</mdc-list-item>
      <mdc-list-item>Line item</mdc-list-item>
    </mdc-list>
    <mdc-list-group-title>List 2</mdc-list-group-title>
    <mdc-list>
      <mdc-list-item>Line item</mdc-list-item>
      <mdc-list-item>Line item</mdc-list-item>
      <mdc-list-item>Line item</mdc-list-item>
    </mdc-list>
  </mdc-list-group>
</template>
<script>
import {
  MdcList,
  MdcListItem,
  MdcListGroup,
  MdcListGroupTitle
} from "../../../../../lib/js";

export default {
  components: {
    MdcList,
    MdcListItem,
    MdcListGroup,
    MdcListGroupTitle
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../../lib/css/list";
</style>
