<template>
  <div>
    <mdc-checkbox
      id="c4ca4238a0b923820dcc509a6f75849b"
      value="c4ca4238a0b923820dcc509a6f75849b"
      text="Unchecked"
    />
    <mdc-checkbox
      id="c81e728d9d4c2f636f067f89cc14862c"
      value="c81e728d9d4c2f636f067f89cc14862c"
      text="Checked"
      checked
    />
    <mdc-checkbox text="Disabled" disabled />
  </div>
</template>

<script>
import { MdcCheckbox } from "../../../../../lib/js";

export default {
  components: {
    MdcCheckbox
  }
};
</script>

<style lang="scss">
@import "../../../../../lib/css/checkbox";
</style>
