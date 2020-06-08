<template>
  <div id="app">
    <HelloWorld :msg="msg_" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

// export default class App extends Vue {}
@Component({
  components: { HelloWorld }
})
class App extends Vue {
  msg_ = 'Hello typescript !!';
}
export default App;
</script>

<style>
</style>
