<template>
  <div>
    <div>
      <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->

      <router-link to="/">Home</router-link>|
      <router-link to="/create">작성</router-link>|
      <router-link to="/list">목록</router-link>|
      <router-link to="/detail">상세</router-link>|
      <router-link to="/update">수정</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {}
</script>
