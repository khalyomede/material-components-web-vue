<template>
	<mdc-card>
		<mdc-card-content v-typography="'body1'">
			A macaron or French macaroon is a sweet meringue-based confection made with egg white, icing sugar, granulated sugar, almond powder or ground almond, and food coloring.
		</mdc-card-content>
		<mdc-card-action>
			<mdc-button v-card-action-button slot="button">read more</mdc-button>
			<mdc-button v-card-action-button slot="button">share</mdc-button>
			<mdc-icon-button v-card-action-icon slot="icon" icon="bookmark_order" />
		</mdc-card-action>
	</mdc-card>
</template>

<script>
import { MdcButton, MdcIconButton, MdcCard, MdcCardContent, MdcCardAction, typography, cardActionButton, cardActionIcon } from "../../../../../lib/js";

export default {
  components: {
	MdcButton,
	MdcIconButton,
    MdcCard,
	MdcCardContent,
	MdcCardAction
  },
  directives: {
	cardActionButton,
	cardActionIcon,
    typography
  }
};
</script>

<style lang="scss">
@import "../../../../../lib/css/button";
@import "../../../../../lib/css/icon-button";
@import "../../../../../lib/css/card";
</style>
