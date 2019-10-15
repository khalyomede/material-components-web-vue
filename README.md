# Material components web vue

Material design components for Vue.js.

![npm](https://img.shields.io/npm/v/material-components-web-vue)
![npm (prod) dependency version](https://img.shields.io/npm/dependency-version/material-components-web-vue/material-components-web)
![NPM](https://img.shields.io/npm/l/material-components-web-vue)
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/material-components-web-vue)

```html
<template>
	<div>
		<mdc-radio name="gender" value="1" text="Woman" checked />
		<mdc-radio name="gender" value="2" text="Man" />
		<mdc-radio name="gender" value="3" text="Other" />

		<mdc-button outlined>Cancel</mdc-button>
		<mdc-button elevated icon="check" icon-direction="right">Save</mdc-button>
	</div>
</template>
<script>
	import { MdcButton, MdcRadio } from "material-components-web-vue";

	export default {
		components: {
			MdcButton,
			MdcRadio
		}
	};
</script>
<style lang="scss">
	@import "material-components-web-vue/lib/css/button";
	@import "material-components-web-vue/lib/css/radio";
</style>
```

## Summary

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](https://khalyomede.github.io/material-components-web-vue)
- [Feature requests](#feature-requests)

## About

Use Vue.js compatible [material design web components](https://material-components.github.io/material-components-web-catalog/#/) in your web app, using Vue.js components and directive to let you get ready faster.

## Installation

Install the dependency

```bash
npm install --save-dev material-components-web-vue
```

## Usage

You can find the components in the [documentation page](https://khalyomede.github.io/material-components-web-vue). For each components, you will find instructions to copy into your `.vue` component, including the html, javascript, and scss code.

## Feature requests

If you need something to be changed, fixed, or added, just [open a new issue](https://github.com/khalyomede/material-components-web-vue/issues/new). Thank you for the time spent.
