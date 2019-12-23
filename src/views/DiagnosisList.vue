<template>
  <div class="wrapper">
    <div class="layout">
      <h1>診断リスト</h1>
      <div class="content">
        <ul>
          <li v-for="(item, i) in list" :key="i" class="list">
            <span @click="detail(i)">
            {{item.name}}
            </span>
          </li>
        </ul>
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

  private list = "";
  private kekka = "";

  constructor() {
    super();
    this.list = Store.getters.getDiagnosis;
  }
  private detail(num: any) {
    this.$router.push({ path: '/', query: { num: num } })
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
    margin-top: 20px;
  }
  ul {
    list-style: none;
  }
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
</style>
