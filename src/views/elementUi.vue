<template>
  <div class="wrapper">
    <h1>vif vforについて</h1>
    <div class="main">
      <el-button type="primary">Primary</el-button>
      <el-tag type="warning">Tag 4</el-tag>

      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="User" name="first">User</el-tab-pane>
        <el-tab-pane label="Config" name="second">Config</el-tab-pane>
        <el-tab-pane label="Role" name="third">Role</el-tab-pane>
        <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
      </el-tabs>

      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="main">
      <ul>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Store from "@/store/store";

@Component
export default class ElementUi extends Vue {


}
</script>
<style scoped lang="scss">

.main {
  text-align: center;
  font-size: 20px;
}
.wrapper {
  margin-top: 300px;
  text-align: center;
  width: 100%;
}
</style>