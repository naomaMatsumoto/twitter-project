<template>
  <div class="about">
    <h1>vif vforについて</h1>
    <div class="main">
      <p v-if="value === 'aaa'">aaa</p>
      <p v-if="value === 'bbb'">bbb</p>
      <p v-if="value === 'ccc'">ccc</p>
    </div>
    <div class="main">
      <ul>
        <li v-for="(item, i) in list" :key="i" class="list">{{item}}</li>
      </ul>
    </div>


  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import VeeValidate, {Validator} from "vee-validate";
import ja from "vee-validate/dist/locale/ja";

Validator.localize('ja', ja);

Vue.use(VeeValidate, {
		locale: ja,
    events: "blur",
	},
);

@Component
export default class Validate extends Vue {

  private value = "aaa";
  private list = [1, 2];

}
</script>
<style scoped lang="scss">

.main {
  text-align: center;
  font-size: 20px;
}
</style>