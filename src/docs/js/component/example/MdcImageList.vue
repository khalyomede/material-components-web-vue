<template>
  <mdc-grid>
    <mdc-grid-row>
      <mdc-grid-cell></mdc-grid-cell>
    </mdc-grid-row>
  </mdc-grid>
</template>

<script>
import { MdcGrid, MdcGridRow, MdcGridCell } from "../../../../../lib/js";

export default {
  components: {
    MdcGrid,
    MdcGridRow,
    MdcGridCell
  }
};
</script>

<style lang="scss">
@import "../../../../../lib/css/grid";
</style>
