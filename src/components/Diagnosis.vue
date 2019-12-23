<template>
  <div class="wrapper">
    <div class="layout">
      <h1>{{ msg }}</h1>

      <div class="content">
        <span class="font-title">名前を入力してください</span>
      </div>

      <div class="content">
        <input type="text" name="diagnosis" v-model="diagnosis" v-validate="'required'" class="textDefault">
        <Button type="primary" @click="onDiagnosis()">診断</Button>
      </div>
      <div class="content">
        <div class="error-messege" v-if="errors.has('diagnosis')">名前を入力てください。</div>
      </div>

      <div class="content">
        <textarea v-if="kekka" v-model="kekka" width="200"></textarea>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Store from "@/store/store";
import VeeValidate, {Validator} from "vee-validate";
import ja from "vee-validate/dist/locale/ja";

Vue.use(VeeValidate, {
		locale: ja,
		events: "change",
	},
);

@Component
export default class Diagnosis extends Vue {

  @Prop() private msg!: string;
  private diagnosis = "";
  private kekka = "";

  constructor() {
    super();
    this.kekka = "";
  }
  created() {
    console.log(this.$route.query['num'])
    Store.dispatch("setNumber", {id: this.$route.query['num']});
  }

  private onDiagnosis() {
		this.$validator.validateAll().then((result) => {
			if (result) {
        this.kekka = "";
				Store.dispatch("setDiagnosis", {This: this});
			}
		});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper {
  margin-top: 200px;
  display: flex;
  justify-content: center;

  .content {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
  }
}
.error-messege {
  color:red;
  font-size: 16px;
}
.textDefault {
  width: 400px;
}
.list {
  font-size: 20px;
  font-weight: 900;
  text-align: left;
  border-bottom: 1px solid #999999;
  width: 600px;
  padding-top: 20px;
  padding-bottom: 5px;
  margin-bottom: 5px;
  color: blue;
  cursor: pointer;
}
.font-title{
  font-size: 18px;
  padding-left: 20px;
}
textarea {
  resize: none;
  width: 500px;
  height: 80px;
}
</style>
