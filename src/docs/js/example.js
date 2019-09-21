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
