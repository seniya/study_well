<template>
  <div id="app">
    <helloWorld msg="Welcome to Your Vue.js + TypeScript App 11111" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    helloWorld: HelloWorld
  }
})
class App extends Vue {}

export default App;

/*
<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {}
*/
</script>

<style>
</style>
