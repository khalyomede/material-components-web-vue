<template lang="pug">
	.mdc-data-table
		table.mdc-data-table__table(aria-label='Dessert calories')
			slot
</template>
<script>
import { MDCDataTable } from "@material/data-table";
import nonEmpty from "../js/validator/non-empty";

export default {
  props: {
    label: {
      type: String,
      required: true,
      validator: nonEmpty
    }
  },
  mounted() {
    const dataTable = new MDCDataTable(this.$el);
  }
};
</script>