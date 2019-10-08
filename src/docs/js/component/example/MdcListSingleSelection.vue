<template>
  <mdc-list selectable>
    <mdc-list-item selectable tabindex="0">Hot Dog</mdc-list-item>
    <mdc-list-item selectable>Hamburger</mdc-list-item>
    <mdc-list-item selectable>Tacos</mdc-list-item>
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
