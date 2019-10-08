<template>
  <div>
    <mdc-radio name="gender" id="woman" value="1" text="Woman" />
    <mdc-radio name="gender" id="man" value="2" text="Man" />
    <mdc-radio name="gender" id="checked" value="3" text="Checked" checked />
    <mdc-radio name="gender" id="disabled" value="0" text="Disabled" disabled />
  </div>
</template>

<script>
import { MdcRadio } from "../../../../../lib/js";

export default {
  components: {
    MdcRadio
  }
};
</script>

<style lang="scss">
@import "../../../../../lib/css/radio";
</style>
