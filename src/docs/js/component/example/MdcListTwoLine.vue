<template lang="pug">
	<mdc-list two-line>
		<mdc-list-item>
			<mdc-list-item-primary>First-line text</mdc-list-item-primary>
			<mdc-list-item-secondary>Second-line text</mdc-list-item-secondary>
		</mdc-list-item>
		<mdc-list-item>
			<mdc-list-item-primary>First-line text</mdc-list-item-primary>
			<mdc-list-item-secondary>Second-line text</mdc-list-item-secondary>
		</mdc-list-item>
		<mdc-list-item>
			<mdc-list-item-primary>First-line text</mdc-list-item-primary>
			<mdc-list-item-secondary>Second-line text</mdc-list-item-secondary>
		</mdc-list-item>
	</mdc-list>
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

<style lang="scss">
@import "../../../../../lib/css/list";
</style>
