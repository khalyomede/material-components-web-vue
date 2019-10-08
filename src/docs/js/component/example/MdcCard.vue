<template>
  <mdc-card>
    <mdc-card-content
      v-typography="'body1'"
    >Ice cream (derived from earlier iced cream or cream ice) is a sweetened frozen food typically eaten as a snack or dessert.</mdc-card-content>
  </mdc-card>
</template>

<script>
import { MdcCard, MdcCardContent, typography } from "../../../../../lib/js";

export default {
  components: {
    MdcCard,
    MdcCardContent
  },
  directives: {
    typography
  }
};
</script>

<style lang="scss">
@import "../../../../../lib/css/card";
</style>
