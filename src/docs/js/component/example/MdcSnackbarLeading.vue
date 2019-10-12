<template>
  <div>
    <mdc-snackbar leading ref="mysnackbar">
      <mdc-snackbar-label>Chocolate stock refilled.</mdc-snackbar-label>
      <mdc-snackbar-action>
        <mdc-button v-snackbar-action>cancel</mdc-button>
      </mdc-snackbar-action>
    </mdc-snackbar>
    <mdc-button @click="openMySnackbar">open</mdc-button>
  </div>
</template>
<script>
import {
  MdcButton,
  MdcSnackbar,
  MdcSnackbarLabel,
  MdcSnackbarAction,
  snackbarAction
} from "../../../../../lib/js";
export default {
  components: {
    MdcButton,
    MdcSnackbar,
    MdcSnackbarLabel,
    MdcSnackbarAction
  },
  methods: {
    openMySnackbar() {
      this.$refs.mysnackbar.element.open();
    }
  },
  directives: {
    snackbarAction
  }
};
</script>
<style lang="scss">
@import "../../../../../lib/css/snackbar";
</style>
