<template>
  <div class="home">
    <Diagnosis msg="診断アプリ"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Diagnosis from '@/components/Diagnosis.vue'; // @ is an alias to /src

@Component({
  components: {
    Diagnosis,
  },
})
export default class Home extends Vue {}
</script>
