<template lang="pug">
    mdc-list(two-line)
        mdc-list-item
            mdc-list-item-primary First-line text
            mdc-list-item-secondary Second-line text
        mdc-list-item
            mdc-list-item-primary First-line text
            mdc-list-item-secondary Second-line text
        mdc-list-item
            mdc-list-item-primary First-line text
            mdc-list-item-secondary Second-line text
</template>
<script>
import {
  MdcList,
  MdcListItem,
  MdcListItemPrimary,
  MdcListItemSecondary
} from "../../../../../lib/js";

export default {
  components: {
    MdcList,
    MdcListItem,
    MdcListItemPrimary,
    MdcListItemSecondary
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../../lib/css/list";
</style>
