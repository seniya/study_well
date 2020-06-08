<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
/*
import Vue from 'vue';
const HelloWorld = Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String
  }
});
export default HelloWorld;
*/
/**/
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>
