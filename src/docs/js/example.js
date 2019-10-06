export default {
	button: `<template>
  <mdc-button>Log in</mdc-button>
</template>

<script>
import { MdcButton } from "material-components-web-vue";

export default {
  components: {
    MdcButton
  }
};
</script>

<style lang="scss" scoped>
@import "material-components-web-vue/lib/css/button";
</style>
`,
	buttonWithoutRipple: `<template>
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

<style lang="scss" scoped>
@import "material-components-web-vue/lib/css/button";
</style>
`,
	checkbox: `<template>
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

<style lang="scss" scoped>
@import "material-components-web-vue/lib/css/checkbox";
</style>
`,
	dataTable: `<template>
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

<style lang="scss" scoped>
@import "material-components-web-vue/lib/css/data-table";
</style>
`,
	denseButton: `<template>
  <mdc-button dense>Log in</mdc-button>
</template>

<script>
import { MdcButton } from "material-components-web-vue";

export default {
  components: {
    MdcButton
  }
};
</script>

<style lang="scss" scoped>
@import "material-components-web-vue/lib/css/button";
</style>
`,
	disabledButton: `<template>
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

<style lang="scss" scoped>
@import "material-components-web-vue/lib/css/button";
</style>
`,
	iconButton: `<template>
  <mdc-button icon="input">Log in</mdc-button>
</template>

<script>
import { MdcButton } from "material-components-web-vue";

export default {
  components: {
    MdcButton
  }
};
</script>

<style lang="scss" scoped>
@import "material-components-web-vue/lib/css/button";
</style>
`,
	iconButtonOnly: `<template>
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

<style lang="scss" scoped>
@import "material-components-web-vue/lib/css/icon-button";
</style>
`,
	iconButtonOnlyDisabled: `<template>
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

<style lang="scss" scoped>
@import "material-components-web-vue/lib/css/icon-button";
</style>
`,
	iconButtonOnlyWithoutRipple: `<template>
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

<style lang="scss" scoped>
@import "material-components-web-vue/lib/css/icon-button";
</style>
`,
	list: `<template>
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

<style lang="scss" scoped>
@import "material-components-web-vue/lib/css/list";
</style>
`,
	listCheckboxItem: `<template>
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

<style lang="scss" scoped>
@import "material-components-web-vue/lib/css/list";
</style>
`,
	listDivider: `<template>
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

<style lang="scss" scoped>
@import "material-components-web-vue/lib/css/list";
</style>
`,
	listGroup: `<template>
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

<style lang="scss" scoped>
@import "material-components-web-vue/lib/css/list";
</style>
`,
	listPreselectedItem: `<template>
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

<style lang="scss" scoped>
@import "material-components-web-vue/lib/css/list";
</style>
`,
	listRadioGroup: `<template>
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

<style lang="scss" scoped>
@import "material-components-web-vue/lib/css/list";
</style>
`,
	listSingleSelection: `<template>
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

<style lang="scss" scoped>
@import "material-components-web-vue/lib/css/list";
</style>
`,
	listTwoLine: `<template lang="pug">
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

<style lang="scss" scoped>
@import "material-components-web-vue/lib/css/list";
</style>
`,
	outlinedButton: `<template>
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

<style lang="scss" scoped>
@import "material-components-web-vue/lib/css/button";
</style>
`,
	radio: `<template>
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

<style lang="scss" scoped>
@import "material-components-web-vue/lib/css/radio";
</style>
`,
	raisedButton: `<template>
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

<style lang="scss" scoped>
@import "material-components-web-vue/lib/css/button";
</style>
`,
	switchChecked: `<template>
  <div>
    <mdc-switch checked />
  </div>
</template>
<script>
import { MdcSwitch } from "material-components-web-vue";

export default {
  components: {
    MdcSwitch
  }
};
</script>

<style lang="scss" scoped>
@import "material-components-web-vue/lib/css/switch";
</style>
`,
	switchDisabled: `<template>
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

<style lang="scss" scoped>
@import "material-components-web-vue/lib/css/switch";
</style>
`,
	switches: `<template>
  <div>
    <mdc-switch />
  </div>
</template>
<script>
import { MdcSwitch } from "material-components-web-vue";

export default {
  components: {
    MdcSwitch
  }
};
</script>

<style lang="scss" scoped>
@import "material-components-web-vue/lib/css/switch";
</style>
`,
	switchWithCustomLabels: `<template>
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

<style lang="scss" scoped>
@import "material-components-web-vue/lib/css/switch";
</style>
`,
	trailingIconButton: `<template>
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

<style lang="scss" scoped>
@import "material-components-web-vue/lib/css/button";
</style>
`,
	unelevatedButton: `<template>
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

<style lang="scss" scoped>
@import "material-components-web-vue/lib/css/button";
</style>
`
};
