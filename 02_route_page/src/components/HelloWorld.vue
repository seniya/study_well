<template>
  <div>{{msg}}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  mounted() {
    console.log(this.$el.textContent); // can use $el
    this.$nextTick(function() {
      // 모든 화면이 렌더링된 후 실행합니다.
      console.log('HellowWorld mounted');

      // Send a POST request
      axios({
        method: 'get',
        headers: {
          Authorization: 'Bearer FRdRtwQDq9yrCqpCqP6376ufKK_W47U8d_R_'
        },
        url: 'https://gorest.co.in/public-api/users'
      });
    });
  }
}
</script>

<style>
</style>
