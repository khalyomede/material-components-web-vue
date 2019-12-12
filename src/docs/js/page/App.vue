<template lang="pug">
	div
		header
			mdc-top-app-bar(dense)
				mdc-top-app-bar-title(slot="start") 
					router-link(to="/" style="color: white; text-decoration: none;") MDC Vue
				mdc-top-app-bar-button(slot="end" @click="showSidebar") menu
			mdc-drawer(modal ref="sidebar")
				mdc-list
					mdc-list-item(href="https://github.com/khalyomede/material-components-web-vue") Github
					router-link(to="/getting-started" style="text-decoration: none;") 
						mdc-list-item Getting started 
			mdc-drawer-scrim
			div
				br
				br
				br
				br
		main
			router-view
</template>
<script>
import MdcTopAppBar from "../../../js/MdcTopAppBar.vue";
import MdcTopAppBarButton from "../../../js/MdcTopAppBarButton.vue";
import MdcTopAppBarTitle from "../../../js/MdcTopAppBarTitle.vue";
import MdcButton from "../../../js/MdcButton.vue";
import MdcDrawer from "../../../js/MdcDrawer.vue";
import MdcDrawerScrim from "../../../js/MdcDrawerScrim.vue";
import MdcList from "../../../js/MdcList.vue";
import MdcListItem from "../../../js/MdcListItem.vue";
import router from "../router";

export default {
	components: {
		MdcTopAppBar,
		MdcTopAppBarButton,
		MdcTopAppBarTitle,
		MdcButton,
		MdcDrawer,
		MdcDrawerScrim,
		MdcList,
		MdcListItem,
	},
	methods: {
		showSidebar() {
			this.$refs.sidebar.element.open = true;
		},
	},
};
</script>
<style lang="scss">
@import "../../../css/button";
@import "../../../css/top-app-bar";
@import "../../../css/drawer";
@import "../../../css/list";
</style>
