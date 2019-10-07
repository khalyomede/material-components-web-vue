<template>
  	<mdc-card>
		<mdc-card-content v-typography="'body1'">
			Black Forest gâteau (British English) or Black Forest cake (American English) is a chocolate sponge cake with a rich cherry filling based on the German dessert Schwarzwälder Kirschtorte, literally "Black Forest Cherry-torte".
		</mdc-card-content>
		<mdc-card-action>
			<mdc-button v-card-action-button raised style="width: 100%;">
				order
			</mdc-button>
		</mdc-card-action>
	</mdc-card>
</template>

<script>
import { MdcButton, MdcCard, MdcCardContent, MdcCardAction, typography, cardActionButton } from "../../../../../lib/js";

export default {
  components: {
	MdcButton,
    MdcCard,
	MdcCardContent,
	MdcCardAction
  },
  directives: {
	cardActionButton,
    typography
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../../lib/css/button";
@import "../../../../../lib/css/card";
</style>
