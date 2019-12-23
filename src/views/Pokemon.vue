<template>
  <div class="wrapper">
    <div class="header">
      <h2>Pokemon List</h2>
    </div>
    <Tabs value="name1">
      <TabPane label="ポケモンリスト" name="name1">
        <div>
          <input type="text" placeholder="検索文字" class="text" v-model="search.name" v-on:change="searchName">
        </div>

        <div class="list">
          <div v-for="(item, i) in listHeader" :key="i" class="name">
            <span>{{item.name}}</span>
            <Icon type="md-arrow-round-up" v-if="item.isSort" @click="sort(item)" size="20"/>
            <Icon type="md-arrow-round-down"  v-if="!item.isSort" @click="sort(item)" size="20"/>
          </div>
        </div>

        <div v-for="(item, i) in list" :key="i" class="list">
          <div class="no">
            {{item.no}}
          </div>
          <div class="name">
            {{item.name}}
          </div>
          <div class="name">
            {{item.type1}}
          </div>
        </div>
      </TabPane>

      <TabPane label="タイプのカウント" name="name2">
      </TabPane>
    </Tabs>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Store from "@/store/store";
import _ from "lodash";

@Component
export default class Validate extends Vue {
  private list = [];
  private search = {
    name:"",
  }
  private listHeader = [
    {name: "no", isSort: false},
    {name: "name", isSort: false},
    {name: "type1", isSort: false}
  ]

  constructor() {
    super();
    this.list = _.orderBy(Store.getters.getPokemon, [this.listHeader[0]["name"]], ["asc"]);;
  }

  public sort(item: any) {
    const sort = item.isSort ? 'asc' : "desc";
    this.list = _.orderBy(this.list, [item.name], [sort]);
    item.isSort = !item.isSort;
  }

  public searchName() {
    // 初期値
    this.list = _.orderBy(Store.getters.getPokemon, [this.listHeader[0]["name"]], ["asc"]);;

    // 検索結果文字列
    const array:any = [];

    // 151匹のループを回す。
    _.forEach(this.list, (value:any) => {
      if(value.name.indexOf(this.search.name) > -1) {
        array.push(value);
      }
    });
    if(!array.length) {
      this.list = [];
    } else {
      this.list = array;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper {
  margin-top: 50px;
  text-align: center;
  font-size: 20px;
  .header {
    width: 100%;
    background-color: rgb(188, 255, 161);
  }
}
.list {
  width: 100%;
  justify-content: center;
  display: flex;
  .no {
    width: 50px;
  }
  .name {
    width: 100px;
  }
}
.text {
  font-size: 13px;
  width: 20%;
  height: 30px;
}
</style>
