<template>
  <div id="app">
    <HelloWorld :msg="msg_" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: { HelloWorld }
})
export default class App extends Vue {
  msg_ = 'Hello typescript !!';
}
</script>

<style>
</style>
