import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Validate from "./views/Validate.vue";
import DiagnosisList from "./views/DiagnosisList.vue";
import Iview from "./views/iView.vue";
import vifvfor from "./views/v-if_v-for.vue";
import elementUi from "./views/elementUi.vue";
import Pokemon from "./views/Pokemon.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/validate",
			name: "Validate",
			component: Validate,
		},
		{
			path: "/iview",
			name: "iview",
			component: Iview,
		},
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/diagnosis-list",
			name: "DiagnosisList",
			component: DiagnosisList,
		},
		{
			path: "/element-ui",
			name: "/elementUi",
			component: elementUi,
		},
		{
			path: "/vifvfor",
			name: "/vifvfor",
			component: vifvfor,
		},
		{
			path: "/pokemon",
			name: "/pokemon",
			component: Pokemon,
		},
		{
			path: "/about",
			name: "about",
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ "./views/About.vue"),
		},
	],
});
