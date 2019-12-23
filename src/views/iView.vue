<template>
  <div class="wrapper">
    <h2>iViewについて</h2>

    <div class="check">
      <h3>ボタン</h3>
      <Button type="primary">ボタン1</Button>
      <Button type="dashed">ボタン2</Button>
      <Button type="info">ボタン3</Button>
      <Button type="error">ボタン4</Button>
    </div>

    <div class="check">
      <h3>タグ</h3>
      <Tag>tag1</Tag>
      <Tag color="primary">tag2</Tag>
      <Tag type="border" closable color="success">tag3</Tag>
      <Tag type="dot" closable color="primary">tag4</Tag>
    </div>

    <div class="check">
      <h3>スター</h3>
      <Rate show-text v-model="valueText" />
    </div>


    <div class="check">
      <Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1">
          <Icon type="ios-paper" />
          メニュー１
        </MenuItem>
        <MenuItem name="2">
          <Icon type="ios-people" />
          メニュー２
        </MenuItem>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-stats" />
            メニュー３
          </template>
          <MenuGroup title="使用">
            <MenuItem name="3-1">メニュー３−１</MenuItem>
            <MenuItem name="3-2">メニュー３−２</MenuItem>
            <MenuItem name="3-3">メニュー３−３</MenuItem>
          </MenuGroup>
          <MenuGroup title="留存">
              <MenuItem name="3-4">メニュー３−４</MenuItem>
              <MenuItem name="3-5">メニュー３−５</MenuItem>
          </MenuGroup>
        </Submenu>
        <MenuItem name="4">
            <Icon type="ios-construct" />
            メニュー４
        </MenuItem>
      </Menu>
    </div>


    <div class="check">
      <h3>メッセージ</h3>
      <Button type="primary" @click="info">メッセージ表示</Button>
    </div>


    <div class="check">
      <h3>ステップ</h3>
      <Steps :current="2">
        <Step title="ステップ１" content="内容１"></Step>
        <Step title="ステップ２" content="内容２"></Step>
        <Step title="ステップ３" content="内容３"></Step>
        <Step title="ステップ４" content="内容４"></Step>
      </Steps>
    </div>


  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import VeeValidate, {Validator} from "vee-validate";
import ja from "vee-validate/dist/locale/ja";

@Component
export default class IView extends Vue {

  private required = "";
  private number = "";
  private email = "";
  private kekka = "";
  private requiredNumeric = "";

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
  margin-top: 100px;
  .check {
    margin-top: 20px;
  }
  .kekka{
    font-size: 30px;
  }
}
</style>
