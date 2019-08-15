<template lang="pug">
	div(:class="classes")
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
    },
    responsive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        "mdc-data-table": true,
        "mdc-data-table-responsive": this.responsive
      };
    }
  },
  mounted() {
    const dataTable = new MDCDataTable(this.$el);
  }
};
</script>