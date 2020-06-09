<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  async mounted() {
    console.log('HellowWorld mounted');

    const users = await this.getUsers();
    console.log('users : ', users);
  }

  getUsers = async () => {
    const response = axios({
      method: 'get',
      headers: {
        Authorization: 'Bearer FRdRtwQDq9yrCqpCqP6376ufKK_W47U8d_R_'
      },
      url: 'https://gorest.co.in/public-api/users'
    });
    return await response;
  };
}
</script>
