<template>
  <mdc-list radio>
    <mdc-list-item-radio name="flavor">Chocolate</mdc-list-item-radio>
    <mdc-list-item-radio name="flavor">Vanilla</mdc-list-item-radio>
    <mdc-list-item-radio name="flavor">No flavor</mdc-list-item-radio>
  </mdc-list>
</template>

<script>
import { MdcList, MdcListItemRadio } from "../../../../../lib/js";

export default {
  components: {
    MdcList,
    MdcListItemRadio
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../../lib/css/list";
</style>
