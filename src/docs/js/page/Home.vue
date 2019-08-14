<template lang="pug">
	div
		mdc-top-app-bar
			mdc-top-app-bar-title Material Components Web Vue
		div
			br
			br
			br
			br
		mdc-grid
			mdc-grid-row
				mdc-grid-cell
					h1(v-typography="'headline3'") Material design components for Vue.js.
				mdc-grid-cell(desktop="6" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Button
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Visual
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-button Text
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ button.button }}
				mdc-grid-cell(desktop="6" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Raised button
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Visual
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-button(raised) Raised
								mdc-tab-content(slot="content" v-text-center) 
									base-code(lang="html") {{ button.raised }}
				mdc-grid-cell(desktop="6" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Unelevated button
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Visual
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-button(unelevated) Unelevated
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ button.unelevated }}
				mdc-grid-cell(desktop="6" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Outlined button
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Visual
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-button(outlined) Outlined
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="6" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Disabled button
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Visual
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-button(disabled) Disabled
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="6" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Dense button
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Visual
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-button(dense) Dense
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="6" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Icon button
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Visual
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-button(icon="favorite") Icon
								mdc-tab-content(slot="content")
				mdc-grid-cell(desktop="6" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Right icon Button
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Visual
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-button(icon="favorite" icon-direction="right") Right icon
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="6" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Button without ripple
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Visual
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-button(:ripple="false") Without ripple
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="6" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Icon button only 
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Visual
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-icon-button(icon="favorite")
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="6" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Icon button only without ripple
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Visual
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-icon-button(icon="favorite" :ripple="false")
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="6" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Disabled icon button only
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Visual
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-icon-button(icon="favorite" disabled)
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="6" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Switch
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Visual
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-switch
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="6" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Switch with custom labels
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Visual
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-switch(on="oui" off="non")
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="6" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Disabled switch
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Visual
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-switch(disabled)
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="6" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Checkbox
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Visual
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-checkbox(id="c4ca4238a0b923820dcc509a6f75849b" value="c4ca4238a0b923820dcc509a6f75849b" text="Unchecked")
									mdc-checkbox(id="c81e728d9d4c2f636f067f89cc14862c" value="c81e728d9d4c2f636f067f89cc14862c" text="Checked" checked)
									mdc-checkbox(text="Disabled" disabled)
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="6" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Radio
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Visual
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-radio(name="gender" id="woman" value="364dd90f4ca0a576f196b27651bd1852" text="Woman" checked)
									mdc-radio(name="gender" id="man" value="40544b125797259e54020558cb8f42a6" text="Man")
									mdc-radio(name="gender" id="other" value="ccd448ba2dc4d781bb1a0f0f93047f16" text="Other")
									mdc-radio(name="gender" id="disabled" value="disabled" text="Disabled" disabled)
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="6" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Data list
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Visual
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-data-list(label="Desserts")
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
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="6" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Image list
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Visual
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
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
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="6" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Image list with text overlay
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Visual
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
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
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="6" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Image list with text below
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Visual
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
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
								mdc-tab-content(slot="content" v-text-center)
		div
			br
</template>
<script>
import BaseCode from "../component/BaseCode.vue";
import MdcButton from "../../../js/MdcButton.vue";
import MdcCard from "../../../js/MdcCard.vue";
import MdcCardContent from "../../../js/MdcCardContent.vue";
import MdcCheckbox from "../../../js/MdcCheckbox.vue";
import MdcDataList from "../../../js/MdcDataList.vue";
import MdcDataListRow from "../../../js/MdcDataListRow.vue";
import MdcDataListCell from "../../../js/MdcDataListCell.vue";
import MdcFab from "../../../js/MdcFab.vue";
import MdcGrid from "../../../js/MdcGrid.vue";
import MdcGridCell from "../../../js/MdcGridCell.vue";
import MdcGridRow from "../../../js/MdcGridRow.vue";
import MdcIconButton from "../../../js/MdcIconButton.vue";
import MdcImageList from "../../../js/MdcImageList.vue";
import MdcImageListItem from "../../../js/MdcImageListItem.vue";
import MdcRadio from "../../../js/MdcRadio.vue";
import MdcSwitch from "../../../js/MdcSwitch.vue";
import MdcTab from "../../../js/MdcTab.vue";
import MdcTabContent from "../../../js/MdcTabContent.vue";
import MdcTabItem from "../../../js/MdcTabItem.vue";
import MdcTopAppBar from "../../../js/MdcTopAppBar.vue";
import MdcTopAppBarTitle from "../../../js/MdcTopAppBarTitle.vue";

import imageList from "../../../js/directive/image-list";
import textCenter from "../../../js/directive/text-center";
import typography from "../../../js/directive/typography";

import examples from "../../example";

import Prism from "prismjs";

import "prismjs/components/prism-sass";
import "prismjs/components/prism-javascript";

export default {
  data() {
    return examples;
  },
  components: {
    BaseCode,
    MdcButton,
    MdcCard,
    MdcCardContent,
    MdcCheckbox,
    MdcDataList,
    MdcDataListCell,
    MdcDataListRow,
    MdcFab,
    MdcGrid,
    MdcGridCell,
    MdcGridRow,
    MdcIconButton,
    MdcImageList,
    MdcImageListItem,
    MdcRadio,
    MdcSwitch,
    MdcTab,
    MdcTabContent,
    MdcTabItem,
    MdcTopAppBar,
    MdcTopAppBarTitle
  },
  directives: {
    imageList,
    textCenter,
    typography
  },
  mounted() {
    Prism.highlightAll();

    console.log(this.examples);
  }
};
</script>
