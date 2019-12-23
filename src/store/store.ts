import Vue from "vue";
import Vuex from "vuex";
import DiagnosisService from "./diagnosis";
import PokeemonService from "./pokemon";

Vue.use(Vuex);
export default new Vuex.Store({
	modules: {
		diagnosis: DiagnosisService,
		pokemon: PokeemonService,
	},
});
