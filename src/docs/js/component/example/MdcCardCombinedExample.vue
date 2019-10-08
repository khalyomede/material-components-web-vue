<template>
  	<mdc-card>
		<mdc-card-content>
			<h3 v-typography="'headline6'" style="margin: 0px">Google</h3>
			<span v-typography="'overline'">2 hours ago</span>
		</mdc-card-content>
		<mdc-card-media>
			<picture>
				<source srcset="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg" type="image/jpeg" />
				<img src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg" alt="Vienna" style="width: 100%; height: 100%; object-fit: cover; object-position: center center;" />
			</picture>
		</mdc-card-media>
		<mdc-card-content v-typography="'body1'">
			Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest layer, consists of a mixture of soft, fresh cheese (typically cream cheese or ricotta), eggs, and sugar. If there is a bottom layer,
		</mdc-card-content>
		<mdc-card-action>
			<mdc-button v-card-action-button slot="button">comment</mdc-button>
			<mdc-icon-button v-card-action-icon slot="icon" icon="share" />
			<mdc-icon-button v-card-action-icon slot="icon" icon="favorite_border" />
		</mdc-card-action>
	</mdc-card>
</template>

<script>
import { MdcButton, MdcCard, MdcCardContent, MdcCardMedia, MdcCardAction, MdcIconButton, typography } from "../../../../../lib/js";

export default {
  components: {
	MdcButton,
    MdcCard,
	MdcCardContent,
	MdcCardMedia,
	MdcCardAction,
	MdcIconButton
  },
  directives: {
    typography
  }
};
</script>

<style lang="scss">
@import "../../../../../lib/css/button";
@import "../../../../../lib/css/icon-button";
@import "../../../../../lib/css/card";
</style>
