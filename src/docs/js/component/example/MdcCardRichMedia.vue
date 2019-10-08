<template>
  	<mdc-card>
		<mdc-card-media>
			<picture>
				<source srcset="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg" type="image/jpeg">
					<img src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg" alt="Vienna" style="width: 100%; height: 100%; object-fit: cover; object-position: center center;" />
				</source>
			</picture>
		</mdc-card-media>
		<mdc-card-content v-typography="'body1'">
			An éclair (also known as a sweet baguette) is an oblong pastry made with choux dough filled with a cream and topped with chocolate icing.
		</mdc-card-content>
	</mdc-card>
</template>

<script>
import { MdcCard, MdcCardContent, MdcCardMedia, typography } from "../../../../../lib/js";

export default {
  components: {
    MdcCard,
	MdcCardContent,
	MdcCardMedia
  },
  directives: {
    typography
  }
};
</script>

<style lang="scss">
@import "../../../../../lib/css/card";
</style>
