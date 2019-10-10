export default {"button": `<template>
  <mdc-button>default</mdc-button>
</template>

<script>
import { MdcButton } from "material-components-web-vue";

export default {
  components: {
    MdcButton
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/button";
</style>
`,"buttonWithoutRipple": `<template>
  <mdc-button :ripple="false">Without ripple</mdc-button>
</template>

<script>
import { MdcButton } from "material-components-web-vue";

export default {
  components: {
    MdcButton
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/button";
</style>
`,"card": `<template>
  <mdc-card>
    <mdc-card-content
      v-typography="'body1'"
    >Ice cream (derived from earlier iced cream or cream ice) is a sweetened frozen food typically eaten as a snack or dessert.</mdc-card-content>
  </mdc-card>
</template>

<script>
import { MdcCard, MdcCardContent, typography } from "material-components-web-vue";

export default {
  components: {
    MdcCard,
    MdcCardContent
  },
  directives: {
    typography
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/card";
</style>
`,"cardAction": `<template>
  	<mdc-card>
		<mdc-card-content v-typography="'body1'">
			A croissant is a buttery, flaky, viennoiserie pastry of Austrian and French origin, named for its historical crescent shape.
		</mdc-card-content>
		<mdc-card-action>
			<mdc-button v-card-action-button>
				read more
			</mdc-button>
		</mdc-card-action>
	</mdc-card>
</template>

<script>
import { MdcButton, MdcCard, MdcCardContent, MdcCardAction, typography, cardActionButton } from "material-components-web-vue";

export default {
  components: {
	MdcButton,
    MdcCard,
	MdcCardContent,
	MdcCardAction
  },
  directives: {
	typography,
	cardActionButton
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/button";
@import "material-components-web-vue/lib/css/card";
</style>
`,"cardActionIconButton": `<template>
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
import { MdcButton, MdcIconButton, MdcCard, MdcCardContent, MdcCardAction, typography, cardActionButton, cardActionIcon } from "material-components-web-vue";

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
@import "material-components-web-vue/lib/css/button";
@import "material-components-web-vue/lib/css/icon-button";
@import "material-components-web-vue/lib/css/card";
</style>
`,"cardCombinedExample": `<template>
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
import { MdcButton, MdcCard, MdcCardContent, MdcCardMedia, MdcCardAction, MdcIconButton, typography } from "material-components-web-vue";

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
@import "material-components-web-vue/lib/css/button";
@import "material-components-web-vue/lib/css/icon-button";
@import "material-components-web-vue/lib/css/card";
</style>
`,"cardOutlined": `<template>
  <mdc-card outlined>
    <mdc-card-content
      v-typography="'body1'"
    >Chocolate is a usually sweet, brown food preparation of roasted and ground cacao seeds that is made in the form of a liquid, paste, or in a block, or used as a flavoring ingredient in other foods.</mdc-card-content>
  </mdc-card>
</template>

<script>
import { MdcCard, MdcCardContent, typography } from "material-components-web-vue";

export default {
  components: {
    MdcCard,
    MdcCardContent
  },
  directives: {
    typography
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/card";
</style>
`,"cardRichMedia": `<template>
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
import { MdcCard, MdcCardContent, MdcCardMedia, typography } from "material-components-web-vue";

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
@import "material-components-web-vue/lib/css/card";
</style>
`,"checkbox": `<template>
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
import { MdcCheckbox } from "material-components-web-vue";

export default {
  components: {
    MdcCheckbox
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/checkbox";
</style>
`,"dataTable": `<template>
  <mdc-data-table label="Desserts" responsive>
    <thead>
      <mdc-data-table-row header>
        <mdc-data-table-cell header>Dessert</mdc-data-table-cell>
        <mdc-data-table-cell header numeric>Carbs (g)</mdc-data-table-cell>
        <mdc-data-table-cell header numeric>Protein (g)</mdc-data-table-cell>
        <mdc-data-table-cell header>Comments</mdc-data-table-cell>
      </mdc-data-table-row>
    </thead>
    <tbody>
      <mdc-data-table-row>
        <mdc-data-table-cell>Frozen yogurt</mdc-data-table-cell>
        <mdc-data-table-cell numeric>24</mdc-data-table-cell>
        <mdc-data-table-cell numeric>4.0</mdc-data-table-cell>
        <mdc-data-table-cell>Super tasty</mdc-data-table-cell>
      </mdc-data-table-row>
      <mdc-data-table-row>
        <mdc-data-table-cell>Ice cream sandwich</mdc-data-table-cell>
        <mdc-data-table-cell numeric>37</mdc-data-table-cell>
        <mdc-data-table-cell numeric>4.3</mdc-data-table-cell>
        <mdc-data-table-cell>I like ice cream more</mdc-data-table-cell>
      </mdc-data-table-row>
      <mdc-data-table-row>
        <mdc-data-table-cell>Eclair</mdc-data-table-cell>
        <mdc-data-table-cell numeric>24</mdc-data-table-cell>
        <mdc-data-table-cell numeric>6.0</mdc-data-table-cell>
        <mdc-data-table-cell>New filing flavor</mdc-data-table-cell>
      </mdc-data-table-row>
    </tbody>
  </mdc-data-table>
</template>

<script>
import {
  MdcDataTable,
  MdcDataTableRow,
  MdcDataTableCell
} from "material-components-web-vue";

export default {
  components: {
    MdcDataTable,
    MdcDataTableRow,
    MdcDataTableCell
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/data-table";
</style>
`,"denseButton": `<template>
  <mdc-button dense>dense</mdc-button>
</template>

<script>
import { MdcButton } from "material-components-web-vue";

export default {
  components: {
    MdcButton
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/button";
</style>
`,"disabledButton": `<template>
  <mdc-button disabled>Log in</mdc-button>
</template>

<script>
import { MdcButton } from "material-components-web-vue";

export default {
  components: {
    MdcButton
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/button";
</style>
`,"iconButton": `<template>
  <mdc-button icon="favorite">icon</mdc-button>
</template>

<script>
import { MdcButton } from "material-components-web-vue";

export default {
  components: {
    MdcButton
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/button";
</style>
`,"iconButtonOnly": `<template>
  <mdc-icon-button icon="favorite" />
</template>

<script>
import { MdcIconButton } from "material-components-web-vue";

export default {
  components: {
    MdcIconButton
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/icon-button";
</style>
`,"iconButtonOnlyDisabled": `<template>
  <mdc-icon-button icon="favorite" disabled />
</template>

<script>
import { MdcIconButton } from "material-components-web-vue";

export default {
  components: {
    MdcIconButton
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/icon-button";
</style>
`,"iconButtonOnlyWithoutRipple": `<template>
  <mdc-icon-button icon="favorite" :ripple="false" />
</template>

<script>
import { MdcIconButton } from "material-components-web-vue";

export default {
  components: {
    MdcIconButton
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/icon-button";
</style>
`,"imageList": `<template>
  <mdc-grid>
    <mdc-grid-row>
      <mdc-grid-cell></mdc-grid-cell>
    </mdc-grid-row>
  </mdc-grid>
</template>

<script>
import { MdcGrid, MdcGridRow, MdcGridCell } from "material-components-web-vue";

export default {
  components: {
    MdcGrid,
    MdcGridRow,
    MdcGridCell
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/grid";
</style>
`,"linearProgress": `<template>
  <mdc-linear-progress progress="30" />
</template>
<script>
import { MdcLinearProgress } from "material-components-web-vue";

export default {
  components: {
    MdcLinearProgress
  }
};
</script>
<style lang="scss">
@import "material-components-web-vue/lib/css/linear-progress";
</style>
`,"linearProgressUndeterminate": `<template>
  <mdc-linear-progress indeterminate />
</template>
<script>
import { MdcLinearProgress } from "material-components-web-vue";

export default {
  components: {
    MdcLinearProgress
  }
};
</script>
<style lang="scss">
@import "material-components-web-vue/lib/css/linear-progress";
</style>
`,"linearProgressUndeterminateReverse": `<template>
  <mdc-linear-progress indeterminate reverse />
</template>
<script>
import { MdcLinearProgress } from "material-components-web-vue";

export default {
  components: {
    MdcLinearProgress
  }
};
</script>
<style lang="scss">
@import "material-components-web-vue/lib/css/linear-progress";
</style>
`,"list": `<template>
  <mdc-list>
    <mdc-list-item v-ripple>Single-line item</mdc-list-item>
    <mdc-list-item v-ripple>Single-line item</mdc-list-item>
    <mdc-list-item v-ripple>Single-line item</mdc-list-item>
  </mdc-list>
</template>

<script>
import { MdcList, MdcListItem } from "material-components-web-vue";

export default {
  components: {
    MdcList,
    MdcListItem
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/list";
</style>
`,"listCheckboxItem": `<template>
  <mdc-list checkbox>
    <mdc-list-item-checkbox name="topping">Oreo topping</mdc-list-item-checkbox>
    <mdc-list-item-checkbox name="topping">Kit kat topping</mdc-list-item-checkbox>
    <mdc-list-item-checkbox name="topping">With chocolatey sauce</mdc-list-item-checkbox>
  </mdc-list>
</template>

<script>
import { MdcList, MdcListItemCheckbox } from "material-components-web-vue";

export default {
  components: {
    MdcList,
    MdcListItemCheckbox
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/list";
</style>
`,"listDivider": `<template>
  <mdc-list>
    <mdc-list-item>Item 1 - Division 1</mdc-list-item>
    <mdc-list-item>Item 2 - Division 1</mdc-list-item>
    <mdc-list-divider />
    <mdc-list-item>Item 1 - Division 2</mdc-list-item>
    <mdc-list-item>Item 2 - Division 2</mdc-list-item>
  </mdc-list>
</template>

<script>
import { MdcList, MdcListItem, MdcListDivider } from "material-components-web-vue";

export default {
  components: {
    MdcList,
    MdcListItem,
    MdcListDivider
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/list";
</style>
`,"listGroup": `<template>
  <mdc-list-group>
    <mdc-list-group-title>List 1</mdc-list-group-title>
    <mdc-list>
      <mdc-list-item>Line item</mdc-list-item>
      <mdc-list-item>Line item</mdc-list-item>
      <mdc-list-item>Line item</mdc-list-item>
    </mdc-list>
    <mdc-list-group-title>List 2</mdc-list-group-title>
    <mdc-list>
      <mdc-list-item>Line item</mdc-list-item>
      <mdc-list-item>Line item</mdc-list-item>
      <mdc-list-item>Line item</mdc-list-item>
    </mdc-list>
  </mdc-list-group>
</template>
<script>
import {
  MdcList,
  MdcListItem,
  MdcListGroup,
  MdcListGroupTitle
} from "material-components-web-vue";

export default {
  components: {
    MdcList,
    MdcListItem,
    MdcListGroup,
    MdcListGroupTitle
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/list";
</style>
`,"listPreselectedItem": `<template>
  <mdc-list selectable>
    <mdc-list-item selectable tabindex="0">Ice cream</mdc-list-item>
    <mdc-list-item selectable active>Crumble</mdc-list-item>
    <mdc-list-item selectable>Black forest cake</mdc-list-item>
  </mdc-list>
</template>

<script>
import { MdcList, MdcListItem } from "material-components-web-vue";

export default {
  components: {
    MdcList,
    MdcListItem
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/list";
</style>
`,"listRadioGroup": `<template>
  <mdc-list radio>
    <mdc-list-item-radio name="flavor">Chocolate</mdc-list-item-radio>
    <mdc-list-item-radio name="flavor">Vanilla</mdc-list-item-radio>
    <mdc-list-item-radio name="flavor">No flavor</mdc-list-item-radio>
  </mdc-list>
</template>

<script>
import { MdcList, MdcListItemRadio } from "material-components-web-vue";

export default {
  components: {
    MdcList,
    MdcListItemRadio
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/list";
@import "material-components-web-vue/lib/css/radio";
</style>
`,"listSingleSelection": `<template>
  <mdc-list selectable>
    <mdc-list-item selectable tabindex="0">Hot Dog</mdc-list-item>
    <mdc-list-item selectable>Hamburger</mdc-list-item>
    <mdc-list-item selectable>Tacos</mdc-list-item>
  </mdc-list>
</template>

<script>
import { MdcList, MdcListItem } from "material-components-web-vue";

export default {
  components: {
    MdcList,
    MdcListItem
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/list";
</style>
`,"listTwoLine": `<template lang="pug">
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
} from "material-components-web-vue";

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
@import "material-components-web-vue/lib/css/list";
</style>
`,"outlinedButton": `<template>
  <mdc-button outlined>Log in</mdc-button>
</template>

<script>
import { MdcButton } from "material-components-web-vue";

export default {
  components: {
    MdcButton
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/button";
</style>
`,"radio": `<template>
  <div>
    <mdc-radio name="gender" id="woman" value="1" text="Woman" />
    <mdc-radio name="gender" id="man" value="2" text="Man" />
    <mdc-radio name="gender" id="checked" value="3" text="Checked" checked />
    <mdc-radio name="gender" id="disabled" value="0" text="Disabled" disabled />
  </div>
</template>

<script>
import { MdcRadio } from "material-components-web-vue";

export default {
  components: {
    MdcRadio
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/radio";
</style>
`,"raisedButton": `<template>
  <mdc-button raised>Log in</mdc-button>
</template>

<script>
import { MdcButton } from "material-components-web-vue";

export default {
  components: {
    MdcButton
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/button";
</style>
`,"switchChecked": `<template>
    <mdc-switch checked />
</template>
<script>
import { MdcSwitch } from "material-components-web-vue";

export default {
  components: {
    MdcSwitch
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/switch";
</style>
`,"switchDisabled": `<template>
  <mdc-switch disabled />
</template>
<script>
import { MdcSwitch } from "material-components-web-vue";

export default {
  components: {
    MdcSwitch
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/switch";
</style>
`,"switches": `<template>
    <mdc-switch />
</template>
<script>
import { MdcSwitch } from "material-components-web-vue";

export default {
  components: {
    MdcSwitch
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/switch";
</style>
`,"switchWithCustomLabels": `<template>
  <mdc-switch on="oui" off="non" />
</template>
<script>
import { MdcSwitch } from "material-components-web-vue";

export default {
  components: {
    MdcSwitch
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/switch";
</style>
`,"textField": `<template>
  <mdc-text-field id="dessert" label="Dessert" />
</template>

<script>
import { MdcTextField } from "material-components-web-vue";

export default {
  components: {
    MdcTextField
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/text-field";
@import "material-components-web-vue/lib/css/helper-text";
</style>
`,"textFieldDisabled": `<template>
  <mdc-text-field id="dessert" disabled />
</template>

<script>
import { MdcTextField } from "material-components-web-vue";

export default {
  components: {
    MdcTextField
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/text-field";
</style>
`,"textFieldFullWidth": `<template>
  <mdc-text-field id="dessert" full-width />
</template>

<script>
import { MdcTextField } from "material-components-web-vue";

export default {
  components: {
    MdcTextField
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/text-field";
</style>
`,"textFieldHelperText": `<template>
  <div>
    <mdc-text-field id="dessert" label="Dessert" />
    <mdc-helper-text>Choose a cake or an ice cream.</mdc-helper-text>
  </div>
</template>

<script>
import { MdcTextField, MdcHelperText } from "material-components-web-vue";

export default {
  components: {
    MdcTextField,
    MdcHelperText
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/text-field";
</style>
`,"textFieldOutlined": `<template>
  <mdc-text-field id="dessert" label="Dessert" outlined />
</template>

<script>
import { MdcTextField } from "material-components-web-vue";

export default {
  components: {
    MdcTextField
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/text-field";
</style>
`,"textFieldOutlinedWithoutLabel": `<template>
  <mdc-text-field id="dessert" outlined />
</template>

<script>
import { MdcTextField } from "material-components-web-vue";

export default {
  components: {
    MdcTextField
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/text-field";
</style>
`,"textFieldTextArea": `<template>
  <mdc-text-field id="dessert" label="Dessert" textarea />
</template>

<script>
import { MdcTextField } from "material-components-web-vue";

export default {
  components: {
    MdcTextField
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/text-field";
</style>
`,"textFieldTextAreaWithoutLabel": `<template>
  <mdc-text-field id="dessert" textarea />
</template>

<script>
import { MdcTextField } from "material-components-web-vue";

export default {
  components: {
    MdcTextField
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/text-field";
</style>
`,"textFieldWithoutLabel": `<template>
  <mdc-text-field id="dessert" />
</template>

<script>
import { MdcTextField } from "material-components-web-vue";

export default {
  components: {
    MdcTextField
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/text-field";
</style>
`,"trailingIconButton": `<template>
  <mdc-button icon="input" icon-direction="right">Log in</mdc-button>
</template>

<script>
import { MdcButton } from "material-components-web-vue";

export default {
  components: {
    MdcButton
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/button";
</style>
`,"unelevatedButton": `<template>
  <mdc-button unelevated>Log in</mdc-button>
</template>

<script>
import { MdcButton } from "material-components-web-vue";

export default {
  components: {
    MdcButton
  }
};
</script>

<style lang="scss">
@import "material-components-web-vue/lib/css/button";
</style>
`};