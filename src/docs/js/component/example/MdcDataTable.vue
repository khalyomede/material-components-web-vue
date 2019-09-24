<template>
  <mdc-data-table label="Desserts" responsive>
    <thead>
      <mdc-data-table-row header>
        <mdc-data-table-cell header>Dessert</mdc-data-table-cell>
        <mdc-data-table-cell header numeric>Carbs (g)</mdc-data-table-cell>
        <mdc-data-table-cell header numeric>Protein (g)</mdc-data-table-cell>
        <mdc-data-table-cell header>Comments</mdc-data-table-cell>
      </mdc-data-table-row>
    </thead>
    <tbody>
      <mdc-data-table-row>
        <mdc-data-table-cell>Frozen yogurt</mdc-data-table-cell>
        <mdc-data-table-cell numeric>24</mdc-data-table-cell>
        <mdc-data-table-cell numeric>4.0</mdc-data-table-cell>
        <mdc-data-table-cell>Super tasty</mdc-data-table-cell>
      </mdc-data-table-row>
      <mdc-data-table-row>
        <mdc-data-table-cell>Ice cream sandwich</mdc-data-table-cell>
        <mdc-data-table-cell numeric>37</mdc-data-table-cell>
        <mdc-data-table-cell numeric>4.3</mdc-data-table-cell>
        <mdc-data-table-cell>I like ice cream more</mdc-data-table-cell>
      </mdc-data-table-row>
      <mdc-data-table-row>
        <mdc-data-table-cell>Eclair</mdc-data-table-cell>
        <mdc-data-table-cell numeric>24</mdc-data-table-cell>
        <mdc-data-table-cell numeric>6.0</mdc-data-table-cell>
        <mdc-data-table-cell>New filing flavor</mdc-data-table-cell>
      </mdc-data-table-row>
    </tbody>
  </mdc-data-table>
</template>

<script>
import {
  MdcDataTable,
  MdcDataTableRow,
  MdcDataTableCell
} from "../../../../../lib/js";

export default {
  components: {
    MdcDataTable,
    MdcDataTableRow,
    MdcDataTableCell
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../../lib/css/data-table";
</style>
