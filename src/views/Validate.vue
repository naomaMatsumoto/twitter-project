<template>
  <div class="wrapper">
    <h2>バリデーション</h2>




    <div class="check">
      <span>未入力チェック</span>
      <input type="text" name="required" v-model="required" v-validate="'required'" class="textDefault">
      <div class="error-messege" v-if="errors.has('required')">未入力です。</div>
    </div>











    <div class="check">
      <span>数値チェック</span>
      <input type="text" name="number" v-model="number" v-validate="'numeric'" class="textDefault">
      <div class="error-messege" v-if="errors.has('number')">数値以外が入力されています。</div>
    </div>

    <div class="check">
      <span>emailチェック</span>
      <input type="text" name="email" v-model="email" v-validate="'email'" class="textDefault">
      <div class="error-messege" v-if="errors.has('email')">emailの形式ではありません。</div>
    </div>

    <div class="check">
      <span>未入力と数値チェック</span>
      <input type="text" name="requiredNumeric" v-model="requiredNumeric" v-validate="'required | numeric'" class="textDefault">
      <div class="error-messege" v-if="errors.has('requiredNumeric')">{{ errors.first('requiredNumeric') }}</div>
    </div>

    <Button type="primary" @click="onDiagnosis()">エラーチェック</Button>
    <div class="kekka">{{kekka}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import VeeValidate, {Validator} from "vee-validate";
import ja from "vee-validate/dist/locale/ja";
import * as Sentry from "@sentry/browser";
import * as Integrations from "@sentry/integrations";
Validator.localize('ja', ja);

Vue.use(VeeValidate, {
		locale: ja,
    events: "blur",
	},
);
Sentry.init({
  dsn: "https://d5b5cc67b1564ae2bf442f45ec3b7992@sentry.io/1795809",
  integrations: [new Integrations.Vue({Vue, attachProps: true})],
});

@Component
export default class Validate extends Vue {

  private required = "";
  private number = "";
  private email = "";
  private kekka = "";
  private requiredNumeric = "";

  private onDiagnosis() {
		this.$validator.validateAll().then(async (result) => {
			if (result) {
        this.kekka = "成功";
			} else {
        this.kekka = "失敗";
      }
		});
  }
// throw("aaaaa")
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.error-messege {
  color:red;
  font-size: 16px;
}
.textDefault {
  width: 400px;
}
.wrapper {
  margin-top: 200px;
  .check {
    margin-top: 20px;
  }
  .kekka{
    font-size: 30px;
  }
}
</style>
