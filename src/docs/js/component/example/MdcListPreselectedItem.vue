<template>
  <mdc-list selectable>
    <mdc-list-item selectable tabindex="0">Ice cream</mdc-list-item>
    <mdc-list-item selectable active>Crumble</mdc-list-item>
    <mdc-list-item selectable>Black forest cake</mdc-list-item>
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
