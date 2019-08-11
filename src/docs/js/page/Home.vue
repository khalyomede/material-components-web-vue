<template lang="pug">
	div
		div
			mdc-button Text
		div
			br
		div
			mdc-button(raised) Raised
		div
			br
		div
			mdc-button(unelevated) Unelevated
		div
			br
		div
			mdc-button(outlined) Outlined
		div
			br
		div
			mdc-button(disabled) Disabled
		div
			br
		div
			mdc-button(dense) Dense
		div
			br
		div
			mdc-button(icon="favorite") Icon
		div
			br
		div
			mdc-button(icon="favorite" icon-direction="right") Right icon
		div
			br
		div
			mdc-button(:ripple="false") Without ripple
		div
			br
		div
			mdc-icon-button(icon="favorite")
		div
			br
		div
			mdc-icon-button(icon="favorite" :ripple="false")
		div
			br
		div
			mdc-icon-button(icon="favorite" disabled)
		div
			br
		div
			| The fab is shown in the right bottom corner.
			mdc-fab(label="Add to favorite" icon="favorite" position="right")
		div
			br
		div
			mdc-switch
		div
			br
		div
			mdc-switch(on="oui" off="non")
		div
			br
		div
			mdc-switch(disabled)
		div
			br
		div
			mdc-checkbox(id="c4ca4238a0b923820dcc509a6f75849b" value="c4ca4238a0b923820dcc509a6f75849b" text="Unchecked")
			mdc-checkbox(id="c81e728d9d4c2f636f067f89cc14862c" value="c81e728d9d4c2f636f067f89cc14862c" text="Checked" checked)
			mdc-checkbox(text="Disabled" disabled)
		div
			br
		div
			mdc-tab
				mdc-tab-item(text="Favorites" icon="favorite" active)
				mdc-tab-item(text="Face" icon="face")
				mdc-tab-item(text="Without icons")
		div
			br
		div
			mdc-radio(name="gender" id="woman" value="364dd90f4ca0a576f196b27651bd1852" text="Woman" checked)
			mdc-radio(name="gender" id="man" value="40544b125797259e54020558cb8f42a6" text="Man")
			mdc-radio(name="gender" id="other" value="ccd448ba2dc4d781bb1a0f0f93047f16" text="Other")
			mdc-radio(name="gender" id="disabled" value="disabled" text="Disabled" disabled)
		div
			br
		div
			mdc-data-list
				thead
					mdc-data-list-row(header)
						mdc-data-list-cell(header) Dessert
						mdc-data-list-cell(header numeric) Carbs (g)
						mdc-data-list-cell(header numeric) Protein (g)
						mdc-data-list-cell(header) Comments
				tbody
					mdc-data-list-row
						mdc-data-list-cell Frozen yogurt
						mdc-data-list-cell(numeric) 24
						mdc-data-list-cell(numeric) 4.0
						mdc-data-list-cell Super tasty
					mdc-data-list-row
						mdc-data-list-cell Ice cream sandwich
						mdc-data-list-cell(numeric) 37
						mdc-data-list-cell(numeric) 4.3
						mdc-data-list-cell I like ice cream more
					mdc-data-list-row
						mdc-data-list-cell Eclair
						mdc-data-list-cell(numeric) 24
						mdc-data-list-cell(numeric) 6.0
						mdc-data-list-cell New filing flavor
		div
			br
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
			br
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
			br
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
			br
</template>
<script>
import BaseCode from "../component/BaseCode.vue";
import MdcButton from "../../../js/MdcButton.vue";
import MdcCard from "../../../js/MdcCard.vue";
import MdcCheckbox from "../../../js/MdcCheckbox.vue";
import MdcDataList from "../../../js/MdcDataList.vue";
import MdcDataListRow from "../../../js/MdcDataListRow.vue";
import MdcDataListCell from "../../../js/MdcDataListCell.vue";
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
  components: {
    BaseCode,
    MdcButton,
    MdcCard,
    MdcCheckbox,
    MdcDataList,
    MdcDataListCell,
    MdcDataListRow,
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
