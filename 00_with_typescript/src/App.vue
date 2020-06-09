<template>
  <div id="app">
    <p>{{ msg }}</p>
    <p>{{ total }}</p>
    <p>{{ helloAgain }}</p>
    <p>
      <button v-on:click="incrementTotal">증가</button>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

const App = Vue.extend({
  name: "App",
  data: function() {
    return {
      msg: "Hello world",
      total: 0,
      helloAgain: ""
    };
  },
  methods: {
    incrementTotal: function() {
      this.total = this.total + 1;
      this.greetig(this.total);
    },
    greetig: function(name: string) {
      this.helloAgain = `${name} hello agina ~~`;
    }
  }
});

export default App;
</script>

<style></style>
