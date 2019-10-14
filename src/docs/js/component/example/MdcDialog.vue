<template>
  <div>
    <mdc-button @click="openDialog">open</mdc-button>
    <mdc-dialog ref="mydialog">
      <mdc-dialog-title>Your coconut order</mdc-dialog-title>
      <mdc-dialog-content>Are you sure you want to order 15 pounds of fresh coconut?</mdc-dialog-content>
      <mdc-dialog-action>
        <mdc-button v-dialog data-mdc-dialog-action="yes">Yes</mdc-button>
        <mdc-button v-dialog data-mdc-dialog-action="no">No</mdc-button>
      </mdc-dialog-action>
    </mdc-dialog>
  </div>
</template>
<script>
import {
  MdcButton,
  MdcDialog,
  MdcDialogTitle,
  MdcDialogContent,
  MdcDialogAction,
  dialog
} from "../../../../../lib/js";

export default {
  components: {
    MdcButton,
    MdcDialog,
    MdcDialogTitle,
    MdcDialogContent,
    MdcDialogAction
  },
  directives: {
    dialog
  },
  methods: {
    openDialog() {
      this.$refs.mydialog.open();
    }
  }
};
</script>
<style lang="scss">
@import "../../../../../lib/css/button";
@import "../../../../../lib/css/dialog";
</style>
