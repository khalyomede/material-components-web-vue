<template lang="pug">
	mdc-grid
		mdc-grid-row
			mdc-grid-cell
				h1(v-typography="'headline3'") Getting started
				h2(v-typography="'headline4'") Requirements
				ul(v-typography="'body1'")
					li
						a(href="https://nodejs.org/en/download/" target="blank") NodeJS
					li
						| NPM or 
						a(href="https://yarnpkg.com/en/docs/install" target="blank") Yarn
				p(v-typography="'body1'") Make sure these tools are installed
				base-code(lang="bash") 
					| $ node --version
					| v10.15.3
				base-code(lang="bash")
					| $ npm --version
					| 6.9.0
				h2(v-typography="'headline4'") Installation
				h3(v-typography="'headline5'") Using NPM
				h4(v-typography="'headline6'") 1. Install dependencies
				base-code(lang="html") npm install --save-dev material-components-web material-components-web-vue
				h3(v-typography="'headline5'") Using Yarn
				h4(v-typography="'headline6'") 1. Install dependencies
				base-code(lang="html") yarn add --dev material-components-web material-components-web-vue
</template>
<script>
import BaseCode from "../component/BaseCode.vue";
import MdcGrid from "../../../js/MdcGrid.vue";
import MdcGridRow from "../../../js/MdcGridRow.vue";
import MdcGridCell from "../../../js/MdcGridCell.vue";
import typography from "../../../js/directive/typography";
import Prism from "prismjs";
import "prismjs/components/prism-bash";

export default {
  components: {
    BaseCode,
    MdcGrid,
    MdcGridRow,
    MdcGridCell
  },
  directives: {
    typography
  }
};
</script>
