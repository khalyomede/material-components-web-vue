<template>
  <div>
    <mdc-snackbar ref="mysnackbar">
      <mdc-snackbar-label>Chocolate stock is low (15%).</mdc-snackbar-label>
    </mdc-snackbar>
    <mdc-button @click="openMySnackbar">open</mdc-button>
  </div>
</template>
<script>
import {
  MdcButton,
  MdcSnackbar,
  MdcSnackbarLabel
} from "../../../../../lib/js";
export default {
  components: {
    MdcButton,
    MdcSnackbar,
    MdcSnackbarLabel
  },
  methods: {
    openMySnackbar() {
      this.$refs.mysnackbar.element.open();
    }
  }
};
</script>
<style lang="scss">
@import "../../../../../lib/css/snackbar";
</style>
