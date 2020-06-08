<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

const HelloWorldProps = Vue.extend({
  props: {
    msg: String
  }
});

@Component
export default class HelloWorld extends HelloWorldProps {}
</script>
