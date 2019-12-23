import Vue from "vue";
import Vuex from "vuex";

import _ from "lodash";
import * as CONSTANT from "@/components/constants/message";

Vue.use(Vuex);

export default {
	state: {
		list: [
			{
				name: "フンスターハンター最強の武器は？？",
				shindan: [
					{
						kekka: "ランス",
					},
					{
						kekka: "太刀",
					},
					{
						kekka: "大剣",
					},
					{
						kekka: "ボウガン",
					},
				],
		},
		{
			name: "あなたと私で。。。",
			shindan: [
				{
					kekka: "目があった",
				},
				{
					kekka: "ランデブー",
				},
				{
					kekka: "ハゲ散らかす",
				},
				{
					kekka: "ボウガン",
				},
			],
		},
	],
	},
	mutations: {
		setDiagnosis(state: any, params: any) {
			params.This.$Message.info("入力が完了しました。");
			const romdomNumber = Math.floor(Math.random() * Math.floor(state.list[0].shindan.length - 1));
			// console.log(romdomNumber);
			params.This.kekka = state.list[state.num].shindan[romdomNumber].kekka;
		},
		setNumber(state: any, params: any) {
			// console.log(romdomNumber);
			state.num = params.id;
		},

	},
	getters: {
			getDiagnosis: (state: any) => {
				return state.list;
		},
	},
	actions: {
		async setNumber(status: any, params: any) {
			status.commit("setNumber", params);
		},
		async setDiagnosis(status: any, params: any) {
			status.commit("setDiagnosis", params);
		},
	},
};
