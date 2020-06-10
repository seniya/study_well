<template>
  <div>입력 페이지</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import ApiUser from '../../service/ApiUser';

@Component({})
export default class Create extends Vue {
  async mounted() {
    console.log('Create mounted');

    const user = {
      first_name: 'Brian',
      last_name: 'Ratke',
      gender: 'male',
      email: '111111lew19@roberts.com',
      status: 'active'
    };

    ApiUser.create(user)
      .then(response => {
        console.log('create user #1: ', response);
      })
      .catch(error => {
        console.log('create user #1: ', error);
      });
  }
}
</script>
