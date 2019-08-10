<template lang="pug">
	div
		div
			mdc-button Text
		div
			base-code(:html="button.html" :javascript="button.javascript" :sass="button.sass")
		div
			mdc-button(raised) Raised
		div
			base-code(:html="button.raised.html" :javascript="button.raised.javascript" :sass="button.raised.sass")
		div
			mdc-button(unelevated) Unelevated
		div
			base-code(:html="button.unelevated.html" :javascript="button.unelevated.javascript" :sass="button.unelevated.sass")
		div
			mdc-button(outlined) Outlined
		div
			base-code(:html="button.outlined.html" :javascript="button.outlined.javascript" :sass="button.outlined.sass")
		div
			mdc-button(disabled) Disabled
		div
			base-code(:html="button.disabled.html" :javascript="button.disabled.javascript" :sass="button.disabled.sass")
		div
			mdc-button(dense) Dense
		div
			base-code(:html="button.dense.html" :javascript="button.dense.javascript" :sass="button.dense.sass")
		div
			mdc-button(icon="favorite") Icon
		div
			base-code(:html="button.icon.html" :javascript="button.icon.javascript" :sass="button.icon.sass")
		div
			mdc-button(icon="favorite" icon-direction="right") Right icon
		div
			base-code(:html="button.icon.right.html" :javascript="button.icon.right.javascript" :sass="button.icon.right.sass")
		div
			mdc-button(:ripple="false") Without ripple
		div
			base-code(:html="button.withoutRipple.html" :javascript="button.withoutRipple.javascript" :sass="button.withoutRipple.sass")
		div
			mdc-icon-button(icon="favorite")
		div
			base-code(:html="iconButton.html" :javascript="iconButton.javascript" :sass="iconButton.sass")
		div
			mdc-icon-button(icon="favorite" :ripple="false")
		div
			base-code(:html="iconButton.withoutRipple.html" :javascript="iconButton.withoutRipple.javascript" :sass="iconButton.withoutRipple.sass")
		div
			mdc-icon-button(icon="favorite" disabled)
		div
			base-code(:html="iconButton.disabled.html" :javascript="iconButton.disabled.javascript" :sass="iconButton.disabled.sass")
		div
			| The fab is shown in the right bottom corner.
			mdc-fab(label="Add to favorite" icon="favorite" position="right")
		div
			base-code(:html="fab.html" :javascript="fab.javascript" :sass="fab.sass")
		div
			mdc-switch
		div
			base-code(:html="mdcswitch.html" :javascript="mdcswitch.javascript" :sass="mdcswitch.sass")
		div
			mdc-switch(on="oui" off="non")
		div
			base-code(:html="mdcswitch.customLabels.html" :javascript="mdcswitch.customLabels.javascript" :sass="mdcswitch.customLabels.sass")
		div
			mdc-tab
				mdc-tab-item(text="Favorites" icon="favorite" active)
				mdc-tab-item(text="Face" icon="face")
				mdc-tab-item(text="Without icons")
		div
			base-code(:html="tab.html" :javascript="tab.javascript" :sass="tab.sass")
		div
			mdc-radio(name="gender" id="woman" value="364dd90f4ca0a576f196b27651bd1852" text="Woman" checked)
			mdc-radio(name="gender" id="man" value="40544b125797259e54020558cb8f42a6" text="Man")
			mdc-radio(name="gender" id="other" value="ccd448ba2dc4d781bb1a0f0f93047f16" text="Other")
		div
			mdc-image-list
				mdc-image-list-item
					img(v-image-list src="https://picsum.photos/id/0/5616/3744" alt="Photo 1")
				mdc-image-list-item
					img(v-image-list src="https://picsum.photos/id/1/5616/3744" alt="Photo 2")
				mdc-image-list-item
					img(v-image-list src="https://picsum.photos/id/100/2500/1656" alt="Photo 3")
				mdc-image-list-item
					img(v-image-list src="https://picsum.photos/id/1000/5626/3635" alt="Photo 4")
				mdc-image-list-item
					img(v-image-list src="https://picsum.photos/id/1001/5616/3744" alt="Photo 5")
				mdc-image-list-item
					img(v-image-list src="https://picsum.photos/id/1002/4312/2868" alt="Photo 6")
				mdc-image-list-item
					img(v-image-list src="https://picsum.photos/id/1004/5616/3744" alt="Photo 7")
				mdc-image-list-item
					img(v-image-list src="https://picsum.photos/id/1006/3000/2000" alt="Photo 8")
				mdc-image-list-item
					img(v-image-list src="https://picsum.photos/id/1008/5616/3744" alt="Photo 9")
				mdc-image-list-item
					img(v-image-list src="https://picsum.photos/id/1009/5000/7502" alt="Photo 10")
				mdc-image-list-item
					img(v-image-list src="https://picsum.photos/id/1010/5184/3456" alt="Photo 11")
				mdc-image-list-item
					img(v-image-list src="https://picsum.photos/id/1012/3973/2639" alt="Photo 12")
		div
			base-code(:html="imageList.html" :javascript="imageList.javascript" :sass="imageList.sass")
		div
			mdc-image-list(text-overlay)
				mdc-image-list-item(text="Photo 1")
					img(v-image-list src="https://picsum.photos/id/0/5616/3744" alt="Photo 1")
				mdc-image-list-item(text="Photo 2")
					img(v-image-list src="https://picsum.photos/id/1/5616/3744" alt="Photo 2")
				mdc-image-list-item(text="Photo 3")
					img(v-image-list src="https://picsum.photos/id/100/2500/1656" alt="Photo 3")
				mdc-image-list-item(text="Photo 4")
					img(v-image-list src="https://picsum.photos/id/1000/5626/3635" alt="Photo 4")
				mdc-image-list-item(text="Photo 5")
					img(v-image-list src="https://picsum.photos/id/1001/5616/3744" alt="Photo 5")
				mdc-image-list-item(text="Photo 6")
					img(v-image-list src="https://picsum.photos/id/1002/4312/2868" alt="Photo 6")
				mdc-image-list-item(text="Photo 7")
					img(v-image-list src="https://picsum.photos/id/1004/5616/3744" alt="Photo 7")
				mdc-image-list-item(text="Photo 8")
					img(v-image-list src="https://picsum.photos/id/1006/3000/2000" alt="Photo 8")
				mdc-image-list-item(text="Photo 9")
					img(v-image-list src="https://picsum.photos/id/1008/5616/3744" alt="Photo 9")
				mdc-image-list-item(text="Photo 10")
					img(v-image-list src="https://picsum.photos/id/1009/5000/7502" alt="Photo 10")
				mdc-image-list-item(text="Photo 11")
					img(v-image-list src="https://picsum.photos/id/1010/5184/3456" alt="Photo 11")
				mdc-image-list-item(text="Photo 12")
					img(v-image-list src="https://picsum.photos/id/1012/3973/2639" alt="Photo 12")
		div
			base-code(:html="imageList.textOverlay.html" :javascript="imageList.textOverlay.javascript" :sass="imageList.textOverlay.sass")
		div
			mdc-image-list
				mdc-image-list-item(text="Photo 1")
					img(v-image-list src="https://picsum.photos/id/0/5616/3744" alt="Photo 1")
				mdc-image-list-item(text="Photo 2")
					img(v-image-list src="https://picsum.photos/id/1/5616/3744" alt="Photo 2")
				mdc-image-list-item(text="Photo 3")
					img(v-image-list src="https://picsum.photos/id/100/2500/1656" alt="Photo 3")
				mdc-image-list-item(text="Photo 4")
					img(v-image-list src="https://picsum.photos/id/1000/5626/3635" alt="Photo 4")
				mdc-image-list-item(text="Photo 5")
					img(v-image-list src="https://picsum.photos/id/1001/5616/3744" alt="Photo 5")
				mdc-image-list-item(text="Photo 6")
					img(v-image-list src="https://picsum.photos/id/1002/4312/2868" alt="Photo 6")
				mdc-image-list-item(text="Photo 7")
					img(v-image-list src="https://picsum.photos/id/1004/5616/3744" alt="Photo 7")
				mdc-image-list-item(text="Photo 8")
					img(v-image-list src="https://picsum.photos/id/1006/3000/2000" alt="Photo 8")
				mdc-image-list-item(text="Photo 9")
					img(v-image-list src="https://picsum.photos/id/1008/5616/3744" alt="Photo 9")
				mdc-image-list-item(text="Photo 10")
					img(v-image-list src="https://picsum.photos/id/1009/5000/7502" alt="Photo 10")
				mdc-image-list-item(text="Photo 11")
					img(v-image-list src="https://picsum.photos/id/1010/5184/3456" alt="Photo 11")
				mdc-image-list-item(text="Photo 12")
					img(v-image-list src="https://picsum.photos/id/1012/3973/2639" alt="Photo 12")
		div
			base-code(:html="imageList.textBelow.html" :javascript="imageList.textBelow.javascript" :sass="imageList.textBelow.sass")
</template>
<script>
import BaseCode from "../component/BaseCode.vue";
import MdcButton from "../../../js/MdcButton.vue";
import MdcCard from "../../../js/MdcCard.vue";
import MdcFab from "../../../js/MdcFab.vue";
import MdcIconButton from "../../../js/MdcIconButton.vue";
import MdcImageList from "../../../js/MdcImageList.vue";
import MdcImageListItem from "../../../js/MdcImageListItem.vue";
import MdcRadio from "../../../js/MdcRadio.vue";
import MdcSwitch from "../../../js/MdcSwitch.vue";
import MdcTab from "../../../js/MdcTab.vue";
import MdcTabItem from "../../../js/MdcTabItem.vue";
import imageList from "../../../js/directive/image-list";
import Prism from "prismjs";

import "prismjs/components/prism-sass";
import "prismjs/components/prism-javascript";

export default {
  data() {
    return {
      button: {
        html: `<mdc-button>Text</mdc-button>`,
        javascript: `import { MdcButton } from "@khalyomede/material-components-web-vue";
		
export default {
	components: {
		MdcButton
	}	
};`,
        sass: `@import "@khalyomede/material-components-web/dist/button"`,
        raised: {
          html: `<mdc-button raised>Raised</mdc-button>`,
          javascript: `import { MdcButton } from "@khalyomede/material-components-web-vue";
export default {
	components: {
		MdcButton
	}	
};`,
          sass: `@import "@khalyomede/material-components-web/dist/button"`
        },
        unelevated: {
          html: `<mdc-button unelevated>Unelevated</mdc-button>`,
          javascript: `import { MdcButton } from "@khalyomede/material-components-web-vue";
export default {
	components: {
		MdcButton
	}	
};`,
          sass: `@import "@khalyomede/material-components-web/dist/button"`
        },
        outlined: {
          html: `<mdc-button outlined>Unelevated</mdc-button>`,
          javascript: `import { MdcButton } from "@khalyomede/material-components-web-vue";
export default {
	components: {
		MdcButton
	}	
};`,
          sass: `@import "@khalyomede/material-components-web/dist/button"`
        },
        dense: {
          html: `<mdc-button dense>Dense</mdc-button>`,
          javascript: `import { MdcButton } from "@khalyomede/material-components-web-vue";
export default {
	components: {
		MdcButton
	}	
};`,
          sass: `@import "@khalyomede/material-components-web/dist/button"`
        },
        icon: {
          html: `<mdc-button icon="favorite">Icon</mdc-button>`,
          javascript: `import { MdcButton } from "@khalyomede/material-components-web-vue";
export default {
	components: {
		MdcButton
	}	
};`,
          sass: `@import "@khalyomede/material-components-web/dist/button"`,
          right: {
            html: `<mdc-button icon="favorite" icon-direction="right">Right icon</mdc-button>`,
            javascript: `import { MdcButton } from "@khalyomede/material-components-web-vue";
export default {
	components: {
		MdcButton
	}	
};`,
            sass: `@import "@khalyomede/material-components-web/dist/button"`
          }
        },
        withoutRipple: {
          html: `<mdc-button :ripple="false">Without ripple</mdc-button>`,
          javascript: `import { MdcButton } from "@khalyomede/material-components-web-vue";
export default {
	components: {
		MdcButton
	}	
};`,
          sass: `@import "@khalyomede/material-components-web/dist/button"`
        },
        disabled: {
          html: `<mdc-button disabled>Disabled</mdc-button>`,
          javascript: `import { MdcButton } from "@khalyomede/material-components-web-vue";
export default {
	components: {
		MdcButton
	}	
};`,
          sass: `@import "@khalyomede/material-components-web/dist/button"`
        }
      },
      iconButton: {
        html: `<mdc-icon-button icon="favorite" />`,
        javascript: `import { MdcIconButton } from "@khalyomede/material-components-web-vue";
export default {
	components: {
		MdcIconButton
	}	
};`,
        sass: `@import "@khalyomede/material-components-web/dist/icon-button"`,
        withoutRipple: {
          html: `<mdc-icon-button icon="favorite" :ripple="false" />`,
          javascript: `import { MdcIconButton } from "@khalyomede/material-components-web-vue";
export default {
	components: {
		MdcIconButton
	}	
};`,
          sass: `@import "@khalyomede/material-components-web/dist/icon-button"`
        },
        disabled: {
          html: `<mdc-icon-button icon="favorite" disabled />`,
          javascript: `import { MdcIconButton } from "@khalyomede/material-components-web-vue";
export default {
	components: {
		MdcIconButton
	}	
};`,
          sass: `@import "@khalyomede/material-components-web/dist/icon-button`
        }
      },
      fab: {
        html: `<mdc-fab label="Add to favorite" icon="favorite" position="right" />`,
        javascript: `import { MdcFab } from "@khalyomede/material-components-web-vue";
export default {
	components: {
		MdcFab
	}	
};`,
        sass: `@import "@khalyomede/material-components-web/dist/fab"`
      },
      mdcswitch: {
        html: `<mdc-switch />`,
        javascript: `import { MdcSwitch } from "@khalyomede/material-components-web-vue";
export default {
	components: {
		MdcSwitch
	}	
};`,
        sass: `@import "@khalyomede/material-components-web/dist/switch"`,
        customLabels: {
          html: `<mdc-switch on="oui" off="non" />`,
          javascript: `import { MdcSwitch } from "@khalyomede/material-components-web-vue";
export default {
	components: {
		MdcSwitch
	}	
};`,
          sass: `@import "@khalyomede/material-components-web/dist/switch"`
        }
      },
      tab: {
        html: `<mdc-tab>
	<mdc-tab-item text="Favorite" icon="favorite" active />
	<mdc-tab-item text="Face" icon="face" />*
	<mdc-tab-item text="Face" />
</mdc-tab>`,
        javascript: `import { MdcTab, MdcTabItem } from "@khalyomede/material-components-web-vue";
export default {
	components: {
		MdcTab,
		MdcTabItem
	}	
};`,
        sass: `@import "@khalyomede/material-components-web/dist/tab"`
      },
      imageList: {
        html: `<mdc-image-list>
	<mdc-image-list-item>
		<img v-image-list src="https://picsum.photos/id/0/5616/3744" alt="Photo 1" />
	</mdc-image-list-item>
	<mdc-image-list-item>
		<img v-image-list src="https://picsum.photos/id/1/5616/3744" alt="Photo 2 />
	</mdc-image-list-item>
	<mdc-image-list-item>
		<img v-image-list src="https://picsum.photos/id/100/2500/1656" alt="Photo 3 />
	</mdc-image-list-item>
	<mdc-image-list-item>
		<img v-image-list src="https://picsum.photos/id/1000/5626/3635" alt="Photo 4 />
	</mdc-image-list-item>
	<mdc-image-list-item>
		<img v-image-list src="https://picsum.photos/id/1001/5616/3744" alt="Photo 5 />
	</mdc-image-list-item>
	<mdc-image-list-item>
		<img v-image-list src="https://picsum.photos/id/1002/4312/2868" alt="Photo 6 />
	</mdc-image-list-item>
	<mdc-image-list-item>
		<img v-image-list src="https://picsum.photos/id/1004/5616/3744" alt="Photo 7 />
	</mdc-image-list-item>
	<mdc-image-list-item>
		<img v-image-list src="https://picsum.photos/id/1006/3000/2000" alt="Photo 8 />
	</mdc-image-list-item>
	<mdc-image-list-item>
		<img v-image-list src="https://picsum.photos/id/1008/5616/3744" alt="Photo 9 />
	</mdc-image-list-item>
	<mdc-image-list-item>
		<img v-image-list src="https://picsum.photos/id/1009/5000/7502" alt="Photo 10 />
	</mdc-image-list-item>
	<mdc-image-list-item>
		<img v-image-list src="https://picsum.photos/id/1010/5184/3456" alt="Photo 11 />
	</mdc-image-list-item>
	<mdc-image-list-item>
		<img v-image-list src="https://picsum.photos/id/1012/3973/2639" alt="Photo 12 />
	</mdc-image-list-item>
</mdc-image-list>`,
        javascript: `import { MdcImageList, MdcImageListItem } from "@khalyomede/material-components-web-vue";
export default {
	components: {
		MdcImageList,
		MdcImageListItem
	}	
};`,
        sass: `@import "@khalyomede/material-components-web/dist/image-list"`,
        textOverlay: {
          html: `<mdc-image-list text-overlay>
	<mdc-image-list-item text="Photo 1">
		<img v-image-list src="https://picsum.photos/id/0/5616/3744" alt="Photo 1" />
	</mdc-image-list-item>
	<mdc-image-list-item text="Photo 2">
		<img v-image-list src="https://picsum.photos/id/1/5616/3744" alt="Photo 2" />
	</mdc-image-list-item>
	<mdc-image-list-item text="Photo 3">
		<img v-image-list src="https://picsum.photos/id/100/2500/1656" alt="Photo 3" />
	</mdc-image-list-item>
	<mdc-image-list-item text="Photo 4">
		<img v-image-list src="https://picsum.photos/id/1000/5626/3635" alt="Photo 4" />
	</mdc-image-list-item>
	<mdc-image-list-item text="Photo 5">
		<img v-image-list src="https://picsum.photos/id/1001/5616/3744" alt="Photo 5" />
	</mdc-image-list-item>
	<mdc-image-list-item text="Photo 6">
		<img v-image-list src="https://picsum.photos/id/1002/4312/2868" alt="Photo 6" />
	</mdc-image-list-item>
	<mdc-image-list-item text="Photo 7">
		<img v-image-list src="https://picsum.photos/id/1004/5616/3744" alt="Photo 7" />
	</mdc-image-list-item>
	<mdc-image-list-item text="Photo 8">
		<img v-image-list src="https://picsum.photos/id/1006/3000/2000" alt="Photo 8" />
	</mdc-image-list-item>
	<mdc-image-list-item text="Photo 9">
		<img v-image-list src="https://picsum.photos/id/1008/5616/3744" alt="Photo 9" />
	</mdc-image-list-item>
	<mdc-image-list-item text="Photo 10">
		<img v-image-list src="https://picsum.photos/id/1009/5000/7502" alt="Photo 10" />
	</mdc-image-list-item>
	<mdc-image-list-item text="Photo 11">
		<img v-image-list src="https://picsum.photos/id/1010/5184/3456" alt="Photo 11" />
	</mdc-image-list-item>
	<mdc-image-list-item text="Photo 12">
		<img v-image-list src="https://picsum.photos/id/1012/3973/2639" alt="Photo 12" />
	</mdc-image-list-item>
</mdc-image-list>`,
          javascript: `import { MdcImageList, MdcImageListItem } from "@khalyomede/material-components-web-vue";
export default {
	components: {
		MdcImageList,
		MdcImageListItem
	}	
};`,
          sass: `@import "@khalyomede/material-components-web/dist/image-list"`
        },
        textBelow: {
          html: `<mdc-image-list>
	<mdc-image-list-item text="Photo 1">
		<img v-image-list src="https://picsum.photos/id/0/5616/3744" alt="Photo 1" />
	</mdc-image-list-item>
	<mdc-image-list-item text="Photo 2">
		<img v-image-list src="https://picsum.photos/id/1/5616/3744" alt="Photo 2" />
	</mdc-image-list-item>
	<mdc-image-list-item text="Photo 3">
		<img v-image-list src="https://picsum.photos/id/100/2500/1656" alt="Photo 3" />
	</mdc-image-list-item>
	<mdc-image-list-item text="Photo 4">
		<img v-image-list src="https://picsum.photos/id/1000/5626/3635" alt="Photo 4" />
	</mdc-image-list-item>
	<mdc-image-list-item text="Photo 5">
		<img v-image-list src="https://picsum.photos/id/1001/5616/3744" alt="Photo 5" />
	</mdc-image-list-item>
	<mdc-image-list-item text="Photo 6">
		<img v-image-list src="https://picsum.photos/id/1002/4312/2868" alt="Photo 6" />
	</mdc-image-list-item>
	<mdc-image-list-item text="Photo 7">
		<img v-image-list src="https://picsum.photos/id/1004/5616/3744" alt="Photo 7" />
	</mdc-image-list-item>
	<mdc-image-list-item text="Photo 8">
		<img v-image-list src="https://picsum.photos/id/1006/3000/2000" alt="Photo 8" />
	</mdc-image-list-item>
	<mdc-image-list-item text="Photo 9">
		<img v-image-list src="https://picsum.photos/id/1008/5616/3744" alt="Photo 9" />
	</mdc-image-list-item>
	<mdc-image-list-item text="Photo 10">
		<img v-image-list src="https://picsum.photos/id/1009/5000/7502" alt="Photo 10" />
	</mdc-image-list-item>
	<mdc-image-list-item text="Photo 11">
		<img v-image-list src="https://picsum.photos/id/1010/5184/3456" alt="Photo 11" />
	</mdc-image-list-item>
	<mdc-image-list-item text="Photo 12">
		<img v-image-list src="https://picsum.photos/id/1012/3973/2639" alt="Photo 12" />
	</mdc-image-list-item>
</mdc-image-list>`,
          javascript: `import { MdcImageList, MdcImageListItem } from "@khalyomede/material-components-web-vue";
export default {
	components: {
		MdcImageList,
		MdcImageListItem
	}	
};`,
          sass: `@import "@khalyomede/material-components-web/dist/image-list"`
        }
      }
    };
  },
  components: {
    BaseCode,
    MdcButton,
    MdcCard,
    MdcFab,
    MdcIconButton,
    MdcImageList,
    MdcImageListItem,
    MdcRadio,
    MdcSwitch,
    MdcTab,
    MdcTabItem
  },
  directives: {
    imageList
  },
  mounted() {
    Prism.highlightAll();
  }
};
</script>
