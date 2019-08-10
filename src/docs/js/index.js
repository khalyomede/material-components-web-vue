import App from "./page/App.vue";
import Vue from "vue";
import router from "./router";

new Vue({
	el: "#app",
	router,
	render: h => h(App)
});
