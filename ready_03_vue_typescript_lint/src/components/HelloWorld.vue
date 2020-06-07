<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ version }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private readonly msg!: string;
  @Prop() private readonly version!: string;

  mounted() {
    // console.log('mounted msg:>> ', this.msg);
    // console.log('mounted version:>> ', this.version);
    // testString: string;
    // testString = 'aaaaa';
    // testString = 'aaaaabbbb';
    // console.log('mounted testString:>> ', this.testString);
  }
}
</script>
